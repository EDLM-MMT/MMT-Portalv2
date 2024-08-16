import PieChart from "@/components/charts/PieChart";
import Dropdown from "@/components/dropdowns/Dropdown";
import { useRouter } from "next/router"
import { useState } from "react";

export default function DropdownViewCard({ title, options, routePath, width }){
    const router = useRouter();

    const enrollmentList = [
        {   state: "Florida",
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
        {   state: "Alabama",
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
        {   state: "Georgia",
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
        {   state: "Maryland",
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

    const [dropdownList, setDropdownList] = useState(enrollmentList);
    const [value, setValue] = useState("Florida")


    const onChange = (e) => {
        setValue(e.target.value);
        panelCode(e.target.value);
    }

    const panelCode = (content) =>{
        return(
            <>
                {enrollmentList.map((value, index) => {
                    if (value?.state === content){
                        return(
                            <div>
                                {value?.datas.map((data,index) =>{
                                    return(
                                        <div className="flex flex-row">
                                            <div>
                                                <div className="mt-12"><b>Total Personnel Enrolled: </b>{data.totalPersonnel}</div>
                                                <div className="mt-4"><b>Active Personnel Enrolled: </b>{data.activePersonnel}</div>
                                                <div className="mt-4"><b>Separated Personnel Enrolled </b>{data.separatedPersonnel}</div>
                                            </div>
                                            <div className="w-1/2" >
                                                <PieChart title={"State Stats"} series={[data?.activePersonnel,data?.separatedPersonnel]} 
                                                labels={["Active", "Separated"]}
                                                customLables={["Active Personnel Enrolled", "Separated Personnel Enrolled"]}/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }
                    
                })}


            </>

        )
    }


    return(
        <div className={`bg-white border rounded-md w-${width} mr-4 border-gray-200 p-4 shadow-lg focus:shadow-lg px-10`}>
            <h1 className='flex text-xl font-semibold h-14 items-center border-b'>
                {title}
            </h1>
            <div className='mt-4 font-medium'> 
                {/* <Dropdown options={options} keyName={"Display"} initialValue={"2022"} onChange={onChange} /> */}
                <div className='p-2 font-medium'> Select State: </div> 
                <Dropdown options={options} keyName={"State"} initialValue={"Florida"} onChange={onChange} />
                <div>
                    {panelCode(value)}
                </div>
                
                
            </div> 
        </div>
    )
}