import { Stack } from '@mui/material';
import ModalityInfoItem from './components/ModalityInfoItem';
import { ModalityInfo } from '../../../../interfaces/Modality/IModality';

const ModalityInfoList = ({ infoList }: { infoList: ModalityInfo[] }) => {
  return (
    <Stack spacing={6} sx={{ flex: 1 }}>
      {infoList.map((info) => (
        <ModalityInfoItem info={info} key={info.infoId} />
      ))}
    </Stack>
  );
};

export default ModalityInfoList;
