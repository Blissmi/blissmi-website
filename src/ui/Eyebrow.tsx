import { ReactNode } from 'react';
import { GOLD } from './theme';

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className="text-sm font-semibold tracking-widest uppercase mb-5" style={{ color: light ? GOLD : 'rgba(27,48,37,0.45)' }}>
      {children}
    </p>
  );
}
