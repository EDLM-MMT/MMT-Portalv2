import { useRouter } from "next/router"
import ColumnChart from "@/components/charts/ColumnChart";

export default function BranchPersonnelData({ title, chartLabels, avgData, personData, creditsData}){

    const router = useRouter();
    const handleClick = () => {
        router.push("/execStakeholder/personnelData");
    }

    return(
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'> 
            <h1 className='pb-4 border-b mt-4 mb-4 text-3xl font-semibold'>
                {title}
            </h1>
            <div>
              <button onClick={handleClick}
              className='text-dod-500 hover:underline underline hover:text-blue-500 cursor-pointer mb-4 transition-all duration-150 ease-in-out'>                    
              Personnel Data by Branch </button> -{`>`} {title}
            </div>

            <div className='flex flex-row'>
            <div className='bg-white w-1/2 ml-4 border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
                <h1 className='flex flex-row justify-between text-xl items-center font-semibold border-b h-14'>
                    Average Credits Taken by Each Pay Grade
                </h1>
                <div className="mt-8">
                    <ColumnChart labels={chartLabels} 
                        xAxisTitle={"Pay Grade"} yAxisTitle={"Sum of Average Credits"} dataName={"Average Credits"} 
                        data={avgData}/>
                </div>
            </div>

            <div className='bg-white w-1/2 ml-4 border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
                <h1 className='flex flex-row justify-between text-xl items-center font-semibold border-b h-14'>
                   Total Personnel by Pay Grade Enrolled
                </h1>
                <div className="mt-8">
                    <ColumnChart labels={chartLabels} 
                        xAxisTitle={"Pay Grade"} yAxisTitle={"Total Personnel"} dataName={"Personnel Count"} 
                        data={personData}/>
                </div>
            </div>
            </div>

            <div className='bg-white w-1/2 ml-4 mt-10 pr-6 border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
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
    )
}