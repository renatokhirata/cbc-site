import { Stack, Typography } from '@mui/material';
import InfoItem from './InfoItem';
import { InfoResume } from '../../../interfaces/Info/Info';

interface InfoItemsListProps {
  infoList: InfoResume[];
}

const InfoItemsList: React.FC<InfoItemsListProps> = ({ infoList }) => {
  return (
    <Stack
      spacing={6}
      width="100%"
      alignItems={'center'}
      justifyContent={'center'}
    >
      {infoList.length > 0 ? (
        infoList.map((info) => <InfoItem info={info} key={info.id} />)
      ) : (
        <Typography variant="h5" fontWeight={100} color="typeText.default">
          Nenhuma informação disponível.
        </Typography>
      )}
    </Stack>
  );
};

export default InfoItemsList;
