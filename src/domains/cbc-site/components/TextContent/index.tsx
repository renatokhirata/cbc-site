import { Box, Typography, TypographyProps } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import rehypeRaw from 'rehype-raw';

interface TextContentProps extends TypographyProps {
  content: string;
  /** Cor aplicada a elementos em negrito (<strong> ou **text**) dentro do markdown */
  strongColor?: string;
}

export const TextContent = ({
  content,
  strongColor,
  ...props
}: TextContentProps) => {
  const { marginBottom, fontSize, lineHeight } = props;
  return (
    <Typography
      component={'div'}
      gutterBottom={false}
      className="markdown"
      {...props}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, remarkBreaks]}
        components={{
          p: ({ ...props }) => (
            <Box
              component="div"
              sx={{
                fontSize: fontSize ?? { xs: '16px', md: '20px' },
                lineHeight: lineHeight ?? { xs: '24px', md: '30px' },
                marginBottom:
                  typeof marginBottom === 'string' ||
                  typeof marginBottom === 'number'
                    ? marginBottom
                    : '0.5em',
              }}
              {...props}
            />
          ),
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
        {content.trim()}
      </ReactMarkdown>
    </Typography>
  );
};

export default TextContent;
