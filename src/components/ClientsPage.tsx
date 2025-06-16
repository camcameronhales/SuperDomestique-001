import React, { useEffect, useState } from 'react';
import { ArrowLeft, Cog, Search, Plus, Edit2, Trash2, X, ChevronRight, ChevronDown, FileText, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import ServiceTicketModal from './ServiceTicketModal';

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  bikes: Bike[];
  service_history: ServiceHistory[];
}

interface Bike {
  id: string;
  make: string;
  model: string;
  year: string;
}

interface ServiceHistory {
  id: string;
  service_date: string;
  service_type: string[];
  notes: string;
  bike_id: string;
}

interface NewClient {
  name: string;
  email: string;
  phone: string;
  bikes: Array<{
    make: string;
    model: string;
    year: string;
  }>;
}

const ClientsPage: React.FC = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState<Client[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showServiceTicketModal, setShowServiceTicketModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());
  const [newClient, setNewClient] = useState<NewClient>({
    name: '',
    email: '',
    phone: '',
    bikes: [{ make: '', model: '', year: '' }],
  });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const { data: clientsData, error: clientsError } = await supabase
        .from('clients')
        .select('*')
        .order('name');

      if (clientsError) throw clientsError;

      const clientsWithDetails = await Promise.all(
        clientsData.map(async (client) => {
          const { data: bikes } = await supabase
            .from('client_bikes')
            .select('*')
            .eq('client_id', client.id);

          const { data: serviceHistory } = await supabase
            .from('service_history')
            .select('*')
            .eq('client_id', client.id)
            .order('service_date', { ascending: false });

          return {
            ...client,
            bikes: bikes || [],
            service_history: serviceHistory || [],
          };
        })
      );

      setClients(clientsWithDetails);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch clients');
      setLoading(false);
      console.error('Error fetching clients:', err);
    }
  };

  const handleAddClient = async () => {
    try {
      // Add client
      const { data: clientData, error: clientError } = await supabase
        .from('clients')
        .insert({
          name: newClient.name,
          email: newClient.email,
          phone: newClient.phone,
        })
        .select()
        .single();

      if (clientError) throw clientError;

      // Add bikes
      const bikesToAdd = newClient.bikes.filter(bike => bike.make || bike.model || bike.year);
      if (bikesToAdd.length > 0) {
        const { error: bikesError } = await supabase
          .from('client_bikes')
          .insert(
            bikesToAdd.map(bike => ({
              client_id: clientData.id,
              ...bike
            }))
          );

        if (bikesError) throw bikesError;
      }

      // Reset form and close modal
      setNewClient({
        name: '',
        email: '',
        phone: '',
        bikes: [{ make: '', model: '', year: '' }],
      });
      setShowAddModal(false);

      // Refresh clients list
      await fetchClients();
    } catch (err) {
      console.error('Error adding client:', err);
      setError('Failed to add client');
    }
  };

  const handleEditClient = (client: Client) => {
    setEditingClient({
      ...client,
      bikes: client.bikes.map(bike => ({ ...bike }))
    });
    setShowEditModal(true);
  };

  const handleUpdateClient = async () => {
    if (!editingClient) return;

    try {
      // Update client
      const { error: clientError } = await supabase
        .from('clients')
        .update({
          name: editingClient.name,
          email: editingClient.email,
          phone: editingClient.phone,
        })
        .eq('id', editingClient.id);

      if (clientError) throw clientError;

      // Update bikes - delete existing and add new ones
      const { error: deleteBikesError } = await supabase
        .from('client_bikes')
        .delete()
        .eq('client_id', editingClient.id);

      if (deleteBikesError) throw deleteBikesError;

      const bikesToAdd = editingClient.bikes.filter(bike => bike.make || bike.model || bike.year);
      if (bikesToAdd.length > 0) {
        const { error: bikesError } = await supabase
          .from('client_bikes')
          .insert(
            bikesToAdd.map(bike => ({
              client_id: editingClient.id,
              make: bike.make,
              model: bike.model,
              year: bike.year,
            }))
          );

        if (bikesError) throw bikesError;
      }

      setShowEditModal(false);
      setEditingClient(null);
      await fetchClients();
    } catch (err) {
      console.error('Error updating client:', err);
      setError('Failed to update client');
    }
  };

  const handleDeleteClient = (client: Client) => {
    setSelectedClient(client);
    setShowDeleteModal(true);
  };

  const confirmDeleteClient = async () => {
    if (!selectedClient) return;

    try {
      const { error } = await supabase
        .from('clients')
        .delete()
        .eq('id', selectedClient.id);

      if (error) throw error;

      setShowDeleteModal(false);
      setSelectedClient(null);
      await fetchClients();
    } catch (err) {
      console.error('Error deleting client:', err);
      setError('Failed to delete client');
    }
  };

  const addBikeField = () => {
    setNewClient(prev => ({
      ...prev,
      bikes: [...prev.bikes, { make: '', model: '', year: '' }],
    }));
  };

  const addEditBikeField = () => {
    if (!editingClient) return;
    setEditingClient(prev => ({
      ...prev!,
      bikes: [...prev!.bikes, { id: '', make: '', model: '', year: '' }],
    }));
  };

  const removeBikeField = (index: number) => {
    setNewClient(prev => ({
      ...prev,
      bikes: prev.bikes.filter((_, i) => i !== index),
    }));
  };

  const removeEditBikeField = (index: number) => {
    if (!editingClient) return;
    setEditingClient(prev => ({
      ...prev!,
      bikes: prev!.bikes.filter((_, i) => i !== index),
    }));
  };

  const updateBikeField = (index: number, field: keyof Bike, value: string) => {
    setNewClient(prev => ({
      ...prev,
      bikes: prev.bikes.map((bike, i) => 
        i === index ? { ...bike, [field]: value } : bike
      ),
    }));
  };

  const updateEditBikeField = (index: number, field: keyof Bike, value: string) => {
    if (!editingClient) return;
    setEditingClient(prev => ({
      ...prev!,
      bikes: prev!.bikes.map((bike, i) => 
        i === index ? { ...bike, [field]: value } : bike
      ),
    }));
  };

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedServices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  };

  const handleCreateServiceTicket = (client: Client) => {
    setSelectedClient(client);
    setShowServiceTicketModal(true);
  };

  const handleServiceTicketClose = () => {
    setShowServiceTicketModal(false);
    setSelectedClient(null);
    // Refresh clients to show new service history
    fetchClients();
  };

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone?.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-brand-blue flex flex-col">
      <div className="fixed inset-0 z-0">
        <img 
          src="https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/SERVICE%20CARDS/Family-Canyon-aeroad-my25-10.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1NFUlZJQ0UgQ0FSRFMvRmFtaWx5LUNhbnlvbi1hZXJvYWQtbXkyNS0xMC53ZWJwIiwiaWF0IjoxNzQwOTAzMzQ1LCJleHAiOjE3NzI0MzkzNDV9.lhuY_0zwv_J-ktEnn_CbCf6R88yYWuw_DkYyQOjHj_M"
          alt="Client management background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue bg-opacity-90"></div>
      </div>
      
      <div className="fixed w-full z-50 top-0 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-24 items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-brand-gold hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Return to Home</span>
            </button>
            <div className="flex items-center space-x-2">
              <Cog className="w-6 h-6 text-brand-gold rotate-45" />
              <div className="text-xl font-light tracking-wider text-brand-gold">SUPER DOMESTIQUE</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-light text-brand-gold">Client Management</h1>
            <button 
              onClick={() => setShowAddModal(true)}
              className="flex items-center space-x-2 px-4 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300"
            >
              <Plus className="w-4 h-4" />
              <span>Add Client</span>
            </button>
          </div>

          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search clients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border border-brand-gold p-3 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold w-5 h-5" />
            </div>
          </div>

          {loading ? (
            <div className="text-center text-brand-gold">Loading clients...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <div className="space-y-6">
              {filteredClients.map((client) => (
                <div key={client.id} className="bg-brand-blue bg-opacity-90 border border-brand-gold p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl text-brand-gold">{client.name}</h2>
                      <div className="text-gray-400 space-y-1">
                        <p>{client.email}</p>
                        <p>{client.phone}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleCreateServiceTicket(client)}
                        className="flex items-center space-x-2 px-3 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300"
                      >
                        <FileText className="w-4 h-4" />
                        <span>New Service</span>
                      </button>
                      <button 
                        onClick={() => handleEditClient(client)}
                        className="p-2 text-brand-gold hover:text-white transition-colors"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => handleDeleteClient(client)}
                        className="p-2 text-red-500 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {client.bikes.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-brand-gold mb-2">Bikes</h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {client.bikes.map((bike) => (
                          <div key={bike.id} className="border border-gray-700 p-3">
                            <p className="text-white">{bike.make} {bike.model}</p>
                            <p className="text-gray-400">Year: {bike.year}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {client.service_history.length > 0 && (
                    <div>
                      <h3 className="text-brand-gold mb-2">Service History</h3>
                      <div className="space-y-2">
                        {client.service_history.map((service) => (
                          <div key={service.id} className="border border-gray-700">
                            <div 
                              className="flex justify-between items-center p-3 cursor-pointer hover:bg-gray-800 transition-colors"
                              onClick={() => toggleServiceExpansion(service.id)}
                            >
                              <div className="flex items-center space-x-3">
                                {expandedServices.has(service.id) ? (
                                  <ChevronDown className="w-4 h-4 text-brand-gold" />
                                ) : (
                                  <ChevronRight className="w-4 h-4 text-brand-gold" />
                                )}
                                <span className="text-white font-medium">
                                  {new Date(service.service_date).toLocaleDateString()}
                                </span>
                                <span className="text-gray-400">
                                  {service.service_type.join(', ')}
                                </span>
                              </div>
                            </div>
                            {expandedServices.has(service.id) && service.notes && (
                              <div className="px-3 pb-3 border-t border-gray-600">
                                <pre className="text-gray-300 mt-2 whitespace-pre-wrap text-sm">
                                  {service.notes}
                                </pre>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add Client Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-brand-blue border border-brand-gold p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl text-brand-gold">Add New Client</h2>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-brand-gold hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-brand-gold mb-2">Name</label>
                <input
                  type="text"
                  value={newClient.name}
                  onChange={(e) => setNewClient(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-transparent border border-brand-gold p-2 text-white"
                />
              </div>

              <div>
                <label className="block text-brand-gold mb-2">Email</label>
                <input
                  type="email"
                  value={newClient.email}
                  onChange={(e) => setNewClient(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-transparent border border-brand-gold p-2 text-white"
                />
              </div>

              <div>
                <label className="block text-brand-gold mb-2">Phone</label>
                <input
                  type="tel"
                  value={newClient.phone}
                  onChange={(e) => setNewClient(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full bg-transparent border border-brand-gold p-2 text-white"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-brand-gold">Bikes</label>
                  <button
                    onClick={addBikeField}
                    className="text-sm px-3 py-1 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300"
                  >
                    Add Bike
                  </button>
                </div>
                {newClient.bikes.map((bike, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Make"
                      value={bike.make}
                      onChange={(e) => updateBikeField(index, 'make', e.target.value)}
                      className="bg-transparent border border-brand-gold p-2 text-white"
                    />
                    <input
                      type="text"
                      placeholder="Model"
                      value={bike.model}
                      onChange={(e) => updateBikeField(index, 'model', e.target.value)}
                      className="bg-transparent border border-brand-gold p-2 text-white"
                    />
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Year"
                        value={bike.year}
                        onChange={(e) => updateBikeField(index, 'year', e.target.value)}
                        className="bg-transparent border border-brand-gold p-2 text-white flex-grow"
                      />
                      {index > 0 && (
                        <button
                          onClick={() => removeBikeField(index)}
                          className="px-2 text-red-500 hover:text-red-400"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-brand-gold hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddClient}
                  className="px-4 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300"
                >
                  Add Client
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Client Modal */}
      {showEditModal && editingClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-brand-blue border border-brand-gold p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl text-brand-gold">Edit Client</h2>
              <button 
                onClick={() => setShowEditModal(false)}
                className="text-brand-gold hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-brand-gold mb-2">Name</label>
                <input
                  type="text"
                  value={editingClient.name}
                  onChange={(e) => setEditingClient(prev => ({ ...prev!, name: e.target.value }))}
                  className="w-full bg-transparent border border-brand-gold p-2 text-white"
                />
              </div>

              <div>
                <label className="block text-brand-gold mb-2">Email</label>
                <input
                  type="email"
                  value={editingClient.email}
                  onChange={(e) => setEditingClient(prev => ({ ...prev!, email: e.target.value }))}
                  className="w-full bg-transparent border border-brand-gold p-2 text-white"
                />
              </div>

              <div>
                <label className="block text-brand-gold mb-2">Phone</label>
                <input
                  type="tel"
                  value={editingClient.phone}
                  onChange={(e) => setEditingClient(prev => ({ ...prev!, phone: e.target.value }))}
                  className="w-full bg-transparent border border-brand-gold p-2 text-white"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-brand-gold">Bikes</label>
                  <button
                    onClick={addEditBikeField}
                    className="text-sm px-3 py-1 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300"
                  >
                    Add Bike
                  </button>
                </div>
                {editingClient.bikes.map((bike, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Make"
                      value={bike.make}
                      onChange={(e) => updateEditBikeField(index, 'make', e.target.value)}
                      className="bg-transparent border border-brand-gold p-2 text-white"
                    />
                    <input
                      type="text"
                      placeholder="Model"
                      value={bike.model}
                      onChange={(e) => updateEditBikeField(index, 'model', e.target.value)}
                      className="bg-transparent border border-brand-gold p-2 text-white"
                    />
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Year"
                        value={bike.year}
                        onChange={(e) => updateEditBikeField(index, 'year', e.target.value)}
                        className="bg-transparent border border-brand-gold p-2 text-white flex-grow"
                      />
                      {editingClient.bikes.length > 1 && (
                        <button
                          onClick={() => removeEditBikeField(index)}
                          className="px-2 text-red-500 hover:text-red-400"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 text-brand-gold hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateClient}
                  className="px-4 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300"
                >
                  Update Client
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-brand-blue border border-brand-gold p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl text-brand-gold">Delete Client</h2>
              <button 
                onClick={() => setShowDeleteModal(false)}
                className="text-brand-gold hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-white mb-6">
              Are you sure you want to delete <strong>{selectedClient.name}</strong>? This action cannot be undone and will also delete all associated bikes and service history.
            </p>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 text-brand-gold hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteClient}
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Service Ticket Modal */}
      {showServiceTicketModal && selectedClient && (
        <ServiceTicketModal
          isOpen={showServiceTicketModal}
          onClose={handleServiceTicketClose}
          clientId={selectedClient.id}
          clientName={selectedClient.name}
          clientEmail={selectedClient.email}
          clientPhone={selectedClient.phone}
          bikes={selectedClient.bikes}
        />
      )}
    </div>
  );
};

export default ClientsPage;