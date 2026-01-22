import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '../domains/cbc-site/layouts';
import UnderConstruction from '../domains/cbc-site/components/UnderConstruction';
import Institutional from '../domains/cbc-site/pages/Institutional';
import ModalitiesLayout from '../domains/cbc-site/layouts/ModalitiesLayout';
import PracticeLocations from '../domains/cbc-site/pages/PracticeLocations';
import EventDetails from '../domains/cbc-site/pages/EventDetails';
import GalleryPage from '../domains/cbc-site/pages/Gallery';
import DocumentPage from '../domains/cbc-site/pages/Documents';
import ComunicationPage from '../domains/cbc-site/pages/Comunication';
import News from '../domains/cbc-site/pages/News';
import NewsDetails from '../domains/cbc-site/pages/NewsDetails';
import Federations from '../domains/cbc-site/pages/Federations';
import Contact from '../domains/cbc-site/pages/Contact';
import ModalityContent from '../domains/cbc-site/pages/Modalities';
import Ombudsman from '../domains/cbc-site/pages/Ombudsman';
import GovernancePage from '../domains/cbc-site/pages/Governance';
import EthicsChannel from '../domains/cbc-site/pages/EthicsChannel';
import EthicsOfficePage from '../domains/cbc-site/pages/EthicsOffice';
import HomePage from '../domains/cbc-site/pages/Home';
import AntidopingPage from '../domains/cbc-site/pages/Antidoping';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'institucional',
        element: <Institutional />,
      },
      {
        path: 'modalidades',
        element: <ModalitiesLayout />,
        children: [
          {
            index: true,
            element: <ModalityContent />,
          },
          {
            path: ':slug',
            element: <ModalityContent />,
          },
          {
            path: ':slug/eventos/:id',
            element: <EventDetails />,
          },
        ],
      },
      {
        path: 'imprensa',
        element: <ComunicationPage />,
      },
      {
        path: 'imprensa/noticias',
        element: <News />,
      },
      {
        path: 'imprensa/noticias/:id',
        element: <NewsDetails />,
      },
      {
        path: 'canal-de-etica',
        element: <EthicsChannel />,
      },
      {
        path: 'locais-de-pratica',
        element: <PracticeLocations />,
      },
      {
        path: 'modalidades/galeria/:id',
        element: <GalleryPage />,
      },
      { path: 'documentos', element: <DocumentPage /> },

      { path: 'federacoes', element: <Federations /> },
      {
        path: 'comunicacao',
        element: <ComunicationPage />,
      },
      { path: 'contato', element: <Contact /> },
      { path: 'governanca', element: <GovernancePage /> },
      { path: 'central-de-etica', element: <EthicsOfficePage /> },

      { path: 'antidoping', element: <AntidopingPage /> },
      { path: 'ouvidoria', element: <Ombudsman /> },
      { path: 'stjd', element: <UnderConstruction title="STJD" /> },
      { path: 'abcd', element: <UnderConstruction title="ABCD" /> },
      { path: 'wada', element: <UnderConstruction title="WADA" /> },
      {
        path: 'educacao-e-pesquisa',
        element: <UnderConstruction title="Educação e Pesquisa" />,
      },
      {
        path: 'transparencia',
        element: <UnderConstruction title="Transparência" />,
      },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
