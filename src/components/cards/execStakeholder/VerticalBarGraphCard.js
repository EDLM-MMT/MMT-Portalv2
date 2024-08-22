import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import ColumnChart from "@/components/charts/ColumnChart";



export default function VerticalBarGraphStatisticsViewCard({ title, routePath, className}){

    const data = [122785, 95391, 120512, 144452];


    return(
        <div className='bg-white w-1/2 ml-4 border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
            <h1 className='flex flex-row justify-between text-xl items-center font-semibold border-b h-14'>
                {title}
            </h1>
            <div className="mt-8">
                <ColumnChart labels={["2019", "2020", "2021", "2022"]} xAxisTitle={"Year"} yAxisTitle={"Number of Personnel"} dataName={"Active Service Members"} data={data}/>
            </div>
        </div>
        
    )
}