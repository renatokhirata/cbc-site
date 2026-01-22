import MainButton from '../../../Buttons/MainButton';

interface LoadDocumentButtonProps {
  label: string;
  onClick?: () => void;
  sx?: object;
}

const LoadDocumentButton: React.FC<LoadDocumentButtonProps> = ({
  onClick,
  label,
  sx,
}) => {
  return (
    <MainButton
      onClick={onClick}
      isDark={true}
      sx={{
        backgroundColor: 'typeText.secondary',
        color: 'typeText.primary',
        borderColor: 'typeText.secondary',
        alignSelf: 'flex-start',
        borderRadius: 2,
        ...sx,
      }}
    >
      {label}
    </MainButton>
  );
};

export default LoadDocumentButton;
