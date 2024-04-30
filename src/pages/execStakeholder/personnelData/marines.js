import DefaultLayout from '@/components/layouts/DefaultLayout';
import BranchPersonnelData from '@/components/cards/execStakeholder/BranchPersonnelData';

export default function MarinePersonnel() {

    return (
      <DefaultLayout>
            <BranchPersonnelData title={"Marine Personnel Data"}
                chartLabels={["E-1", "E-2", "E-3", "E-4", "E-5", "E-6", "E-7", "E-8", "E-9"]}
                avgData={[3131, 4535, 7023, 8538, 13065, 18752, 21491, 10866, 4506]}
                personData={[487, 2315, 12501, 15622, 13632, 9690, 4771, 2107, 518]}
                creditsData={[7640, 45872, 213833, 313677, 382715, 370141, 230267, 104036, 27803]} />
      </DefaultLayout>
    );
}
