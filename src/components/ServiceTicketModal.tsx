import React, { useState } from 'react';
import { X, Calendar, FileText, Download } from 'lucide-react';
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

  // Service type options
  const serviceOptions = [
    'Complete Service',
    'Standard Service',
    'Race Prep Service',
    'Custom Build',
    'Parts Install / General Labour',
    'Tubeless Setup',
    'Chain Strip & Wax'
  ];

  // State for service items
  const [serviceItems, setServiceItems] = useState<Record<string, boolean>>({});
  const [serviceItemNotes, setServiceItemNotes] = useState<Record<string, string>>({});
  
  // State for groupset selection
  const [selectedGroupset, setSelectedGroupset] = useState<string>('');
  
  // State for drivetrain inspection
  const [drivetrainInspection, setDrivetrainInspection] = useState({
    chain: '',
    chainrings: '',
    cassette: ''
  });

  // State for brake measurements
  const [brakeMeasurements, setBrakeMeasurements] = useState({
    frontBrakePadsWear: '',
    frontRotorWear: '',
    rearBrakePadsWear: '',
    rearRotorWear: ''
  });

  // State for brake service
  const [brakeService, setBrakeService] = useState<Record<string, boolean>>({});
  const [brakeServiceNotes, setBrakeServiceNotes] = useState<Record<string, string>>({});

  // State for additional fields
  const [additionalFields, setAdditionalFields] = useState({
    firmwareUpdates: '',
    batteries: ''
  });

  // State for additional parts & labour
  const [additionalParts, setAdditionalParts] = useState<Array<{id: string, description: string, cost: number}>>([]);
  const [serviceCost, setServiceCost] = useState<number>(0);

  const handleServiceTypeChange = (service: string) => {
    if (serviceType === service) {
      setServiceType('');
      setServiceItems({});
      setServiceItemNotes({});
      setSelectedGroupset('');
      setDrivetrainInspection({ chain: '', chainrings: '', cassette: '' });
      setBrakeMeasurements({ frontBrakePadsWear: '', frontRotorWear: '', rearBrakePadsWear: '', rearRotorWear: '' });
      setBrakeService({});
      setBrakeServiceNotes({});
      setAdditionalFields({ firmwareUpdates: '', batteries: '' });
    } else {
      setServiceType(service);
      setServiceItems({});
      setServiceItemNotes({});
      setSelectedGroupset('');
      setDrivetrainInspection({ chain: '', chainrings: '', cassette: '' });
      setBrakeMeasurements({ frontBrakePadsWear: '', frontRotorWear: '', rearBrakePadsWear: '', rearRotorWear: '' });
      setBrakeService({});
      setBrakeServiceNotes({});
      setAdditionalFields({ firmwareUpdates: '', batteries: '' });
    }
  };

  const handleServiceItemChange = (item: string, checked: boolean) => {
    setServiceItems(prev => ({
      ...prev,
      [item]: checked
    }));
    if (!checked) {
      const newNotes = { ...serviceItemNotes };
      delete newNotes[item];
      setServiceItemNotes(newNotes);
    }
  };

  const handleServiceItemNoteChange = (item: string, note: string) => {
    setServiceItemNotes(prev => ({
      ...prev,
      [item]: note
    }));
  };

  const handleGroupsetChange = (groupset: string) => {
    setSelectedGroupset(groupset);
  };

  const handleDrivetrainChange = (field: string, value: string) => {
    setDrivetrainInspection(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBrakeMeasurementChange = (field: string, value: string) => {
    setBrakeMeasurements(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBrakeServiceChange = (item: string, checked: boolean) => {
    setBrakeService(prev => ({
      ...prev,
      [item]: checked
    }));
    if (!checked) {
      const newNotes = { ...brakeServiceNotes };
      delete newNotes[item];
      setBrakeServiceNotes(newNotes);
    }
  };

  const handleBrakeServiceNoteChange = (item: string, note: string) => {
    setBrakeServiceNotes(prev => ({
      ...prev,
      [item]: note
    }));
  };

  const handleAdditionalFieldChange = (field: string, value: string) => {
    setAdditionalFields(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addAdditionalPart = () => {
    const newPart = {
      id: Date.now().toString(),
      description: '',
      cost: 0
    };
    setAdditionalParts(prev => [...prev, newPart]);
  };

  const updateAdditionalPart = (id: string, field: string, value: string | number) => {
    setAdditionalParts(prev => prev.map(part => 
      part.id === id ? { ...part, [field]: value } : part
    ));
  };

  const removeAdditionalPart = (id: string) => {
    setAdditionalParts(prev => prev.filter(part => part.id !== id));
  };

  const calculateTotal = () => {
    const partsTotal = additionalParts.reduce((sum, part) => sum + part.cost, 0);
    return serviceCost + partsTotal;
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
      
      if (serviceType && (serviceType === 'Complete Service' || serviceType === 'Standard Service' || serviceType === 'Race Prep Service')) {
        compiledNotes += `\n\n${serviceType} Details:\n`;
        
        // Add checked service items
        Object.entries(serviceItems).forEach(([item, checked]) => {
          if (checked) {
            compiledNotes += `• ${item}`;
            if (serviceItemNotes[item]) {
              compiledNotes += ` - ${serviceItemNotes[item]}`;
            }
            compiledNotes += '\n';
          }
        });

        // Add groupset selection
        if (selectedGroupset) {
          compiledNotes += `\nGroupset: ${selectedGroupset}\n`;
        }

        // Add drivetrain inspection
        if (drivetrainInspection.chain || drivetrainInspection.chainrings || drivetrainInspection.cassette) {
          compiledNotes += `\nDrivetrain Inspection:\n`;
          if (drivetrainInspection.chain) compiledNotes += `• Chain: ${drivetrainInspection.chain}\n`;
          if (drivetrainInspection.chainrings) compiledNotes += `• Chainrings: ${drivetrainInspection.chainrings}\n`;
          if (drivetrainInspection.cassette) compiledNotes += `• Cassette: ${drivetrainInspection.cassette}\n`;
        }

        // Add brake measurements
        if (brakeMeasurements.frontBrakePadsWear || brakeMeasurements.frontRotorWear || 
            brakeMeasurements.rearBrakePadsWear || brakeMeasurements.rearRotorWear) {
          compiledNotes += `\nBrake Inspection:\n`;
          if (brakeMeasurements.frontBrakePadsWear) compiledNotes += `• Front brake pads wear: ${brakeMeasurements.frontBrakePadsWear}mm\n`;
          if (brakeMeasurements.frontRotorWear) compiledNotes += `• Front rotor wear: ${brakeMeasurements.frontRotorWear}mm\n`;
          if (brakeMeasurements.rearBrakePadsWear) compiledNotes += `• Rear brake pads wear: ${brakeMeasurements.rearBrakePadsWear}mm\n`;
          if (brakeMeasurements.rearRotorWear) compiledNotes += `• Rear rotor wear: ${brakeMeasurements.rearRotorWear}mm\n`;
        }

        // Add brake service
        Object.entries(brakeService).forEach(([item, checked]) => {
          if (checked) {
            compiledNotes += `• ${item}`;
            if (brakeServiceNotes[item]) {
              compiledNotes += ` - ${brakeServiceNotes[item]}`;
            }
            compiledNotes += '\n';
          }
        });

        // Add additional fields
        if (additionalFields.firmwareUpdates) {
          compiledNotes += `• Firmware updates: ${additionalFields.firmwareUpdates}\n`;
        }
        if (additionalFields.batteries) {
          compiledNotes += `• Batteries: ${additionalFields.batteries}\n`;
        }
      }

      // Add additional parts & labour
      if (additionalParts.length > 0) {
        compiledNotes += `\nAdditional Parts & Labour:\n`;
        additionalParts.forEach(part => {
          if (part.description) {
            compiledNotes += `• ${part.description}: $${part.cost.toFixed(2)}\n`;
          }
        });
      }

      // Add costs
      if (serviceCost > 0) {
        compiledNotes += `\nService Cost: $${serviceCost.toFixed(2)}\n`;
      }
      
      const total = calculateTotal();
      if (total > 0) {
        compiledNotes += `Grand Total: $${total.toFixed(2)}\n`;
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

  const renderCompleteServiceDetails = () => (
    <div className="space-y-6">
      <h4 className="text-brand-gold text-lg font-medium">Complete Service Details</h4>
      
      {/* Fixed Service Items */}
      <div className="space-y-3">
        {[
          'Premium wash & drivetrain degrease',
          'Ultrasonic chain clean & lube, or wax strip & re-dip',
          'Service headset & bottom bracket',
          'Service hubs, wheels trued & sealant top up'
        ].map((item) => (
          <div key={item} className="space-y-2">
            <label className="flex items-start space-x-3 text-white cursor-pointer">
              <input
                type="checkbox"
                checked={serviceItems[item] || false}
                onChange={(e) => handleServiceItemChange(item, e.target.checked)}
                className="form-checkbox text-brand-gold mt-1 flex-shrink-0"
              />
              <span className="text-sm flex-grow leading-relaxed">{item}</span>
            </label>
            {serviceItems[item] && (
              <div className="ml-6">
                <input
                  type="text"
                  placeholder="Add notes..."
                  value={serviceItemNotes[item] || ''}
                  onChange={(e) => handleServiceItemNoteChange(item, e.target.value)}
                  className="w-full bg-transparent border border-gray-600 p-2 text-white text-sm placeholder-gray-400 rounded"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Component Wear */}
      <div className="space-y-4">
        <h5 className="text-brand-gold text-sm font-medium">Component Wear</h5>
        <div className="flex flex-wrap gap-6">
          {['Shimano', 'SRAM', 'Other'].map((groupset) => (
            <div key={groupset} className="space-y-2">
              <label className="flex items-start space-x-3 text-white cursor-pointer">
                <input
                  type="radio"
                  name="groupset"
                  checked={selectedGroupset === groupset}
                  onChange={() => handleGroupsetChange(groupset)}
                  className="form-radio text-brand-gold mt-1 flex-shrink-0"
                />
                <span className="text-sm flex-grow leading-relaxed">{groupset}</span>
              </label>
              {selectedGroupset === groupset && (
                <div className="ml-6">
                  <input
                    type="text"
                    placeholder="Add notes..."
                    value={serviceItemNotes[groupset] || ''}
                    onChange={(e) => handleServiceItemNoteChange(groupset, e.target.value)}
                    className="w-full bg-transparent border border-gray-600 p-2 text-white text-sm placeholder-gray-400 rounded"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Drivetrain Inspection */}
      <div className="space-y-4">
        <h5 className="text-brand-gold text-sm font-medium">Drivetrain Inspection</h5>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { key: 'chain', label: 'Chain' },
            { key: 'chainrings', label: 'Chainrings' },
            { key: 'cassette', label: 'Cassette' }
          ].map(({ key, label }) => (
            <div key={key}>
              <label className="block text-white text-xs mb-1">{label}</label>
              <input
                type="text"
                value={drivetrainInspection[key as keyof typeof drivetrainInspection]}
                onChange={(e) => handleDrivetrainChange(key, e.target.value)}
                className="w-full bg-transparent border border-gray-600 p-2 text-white text-xs rounded"
                placeholder="Enter value..."
              />
            </div>
          ))}
        </div>
      </div>

      {/* Brake Inspection */}
      <div className="space-y-4">
        <h5 className="text-brand-gold text-sm font-medium">Brake Inspection</h5>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Front Brake */}
          <div className="space-y-3">
            <h6 className="text-brand-gold text-xs font-medium">Front Brake</h6>
            <div>
              <label className="block text-white text-xs mb-1">Front brake pads wear (Min 2.5mm)</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={brakeMeasurements.frontBrakePadsWear}
                  onChange={(e) => handleBrakeMeasurementChange('frontBrakePadsWear', e.target.value)}
                  className="w-20 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                  placeholder="0.0"
                />
                <span className="text-white text-xs">mm</span>
              </div>
            </div>
            <div>
              <label className="block text-white text-xs mb-1">Front rotor wear (Min 1.5mm)</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={brakeMeasurements.frontRotorWear}
                  onChange={(e) => handleBrakeMeasurementChange('frontRotorWear', e.target.value)}
                  className="w-20 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                  placeholder="0.0"
                />
                <span className="text-white text-xs">mm</span>
              </div>
            </div>
          </div>

          {/* Rear Brake */}
          <div className="space-y-3">
            <h6 className="text-brand-gold text-xs font-medium">Rear Brake</h6>
            <div>
              <label className="block text-white text-xs mb-1">Rear brake pads wear (Min 2.5mm)</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={brakeMeasurements.rearBrakePadsWear}
                  onChange={(e) => handleBrakeMeasurementChange('rearBrakePadsWear', e.target.value)}
                  className="w-20 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                  placeholder="0.0"
                />
                <span className="text-white text-xs">mm</span>
              </div>
            </div>
            <div>
              <label className="block text-white text-xs mb-1">Rear rotor wear (Min 1.5mm)</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={brakeMeasurements.rearRotorWear}
                  onChange={(e) => handleBrakeMeasurementChange('rearRotorWear', e.target.value)}
                  className="w-20 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                  placeholder="0.0"
                />
                <span className="text-white text-xs">mm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean, service & align brake callipers, flush & bleed brakes */}
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="flex items-start space-x-3 text-white cursor-pointer">
            <input
              type="checkbox"
              checked={serviceItems['Clean, service & align brake callipers, flush & bleed brakes'] || false}
              onChange={(e) => handleServiceItemChange('Clean, service & align brake callipers, flush & bleed brakes', e.target.checked)}
              className="form-checkbox text-brand-gold mt-1 flex-shrink-0"
            />
            <span className="text-sm flex-grow leading-relaxed font-medium">Clean, service & align brake callipers, flush & bleed brakes</span>
          </label>
          {serviceItems['Clean, service & align brake callipers, flush & bleed brakes'] && (
            <div className="ml-6">
              <input
                type="text"
                placeholder="Add notes..."
                value={serviceItemNotes['Clean, service & align brake callipers, flush & bleed brakes'] || ''}
                onChange={(e) => handleServiceItemNoteChange('Clean, service & align brake callipers, flush & bleed brakes', e.target.value)}
                className="w-full bg-transparent border border-gray-600 p-2 text-white text-sm placeholder-gray-400 rounded"
              />
            </div>
          )}
        </div>

        {serviceItems['Clean, service & align brake callipers, flush & bleed brakes'] && (
          <div className="ml-4 grid md:grid-cols-2 gap-6">
            {/* Front Brake Service */}
            <div className="space-y-3">
              <h6 className="text-brand-gold text-xs font-medium">Front Brake Service</h6>
              {['Front brake bleed', 'Front caliper serviced'].map((item) => (
                <div key={item} className="space-y-2">
                  <label className="flex items-center space-x-2 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={brakeService[item] || false}
                      onChange={(e) => handleBrakeServiceChange(item, e.target.checked)}
                      className="form-checkbox text-brand-gold"
                    />
                    <span className="text-xs">{item.replace('Front ', '')}</span>
                  </label>
                  {brakeService[item] && (
                    <input
                      type="text"
                      placeholder="Add notes..."
                      value={brakeServiceNotes[item] || ''}
                      onChange={(e) => handleBrakeServiceNoteChange(item, e.target.value)}
                      className="w-full bg-transparent border border-gray-600 p-2 text-white text-xs placeholder-gray-400 rounded"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Rear Brake Service */}
            <div className="space-y-3">
              <h6 className="text-brand-gold text-xs font-medium">Rear Brake Service</h6>
              {['Rear brake bleed', 'Rear caliper serviced'].map((item) => (
                <div key={item} className="space-y-2">
                  <label className="flex items-center space-x-2 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={brakeService[item] || false}
                      onChange={(e) => handleBrakeServiceChange(item, e.target.checked)}
                      className="form-checkbox text-brand-gold"
                    />
                    <span className="text-xs">{item.replace('Rear ', '')}</span>
                  </label>
                  {brakeService[item] && (
                    <input
                      type="text"
                      placeholder="Add notes..."
                      value={brakeServiceNotes[item] || ''}
                      onChange={(e) => handleBrakeServiceNoteChange(item, e.target.value)}
                      className="w-full bg-transparent border border-gray-600 p-2 text-white text-xs placeholder-gray-400 rounded"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Additional Fields */}
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white text-xs mb-1">Firmware updates</label>
            <input
              type="text"
              value={additionalFields.firmwareUpdates}
              onChange={(e) => handleAdditionalFieldChange('firmwareUpdates', e.target.value)}
              className="w-full bg-transparent border border-gray-600 p-2 text-white text-xs rounded"
              placeholder="Enter firmware details..."
            />
          </div>
          <div>
            <label className="block text-white text-xs mb-1">Batteries</label>
            <input
              type="text"
              value={additionalFields.batteries}
              onChange={(e) => handleAdditionalFieldChange('batteries', e.target.value)}
              className="w-full bg-transparent border border-gray-600 p-2 text-white text-xs rounded"
              placeholder="Enter battery details..."
            />
          </div>
        </div>
      </div>

      {/* Final Service Items */}
      <div className="space-y-3">
        {[
          'Align derailleur hanger & tune gears',
          'Safety check & test ride'
        ].map((item) => (
          <div key={item} className="space-y-2">
            <label className="flex items-start space-x-3 text-white cursor-pointer">
              <input
                type="checkbox"
                checked={serviceItems[item] || false}
                onChange={(e) => handleServiceItemChange(item, e.target.checked)}
                className="form-checkbox text-brand-gold mt-1 flex-shrink-0"
              />
              <span className="text-sm flex-grow leading-relaxed">{item}</span>
            </label>
            {serviceItems[item] && (
              <div className="ml-6">
                <input
                  type="text"
                  placeholder="Add notes..."
                  value={serviceItemNotes[item] || ''}
                  onChange={(e) => handleServiceItemNoteChange(item, e.target.value)}
                  className="w-full bg-transparent border border-gray-600 p-2 text-white text-sm placeholder-gray-400 rounded"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderStandardServiceDetails = () => (
    <div className="space-y-6">
      <h4 className="text-brand-gold text-lg font-medium">Standard Service Details</h4>
      
      {/* Fixed Service Items */}
      <div className="space-y-3">
        {[
          'Premium wash',
          'Ultrasonic chain clean & lube, or wax strip & re-dip',
          'Check headset & bottom bracket',
          'Check hubs & wheels & sealant top up'
        ].map((item) => (
          <div key={item} className="space-y-2">
            <label className="flex items-start space-x-3 text-white cursor-pointer">
              <input
                type="checkbox"
                checked={serviceItems[item] || false}
                onChange={(e) => handleServiceItemChange(item, e.target.checked)}
                className="form-checkbox text-brand-gold mt-1 flex-shrink-0"
              />
              <span className="text-sm flex-grow leading-relaxed">{item}</span>
            </label>
            {serviceItems[item] && (
              <div className="ml-6">
                <input
                  type="text"
                  placeholder="Add notes..."
                  value={serviceItemNotes[item] || ''}
                  onChange={(e) => handleServiceItemNoteChange(item, e.target.value)}
                  className="w-full bg-transparent border border-gray-600 p-2 text-white text-sm placeholder-gray-400 rounded"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Component Wear */}
      <div className="space-y-4">
        <h5 className="text-brand-gold text-sm font-medium">Component Wear</h5>
        <div className="flex flex-wrap gap-6">
          {['Shimano', 'SRAM', 'Other'].map((groupset) => (
            <div key={groupset} className="space-y-2">
              <label className="flex items-start space-x-3 text-white cursor-pointer">
                <input
                  type="radio"
                  name="groupset"
                  checked={selectedGroupset === groupset}
                  onChange={() => handleGroupsetChange(groupset)}
                  className="form-radio text-brand-gold mt-1 flex-shrink-0"
                />
                <span className="text-sm flex-grow leading-relaxed">{groupset}</span>
              </label>
              {selectedGroupset === groupset && (
                <div className="ml-6">
                  <input
                    type="text"
                    placeholder="Add notes..."
                    value={serviceItemNotes[groupset] || ''}
                    onChange={(e) => handleServiceItemNoteChange(groupset, e.target.value)}
                    className="w-full bg-transparent border border-gray-600 p-2 text-white text-sm placeholder-gray-400 rounded"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Drivetrain Inspection */}
      <div className="space-y-4">
        <h5 className="text-brand-gold text-sm font-medium">Drivetrain Inspection</h5>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { key: 'chain', label: 'Chain' },
            { key: 'chainrings', label: 'Chainrings' },
            { key: 'cassette', label: 'Cassette' }
          ].map(({ key, label }) => (
            <div key={key}>
              <label className="block text-white text-xs mb-1">{label}</label>
              <input
                type="text"
                value={drivetrainInspection[key as keyof typeof drivetrainInspection]}
                onChange={(e) => handleDrivetrainChange(key, e.target.value)}
                className="w-full bg-transparent border border-gray-600 p-2 text-white text-xs rounded"
                placeholder="Enter value..."
              />
            </div>
          ))}
        </div>
      </div>

      {/* Brake Inspection */}
      <div className="space-y-4">
        <h5 className="text-brand-gold text-sm font-medium">Brake Inspection</h5>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Front Brake */}
          <div className="space-y-3">
            <h6 className="text-brand-gold text-xs font-medium">Front Brake</h6>
            <div>
              <label className="block text-white text-xs mb-1">Front brake pads wear (Min 2.5mm)</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={brakeMeasurements.frontBrakePadsWear}
                  onChange={(e) => handleBrakeMeasurementChange('frontBrakePadsWear', e.target.value)}
                  className="w-20 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                  placeholder="0.0"
                />
                <span className="text-white text-xs">mm</span>
              </div>
            </div>
            <div>
              <label className="block text-white text-xs mb-1">Front rotor wear (Min 1.5mm)</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={brakeMeasurements.frontRotorWear}
                  onChange={(e) => handleBrakeMeasurementChange('frontRotorWear', e.target.value)}
                  className="w-20 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                  placeholder="0.0"
                />
                <span className="text-white text-xs">mm</span>
              </div>
            </div>
          </div>

          {/* Rear Brake */}
          <div className="space-y-3">
            <h6 className="text-brand-gold text-xs font-medium">Rear Brake</h6>
            <div>
              <label className="block text-white text-xs mb-1">Rear brake pads wear (Min 2.5mm)</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={brakeMeasurements.rearBrakePadsWear}
                  onChange={(e) => handleBrakeMeasurementChange('rearBrakePadsWear', e.target.value)}
                  className="w-20 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                  placeholder="0.0"
                />
                <span className="text-white text-xs">mm</span>
              </div>
            </div>
            <div>
              <label className="block text-white text-xs mb-1">Rear rotor wear (Min 1.5mm)</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={brakeMeasurements.rearRotorWear}
                  onChange={(e) => handleBrakeMeasurementChange('rearRotorWear', e.target.value)}
                  className="w-20 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                  placeholder="0.0"
                />
                <span className="text-white text-xs">mm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean & align brake callipers, rotors trued & bleed brakes */}
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="flex items-start space-x-3 text-white cursor-pointer">
            <input
              type="checkbox"
              checked={serviceItems['Clean & align brake callipers, rotors trued & bleed brakes'] || false}
              onChange={(e) => handleServiceItemChange('Clean & align brake callipers, rotors trued & bleed brakes', e.target.checked)}
              className="form-checkbox text-brand-gold mt-1 flex-shrink-0"
            />
            <span className="text-sm flex-grow leading-relaxed font-medium">Clean & align brake callipers, rotors trued & bleed brakes</span>
          </label>
          {serviceItems['Clean & align brake callipers, rotors trued & bleed brakes'] && (
            <div className="ml-6">
              <input
                type="text"
                placeholder="Add notes..."
                value={serviceItemNotes['Clean & align brake callipers, rotors trued & bleed brakes'] || ''}
                onChange={(e) => handleServiceItemNoteChange('Clean & align brake callipers, rotors trued & bleed brakes', e.target.value)}
                className="w-full bg-transparent border border-gray-600 p-2 text-white text-sm placeholder-gray-400 rounded"
              />
            </div>
          )}
        </div>

        {serviceItems['Clean & align brake callipers, rotors trued & bleed brakes'] && (
          <div className="ml-4 grid md:grid-cols-2 gap-6">
            {/* Front Brake Service */}
            <div className="space-y-3">
              <h6 className="text-brand-gold text-xs font-medium">Front Brake Service</h6>
              {['brake bleed', 'rotor', 'caliper alignment'].map((item) => (
                <div key={`front-${item}`} className="space-y-2">
                  <label className="flex items-center space-x-2 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={brakeService[`front-${item}`] || false}
                      onChange={(e) => handleBrakeServiceChange(`front-${item}`, e.target.checked)}
                      className="form-checkbox text-brand-gold"
                    />
                    <span className="text-xs">{item}</span>
                  </label>
                  {brakeService[`front-${item}`] && (
                    <input
                      type="text"
                      placeholder="Add notes..."
                      value={brakeServiceNotes[`front-${item}`] || ''}
                      onChange={(e) => handleBrakeServiceNoteChange(`front-${item}`, e.target.value)}
                      className="w-full bg-transparent border border-gray-600 p-2 text-white text-xs placeholder-gray-400 rounded"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Rear Brake Service */}
            <div className="space-y-3">
              <h6 className="text-brand-gold text-xs font-medium">Rear Brake Service</h6>
              {['brake bleed', 'rotor', 'caliper alignment'].map((item) => (
                <div key={`rear-${item}`} className="space-y-2">
                  <label className="flex items-center space-x-2 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={brakeService[`rear-${item}`] || false}
                      onChange={(e) => handleBrakeServiceChange(`rear-${item}`, e.target.checked)}
                      className="form-checkbox text-brand-gold"
                    />
                    <span className="text-xs">{item}</span>
                  </label>
                  {brakeService[`rear-${item}`] && (
                    <input
                      type="text"
                      placeholder="Add notes..."
                      value={brakeServiceNotes[`rear-${item}`] || ''}
                      onChange={(e) => handleBrakeServiceNoteChange(`rear-${item}`, e.target.value)}
                      className="w-full bg-transparent border border-gray-600 p-2 text-white text-xs placeholder-gray-400 rounded"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Final Service Items */}
      <div className="space-y-3">
        {[
          'Align derailleur hanger & tune gears',
          'Safety check & test ride'
        ].map((item) => (
          <div key={item} className="space-y-2">
            <label className="flex items-start space-x-3 text-white cursor-pointer">
              <input
                type="checkbox"
                checked={serviceItems[item] || false}
                onChange={(e) => handleServiceItemChange(item, e.target.checked)}
                className="form-checkbox text-brand-gold mt-1 flex-shrink-0"
              />
              <span className="text-sm flex-grow leading-relaxed">{item}</span>
            </label>
            {serviceItems[item] && (
              <div className="ml-6">
                <input
                  type="text"
                  placeholder="Add notes..."
                  value={serviceItemNotes[item] || ''}
                  onChange={(e) => handleServiceItemNoteChange(item, e.target.value)}
                  className="w-full bg-transparent border border-gray-600 p-2 text-white text-sm placeholder-gray-400 rounded"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderRacePrepServiceDetails = () => (
    <div className="space-y-6">
      <h4 className="text-brand-gold text-lg font-medium">Race Prep Service Details</h4>
      
      {/* Component Wear */}
      <div className="space-y-4">
        <h5 className="text-brand-gold text-sm font-medium">Component Wear</h5>
        <div className="flex flex-wrap gap-6">
          {['Shimano', 'SRAM', 'Other'].map((groupset) => (
            <div key={groupset} className="space-y-2">
              <label className="flex items-start space-x-3 text-white cursor-pointer">
                <input
                  type="radio"
                  name="groupset"
                  checked={selectedGroupset === groupset}
                  onChange={() => handleGroupsetChange(groupset)}
                  className="form-radio text-brand-gold mt-1 flex-shrink-0"
                />
                <span className="text-sm flex-grow leading-relaxed">{groupset}</span>
              </label>
              {selectedGroupset === groupset && (
                <div className="ml-6">
                  <input
                    type="text"
                    placeholder="Add notes..."
                    value={serviceItemNotes[groupset] || ''}
                    onChange={(e) => handleServiceItemNoteChange(groupset, e.target.value)}
                    className="w-full bg-transparent border border-gray-600 p-2 text-white text-sm placeholder-gray-400 rounded"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Drivetrain Inspection */}
      <div className="space-y-4">
        <h5 className="text-brand-gold text-sm font-medium">Drivetrain Inspection</h5>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { key: 'chain', label: 'Chain' },
            { key: 'chainrings', label: 'Chainrings' },
            { key: 'cassette', label: 'Cassette' }
          ].map(({ key, label }) => (
            <div key={key}>
              <label className="block text-white text-xs mb-1">{label}</label>
              <input
                type="text"
                value={drivetrainInspection[key as keyof typeof drivetrainInspection]}
                onChange={(e) => handleDrivetrainChange(key, e.target.value)}
                className="w-full bg-transparent border border-gray-600 p-2 text-white text-xs rounded"
                placeholder="Enter value..."
              />
            </div>
          ))}
        </div>
      </div>

      {/* Brake Inspection */}
      <div className="space-y-4">
        <h5 className="text-brand-gold text-sm font-medium">Brake Inspection</h5>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Front Brake */}
          <div className="space-y-3">
            <h6 className="text-brand-gold text-xs font-medium">Front Brake</h6>
            <div>
              <label className="block text-white text-xs mb-1">Front brake pads wear (Min 2.5mm)</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={brakeMeasurements.frontBrakePadsWear}
                  onChange={(e) => handleBrakeMeasurementChange('frontBrakePadsWear', e.target.value)}
                  className="w-20 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                  placeholder="0.0"
                />
                <span className="text-white text-xs">mm</span>
              </div>
            </div>
            <div>
              <label className="block text-white text-xs mb-1">Front rotor wear (Min 1.5mm)</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={brakeMeasurements.frontRotorWear}
                  onChange={(e) => handleBrakeMeasurementChange('frontRotorWear', e.target.value)}
                  className="w-20 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                  placeholder="0.0"
                />
                <span className="text-white text-xs">mm</span>
              </div>
            </div>
          </div>

          {/* Rear Brake */}
          <div className="space-y-3">
            <h6 className="text-brand-gold text-xs font-medium">Rear Brake</h6>
            <div>
              <label className="block text-white text-xs mb-1">Rear brake pads wear (Min 2.5mm)</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={brakeMeasurements.rearBrakePadsWear}
                  onChange={(e) => handleBrakeMeasurementChange('rearBrakePadsWear', e.target.value)}
                  className="w-20 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                  placeholder="0.0"
                />
                <span className="text-white text-xs">mm</span>
              </div>
            </div>
            <div>
              <label className="block text-white text-xs mb-1">Rear rotor wear (Min 1.5mm)</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={brakeMeasurements.rearRotorWear}
                  onChange={(e) => handleBrakeMeasurementChange('rearRotorWear', e.target.value)}
                  className="w-20 bg-transparent border border-gray-600 p-1 text-white text-xs rounded"
                  placeholder="0.0"
                />
                <span className="text-white text-xs">mm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brakes checked & adjusted */}
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="flex items-start space-x-3 text-white cursor-pointer">
            <input
              type="checkbox"
              checked={serviceItems['Brakes checked & adjusted'] || false}
              onChange={(e) => handleServiceItemChange('Brakes checked & adjusted', e.target.checked)}
              className="form-checkbox text-brand-gold mt-1 flex-shrink-0"
            />
            <span className="text-sm flex-grow leading-relaxed font-medium">Brakes checked & adjusted</span>
          </label>
          {serviceItems['Brakes checked & adjusted'] && (
            <div className="ml-6">
              <input
                type="text"
                placeholder="Add notes..."
                value={serviceItemNotes['Brakes checked & adjusted'] || ''}
                onChange={(e) => handleServiceItemNoteChange('Brakes checked & adjusted', e.target.value)}
                className="w-full bg-transparent border border-gray-600 p-2 text-white text-sm placeholder-gray-400 rounded"
              />
            </div>
          )}
        </div>

        {serviceItems['Brakes checked & adjusted'] && (
          <div className="ml-4 grid md:grid-cols-2 gap-6">
            {/* Front Brake Check */}
            <div className="space-y-3">
              <h6 className="text-brand-gold text-xs font-medium">Front Brake Check</h6>
              {['rotor', 'caliper alignment'].map((item) => (
                <div key={`front-${item}`} className="space-y-2">
                  <label className="flex items-center space-x-2 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={brakeService[`front-${item}`] || false}
                      onChange={(e) => handleBrakeServiceChange(`front-${item}`, e.target.checked)}
                      className="form-checkbox text-brand-gold"
                    />
                    <span className="text-xs">{item}</span>
                  </label>
                  {brakeService[`front-${item}`] && (
                    <input
                      type="text"
                      placeholder="Add notes..."
                      value={brakeServiceNotes[`front-${item}`] || ''}
                      onChange={(e) => handleBrakeServiceNoteChange(`front-${item}`, e.target.value)}
                      className="w-full bg-transparent border border-gray-600 p-2 text-white text-xs placeholder-gray-400 rounded"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Rear Brake Check */}
            <div className="space-y-3">
              <h6 className="text-brand-gold text-xs font-medium">Rear Brake Check</h6>
              {['rotor', 'caliper alignment'].map((item) => (
                <div key={`rear-${item}`} className="space-y-2">
                  <label className="flex items-center space-x-2 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={brakeService[`rear-${item}`] || false}
                      onChange={(e) => handleBrakeServiceChange(`rear-${item}`, e.target.checked)}
                      className="form-checkbox text-brand-gold"
                    />
                    <span className="text-xs">{item}</span>
                  </label>
                  {brakeService[`rear-${item}`] && (
                    <input
                      type="text"
                      placeholder="Add notes..."
                      value={brakeServiceNotes[`rear-${item}`] || ''}
                      onChange={(e) => handleBrakeServiceNoteChange(`rear-${item}`, e.target.value)}
                      className="w-full bg-transparent border border-gray-600 p-2 text-white text-xs placeholder-gray-400 rounded"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Final Service Items */}
      <div className="space-y-3">
        {[
          'Align derailleur hanger & tune gears',
          'Safety check & test ride'
        ].map((item) => (
          <div key={item} className="space-y-2">
            <label className="flex items-start space-x-3 text-white cursor-pointer">
              <input
                type="checkbox"
                checked={serviceItems[item] || false}
                onChange={(e) => handleServiceItemChange(item, e.target.checked)}
                className="form-checkbox text-brand-gold mt-1 flex-shrink-0"
              />
              <span className="text-sm flex-grow leading-relaxed">{item}</span>
            </label>
            {serviceItems[item] && (
              <div className="ml-6">
                <input
                  type="text"
                  placeholder="Add notes..."
                  value={serviceItemNotes[item] || ''}
                  onChange={(e) => handleServiceItemNoteChange(item, e.target.value)}
                  className="w-full bg-transparent border border-gray-600 p-2 text-white text-sm placeholder-gray-400 rounded"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

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
                {serviceOptions.map((service) => (
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

            {/* Service Details Section */}
            {serviceType === 'Complete Service' && (
              <div className="border border-brand-gold p-6">
                {renderCompleteServiceDetails()}
              </div>
            )}

            {serviceType === 'Standard Service' && (
              <div className="border border-brand-gold p-6">
                {renderStandardServiceDetails()}
              </div>
            )}

            {serviceType === 'Race Prep Service' && (
              <div className="border border-brand-gold p-6">
                {renderRacePrepServiceDetails()}
              </div>
            )}

            {/* Additional Parts & Labour */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-brand-gold">Additional Parts & Labour</label>
                <button
                  type="button"
                  onClick={addAdditionalPart}
                  className="px-3 py-1 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300 text-sm"
                >
                  Add Item
                </button>
              </div>
              
              <div className="space-y-3">
                {additionalParts.map((part) => (
                  <div key={part.id} className="flex items-center space-x-4">
                    <input
                      type="text"
                      placeholder="Description"
                      value={part.description}
                      onChange={(e) => updateAdditionalPart(part.id, 'description', e.target.value)}
                      className="flex-grow bg-transparent border border-gray-600 p-2 text-white"
                    />
                    <div className="flex items-center space-x-2">
                      <span className="text-white">$</span>
                      <input
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        value={part.cost || ''}
                        onChange={(e) => updateAdditionalPart(part.id, 'cost', parseFloat(e.target.value) || 0)}
                        className="w-24 bg-transparent border border-gray-600 p-2 text-white"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeAdditionalPart(part.id)}
                      className="text-red-500 hover:text-red-400"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                
                {additionalParts.length > 0 && (
                  <div className="flex justify-end pt-2 border-t border-gray-600">
                    <div className="text-brand-gold">
                      Parts Total: ${additionalParts.reduce((sum, part) => sum + part.cost, 0).toFixed(2)}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Service Cost */}
            <div>
              <label className="block text-brand-gold mb-2">Cost of Service</label>
              <div className="flex items-center space-x-2">
                <span className="text-white">$</span>
                <input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={serviceCost || ''}
                  onChange={(e) => setServiceCost(parseFloat(e.target.value) || 0)}
                  className="w-32 bg-transparent border border-brand-gold p-2 text-white"
                />
              </div>
            </div>

            {/* Grand Total */}
            {(serviceCost > 0 || additionalParts.length > 0) && (
              <div className="border-t border-brand-gold pt-4">
                <div className="flex justify-end">
                  <div className="text-brand-gold text-xl font-medium">
                    Grand Total: ${calculateTotal().toFixed(2)}
                  </div>
                </div>
              </div>
            )}

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