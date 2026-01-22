import React, { useEffect, useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Link,
  SxProps,
  Theme,
} from '@mui/material';
import MainButton from '../../../../components/Buttons/MainButton';

interface LockedAreaProps {
  open: boolean;
  onUnlock: (password?: string) => void;
  children: React.ReactNode;
  overlaySx?: SxProps<Theme>;
  paperSx?: SxProps<Theme>;
}

const LockedArea: React.FC<LockedAreaProps> = ({
  open,
  onUnlock,
  children,
  overlaySx,
  paperSx,
}) => {
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onUnlock();
        setPassword('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onUnlock]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (password.trim().length > 0) {
      onUnlock(password.trim());
      setPassword('');
    }
  };

  return (
    <Box sx={{ position: 'relative' }}>
      {open && (
        <Box
          aria-hidden={!open}
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(0,0,0,0.45)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'auto',
            width: '100%',
            height: '100%',
            paddingBottom: 2,
            ...((overlaySx as object) || {}),
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              onUnlock();
              setPassword('');
            }
          }}
        >
          <Paper
            elevation={8}
            component="form"
            onSubmit={handleSubmit}
            onClick={(event) => event.stopPropagation()}
            sx={{
              width: '76%',
              height: '94%',
              bgcolor: 'customBackground.primary',
              borderRadius: 2,
              p: { xs: 3, md: 6 },
              boxShadow: `0 6px 18px rgba(0,0,0,0.25)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              ...((paperSx as object) || {}),
            }}
          >
            {/* central content box: max width matches design, items left-aligned inside */}
            <Box
              width="100%"
              maxWidth={500}
              m="auto"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              gap={2}
            >
              <Typography
                variant="body2"
                color="typeText.secondary"
                fontSize={'1.1rem'}
                alignSelf="flex-start"
              >
                Use sua senha de acesso
              </Typography>

              <TextField
                placeholder="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                size="medium"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    paddingY: 0.2,
                    '& fieldset': {
                      borderColor: '#2578A8',
                      borderWidth: 2,
                    },
                    '&:hover fieldset': {
                      borderColor: '#2578A8',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#2578A8 ',
                    },
                  },
                }}
              />

              <MainButton label="Acessar" onClick={handleSubmit} isDark />
              <Typography
                variant="caption"
                color="typeText.secondary"
                fontSize={'1.1rem'}
                alignSelf="flex-start"
              >
                Caso não tenha uma senha de acesso, entre em contato:{' '}
                <Link
                  href="mailto:imprensa@cbc.esp.br"
                  fontWeight={700}
                  underline="hover"
                >
                  imprensa@cbc.esp.br
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Box>
      )}
      {children}
    </Box>
  );
};

export default LockedArea;
