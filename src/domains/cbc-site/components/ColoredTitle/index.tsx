import { Box, Typography, TypographyProps } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import rehypeRaw from 'rehype-raw';
interface ColoredTitleProps extends TypographyProps {
  title: string;
  strongColor?: string;
}

const ColoredTitle: React.FC<ColoredTitleProps> = ({
  title,
  strongColor,
  ...props
}) => {
  const { fontSize, fontWeight, ...restProps } = props;

  const safeTitle = title.replace(/^(\d+)\)\s/, '$1\\) ');

  return (
    <Typography
      {...restProps}
      fontWeight={fontWeight ? fontWeight : 700}
      fontSize={fontSize ?? { xs: '24px', md: '36px' }}
      lineHeight={1.2}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, remarkBreaks]}
        components={{
          p: ({ ...props }) => <Box component="span" {...props} />,
          strong: ({ ...props }) => (
            <Box
              component="strong"
              sx={{
                fontWeight: 700,
                color: strongColor ?? 'inherit',
              }}
              {...props}
            />
          ),
        }}
      >
        {safeTitle.trim()}
      </ReactMarkdown>
    </Typography>
  );
};

export default ColoredTitle;
