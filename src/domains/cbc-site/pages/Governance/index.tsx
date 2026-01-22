import { Stack } from '@mui/material';
import GovernanceHeader from './components/Header';
import PageHeader from '../../components/PageHeader';
import governancaIcon from '../../../../assets/icons/governancaIcon.svg';
import { DocumentCardsList } from './components/DocumentCardList';
import { governanceInfoData } from '../../../../shared/constants/governanceInfoData';

const GovernancePage = () => {
  return (
    <Stack>
      <PageHeader title={'Governança'} icon={governancaIcon} />
      <GovernanceHeader />
      <DocumentCardsList infos={governanceInfoData || []} />
    </Stack>
  );
};

export default GovernancePage;
