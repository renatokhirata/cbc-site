/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  Select,
  MenuItem,
  styled,
  FormHelperText,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Controller, Control } from 'react-hook-form';

const DEPARTMENTS = [
  'Antidoping',
  'BMX',
  'Bolsa Atleta',
  'Cadastro/Transferências/Declarações/Licenças',
  'Calendário/Ranking',
  'Financeiro',
  'Imprensa',
  'Jurídico/Recursos',
  'Parcerias',
  'Paralímpico',
  'Presidência',
  'Regulamento/Normas',
  'Outros',
];

const StyledMenuItem = styled(MenuItem, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected?: boolean }>(({ theme, selected }) => ({
  fontSize: '16px',
  padding: '12px 16px',
  color: selected ? '#FFFFFF' : theme.palette.button.default,
  backgroundColor: selected ? theme.palette.typeText.tertiary : 'transparent',
  '&:hover': {
    backgroundColor: selected
      ? theme.palette.typeText.tertiary
      : 'rgba(109, 179, 184, 0.1)',
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.typeText.tertiary,
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: theme.palette.typeText.tertiary,
    },
  },
}));

interface DepartmentSelectProps {
  control: Control<any>;
  error?: string;
}

const DepartmentSelect = ({ control, error }: DepartmentSelectProps) => {
  return (
    <Controller
      name="department"
      control={control}
      render={({ field }) => (
        <FormControl fullWidth error={!!error}>
          <Select
            {...field}
            id="department-select"
            displayEmpty
            IconComponent={KeyboardArrowDownIcon}
            renderValue={(selected) => {
              if (!selected) {
                return <span style={{ color: '#999' }}>Departamento</span>;
              }
              return selected;
            }}
            MenuProps={{
              disableScrollLock: true,
              PaperProps: {
                style: {
                  maxHeight: 300,
                  marginTop: 8,
                },
              },
            }}
            sx={{
              backgroundColor: '#FFFFFF',
              fontSize: '16px',
              borderRadius: 2,
              borderColor: error ? 'error.main' : 'button.default',
              height: '56px',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: error ? 'error.main' : 'button.default',
                borderWidth: '2px',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: error ? 'error.main' : 'button.default',
                borderWidth: '2px',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: error ? 'error.main' : 'button.default',
                borderWidth: '2px',
              },
              '& .MuiSelect-select': {
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
              },
              '& .MuiSelect-icon': {
                color: 'primary.main',
                right: '16px',
              },
            }}
          >
            {DEPARTMENTS.map((department) => (
              <StyledMenuItem
                key={department}
                value={department}
                selected={field.value === department}
              >
                {department}
              </StyledMenuItem>
            ))}
          </Select>
          {error && (
            <FormHelperText error sx={{ ml: 2, mt: 0.5 }}>
              {error}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default DepartmentSelect;
