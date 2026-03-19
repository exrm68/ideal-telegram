import React from 'react';
import { motion } from 'framer-motion';
import { Send, Clock, Wrench } from 'lucide-react';

interface MaintenanceScreenProps {
  channelLink?: string;
  message?: string;
  startTime?: string;
  endTime?: string;
  appName?: string;
}

const MaintenanceScreen: React.FC<MaintenanceScreenProps> = ({
  channelLink = 'https://t.me/cineflixrequestcontent',
  message = 'আমাদের সার্ভার আপডেট চলছে। শীঘ্রই ফিরে আসছি!',
  startTime = '',
  endTime = '',
  appName = 'Cineflix',
}) => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{ background: '#0d0d10' }}>

      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[120px] opacity-20"
        style={{ background: 'radial-gradient(circle, #FFD700, transparent)' }} />

      {/* Animated gear */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="relative z-10 mb-8"
      >
        <div className="w-24 h-24 rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,215,0,0.05))', border: '2px solid rgba(255,215,0,0.2)' }}>
          <Wrench size={40} className="text-yellow-400" />
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 font-brand text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold text-center mb-3"
        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.1em' }}
      >
        {appName}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 text-center mb-6"
      >
        <p className="text-amber-400 font-black text-lg mb-1">🔧 আপডেট চলছে...</p>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">{message}</p>
      </motion.div>

      {/* Time info */}
      {(startTime || endTime) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative z-10 w-full max-w-xs bg-white/5 border border-white/8 rounded-2xl p-4 mb-6 flex items-center gap-4"
        >
          <Clock size={20} className="text-amber-400 flex-shrink-0" />
          <div>
            {startTime && (
              <p className="text-white text-sm font-bold">শুরু: <span className="text-amber-300">{startTime}</span></p>
            )}
            {endTime && (
              <p className="text-white text-sm font-bold">শেষ: <span className="text-emerald-300">{endTime}</span></p>
            )}
          </div>
        </motion.div>
      )}

      {/* Channel button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        onClick={() => window.open(channelLink, '_blank')}
        className="relative z-10 w-full max-w-xs py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3"
        style={{
          background: 'linear-gradient(135deg, #0088cc, #006699)',
          boxShadow: '0 4px 20px rgba(0,136,204,0.35)',
          color: '#fff',
        }}
        whileTap={{ scale: 0.97 }}
      >
        <Send size={18} />
        আমাদের Channel এ যোগ দিন
        <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">আপডেট পাবেন</span>
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="relative z-10 text-zinc-600 text-xs mt-4 text-center"
      >
        সব ঠিক হলে এই screen আপনাআপনি চলে যাবে
      </motion.p>

      {/* Bottom dots animation */}
      <div className="absolute bottom-10 flex gap-2">
        {[0, 1, 2].map(i => (
          <motion.div key={i}
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }}
            className="w-2 h-2 bg-gold rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default MaintenanceScreen;
