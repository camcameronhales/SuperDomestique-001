import React, { useEffect, useState } from 'react';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    Square: any;
  }
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCartStore();
  const [paymentForm, setPaymentForm] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const loadSquarePayments = async () => {
      if (!window.Square) {
        const script = document.createElement('script');
        script.src = 'https://sandbox.web.squarecdn.com/v1/square.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = initializeSquare;
      } else {
        initializeSquare();
      }
    };

    loadSquarePayments();
  }, [isOpen]);

  const initializeSquare = async () => {
    if (!window.Square) return;

    try {
      const payments = window.Square.payments('sandbox-sq0idb-YOUR-SANDBOX-APP-ID', 'YOUR-LOCATION-ID');
      const card = await payments.card();
      await card.attach('#card-container');
      setPaymentForm(card);
    } catch (e) {
      console.error('Square initialization error:', e);
      setPaymentError('Failed to initialize payment system');
    }
  };

  const handleCheckout = async () => {
    if (!paymentForm || items.length === 0) return;
    
    setIsProcessing(true);
    setPaymentError(null);

    try {
      const result = await paymentForm.tokenize();
      if (result.status === 'OK') {
        // Send to your server to process payment with Square API
        const response = await fetch('/api/process-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sourceId: result.token,
            amount: total,
            items: items.map(item => ({
              name: item.title,
              quantity: item.quantity,
              amount: item.price
            }))
          }),
        });

        if (response.ok) {
          clearCart();
          onClose();
          // Show success message
        } else {
          throw new Error('Payment processing failed');
        }
      }
    } catch (e) {
      console.error('Payment error:', e);
      setPaymentError('Payment processing failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-brand-blue border-l border-brand-gold">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-brand-gold">
            <h2 className="text-xl text-brand-gold flex items-center">
              <ShoppingCart className="w-6 h-6 mr-2" />
              Cart
            </h2>
            <button
              onClick={onClose}
              className="text-brand-gold hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <p className="text-gray-400 text-center">Your cart is empty</p>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b border-gray-700 pb-4"
                  >
                    <div className="flex-1">
                      <h3 className="text-brand-gold">{item.title}</h3>
                      <p className="text-gray-400">${item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="text-brand-gold hover:text-white transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-brand-gold hover:text-white transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-400 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {items.length > 0 && (
              <div className="mt-8">
                <h3 className="text-brand-gold mb-4">Payment Details</h3>
                <div id="card-container" className="bg-white p-4 rounded"></div>
                {paymentError && (
                  <p className="text-red-500 mt-2 text-sm">{paymentError}</p>
                )}
              </div>
            )}
          </div>

          <div className="p-6 border-t border-brand-gold">
            <div className="flex justify-between mb-4">
              <span className="text-brand-gold">Total</span>
              <span className="text-brand-gold">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={items.length === 0 || isProcessing}
              className={`w-full py-3 px-4 text-center ${
                items.length === 0 || isProcessing
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-brand-gold text-brand-blue hover:bg-opacity-90'
              } transition-colors rounded`}
            >
              {isProcessing ? 'Processing...' : 'Checkout'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;