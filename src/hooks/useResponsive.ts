import { useState, useEffect } from 'react';

export function useResponsive() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth > 640 && window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop: !isMobile && !isTablet,
  };
}

export function useResponsiveGridColumns(desktopCol: string, tabletCol?: string, mobileCol?: string) {
  const { isMobile, isTablet } = useResponsive();

  if (isMobile) return mobileCol || '1fr';
  if (isTablet) return tabletCol || desktopCol;
  return desktopCol;
}
