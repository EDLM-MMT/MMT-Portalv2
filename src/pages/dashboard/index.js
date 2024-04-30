import DefaultLayout from '@/components/layouts/DefaultLayout';
import ServiceMemberDashboard from '@/pages/dashboard/serviceMember/serviceMemberDashboard'
import ProgramAdminDashboard from './programAdmin/programAdminDashboard';
import useStore from '@/store/store';
import ESODashboard from './eso/esoDashboard';
import ExecStakeholderDashboard from './execStakeholder/execStakeholderDashboard';

export default function Dashboard() {
  const userData = useStore((state) => state.userData);

  return (
    <DefaultLayout>
      {userData?.role === 'Service Member' && <ServiceMemberDashboard />}
      {userData?.role === 'Program Administrator' && <ProgramAdminDashboard />}
      {userData?.role === 'ESO' && <ESODashboard />}
      {userData?.role === 'Executive Stakeholder' && <ExecStakeholderDashboard/>}
    </DefaultLayout>
  );
}
