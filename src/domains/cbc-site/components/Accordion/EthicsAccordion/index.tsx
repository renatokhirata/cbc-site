import { Box, Typography } from '@mui/material';
import Accordion from '..';

interface EthicsAccordionProps {
  summaryName: string;
  details: string;
}

const EthicsAccordion = ({ summaryName, details }: EthicsAccordionProps) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          border: '2px solid #5CB5AF',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Accordion
          defaultExpanded={false}
          slotProps={{ transition: { unmountOnExit: true } }}
          expandMoreColor="customBackground.tertiary"
          sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}
          summarySx={{
            bgcolor: 'customBackground.primary',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            '& .MuiAccordionSummary-content.Mui-expanded': {
              margin: 0,
            },
          }}
          detailsSx={{
            bgcolor: 'customBackground.tertiary',
            borderRadius: 0,
          }}
          summary={
            <Typography
              variant={'body1'}
              fontWeight={700}
              color={'typeText.tertiary'}
            >
              {summaryName}
            </Typography>
          }
          details={
            <Typography
              variant={'body1'}
              fontSize={{ xs: 16, md: 20 }}
              fontWeight={400}
              color={'typeText.primary'}
              sx={{ m: 0, minHeight: '120px', whiteSpace: 'pre-line' }}
            >
              {details}
            </Typography>
          }
        />
      </Box>
    </Box>
  );
};

export default EthicsAccordion;
