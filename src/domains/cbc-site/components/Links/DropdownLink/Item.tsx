import { Stack, Link } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useActiveLink from '../../../hooks/useActiveLink';
import { isExternalLink } from '../../../../../shared/utils/navigation';
interface ItemProps {
  item: string;
  to: string;
  hasSubLinks: boolean;
  isOpen: boolean;
  colorHover?: string;
  onToggle: () => void;
  onClick: () => void;
}

const Item = ({
  item,
  to,
  hasSubLinks,
  isOpen,
  colorHover,
  onToggle,
  onClick,
}: ItemProps) => {
  const { isLinkActive, pathname } = useActiveLink();
  const isModalitiesParent = to.startsWith('/modalidades') && hasSubLinks;
  const isExternal = isExternalLink(to);
  const isActive = isModalitiesParent
    ? pathname.startsWith('/modalidades') || isLinkActive(to)
    : isLinkActive(to);

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Link
        onClick={onClick}
        href={to}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        sx={{
          fontSize: { xs: 24, md: 18 },
          fontWeight: isActive ? 600 : 400,
          textDecoration: 'none',
          cursor: 'pointer',
          color: isActive ? colorHover : 'typeText.default',
          '&:hover': {
            textDecoration: 'none',
            color: colorHover || 'linkHover.primary',
          },
        }}
      >
        {item}
      </Link>
      {hasSubLinks && (
        <>
          {isOpen ? (
            <ExpandLess
              onClick={onToggle}
              sx={{
                cursor: 'pointer',
                color: 'typeText.default',
                ':hover': { color: colorHover },
              }}
            />
          ) : (
            <ExpandMore
              onClick={onToggle}
              sx={{
                cursor: 'pointer',
                color: 'typeText.default',
                ':hover': { color: colorHover },
              }}
            />
          )}
        </>
      )}
    </Stack>
  );
};

export default Item;
