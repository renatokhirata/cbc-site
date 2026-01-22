import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { pageService } from '../services';
import { modalitiesNavigation } from '../../../shared/constants/navigation';
import useBanner from '../hooks/useBanner';
import ModalitiesHeader from './Header/ModalitiesHeader';

export default function ModalitiesLayout() {
  const { slug } = useParams<{ slug: string }>();
  const { setBanners } = useBanner();
  const navigate = useNavigate();

  useEffect(() => {
    if (!slug) {
      navigate(`${modalitiesNavigation.navigationItems[0].href}`);
    }
  }, [slug, navigate]);

  useEffect(() => {
    const loadBanner = async () => {
      try {
        const path = slug ? `/modalidades/${slug}` : '/modalidades';
        const data = await pageService.getPageData(path);
        setBanners({
          banner: data?.banner || '',
          mobileBanner: data?.mobileBanner || '',
        });
      } catch (error) {
        console.error('Error fetching page data:', error);
      }
    };

    loadBanner();
  }, [slug, setBanners]);

  return (
    <>
      <ModalitiesHeader />
      <Outlet />
    </>
  );
}
