import DefaultLayout from '@/components/layouts/DefaultLayout';
import VerticalBarGraphStatisticsViewCard from '@/components/cards/execStakeholder/VerticalBarGraphCard';
import BarChart from '@/components/charts/BarChart';
import DateRangeViewCard from '@/components/cards/execStakeholder/DateRangeViewCard';
import Dropdown from '@/components/dropdowns/Dropdown';
import { useState } from 'react';

export default function UniversityEnrollment() {

    const years = ['2019','2020', '2021', '2022'];

    const [graph, setGraph] = useState("Personnel Percent");

    
    const onChange = (e) => {
      if(e.target.value === "Personnel Percent"){
        setGraph("Personnel Percent")
      } else{
        setGraph("Total Personnel")
      }
    }

    return (
      <DefaultLayout>
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'> 
            <h1 className='pb-4 border-b mt-4 mb-4 text-3xl font-semibold'>
                    University Enrollment Statistics
            </h1>
            <div className="flex flex-row justify-between my-8">
                <DateRangeViewCard title={"Overall Statistics"} options={years} width={"1/2"}/>
                <VerticalBarGraphStatisticsViewCard title={"Active Service Members Enrolled"} routePath={"/dashboard"}/>
            </div>
            <div className='bg-white w-full border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
              <h1 className='flex flex-row justify-between text-med font-semibold border-b  h-10'>
                Institute Statistics
                <div>
                  <div className='font-medium'> <b className="pr-4">Display:</b>
                    <Dropdown options={["Personnel Percent", "Total Personnel"]} keyName={"Display"} initialValue={"Personnel Percent"} onChange={onChange} />
                  </div> 
                </div>
              </h1>
              <div className="mt-4">
              {(graph === "Total Personnel") && <BarChart chartTitle={"Total Personnel Distribution by University Enrollment"} xAxisTitle={"Number of Personnel"} />}
              {(graph === "Personnel Percent") && <BarChart chartTitle={"Personnel Status Percent Distribution by University"} xAxisTitle={"Personnel Percentage"} stackType={'100%'}/>}
              </div>
            </div>
        </div>
      </DefaultLayout>
    );
}
