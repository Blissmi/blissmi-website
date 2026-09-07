import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { GOLD } from './theme';

export function Btn({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ opacity: 0.88, scale: 1.02 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="rounded-full px-8 py-4 cursor-pointer"
      style={{ backgroundColor: GOLD, color: '#fff', fontSize: '16px', fontWeight: 500 }}
    >
      {children}
    </motion.button>
  );
}
