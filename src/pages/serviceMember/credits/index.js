import DefaultLayout from "@/components/layouts/DefaultLayout";
import { useState, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import CreditsTable from '@/components/tables/CreditsTable'
import PotentialCreditsTable from '@/components/tables/PotentialCreditsTable'
import { useRouter } from "next/router"

export default function Credits() {

  const router = useRouter();
  const [credits, setCredits] = useState([])

  useEffect(() => {
      axios
        .get(`/api/credits`)
        .then((res) => {
          setCredits(res.data);
        })
        .catch((err) => {
        });
  }, []);

        
  //     series: [12],
  //     options: {
  //       chart: {
  //         type: 'radialBar',
  //         offsetY: -20,
  //         sparkline: {
  //           enabled: true
  //         }
  //       },
  //       plotOptions: {
  //         radialBar: {
  //           startAngle: -90,
  //           endAngle: 90,
  //           track: {
  //             background: "#e7e7e7",
  //             strokeWidth: '97%',
  //             margin: 5, // margin is in pixels
  //             dropShadow: {
  //               enabled: true,
  //               top: 2,
  //               left: 0,
  //               color: '#999',
  //               opacity: 1,
  //               blur: 2
  //             }
  //           },
  //           dataLabels: {
  //             name: {
  //               show: false
  //             },
  //             value: {
  //               offsetY: -2,
  //               fontSize: '22px'
  //             }
  //           }
  //         }
  //       },
  //       grid: {
  //         padding: {
  //           top: -10
  //         }
  //       },
  //       fill: {
  //         type: 'solid',
  //         // gradient: {
  //         //   shade: 'light',
  //         //   shadeIntensity: 0.4,
  //         //   inverseColors: false,
  //         //   opacityFrom: 1,
  //         //   opacityTo: 1,
  //         //   stops: [0, 50, 53, 91]
  //         // },
  //       },
  //       labels: ['Average Results'],
  //     },
    
  // }

  const handleClick = () => {
    router.push("/serviceMember/degreePathways");
  }

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        Credits Translation Page
                    </div> 
                </h1>
                <div>
                  <button onClick={handleClick}
                  className='text-dod-500 hover:underline underline hover:text-blue-500 cursor-pointer mb-4 transition-all duration-150 ease-in-out'>                    
                  Degree Pathways Catalog </button> -{`>`} BGS General Studies 
                </div>
                <div className="border rounded-md border-gray-200 p-4 shadow mt-4">
                    <h1 className='border-b mt-2 mb-6 text-xl font-semibold'>
                        <div className='flex flex-row justify-between'>  
                            BGS General Studies Overview
                        </div> 
                    </h1>
                    <b className='mt-8'> Your Progress: 12% (15 out of 124 credits transferred)</b>
                    <div className="border rounded-full border-gray-600 bg-gray-300 w-3/4 h-12 mt-2 shadow">
                        <div className="border rounded-full border-gray-600 bg-dod-300 w-1/5 h-12 shadow">
                        <div className="p-2 h-12 font-bold text-right items-center align-middle text-white text-lg "> 12% </div>
                        </div>
                    </div>

                    <div className='flex flex-row justify-between'>  
                        <div className="flex flex-col mt-4 pt-4x">
                            <div><b>College: </b> Fort Hays State University </div>
                            <div><b>Student Name: </b> Bill Blanchard </div>
                        </div>

                        <div className="flex flex-col mt-4 pt-4x">
                            <div><b>Branch of Service: </b> Navy </div>
                            <div><b>Rank/Rating: </b> E-9/ETNCM </div>
                        </div>
                        <div></div>

                        {/* code for radial progress bar */}
                        {/* <div className="flex flex-col mt-2 pt-6">
                            <div><b>College: </b> Fort Hays State University </div>
                            <div><b>Student Name: </b> Bill Blanchard </div>
                            <div><b>Branch of Service: </b> Navy </div>
                            <div><b>Rank: </b> E-9 </div>
                            <div><b>Rating: </b> ETNCM </div>
                        </div>
                        <div>
                        <ReactApexChart options={state.options} series={state.series} type="radialBar" height={350} width={400} />
                        <b className=''> Your Progress: 12% (15 out of 124 credits transferred)</b>
                        </div> */}
                    </div>

                </div>
                
                <div className="border rounded-md border-gray-200 p-4 mt-8 shadow">
                    <h1 className='border-b mt-2 mb-2 text-xl font-semibold'>
                        <div className='flex flex-row justify-between pb-4'>  
                            Credits
                        </div> 
                    </h1>
                    <div>
                        <b className=''>Disclaimer: </b> Credits translation are tentative and require further confirmation from the Academic Institute. These are only for planning purposes. "Hours Still Needed" is an <b><u>estimated</u></b> value based on courses completed on your transcript. Please contact ESO if further clarification is needed. 
                        <p className="pt-">The following courses will need to be completed based on your current pathway selection:</p>
                    </div>
                    <CreditsTable credits={credits.credits} />
                    
                    <div className='pt-8'>
                        <p>Courses listed are not used above, they may be considered by the institution for additional credit on a course by course basis.</p>
                    </div>
                    <PotentialCreditsTable credits={credits.potentialCredits} />
                </div>
            </div>
        </DefaultLayout>
    );
}