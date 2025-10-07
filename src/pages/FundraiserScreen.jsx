import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getAmountRaised } from '../utils/cookies';
import logo from '../assets/quba_logo.svg';

const TARGET_AMOUNT = 1000000;

const FundraiserScreen = () => {
  const [amountRaised, setAmountRaised] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setAmountRaised(getAmountRaised());
  }, []);

  const percentage = (amountRaised / TARGET_AMOUNT) * 100;
  const formattedAmount = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amountRaised);

  const formattedTarget = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(TARGET_AMOUNT);

  return (
    <div className="min-h-screen bg-gradient-to-br from-mosque-dark via-mosque-burgundy to-red-950 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.img
            src={logo}
            alt="Quba Mosque Logo"
            className="w-32 h-32 mx-auto mb-6 brightness-0 invert"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Purchase of Masjid Quba Leicester
          </h1>
          <p className="text-xl md:text-2xl text-mosque-gold">
            Help us purchase our mosque
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-mosque-gold/50"
        >
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-sm md:text-base text-gray-800 mb-1">Amount Raised</p>
                <p className="text-3xl md:text-5xl font-bold text-mosque-burgundy">
                  {formattedAmount}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-right"
              >
                <p className="text-sm md:text-base text-gray-800 mb-1">Target</p>
                <p className="text-2xl md:text-4xl font-bold text-gray-800">
                  {formattedTarget}
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative h-8 md:h-12 bg-amber-900 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(percentage, 100)}%` }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-orange-500 via-mosque-gold to-yellow-500 rounded-full relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-white font-bold text-lg md:text-2xl drop-shadow-lg"
                >
                  {percentage.toFixed(1)}%
                </motion.span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center"
          >
            <p className="text-gray-950 text-lg md:text-xl mb-6">
              Every contribution brings us closer to our goal
            </p>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block"
            >
              <p className="text-mosque-burgundy text-2xl md:text-3xl font-bold">
                JazakAllahu Khairan
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center mt-6"
        >
          <p className="text-white/60 text-sm">
            May Allah bless all our donors
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-center mt-[100vh]"
        >
          <motion.button
            onClick={() => navigate('/admin')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white/70 hover:text-white rounded-lg border border-white/20 transition-all text-sm font-medium"
          >
            Admin Panel
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FundraiserScreen;
