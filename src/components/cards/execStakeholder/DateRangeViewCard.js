import Dropdown from "@/components/dropdowns/Dropdown";
import { useRouter } from "next/router"
import { useState } from "react";

export default function DateRangeViewCard({ title, options, routePath, width }){

    const enrollmentList = [
        {   year: "2023-03-31",
            datas: [
                {
                    totalPersonnel: 174852,
                    activePersonnel: 144452,
                    separatedPersonnel: 30400,
                    numberInstitutes: 25,
                    mostPopularInstitute: "American Military University"
                }
            ]
        },
        {   year: "2023-04-05",
            datas: [
                {
                    totalPersonnel: 150852,
                    activePersonnel: 120512,
                    separatedPersonnel: 30400,
                    numberInstitutes: 25,
                    mostPopularInstitute: "City University"
                }
            ]
        },
        {   year: "2023-01-31",
            datas: [
                {
                    totalPersonnel: 124852,
                    activePersonnel: 95391,
                    separatedPersonnel: 30400,
                    numberInstitutes: 25,
                    mostPopularInstitute: "University of Maryland Global Campus"
                }
            ]
        },
        {   year: "2022-12-31",
            datas: [
                {
                    totalPersonnel: 152852,
                    activePersonnel: 122785,
                    separatedPersonnel: 30400,
                    numberInstitutes: 25,
                    mostPopularInstitute: "Southern New Hampshire University Online (Main Campus)"
                }
            ]
        }
    ];

    const [year, setYear] = useState("2023-04-05")

    const panelCode = (content) =>{
        return(
            <>
                {enrollmentList.map((value, index) => {
                    console.log("value.year: ", value.year);
                    console.log("content: ", content);
                    if (value?.year === content){
                        return(
                            <div key={index}>
                                {value?.datas.map((data,index) =>{
                                    return(
                                        <div key={index}>
                                            <div className="mt-12"><b>Total Personnel Enrolled: </b>{data.totalPersonnel}</div>
                                            <div className="mt-4"><b>Active Personnel Enrolled: </b>{data.activePersonnel}</div>
                                            <div className="mt-4"><b>Separated Personnel Enrolled: </b>{data.separatedPersonnel}</div>
                                            <div className="mt-4"><b>Number of Institutes: </b>{data.numberInstitutes}</div>
                                            <div className="mt-4"><b>Most Popular Institute by Enrollment: </b>{data.mostPopularInstitute}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }
                    
                })}

                {(content !== "2022-12-31" && content !== "2023-01-31" && content !== "2023-03-31" && content !== "2023-04-05") &&
                    <div>
                        <div className="mt-12"><b>Total Personnel Enrolled: </b>103567</div>
                        <div className="mt-4"><b>Active Personnel Enrolled: </b>73067</div>
                        <div className="mt-4"><b>Separated Personnel Enrolled: </b>30500</div>
                        <div className="mt-4"><b>Number of Institutes: </b>25</div>
                        <div className="mt-4"><b>Most Popular Institute by Enrollment: </b>Excelsior College</div>
                    </div>
                }
            </>

        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setYear(event.target.endDate?.value);
    }


    return(
        <div className={`bg-white border rounded-md w-${width} mr-4 border-gray-200 p-4 shadow-lg focus:shadow-lg px-10`}>
            <h1 className='flex text-xl font-semibold h-14 items-center border-b'>
                {title}
            </h1>
            <div className='mt-4 font-medium'> 
                {/* <Dropdown options={options} keyName={"Display"} initialValue={"2022"} onChange={onChange} /> */}
                <form onSubmit={handleSubmit}>
                    <div className="flex flew-row gap-10 justify-between">
                        <div>
                            <label for="startDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                            <input type="date" name="startDate" placeholder="Start Date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div>
                            <label for="endDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                            <input type="date" name="endDate" placeholder="End Date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />     
                        </div>   
                        <div className="mt-7 w-full">
                            <button className="flex justify-end items-center text-sm gap-2 dod-500 rounded-md hover:shadow-md text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white px-8 p-2.5 transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none">Search</button>
                        </div>
                    </div>
                </form>
                
                {panelCode(year)}
            </div> 
        </div>
    )
}