import { Stack } from '@mui/material';
import DropdownHeader from '../../../Modalities/components/DropdownHeader';

interface MediaControllerProps {
  slug: string;
}

const MediaRighResolutionController = ({ slug }: MediaControllerProps) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      bgcolor={'button.default'}
      height={82}
      pl={{ xs: 2, md: 5 }}
    >
      <DropdownHeader slug={slug} />
    </Stack>
  );
};

export default MediaRighResolutionController;
