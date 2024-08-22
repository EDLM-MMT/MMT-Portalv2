import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useRouter } from "next/router"
import ColumnChart from "@/components/charts/ColumnChart";


export default function NavyPersonnel() {

  const router = useRouter();
  const handleClick = () => {
      router.push("/execStakeholder/personnelData");
  }

  const chartLabels=["E-", "E-1", "E-2", "E-3", "E-4", "E-5", "E-6", "E-7", "E-8", "E-9", "O-1", "O-2", "O-3", "O-4", "O-5", "O-6", "W-1", "W-2", "W-3", "W-4", "W-5"]
  const avgData=[20, 896, 1104, 2123, 3564, 5342, 7586, 10623, 12432, 9725, 3715, 3593, 5634, 3959, 1630, 199, 59, 2450, 3062, 2210, 147]
  const personData=[2, 1719, 2474, 17614, 24611, 51771, 31211, 10992, 3298, 938, 305, 382, 1450, 447, 90, 24, 2, 170, 242, 95, 2]
  const creditsData=[20, 16946, 21144, 206502, 484050, 1164227, 983745, 477150, 191448, 66584, 12818, 14507, 40653, 14390, 3021, 403, 59, 9599, 14686, 6384, 147]

    return (
      <DefaultLayout>
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'> 
            <h1 className='pb-4 border-b mt-4 mb-4 text-3xl font-semibold'>
              Navy Personnel Data
            </h1>
            <div>
              <button onClick={handleClick}
              className='text-dod-500 hover:underline underline hover:text-blue-500 cursor-pointer mb-4 transition-all duration-150 ease-in-out'>                    
              Personnel Data by Branch </button> -{`>`} Navy Personnel Data
            </div>

            <div className='bg-white w-full ml-4 border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
                <h1 className='flex flex-row justify-between text-xl items-center font-semibold border-b h-14'>
                    Average Credits Taken by Each Pay Grade
                </h1>
                <div className="mt-8">
                    <ColumnChart labels={chartLabels} 
                        xAxisTitle={"Pay Grade"} yAxisTitle={"Sum of Average Credits"} dataName={"Average Credits"} 
                        data={avgData}/>
                </div>
            </div>

            <div className='bg-white w-full ml-4 border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
                <h1 className='flex flex-row justify-between text-xl items-center font-semibold border-b h-14'>
                   Total Personnel by Pay Grade Enrolled
                </h1>
                <div className="mt-8">
                    <ColumnChart labels={chartLabels} 
                        xAxisTitle={"Pay Grade"} yAxisTitle={"Total Personnel"} dataName={"Personnel Count"} 
                        data={personData}/>
                </div>
            </div>

            <div className='bg-white w-full ml-4 mt-10 pr-6 border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
                <h1 className='flex flex-row justify-between text-xl items-center font-semibold border-b h-14'>
                   Total Credits Taken by Each Pay Grade
                </h1>
                <div className="mt-8">
                    <ColumnChart labels={chartLabels} 
                        xAxisTitle={"Pay Grade"} yAxisTitle={"Total Credits"} dataName={"Total Credits"} 
                        data={creditsData}/>
                </div>
            </div>          
        </div>

      </DefaultLayout>
    );
}
