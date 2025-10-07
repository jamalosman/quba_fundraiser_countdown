import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getAmountRaised, setAmountRaised } from '../utils/cookies';
import logo from '../assets/quba_logo.svg';

const AdminScreen = () => {
  const [amount, setAmount] = useState('');
  const [savedAmount, setSavedAmount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentAmount = getAmountRaised();
    setSavedAmount(currentAmount);
    setAmount(currentAmount.toString());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount) || 0;
    setAmountRaised(numericAmount);
    setSavedAmount(numericAmount);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleViewProgress = () => {
    navigate('/');
  };

  const formattedSavedAmount = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(savedAmount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-mosque-dark via-mosque-burgundy to-red-950 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border-2 border-mosque-gold/50">
          <div className="text-center mb-8">
            <img
              src={logo}
              alt="Quba Mosque Logo"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Admin Panel
            </h1>
            <p className="text-gray-600">
              Update Fundraiser Amount
            </p>
          </div>

          <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-mosque-gold/30">
            <p className="text-gray-600 text-sm mb-1">Current Amount Saved</p>
            <p className="text-2xl font-bold text-mosque-burgundy">
              {formattedSavedAmount}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="amount" className="block text-gray-700 mb-2 font-medium">
                Amount Raised (£)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl">
                  £
                </span>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 text-xl focus:outline-none focus:ring-2 focus:ring-mosque-gold focus:border-transparent transition-all"
                  placeholder="0"
                  step="0.01"
                  min="0"
                />
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Enter the total amount raised so far
              </p>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-orange-500 via-mosque-gold to-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Save Amount
            </motion.button>
          </form>

          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
            >
              <p className="text-green-300 text-center font-medium">
                ✓ Amount saved successfully!
              </p>
            </motion.div>
          )}

          <motion.button
            onClick={handleViewProgress}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg border border-gray-300 transition-all"
          >
            View Progress Screen
          </motion.button>

          <div className="mt-6 p-4 bg-amber-50 border border-mosque-gold/30 rounded-lg">
            <p className="text-gray-700 text-sm">
              <strong>Note:</strong> The amount is stored in a cookie that lasts for 1 year.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminScreen;
