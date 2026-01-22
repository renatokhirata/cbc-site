import { Box, Container, Grid } from '@mui/material';
import { InfoResume } from '../../../interfaces/Info/Info';
import defaultIcon from '../../../../../assets/icons/iconDocument.png';
import { DocumentCard } from '../../../components/GenericCard/DocumentCard';
import { useState } from 'react';
import { DocumentModal } from '../../../components/Modal/Documents';
import ListDocumentsModal from '../../../components/Modal/Documents/ListDocumentModal';
import ButtonCard from '../../../components/GenericCard/ButtonCard';

interface DocumentCardsListProps {
  infos: InfoResume[];
}

export const DocumentCardsList: React.FC<DocumentCardsListProps> = ({
  infos,
}) => {
  const [openId, setOpenId] = useState<string | number | null>(null);

  return (
    <Box sx={{ my: 4 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {infos.map((info, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6 }}
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {info.buttons ? (
                <ButtonCard
                  icon={info.icon || defaultIcon}
                  title={info.title}
                  description={
                    info.content ?? info.description ?? info.subtitle ?? ''
                  }
                  onClick={() => {}}
                  data={info.buttons.map((btn) => ({
                    id: btn.id,
                    label: btn.label,
                  }))}
                />
              ) : (
                <DocumentCard
                  icon={info.icon || defaultIcon}
                  title={info.title}
                  description={
                    info.content ?? info.description ?? info.subtitle ?? ''
                  }
                  document={info.documents ?? []}
                  onLoadDocuments={() => setOpenId(info.id)}
                />
              )}

              {/* Modal (funciona para ambos os tipos) */}
              <DocumentModal
                title={info.title}
                icon={info.icon || defaultIcon}
                open={openId === info.id}
                onClose={() => setOpenId(null)}
                members={info.members?.map((m) => m.name).join(', ') || ''}
                council={info.council?.map((c) => c.name).join(', ') || ''}
                description={
                  info.content ?? info.description ?? info.subtitle ?? ''
                }
                representative={
                  info.representative?.map((r) => r.name).join(', ') || ''
                }
              >
                <ListDocumentsModal document={info.documentsByYear ?? []} />
              </DocumentModal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
