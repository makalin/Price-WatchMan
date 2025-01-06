import React, { useState, useEffect } from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PriceWatchman = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    url: '',
    name: '',
    targetPrice: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(`/api/items/${userId}`);
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newItem,
          userId: '123', // Replace with actual user ID
          userPhone: '+1234567890' // Replace with actual phone
        }),
      });

      if (response.ok) {
        setNewItem({ url: '', name: '', targetPrice: '' });
        fetchItems();
      }
    } catch (error) {
      console.error('Error adding item:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Add New Item to Track</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Product URL"
                value={newItem.url}
                onChange={(e) => setNewItem({ ...newItem, url: e.target.value })}
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                placeholder="Product Name"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                className="p-2 border rounded"
                required
              />
              <input
                type="number"
                placeholder="Target Price"
                value={newItem.targetPrice}
                onChange={(e) => setNewItem({ ...newItem, targetPrice: e.target.value })}
                className="p-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              <PlusCircle className="mr-2" size={20} />
              {loading ? 'Adding...' : 'Add Item'}
            </button>
          </form>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <Card key={item.id} className="relative">
            <CardContent className="p-4">
              <h3 className="font-bold mb-2">{item.name}</h3>
              <div className="space-y-2">
                <p>Current Price: ${item.current_price}</p>
                <p>Target Price: ${item.target_price}</p>
                <p className="text-sm text-gray-500">
                  Last checked: {new Date(item.last_checked).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              >
                <Trash2 size={20} />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PriceWatchman;
