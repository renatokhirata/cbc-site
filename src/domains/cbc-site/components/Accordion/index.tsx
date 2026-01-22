import { ExpandMore } from '@mui/icons-material';
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Box,
  SxProps,
  Theme,
} from '@mui/material';
import { ReactNode } from 'react';

interface AccordionProps {
  summary: ReactNode;
  details: ReactNode;
  actions?: ReactNode;
  defaultExpanded?: boolean;
  slotProps?: {
    transition?: {
      unmountOnExit?: boolean;
    };
  };
  sx?: SxProps<Theme>;
  summarySx?: SxProps<Theme>;
  detailsSx?: SxProps<Theme>;
  actionsSx?: SxProps<Theme>;
  expandMoreColor?: string;
}

export default function Accordion({
  summary,
  details,
  actions,
  defaultExpanded = false,
  slotProps = { transition: { unmountOnExit: true } },
  sx,
  summarySx,
  detailsSx,
  actionsSx,
  expandMoreColor,
}: AccordionProps) {
  return (
    <Box>
      <MuiAccordion
        defaultExpanded={defaultExpanded}
        slotProps={slotProps}
        sx={sx}
        disableGutters
        elevation={0}
      >
        <AccordionSummary
          expandIcon={<ExpandMore sx={{ color: expandMoreColor ?? 'white' }} />}
          aria-controls="accordion-content"
          id="accordion-header"
          sx={summarySx}
        >
          {summary}
        </AccordionSummary>
        <AccordionDetails sx={detailsSx}>{details}</AccordionDetails>
        {actions && (
          <AccordionActions sx={actionsSx}>{actions}</AccordionActions>
        )}
      </MuiAccordion>
    </Box>
  );
}
