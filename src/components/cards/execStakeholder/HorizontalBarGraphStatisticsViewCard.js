import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import Dropdown from "../../dropdowns/Dropdown";
import { useState } from "react";
import BarChart from "@/components/charts/BarChart";



export default function BarGraphStatisticsViewCard({ title , routePath, className}){

    const [graph, setGraph] = useState("Personnel Percent");

    const onChange = (e) => {
      if(e.target.value === "Personnel Percent"){
        setGraph("Personnel Percent")
      } else{
        setGraph("Total Personnel")
      }
    }


    return(
        <div className='bg-white w-full border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
            <h1 className='flex flex-row justify-between text-med font-semibold border-b  h-10'>
                {title}
                <div>
                  <div className='font-medium'> <b className="pr-4">Display:</b>
                    <Dropdown options={["Personnel Percent", "Total Personnel"]} keyName={"Display"} initialValue={"Personnel Percent"} onChange={onChange} />
                  </div> 
                </div>
            </h1>
            <div className="mt-8">
                {(graph === "Total Personnel") && <BarChart chartTitle={"Total Personnel Distribution by State"} xAxisTitle={"Number of Personnel"} />}
                {(graph === "Personnel Percent") && <BarChart chartTitle={"Personnel Status Percent Distribution by State"} xAxisTitle={"Personnel Percentage"} stackType={'100%'}/>}
                {}
                {}
                {}
            </div>
        </div>
        
    )
}