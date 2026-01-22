import React, { createContext, useState, ReactNode } from 'react';

interface BannerContextType {
  banners: { banner: string; mobileBanner: string };
  setBanners: (banner: { banner: string; mobileBanner: string }) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const BannerContext = createContext<BannerContextType | undefined>(
  undefined,
);

interface BannerProviderProps {
  children: ReactNode;
}

export const BannerProvider: React.FC<BannerProviderProps> = ({ children }) => {
  const [banners, setBanners] = useState<{
    banner: string;
    mobileBanner: string;
  }>({ banner: '', mobileBanner: '' });

  return (
    <BannerContext.Provider value={{ banners, setBanners }}>
      {children}
    </BannerContext.Provider>
  );
};
