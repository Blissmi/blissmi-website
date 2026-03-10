// Responsive styles utility for inline styles
export const getResponsiveGridColumns = (isMobile: boolean) => {
  return isMobile ? '1fr' : 'repeat(2, 1fr)';
};

export const getResponsiveGridColumns3 = (isMobile: boolean) => {
  return isMobile ? '1fr' : 'repeat(3, 1fr)';
};

export const getResponsiveGridColumns4 = (isMobile: boolean) => {
  return isMobile ? '1fr' : 'repeat(4, 1fr)';
};

export const getResponsiveFontSize = (isMobile: boolean, desktopSize: string, mobileSize?: string) => {
  return isMobile ? (mobileSize || desktopSize) : desktopSize;
};

export const getResponsivePadding = (isMobile: boolean, desktopPadding: string, mobilePadding?: string) => {
  return isMobile ? (mobilePadding || '2rem 1rem') : desktopPadding;
};

export const getResponsiveGap = (isMobile: boolean, desktopGap: string, mobileGap?: string) => {
  return isMobile ? (mobileGap || '1rem') : desktopGap;
};

export const getResponsiveMaxWidth = (isMobile: boolean) => {
  return isMobile ? 'calc(100% - 2rem)' : '80rem';
};

export const useIsMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
};
