import DefaultLayout from '@/components/layouts/DefaultLayout';
import BranchPersonnelData from '@/components/cards/execStakeholder/BranchPersonnelData';

export default function CoastGuardPersonnel() {

    return (
      <DefaultLayout>
            <BranchPersonnelData title={"Coast Guard Personnel Data"}
                chartLabels={["E-2", "E-3", "E-4", "E-5", "E-6", "E-7", "E-8", "E-9", "O-3"]}
                avgData={[18, 286, 652, 1353, 1992, 2881, 2925, 2496, 61]}
                personData={[26, 804, 3819, 3956, 2555, 1486, 214, 158, 2]}
                creditsData={[234, 4371, 54751, 93797, 91642, 71462, 14791, 12142, 61]} />
      </DefaultLayout>
    );
}
