import { useState } from 'react';
import dynamic from 'next/dynamic';
import Dropdown from '../dropdowns/Dropdown';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function BarChart({ chartTitle, xAxisTitle, dataName, labels, data, routePath, stackType }){
    
    const [graph, setGraph] = useState("Total Personnel");

    const state = {
          
        series: [{
          name: 'Active',
          data: [19712, 16509, 4440, 1974, 891]
        }, {
          name: 'Separated',
          data: [1905, 7411, 2005, 1028, 399]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            stackType : stackType
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                total: {
                  enabled: false,
                  offsetX: 0,
                  style: {
                    fontSize: '7px',
                    fontWeight: 900
                  }
                }
              }
            },
          },
          stroke: {
            width: 1,
            colors: ['#fff']
          },
          title: {
            text: chartTitle
          },
          xaxis: {
            categories: ['Maryland', 'Alaska', 'Arizona', 'Minnesota', 'Washington'],
            labels: {
              formatter: function (val) {
                return val
              }
            },
            title: {
              text: xAxisTitle
            },
          },
          colors: ['#2492C9','#8BC3E1'],
          yaxis: {
            title: {
              text: "University Name"
            },
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val
              }
            }
          },
          fill: {
            opacity: 1
          },
          legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
          }
        },
      
    };

    return(
        <div className='bg-white w-full border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
            <div className="mt-8">
                {(typeof window !== 'undefined') && <ReactApexChart options={state.options} series={state.series} type="bar" height={350}/>}
            </div>
        </div>
        
    )
}