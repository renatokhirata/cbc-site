import { Box, Button as MuiButton } from '@mui/material';
import downloadIcon from '../../../../../assets/icons/downloadIcon.svg';
import { Image } from '@mantine/core';

const DownloadButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
      }}
    >
      <MuiButton
        variant="contained"
        color="primary"
        startIcon={<Image src={downloadIcon} alt="Download" bg="transparent" />}
        sx={{
          width: '100%',
          minHeight: { xs: 56, md: 64 },
          fontWeight: 500,
          textTransform: 'none',
          borderRadius: 2,
          fontSize: { xs: '0.95rem', md: '1rem' },
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'button.default',
          px: { xs: 2.5, md: 3.5 },
          '& .MuiButton-startIcon': {
            marginLeft: 0,
            marginRight: (theme) => theme.spacing(1.5),
          },
        }}
        onClick={onClick}
      >
        {label}
      </MuiButton>
    </Box>
  );
};

export default DownloadButton;
