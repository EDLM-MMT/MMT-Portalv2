import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function PieChart({ title, series, labels, customLables }){
    
    const state = {
        series: series,
        options: {
            chart: {
            width: '100%',
            type: 'pie',
            },
            labels: labels,
            theme: {
            monochrome: {
                enabled: true
            }
            },
            plotOptions: {
            pie: {
                dataLabels: {
                offset: -5
                }
            }
            },
            title: {
            // text: title
            },
            dataLabels: {
            formatter(val, opts) {
                const name = opts.w.globals.labels[opts.seriesIndex]
                return [name, val.toFixed(1) + '%']
            }
            },
            tooltip: {
                y: {
                    formatter(val, opts) {
                        const name = customLables[opts.seriesIndex] || labels[opts.seriesIndex]
                        return [name, " " + val.toFixed(1)]
                    }
                }
            },
            colors: ['#2492C9'],
            legend: {
            show: false
            }
        },
      };


    return(
        <div className="mt-8">
            <ReactApexChart options={state.options} series={state.series} type="pie" height={350}/>
        </div>

    )
}