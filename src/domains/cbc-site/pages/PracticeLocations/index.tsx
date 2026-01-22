import { Container, Stack } from '@mui/material';
import cyclingTrack from '../../../../assets/images/cyclingTrackModalities.svg';
import mountainImage from '../../../../assets/images/montain.svg';
import PracticeLocation from './components/PracticeLocation';
import NavigationDisplay from './components/NavigationDisplay';
import InteractiveMap from './components/InteractiveMap';
import TextContent from '../../components/TextContent';
import SubHeaderPracticeLocations from './components/Header/SubHeaderPracticeLocations';
import useBreakpoint from '../../hooks/useBreakpoint';

const PracticeLocations = () => {
  const isMobile = useBreakpoint('md');
  return (
    <>
      <SubHeaderPracticeLocations />
      <Stack alignItems={'center'} pb={4} spacing={4}>
        {isMobile && (
          <PracticeLocation
            img={mountainImage}
            title="Rodovia Caminho do Mar"
          />
        )}

        <Container
          maxWidth="xl"
          sx={{ pt: 4, display: { xs: 'none', md: 'block' } }}
        >
          <NavigationDisplay />
        </Container>

        {!isMobile && (
          <PracticeLocation
            img={mountainImage}
            title="Rodovia Caminho do Mar"
          />
        )}

        <Container maxWidth="xl">
          <Stack spacing={4}>
            <TextContent
              content="
                Também chamada de Estrada Velha de Santos, a Rodovia Caminho do Mar está sempre cheia de ciclistas aos finais de semana. Por esse motivo, eles são bastante respeitados pelos carros, o que torna o local seguro para a prática do ciclismo."
              marginBottom={0}
            />
            <TextContent
              content=" A estrada recebe crianças, atletas profissionais e amadores e possui uma paisagem agradável com bastante verde e a represa Billings. Com 9km de percurso, ela fica em São Bernardo do Campo, começando perto da Estância Alto da Serra e terminando próximo ao pouso de Paranapiacaba."
              marginBottom={0}
            />
            <InteractiveMap />
            <TextContent
              content=" A estrada recebe crianças, atletas profissionais e amadores e possui uma paisagem agradável com bastante verde e a represa Billings. Com 9km de percurso, ela fica em São Bernardo do Campo, começando perto da Estância Alto da Serra e terminando próximo ao pouso de Paranapiacaba."
              marginBottom={0}
            />
          </Stack>
        </Container>

        <PracticeLocation
          img={cyclingTrack}
          title="Ciclovia do Rio Pinheiros"
        />

        <Container maxWidth="xl">
          <Stack spacing={4}>
            <TextContent
              content=" Também chamada de Estrada Velha de Santos, a Rodovia Caminho do Mar está sempre cheia de ciclistas aos finais de semana. Por esse motivo, eles são bastante respeitados pelos carros, o que torna o local seguro para a prática do ciclismo."
              marginBottom={0}
            />
            <TextContent
              content=" A estrada recebe crianças, atletas profissionais e amadores e possui uma paisagem agradável com bastante verde e a represa Billings. Com 9km de percurso, ela fica em São Bernardo do Campo, começando perto da Estância Alto da Serra e terminando próximo ao pouso de Paranapiacaba."
              marginBottom={0}
            />
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default PracticeLocations;
