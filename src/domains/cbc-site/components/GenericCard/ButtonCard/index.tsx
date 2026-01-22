/* eslint-disable @typescript-eslint/no-explicit-any */
import GenericCard from '..';
import ListButtons from './ListButton';

interface IButtonCardProps {
  icon: string;
  title: string;
  description: string;
  data: any[];
  onClick: () => void;
}

const ButtonCard: React.FC<IButtonCardProps> = ({
  icon,
  description,
  title,
  onClick,
  data,
}) => {
  return (
    <GenericCard
      type="button"
      icon={icon}
      title={title}
      description={description}
      onButtonClick={onClick}
    >
      <ListButtons buttons={data} />
    </GenericCard>
  );
};

export default ButtonCard;
