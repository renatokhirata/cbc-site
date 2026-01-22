import { Box, Container, Grid, Stack } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import ethicsIcon from '../../../../assets/icons/ethicsIcon.svg';
import ethicsOfficeMain from '../../../../assets/images/pages/ethicsOffice/ethics-office-main.svg';
import ColoredTitle from '../../components/ColoredTitle';
import TextContent from '../../components/TextContent';
import PaperDocument from './components/PaperDocument';
import InfoEthicsCardGrid from './components/InfoEthicsCardGrid';
import CarouselSection from '../Comunication/components/MediaGalleryHighResolution/CarouselSection';
import EthicsCarousel from './components/EthicsCarousel';
import { companiesCarouselData } from '../../../../shared/constants/navigation';
import Document from '../../components/Modal/Documents/ListDocumentModal/DocumentModal';
import SectionWithViewMore from './components/SectionWithViewMore';
import { useGetGallery } from '../../hooks/use-get-gallery';
import { documents } from '../../../../shared/constants/documents';

const EthicsOfficePage = () => {
  const { data: gallery = [], isLoading: loading } = useGetGallery();

  if (loading) return 'Loading...';

  const textContent =
    'A <strong>ÁREA DE ÉTICA</strong> e <strong>INTEGRIDADE</strong> é o canal de acesso para ouvir relatos sobre violações ao nosso Código de Ética, o qual regula o comportamento, as relações profissionais e comerciais envolvendo o ciclismo e seus atores, como os membros de comissões técnicas e atletas de seleções nacionais, árbitros, dirigentes, funcionários de quaisquer níveis hierárquicos e estagiários que estejam sob a jurisdição da CBC, bem como as pessoas naturais e jurídicas que com ela direta ou indiretamente contratem e/ou se relacionem.\n\n  Este espaço está aberto ao público, não importa a condição de participação na modalidade ou apenas torcedores. \n\n Se você deseja narrar ou relatar fatos que constituam fraudes, subornos, abusos, assédios, doping, manipulações de resultados e outros tipos de violações aos princípios e valores contidos no referido Código de Ética, poderá preencher os formulários disponibilizados neste site.\n\n Os relatos serão levados ao conhecimento do Comitê de Ética e Integridade da CBC, instância autônoma e externa da CBC, com poderes para acolher, orientar, responder consultas, investigar e aplicar as devidas sanções às pessoas vinculadas ao Código de Ética e Integridade da CBC.';

  const paperDocuments: { icon: string; title: string }[] = [
    {
      icon: '/assets/icons/guide.svg',
      title: 'Guia Integridade 2025',
    },
  ];

  const papers: {
    title: string;
    documents: { icon: string; title: string }[];
  }[] = [
    {
      title: 'GUIA INFORMATIVO<br/>DE INTEGRIDADE - CBC 2025',
      documents: paperDocuments,
    },
    { title: 'ANTIDOPING<br/>GUIA DO ATLETA', documents: paperDocuments },
    { title: 'ANTIDOPING<br/>NO ESPORTE', documents: paperDocuments },
    {
      title: 'PROGRAMA DE ÉTICA<br/>E INTEGRIDADE 2019',
      documents: paperDocuments,
    },
    { title: 'CÓDIGO DE ÉTICA<br/>CBC 2018', documents: paperDocuments },
    { title: 'GUIA MEDICINA<br/>DO ESPORTE', documents: paperDocuments },
    { title: 'GUIA MEDICINA<br/>DO ESPORTE', documents: paperDocuments },
    { title: 'GUIA MEDICINA<br/>DO ESPORTE', documents: paperDocuments },
  ];

  return (
    <Stack spacing={{ xs: 0, md: 8 }} alignItems={'center'} py={6}>
      <PageHeader title="Central de Ética" icon={ethicsIcon} />
      <Grid container spacing={{ xs: 2, md: 4, lg: 0 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={ethicsOfficeMain}
            alt="Ethics Office Main"
            width={{ xs: '100%', lg: '97%' }}
            height={{ xs: 200, sm: 300, md: '100%', lg: 700 }}
            sx={{ objectFit: 'cover' }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack height={'100%'} px={{ xs: 3, md: 0 }}>
            <Box width={{ xs: 280, sm: '100%', md: 430 }} mb={2}>
              <ColoredTitle
                title="Área Exclusiva de Ética e Integridade"
                color="typeText.tertiary"
              />
            </Box>
            <Box pr={{ xs: 0, md: 10, lg: 16 }}>
              <TextContent content={textContent} />
            </Box>
          </Stack>
        </Grid>
      </Grid>

      <Container maxWidth="xl" sx={{ py: 6, overflow: 'hidden' }}>
        <InfoEthicsCardGrid />

        {/* Seção de Publicações */}
        <SectionWithViewMore
          title="Publicações"
          onViewMore={() => {}}
          gradientSpacing={{ xs: 40, sm: 30, md: 50, lg: 40 }}
        >
          <Grid container spacing={2} justifyContent="center">
            {papers.slice(0, 6).map((paper, idx) => (
              <Grid key={idx} size={{ xs: 12, md: 6 }}>
                <PaperDocument title={paper.title} document={paper.documents} />
              </Grid>
            ))}
          </Grid>
        </SectionWithViewMore>

        <CarouselSection
          title="Videos"
          galleryItems={gallery}
          withDescription
          onClick={() => {}}
        />
        <Stack spacing={4} mt={4}>
          <Box textAlign={'left'} width="100%" mb={4}>
            <ColoredTitle title="Campanhas" color="typeText.tertiary" />
          </Box>
          <EthicsCarousel carouselItems={companiesCarouselData} />
        </Stack>

        {/* Seção de Documentos importantes */}
        <SectionWithViewMore
          title="Documentos importantes"
          mobileTitle="Arquivos para download:"
          onViewMore={() => {}}
        >
          <Grid container spacing={2} justifyContent="center">
            {documents.slice(0, 6).map((doc, idx) => (
              <Grid key={idx} size={{ xs: 12, md: 6 }}>
                <Document
                  key={doc.id ?? idx}
                  title={doc.name}
                  date={doc.date || ''}
                />
              </Grid>
            ))}
          </Grid>
        </SectionWithViewMore>
      </Container>
    </Stack>
  );
};

export default EthicsOfficePage;
