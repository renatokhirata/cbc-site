import { Box, Typography } from '@mui/material';

interface YearDividerProps {
  year: number | string;
}

export const YearDivider: React.FC<YearDividerProps> = ({ year }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      mt={{ xs: 0.5, sm: 2 }}
      ml={{ xs: 0, md: -6, lg: -8 }}
      flex={1}
    >
      <Typography
        variant="h6"
        fontSize={{ xs: '.8rem' }}
        fontWeight={400}
        color="#6B6B6B"
        mr={1}
      >
        {year}
      </Typography>
      <Box flex={1} height="1px" bgcolor="#B8B8B8" width="100%" />
    </Box>
  );
};
