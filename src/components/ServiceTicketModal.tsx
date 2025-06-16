import React, { useState } from 'react';
import { X, Calendar, FileText, Download, Plus, Trash2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ServiceTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  clientId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  bikes: Array<{
    id: string;
    make: string;
    model: string;
    year: string;
  }>;
}

interface PartsLabourItem {
  id: string;
  description: string;
  cost: number;
}

const ServiceTicketModal: React.FC<ServiceTicketModalProps> = ({
  isOpen,
  onClose,
  clientId,
  clientName,
  clientEmail,
  clientPhone,
  bikes
}) => {
  const [serviceDate, setServiceDate] = useState(new Date().toISOString().split('T')[0]);
  const [serviceType, setServiceType] = useState<string>('');
  const [selectedBike, setSelectedBike] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Parts & Labour state
  const [partsLabourItems, setPartsLabourItems] = useState<PartsLabourItem[]>([
    { id: '1', description: '', cost: 0 }
  ]);

  // Service cost state
  const [serviceCost, setServiceCost] = useState<number>(0);

  // Service type options with their specific dropdown items
  const serviceOptions = {
    'Complete Service': [
      'Premium wash & drivetrain degrease',
      'Ultrasonic chain clean & lube, or wax strip & re-dip',
      'Service headset & bottom bracket',
      'Service hubs, wheels trued & sealant top up',
      'Component wear',
      'Shimano',
      'SRAM', 
      'Other',
      'Drivetrain Inspection',
      'Chain',
      'Chainrings',
      'Cassette',
      'Brake Inspection',
      'Front Brake',
      'Front brake pads wear',
      'Front rotor wear',
      'Rear Brake',
      'Rear brake pads wear',
      'Rear rotor wear',
      'Clean, service & align brake callipers, flush & bleed brakes',
      'Front brake bleed',
      'Front caliper serviced',
      'Rear brake bleed',
      'Rear caliper serviced',
      'Firmware updates',
      'Batteries',
      'Align derailleur hanger & tune gears',
      'Safety check & test ride'
    ],
    'Standard Service': [
      'Deluxe wash',
      'Ultrasonic chain clean & lube, or wax strip & re-dip',
      'Component wear check (chain, cassette, disc rotors, brake pads & tyres)',
      'Align derailleur hanger and tune gears',
      'Headset, hubs & bottom bracket checked',
      'Align brake callipers',
      'Wheels checked & sealant top up',
      'Groupset',
      'Shimano',
      'SRAM',
      'Other',
      'Safety check & test ride'
    ],
    'Race Prep Service': [
      'Component wear check (chain, cassette, disc rotors, brake pads & tyres)',
      'Groupset',
      'Shimano',
      'SRAM',
      'Other',
      'Brakes checked',
      'Gears checked',
      'Safety check & test ride'
    ],
    'Custom Build': [
      'Frame and component selection consultation',
      'Premium component sourcing',
      'Professional assembly and setup',
      'Custom paint and finish options'
    ],
    'Parts Install / General Labour': [
      'Component installation',
      'General maintenance tasks',
      'Adjustments and tuning',
      'Custom modifications'
    ],
    'Tubeless Setup': [
      'Tire removal and cleaning',
      'Tubeless valve installation',
      'Sealant application',
      'Tire mounting and inflation',
      'Pressure testing and adjustment'
    ],
    'Chain Strip & Wax': [
      'Chain removal and degreasing',
      'Ultrasonic cleaning',
      'Hot wax application',
      'Chain reinstallation',
      'Drivetrain adjustment'
    ]
  };

  const [selectedServiceItems, setSelectedServiceItems] = useState<string[]>([]);
  const [serviceItemNotes, setServiceItemNotes] = useState<Record<string, string>>({});
  const [selectedGroupset, setSelectedGroupset] = useState<string>('');
  
  // State for custom input fields
  const [customFields, setCustomFields] = useState<Record<string, string>>({
    chainCustom: '',
    frontBrakePadsMinWear: '2.5',
    frontBrakePadsWear: '',
    frontRotorMinWear: '1.5',
    frontRotorWear: '',
    rearBrakePadsMinWear: '2.5',
    rearBrakePadsWear: '',
    rearRotorMinWear: '1.5',
    rearRotorWear: ''
  });

  // State for brake service notes
  const [brakeNotes, setBrakeNotes] = useState({
    frontBrakeBleed: '',
    frontCaliperServiced: '',
    rearBrakeBleed: '',
    rearCaliperServiced: ''
  });

  // Calculate totals
  const partsLabourTotal = partsLabourItems.reduce((sum, item) => sum + (item.cost || 0), 0);
  const grandTotal = serviceCost + partsLabourTotal;

  // Parts & Labour functions
  const addPartsLabourItem = () => {
    const newItem: PartsLabourItem = {
      id: Date.now().toString(),
      description: '',
      cost: 0
    };
    setPartsLabourItems([...partsLabourItems, newItem]);
  };

  const removePartsLabourItem = (id: string) => {
    if (partsLabourItems.length > 1) {
      setPartsLabourItems(partsLabourItems.filter(item => item.id !== id));
    }
  };

  const updatePartsLabourItem = (id: string, field: keyof PartsLabourItem, value: string | number) => {
    setPartsLabourItems(partsLabourItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleServiceTypeChange = (service: string) => {
    if (serviceType === service) {
      setServiceType('');
      setSelectedServiceItems([]);
      setServiceItemNotes({});
      setSelectedGroupset('');
    } else {
      setServiceType(service);
      setSelectedServiceItems([]);
      setServiceItemNotes({});
      setSelectedGroupset('');
    }
  };

  const handleServiceItemChange = (item: string) => {
    if (selectedServiceItems.includes(item)) {
      setSelectedServiceItems(selectedServiceItems.filter(i => i !== item));
      const newNotes = { ...serviceItemNotes };
      delete newNotes[item];
      setServiceItemNotes(newNotes);
    } else {
      setSelectedServiceItems([...selectedServiceItems, item]);
    }
  };

  const handleGroupsetChange = (groupset: string) => {
    // Remove any previously selected groupset items
    const groupsetItems = ['Shimano', 'SRAM', 'Other'];
    const filteredItems = selectedServiceItems.filter(item => !groupsetItems.includes(item));
    
    // Add the new groupset selection
    setSelectedServiceItems([...filteredItems, groupset]);
    setSelectedGroupset(groupset);
    
    // Clear groupset-specific notes when changing selection
    const newNotes = { ...serviceItemNotes };
    groupsetItems.forEach(item => {
      if (item !== groupset) {
        delete newNotes[item];
      }
    });
    setServiceItemNotes(newNotes);
  };

  const handleServiceItemNoteChange = (item: string, note: string) => {
    setServiceItemNotes(prev => ({
      ...prev,
      [item]: note
    }));
  };

  const handleCustomFieldChange = (field: string, value: string) => {
    setCustomFields(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBrakeNoteChange = (field: string, value: string) => {
    setBrakeNotes(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    try {
      const element = document.getElementById('service-ticket-content');
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#1A2B4C'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      const fileName = `service-ticket-${clientName.replace(/\s+/g, '-')}-${serviceDate}.pdf`;
      pdf.save(fileName);
    } catch (error) {
      console.error('Error generating PDF:', error);
      setError('Failed to generate PDF');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      let compiledNotes = notes;
      if (serviceType && selectedServiceItems.length > 0) {
        compiledNotes += `\n\n${serviceType} Details:\n`;
        selectedServiceItems.forEach(item => {
          compiledNotes += `• ${item}`;
          if (serviceItemNotes[item]) {
            compiledNotes += ` - ${serviceItemNotes[item]}`;
          }
          compiledNotes += '\n';
        });

        // Add custom field values
        if (customFields.chainCustom) {
          compiledNotes += `\nChain: ${customFields.chainCustom}\n`;
        }

        // Add brake measurements if any brake items are selected
        const brakeItems = selectedServiceItems.filter(item => 
          item.includes('brake') || item.includes('Brake')
        );
        
        if (brakeItems.length > 0) {
          compiledNotes += `\nBrake Inspection:\n`;
          if (customFields.frontBrakePadsWear) {
            compiledNotes += `• Front brake pads wear: ${customFields.frontBrakePadsWear}mm (Min ${customFields.frontBrakePadsMinWear}mm)\n`;
          }
          if (customFields.frontRotorWear) {
            compiledNotes += `• Front rotor wear: ${customFields.frontRotorWear}mm (Min ${customFields.frontRotorMinWear}mm)\n`;
          }
          if (selectedServiceItems.includes('Front brake bleed')) {
            compiledNotes += `• Front brake bleed: Yes`;
            if (brakeNotes.frontBrakeBleed) {
              compiledNotes += ` - ${brakeNotes.frontBrakeBleed}`;
            }
            compiledNotes += '\n';
          }
          if (selectedServiceItems.includes('Front caliper serviced')) {
            compiledNotes += `• Front caliper serviced: Yes`;
            if (brakeNotes.frontCaliperServiced) {
              compiledNotes += ` - ${brakeNotes.frontCaliperServiced}`;
            }
            compiledNotes += '\n';
          }
          if (customFields.rearBrakePadsWear) {
            compiledNotes += `• Rear brake pads wear: ${customFields.rearBrakePadsWear}mm (Min ${customFields.rearBrakePadsMinWear}mm)\n`;
          }
          if (customFields.rearRotorWear) {
            compiledNotes += `• Rear rotor wear: ${customFields.rearRotorWear}mm (Min ${customFields.rearRotorMinWear}mm)\n`;
          }
          if (selectedServiceItems.includes('Rear brake bleed')) {
            compiledNotes += `• Rear brake bleed: Yes`;
            if (brakeNotes.rearBrakeBleed) {
              compiledNotes += ` - ${brakeNotes.rearBrakeBleed}`;
            }
            compiledNotes += '\n';
          }
          if (selectedServiceItems.includes('Rear caliper serviced')) {
            compiledNotes += `• Rear caliper serviced: Yes`;
            if (brakeNotes.rearCaliperServiced) {
              compiledNotes += ` - ${brakeNotes.rearCaliperServiced}`;
            }
            compiledNotes += '\n';
          }
        }
      }

      // Add service cost information
      if (serviceCost > 0) {
        compiledNotes += `\n\nService Cost: $${serviceCost.toFixed(2)}\n`;
      }

      // Add parts & labour information
      const validPartsLabour = partsLabourItems.filter(item => item.description.trim() !== '');
      if (validPartsLabour.length > 0) {
        compiledNotes += `\n\nAdditional Parts & Labour:\n`;
        validPartsLabour.forEach(item => {
          compiledNotes += `• ${item.description} - $${item.cost.toFixed(2)}\n`;
        });
        compiledNotes += `\nParts & Labour Total: $${partsLabourTotal.toFixed(2)}\n`;
      }

      // Add grand total
      if (serviceCost > 0 || validPartsLabour.length > 0) {
        compiledNotes += `\nGrand Total: $${grandTotal.toFixed(2)}\n`;
      }

      const { error } = await supabase
        .from('service_history')
        .insert({
          client_id: clientId,
          bike_id: selectedBike || null,
          service_date: serviceDate,
          service_type: serviceType ? [serviceType] : [],
          notes: compiledNotes.trim()
        });

      if (error) throw error;

      onClose();
    } catch (err) {
      console.error('Error creating service ticket:', err);
      setError('Failed to create service ticket');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to determine if an item is a groupset option
  const isGroupsetItem = (item: string) => {
    return ['Shimano', 'SRAM', 'Other'].includes(item);
  };

  // Helper function to determine if an item is a drivetrain inspection item
  const isDrivetrainItem = (item: string) => {
    return ['Chain', 'Chainrings', 'Cassette'].includes(item);
  };

  // Helper function to determine if an item is a brake inspection item (measurements only)
  const isBrakeInspectionItem = (item: string) => {
    return [
      'Front Brake', 'Front brake pads wear', 'Front rotor wear',
      'Rear Brake', 'Rear brake pads wear', 'Rear rotor wear'
    ].includes(item);
  };

  // Helper function to determine if an item is a brake service item (bleed/service)
  const isBrakeServiceItem = (item: string) => {
    return [
      'Front brake bleed', 'Front caliper serviced',
      'Rear brake bleed', 'Rear caliper serviced'
    ].includes(item);
  };

  // Get groupset items
  const getGroupsetItems = (items: string[]) => {
    return items.filter(item => isGroupsetItem(item));
  };

  // Get drivetrain items
  const getDrivetrainItems = (items: string[]) => {
    return items.filter(item => isDrivetrainItem(item));
  };

  // Get brake inspection items (measurements only)
  const getBrakeInspectionItems = (items: string[]) => {
    return items.filter(item => isBrakeInspectionItem(item));
  };

  // Get brake service items (bleed/service)
  const getBrakeServiceItems = (items: string[]) => {
    return items.filter(item => isBrakeServiceItem(item));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-brand-blue border border-brand-gold w-full max-w-6xl max-h-[95vh] overflow-y-auto">
        {/* Header with controls */}
        <div className="sticky top-0 bg-brand-blue border-b border-brand-gold p-6 z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-brand-gold" />
              <h2 className="text-2xl text-brand-gold">New Service Ticket</h2>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={generatePDF}
                disabled={isGeneratingPDF || !serviceType}
                className={`flex items-center space-x-2 px-4 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300 ${
                  isGeneratingPDF || !serviceType ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Download className="w-4 h-4" />
                <span>{isGeneratingPDF ? 'Generating...' : 'Save as PDF'}</span>
              </button>
              <button 
                onClick={onClose}
                className="text-brand-gold hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Main content for PDF generation */}
        <div id="service-ticket-content" className="p-6 bg-brand-blue">
          {/* Header for PDF */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-light text-brand-gold mb-2">SUPER DOMESTIQUE</h1>
            <h2 className="text-xl text-brand-gold">Service Ticket</h2>
          </div>

          {/* Client Information */}
          <div className="mb-6 p-4 border border-brand-gold bg-brand-blue bg-opacity-50">
            <h3 className="text-brand-gold mb-4 text-lg font-medium">Client Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-white"><strong className="text-brand-gold">Name:</strong> {clientName}</p>
                <p className="text-white"><strong className="text-brand-gold">Email:</strong> {clientEmail}</p>
              </div>
              <div>
                <p className="text-white"><strong className="text-brand-gold">Phone:</strong> {clientPhone}</p>
                <p className="text-white"><strong className="text-brand-gold">Service Date:</strong> {serviceDate}</p>
              </div>
            </div>
            {selectedBike && (
              <div className="mt-2">
                <p className="text-white">
                  <strong className="text-brand-gold">Bike:</strong> {
                    bikes.find(bike => bike.id === selectedBike)?.make
                  } {
                    bikes.find(bike => bike.id === selectedBike)?.model
                  } ({
                    bikes.find(bike => bike.id === selectedBike)?.year
                  })
                </p>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-brand-gold mb-2">Service Date</label>
                <input
                  type="date"
                  value={serviceDate}
                  onChange={(e) => setServiceDate(e.target.value)}
                  className="w-full bg-transparent border border-brand-gold p-2 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-brand-gold mb-2">Bike (Optional)</label>
                <select
                  value={selectedBike}
                  onChange={(e) => setSelectedBike(e.target.value)}
                  className="w-full bg-brand-blue border border-brand-gold p-2 text-white"
                >
                  <option value="">Select a bike (optional)</option>
                  {bikes.map((bike) => (
                    <option key={bike.id} value={bike.id}>
                      {bike.make} {bike.model} ({bike.year})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-brand-gold mb-4">Service Type (Select One)</label>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.keys(serviceOptions).map((service) => (
                  <label key={service} className="flex items-center space-x-2 text-white cursor-pointer">
                    <input
                      type="radio"
                      name="serviceType"
                      checked={serviceType === service}
                      onChange={() => handleServiceTypeChange(service)}
                      className="form-radio text-brand-gold"
                    />
                    <span className={serviceType === service ? 'text-brand-gold font-medium' : ''}>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Service Details Section - Complete Service with new layout */}
            {serviceType && serviceOptions[serviceType as keyof typeof serviceOptions] && (
              <div className="border border-brand-gold p-6">
                <h3 className="text-brand-gold mb-6 text-lg font-medium">
                  {serviceType} Details
                </h3>
                <div className="space-y-4">
                  {serviceOptions[serviceType as keyof typeof serviceOptions].map((item) => {
                    // Handle "Component wear" section (renamed from Groupset)
                    if (item === 'Component wear') {
                      const allItems = serviceOptions[serviceType as keyof typeof serviceOptions];
                      const groupsetItems = getGroupsetItems(allItems);
                      
                      return (
                        <div key={item} className="space-y-4">
                          <div className="space-y-3">
                            <h4 className="text-brand-gold text-sm font-medium">Component wear</h4>
                          </div>

                          <div className="ml-4 flex flex-wrap gap-6">
                            {groupsetItems.map((groupsetItem) => (
                              <div key={groupsetItem} className="space-y-2">
                                <label className="flex items-start space-x-3 text-white cursor-pointer">
                                  <input
                                    type="radio"
                                    name="groupset"
                                    checked={selectedGroupset === groupsetItem}
                                    onChange={() => handleGroupsetChange(groupsetItem)}
                                    className="form-radio text-brand-gold mt-1 flex-shrink-0"
                                  />
                                  <span className="text-sm flex-grow leading-relaxed">{groupsetItem}</span>
                                </label>
                                {selectedGroupset === groupsetItem && (
                                  <div className="ml-6">
                                    <input
                                      type="text"
                                      placeholder="Add notes..."
                                      value={serviceItemNotes[groupsetItem] || ''}
                                      onChange={(e) => handleServiceItemNoteChange(groupsetItem, e.target.value)}
                                      className="w-full bg-transparent border border-gray-600 p-2 text-white text-sm placeholder-gray-400 rounded"
                                    />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }

                    // Handle "Drivetrain Inspection" section
                    if (item === 'Drivetrain Inspection') {
                      const allItems = serviceOptions[serviceType as keyof typeof serviceOptions];
                      const drivetrainItems = getDrivetrainItems(allItems);
                      
                      return (
                        <div key={item} className="space-y-4">
                          <div className="space-y-3">
                            <h4 className="text-brand-gold text-sm font-medium">Drivetrain Inspection</h4>
                          </div>

                          <div className="ml-4 space-y-3">
                            {drivetrainItems.map((drivetrainItem) => (
                              <div key={drivetrainItem} className="space-y-2">
                                <div className="flex items-start space-x-3">
                                  <label className="flex items-start space-x-3 text-white cursor-pointer flex-grow">
                                    <input
                                      type="checkbox"
                                      checked={selectedServiceItems.includes(drivetrainItem)}
                                      onChange={() => handleServiceItemChange(drivetrainItem)}
                                      className="form-checkbox text-brand-gold mt-1 flex-shrink-0"
                                    />
                                    <span className="text-sm flex-grow leading-relaxed">{drivetrainItem}</span>
                                  </label>
                                  {drivetrainItem === 'Chain' && (
                                    <input
                                      type="text"
                                      placeholder="Custom value"
                                      value={customFields.chainCustom}
                                      onChange={(e) => handleCustomFieldChange('chainCustom', e.target.value)}
                                      className="w-32 bg-transparent border border-gray-600 p-1 text-white text-xs placeholder-gray-400 rounded"
                                    />
                                  )}
                                </div>
                                {selectedServiceItems.includes(drivetrainItem) && (
                                  <div className="ml-6">
                                    <input
                                      type="text"
                                      placeholder="Add notes..."
                                      value={serviceItemNotes[drivetrainItem] || ''}
                                      onChange={(e) => handleServiceItemNoteChange(drivetrainItem, e.target.value)}
                                      className="w-full bg-transparent border border-gray-600 p-2 text-white text-sm placeholder-gray-400 rounded"
                                    />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }

                    // Handle "Brake Inspection" section (measurements only)
                    if (item === 'Brake Inspection') {
                      const allItems = serviceOptions[serviceType as keyof typeof serviceOptions];
                      const brakeInspectionItems = getBrakeInspectionItems(allItems);
                      
                      return (
                        <div key={item} className="space-y-4">
                          <div className="space-y-3">
                            <h4 className="text-brand-gold text-sm font-medium">Brake Inspection</h4>
                          </div>

                          <div className="ml-4 grid md:grid-cols-2 gap-6">
                            {/* Front Brake Column */}
                            <div className="space-y-4">
                              <h5 className="text-brand-gold text-xs font-medium">Front Brake</h5>
                              
                              <div className="space-y-3">
                                <div>
                                  <label className="flex items-center space-x-2 text-white cursor-pointer">
                                    <input
                                      type="checkbox"
                                      checked={selectedServiceItems.includes('Front brake pads wear')}
                                      onChange={() => handleServiceItemChange('Front brake pads wear')}
                                      className="form-checkbox text-brand-gold"
                                    />
                                    <span className="text-xs">Front brake pads wear (Min</span>
                                    <input
                                      type="text"
                                      value={customFields.frontBrakePadsMinWear}
                                      onChange={(e) => handleCustomFieldChange('frontBrakePadsMinWear', e.target.value)}
                                      className="w-12 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                                    />
                                    <span className="text-xs">mm)</span>
                                  </label>
                                  <div className="flex items-center space-x-2 ml-6 mt-1">
                                    <input
                                      type="text"
                                      value={customFields.frontBrakePadsWear}
                                      onChange={(e) => handleCustomFieldChange('frontBrakePadsWear', e.target.value)}
                                      className="w-20 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                                      placeholder="0.0"
                                    />
                                    <span className="text-white text-xs">mm</span>
                                  </div>
                                </div>

                                <div>
                                  <label className="flex items-center space-x-2 text-white cursor-pointer">
                                    <input
                                      type="checkbox"
                                      checked={selectedServiceItems.includes('Front rotor wear')}
                                      onChange={() => handleServiceItemChange('Front rotor wear')}
                                      className="form-checkbox text-brand-gold"
                                    />
                                    <span className="text-xs">Front rotor wear (Min</span>
                                    <input
                                      type="text"
                                      value={customFields.frontRotorMinWear}
                                      onChange={(e) => handleCustomFieldChange('frontRotorMinWear', e.target.value)}
                                      className="w-12 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                                    />
                                    <span className="text-xs">mm)</span>
                                  </label>
                                  <div className="flex items-center space-x-2 ml-6 mt-1">
                                    <input
                                      type="text"
                                      value={customFields.frontRotorWear}
                                      onChange={(e) => handleCustomFieldChange('frontRotorWear', e.target.value)}
                                      className="w-20 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                                      placeholder="0.0"
                                    />
                                    <span className="text-white text-xs">mm</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Rear Brake Column */}
                            <div className="space-y-4">
                              <h5 className="text-brand-gold text-xs font-medium">Rear Brake</h5>
                              
                              <div className="space-y-3">
                                <div>
                                  <label className="flex items-center space-x-2 text-white cursor-pointer">
                                    <input
                                      type="checkbox"
                                      checked={selectedServiceItems.includes('Rear brake pads wear')}
                                      onChange={() => handleServiceItemChange('Rear brake pads wear')}
                                      className="form-checkbox text-brand-gold"
                                    />
                                    <span className="text-xs">Rear brake pads wear (Min</span>
                                    <input
                                      type="text"
                                      value={customFields.rearBrakePadsMinWear}
                                      onChange={(e) => handleCustomFieldChange('rearBrakePadsMinWear', e.target.value)}
                                      className="w-12 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                                    />
                                    <span className="text-xs">mm)</span>
                                  </label>
                                  <div className="flex items-center space-x-2 ml-6 mt-1">
                                    <input
                                      type="text"
                                      value={customFields.rearBrakePadsWear}
                                      onChange={(e) => handleCustomFieldChange('rearBrakePadsWear', e.target.value)}
                                      className="w-20 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                                      placeholder="0.0"
                                    />
                                    <span className="text-white text-xs">mm</span>
                                  </div>
                                </div>

                                <div>
                                  <label className="flex items-center space-x-2 text-white cursor-pointer">
                                    <input
                                      type="checkbox"
                                      checked={selectedServiceItems.includes('Rear rotor wear')}
                                      onChange={() => handleServiceItemChange('Rear rotor wear')}
                                      className="form-checkbox text-brand-gold"
                                    />
                                    <span className="text-xs">Rear rotor wear (Min</span>
                                    <input
                                      type="text"
                                      value={customFields.rearRotorMinWear}
                                      onChange={(e) => handleCustomFieldChange('rearRotorMinWear', e.target.value)}
                                      className="w-12 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                                    />
                                    <span className="text-xs">mm)</span>
                                  </label>
                                  <div className="flex items-center space-x-2 ml-6 mt-1">
                                    <input
                                      type="text"
                                      value={customFields.rearRotorWear}
                                      onChange={(e) => handleCustomFieldChange('rearRotorWear', e.target.value)}
                                      className="w-20 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                                      placeholder="0.0"
                                    />
                                    <span className="text-white text-xs">mm</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    // Handle "Clean, service & align brake callipers, flush & bleed brakes" section
                    if (item === 'Clean, service & align brake callipers, flush & bleed brakes') {
                      const allItems = serviceOptions[serviceType as keyof typeof serviceOptions];
                      const brakeServiceItems = getBrakeServiceItems(allItems);
                      
                      return (
                        <div key={item} className="space-y-4">
                          <div className="space-y-3">
                            <label className="flex items-start space-x-3 text-white cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedServiceItems.includes(item)}
                                onChange={() => handleServiceItemChange(item)}
                                className="form-checkbox text-brand-gold mt-1 flex-shrink-0"
                              />
                              <span className="text-sm flex-grow leading-relaxed">{item}</span>
                            </label>
                            {selectedServiceItems.includes(item) && (
                              <div className="ml-8">
                                <input
                                  type="text"
                                  placeholder="Add notes for this item..."
                                  value={serviceItemNotes[item] || ''}
                                  onChange={(e) => handleServiceItemNoteChange(item, e.target.value)}
                                  className="w-full bg-transparent border border-gray-600 p-3 text-white text-sm placeholder-gray-400 rounded"
                                />
                              </div>
                            )}
                          </div>

                          {/* Brake service sub-items */}
                          <div className="ml-8 grid md:grid-cols-2 gap-6">
                            {/* Front Brake Service Column */}
                            <div className="space-y-4">
                              <h5 className="text-brand-gold text-xs font-medium">Front Brake Service</h5>
                              
                              <div className="space-y-3">
                                <div className="space-y-2">
                                  <label className="flex items-center space-x-2 text-white cursor-pointer">
                                    <input
                                      type="checkbox"
                                      checked={selectedServiceItems.includes('Front brake bleed')}
                                      onChange={() => handleServiceItemChange('Front brake bleed')}
                                      className="form-checkbox text-brand-gold"
                                    />
                                    <span className="text-xs">Front brake bleed</span>
                                  </label>
                                  {selectedServiceItems.includes('Front brake bleed') && (
                                    <input
                                      type="text"
                                      placeholder="Add notes for front brake bleed..."
                                      value={brakeNotes.frontBrakeBleed}
                                      onChange={(e) => handleBrakeNoteChange('frontBrakeBleed', e.target.value)}
                                      className="w-full bg-transparent border border-gray-600 p-2 text-white text-xs placeholder-gray-400 rounded ml-6"
                                    />
                                  )}
                                </div>

                                <div className="space-y-2">
                                  <label className="flex items-center space-x-2 text-white cursor-pointer">
                                    <input
                                      type="checkbox"
                                      checked={selectedServiceItems.includes('Front caliper serviced')}
                                      onChange={() => handleServiceItemChange('Front caliper serviced')}
                                      className="form-checkbox text-brand-gold"
                                    />
                                    <span className="text-xs">Front caliper serviced</span>
                                  </label>
                                  {selectedServiceItems.includes('Front caliper serviced') && (
                                    <input
                                      type="text"
                                      placeholder="Add notes for front caliper service..."
                                      value={brakeNotes.frontCaliperServiced}
                                      onChange={(e) => handleBrakeNoteChange('frontCaliperServiced', e.target.value)}
                                      className="w-full bg-transparent border border-gray-600 p-2 text-white text-xs placeholder-gray-400 rounded ml-6"
                                    />
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Rear Brake Service Column */}
                            <div className="space-y-4">
                              <h5 className="text-brand-gold text-xs font-medium">Rear Brake Service</h5>
                              
                              <div className="space-y-3">
                                <div className="space-y-2">
                                  <label className="flex items-center space-x-2 text-white cursor-pointer">
                                    <input
                                      type="checkbox"
                                      checked={selectedServiceItems.includes('Rear brake bleed')}
                                      onChange={() => handleServiceItemChange('Rear brake bleed')}
                                      className="form-checkbox text-brand-gold"
                                    />
                                    <span className="text-xs">Rear brake bleed</span>
                                  </label>
                                  {selectedServiceItems.includes('Rear brake bleed') && (
                                    <input
                                      type="text"
                                      placeholder="Add notes for rear brake bleed..."
                                      value={brakeNotes.rearBrakeBleed}
                                      onChange={(e) => handleBrakeNoteChange('rearBrakeBleed', e.target.value)}
                                      className="w-full bg-transparent border border-gray-600 p-2 text-white text-xs placeholder-gray-400 rounded ml-6"
                                    />
                                  )}
                                </div>

                                <div className="space-y-2">
                                  <label className="flex items-center space-x-2 text-white cursor-pointer">
                                    <input
                                      type="checkbox"
                                      checked={selectedServiceItems.includes('Rear caliper serviced')}
                                      onChange={() => handleServiceItemChange('Rear caliper serviced')}
                                      className="form-checkbox text-brand-gold"
                                    />
                                    <span className="text-xs">Rear caliper serviced</span>
                                  </label>
                                  {selectedServiceItems.includes('Rear caliper serviced') && (
                                    <input
                                      type="text"
                                      placeholder="Add notes for rear caliper service..."
                                      value={brakeNotes.rearCaliperServiced}
                                      onChange={(e) => handleBrakeNoteChange('rearCaliperServiced', e.target.value)}
                                      className="w-full bg-transparent border border-gray-600 p-2 text-white text-xs placeholder-gray-400 rounded ml-6"
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    // Skip individual groupset items, drivetrain items, and brake items as they're handled above
                    if (isGroupsetItem(item) || isDrivetrainItem(item) || isBrakeInspectionItem(item) || isBrakeServiceItem(item)) {
                      return null;
                    }

                    // Regular service items
                    return (
                      <div key={item} className="space-y-3">
                        <label className="flex items-start space-x-3 text-white cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedServiceItems.includes(item)}
                            onChange={() => handleServiceItemChange(item)}
                            className="form-checkbox text-brand-gold mt-1 flex-shrink-0"
                          />
                          <span className="text-sm flex-grow leading-relaxed">{item}</span>
                        </label>
                        {selectedServiceItems.includes(item) && (
                          <div className="ml-8">
                            <input
                              type="text"
                              placeholder="Add notes for this item..."
                              value={serviceItemNotes[item] || ''}
                              onChange={(e) => handleServiceItemNoteChange(item, e.target.value)}
                              className="w-full bg-transparent border border-gray-600 p-3 text-white text-sm placeholder-gray-400 rounded"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Additional Parts & Labour Section */}
            <div className="border border-brand-gold p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-brand-gold text-lg font-medium">Additional Parts & Labour</h3>
                <div className="text-brand-gold text-xl font-medium">
                  Total: ${partsLabourTotal.toFixed(2)}
                </div>
              </div>
              
              <div className="space-y-4">
                {partsLabourItems.map((item, index) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="flex-grow">
                      <input
                        type="text"
                        placeholder="Description of part or labour..."
                        value={item.description}
                        onChange={(e) => updatePartsLabourItem(item.id, 'description', e.target.value)}
                        className="w-full bg-transparent border border-gray-600 p-3 text-white placeholder-gray-400 rounded"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-brand-gold">$</span>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        placeholder="0.00"
                        value={item.cost || ''}
                        onChange={(e) => updatePartsLabourItem(item.id, 'cost', parseFloat(e.target.value) || 0)}
                        className="w-24 bg-transparent border border-gray-600 p-3 text-white text-right rounded"
                      />
                    </div>
                    {partsLabourItems.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removePartsLabourItem(item.id)}
                        className="text-red-500 hover:text-red-400 transition-colors p-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
                
                <button
                  type="button"
                  onClick={addPartsLabourItem}
                  className="flex items-center space-x-2 text-brand-gold hover:text-white transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Item</span>
                </button>
              </div>
            </div>

            {/* Cost of Service Section */}
            <div className="border border-brand-gold p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-brand-gold text-lg font-medium">Cost of Service</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-brand-gold text-xl">$</span>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0.00"
                    value={serviceCost || ''}
                    onChange={(e) => setServiceCost(parseFloat(e.target.value) || 0)}
                    className="w-32 bg-transparent border border-brand-gold p-3 text-white text-right text-xl rounded"
                  />
                </div>
              </div>
            </div>

            {/* Grand Total Section */}
            <div className="border-2 border-brand-gold p-6 bg-brand-blue bg-opacity-50">
              <div className="flex justify-between items-center">
                <h3 className="text-brand-gold text-2xl font-medium">Grand Total</h3>
                <div className="text-brand-gold text-3xl font-bold">
                  ${grandTotal.toFixed(2)}
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Service Cost:</span>
                  <span>${serviceCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Parts & Labour:</span>
                  <span>${partsLabourTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-brand-gold mb-2">Additional Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={6}
                className="w-full bg-transparent border border-brand-gold p-3 text-white rounded"
                placeholder="Add any additional notes, observations, or recommendations..."
              />
            </div>

            {error && (
              <div className="text-red-500 text-center p-3 border border-red-500 rounded">
                {error}
              </div>
            )}

            <div className="flex justify-end space-x-4 pt-6 border-t border-brand-gold">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 text-brand-gold hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !serviceType}
                className={`px-6 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300 ${
                  isSubmitting || !serviceType ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Creating...' : 'Create Service Ticket'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceTicketModal;