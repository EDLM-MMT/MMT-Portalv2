import DefaultLayout from '@/components/layouts/DefaultLayout';
import BarGraphStatisticsViewCard from '@/components/cards/execStakeholder/HorizontalBarGraphStatisticsViewCard';
import DropdownViewCard from '@/components/cards/execStakeholder/DropdownSelectViewCard';

export default function stateEnrollment() {

    const states = ['Florida','Alabama', 'Georgia', 'Maryland'];

    return (
      <DefaultLayout>
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'> 
            <h1 className='pb-4 border-b mt-4 mb-4 text-3xl font-semibold'>
                    State Enrollment Statistics
            </h1>
            <div className="my-8">
                <BarGraphStatisticsViewCard title={"Overall Statistics"} routePath={"/dashboard"}/>
            </div>

            <DropdownViewCard title={"State Statistics"} options={states} width={"full"}/>
        </div>
      </DefaultLayout>
    );
}
