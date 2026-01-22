import useBreakpoint from '../../hooks/useBreakpoint';
import React, { useState } from 'react';
import MobileNavbar from '../Navbars/MobileNavbar';
import VideoHeader from '../Medias/VideoHeader';
import { useLocation } from 'react-router-dom';
interface MobileHeaderProps {
  children?: React.ReactNode;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useBreakpoint('md');
  const path = useLocation().pathname;
  const modalityRegex = /^\/modalidades\/[^/]+(?:\/)?$/;
  const isModalityPage = modalityRegex.test(path);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isMobile ? (
        <>
          <MobileNavbar
            open={isOpen}
            onOpen={openDrawer}
            onClick={closeDrawer}
          />

          {isModalityPage && <VideoHeader />}
        </>
      ) : (
        children
      )}
    </>
  );
};

export default MobileHeader;
