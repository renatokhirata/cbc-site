import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';

interface CheckboxProps {
  value: string;
  label: string;
  onClick?: (value: string) => void;
  selected?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  value,
  label,
  onClick,
  selected = false,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(value);
    }
  };

  return (
    <FormControlLabel
      value={value}
      control={
        <MuiCheckbox
          checked={selected}
          onClick={handleClick}
          icon={<span />}
          checkedIcon={<span />}
          sx={{
            width: 24,
            height: 24,
            border: '2px solid #E1EBF7',
            borderRadius: '0px',
            marginRight: 1,
            '&.Mui-checked::after': {
              content: '""',
              position: 'absolute',
              top: 3,
              left: 3,
              right: 3,
              bottom: 3,
              backgroundColor: 'customBackground.tertiary',
            },
          }}
        />
      }
      sx={{
        '& .MuiFormControlLabel-label': {
          color: 'typeText.primary',
        },
      }}
      label={label}
    />
  );
};

export default Checkbox;
