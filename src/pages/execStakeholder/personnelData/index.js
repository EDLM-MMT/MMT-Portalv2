import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useRouter } from "next/router"
import PieChart from '@/components/charts/PieChart';
import Toggle from '@/components/Toggle';
import { useState } from 'react'
import Button from '@/components/buttons/Button';

export default function PersonnelData() {

    const [enabled, setEnabled] = useState(false)

    return (
      <DefaultLayout>
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'> 
            <h1 className='pb-4 border-b mt-4 mb-4 text-3xl font-semibold'>
                Personnel Data by Branch
            </h1>
            <div className='flex flex-row justify-end'>
                <div className='flex flex-row justify-end p-4'>
                    <p className='pt-1 text-lg items-center font-semibold'>Active</p>
                    <Toggle enabled={enabled} setEnabled={setEnabled}/>
                    <p className='pt-1 text-lg items-center font-semibold'>Seperated</p>

                </div>
            </div>

                <div className="flex flex-row justify-between gap-10 mx-10 mb-8">
                <div className='bg-white w-1/2 border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
                    <h1 className='flex flex-row justify-between text-xl items-center font-semibold border-b h-10'>
                        Army
                    </h1>
                    <div className="mt-8">
                    {enabled ? 
                        <PieChart title={"Army"} series={[14.06783297, 11.8203863, 11.3354007, 10.62287494, 10.42589017, 9.69841177, 9.470871609, 8.340972182, 7.773422009, 6.443937355]} 
                            labels={["91X40", "68W40", "11B30", "11B40", "42A40", "68W30", "68W20", "68W10", "79R40", "91B30"]}
                            customLables={["Maintenance Supervisor", "Combat Medic Specialist 40", "Infantryman 30", "Infantryman 40", "Human Resources Specialist", "Combat Medic Specialist 30", "Combat Medic Specialist 20", "Combat Medic Specialist 10", "Recruiter Noncommissioned Officer 40", "Wheeled Vehicle Mechanic 30"]}/>
                    :   <PieChart title={"Army"} series={[15.71090388, 14.8771988, 11.61675966, 11.42762721, 10.82246119, 9.809836622, 7.042606347, 6.722921446, 6.437536673, 5.53214818]} 
                            labels={["68W10", "11B30", "11B10", "68W20", "11B20", "68W30", "25B10", "91B10", "91B20", "91B30"]}
                            customLables={["Combat Medic Specialist 10", "Infantryman 30", "Infantryman 10", "Combat Medic Specialist 20", "Infantryman 20", "Combat Medic Specialist 30", "Information Technology Specialist 10", "Wheeled Vehicle Mechanic 10", "Wheeled Vehicle Mechanic 20", "Wheeled Vehicle Mechanic 30"]}/> }
                    </div>
                    <div className='flex justify-end'>
                        <Button btnText={"View Details"} link={"/execStakeholder/personnelData/army"} />
                    </div>
                    
                </div>
                <div className='bg-white w-1/2 border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
                    <h1 className='flex flex-row justify-between text-xl items-center font-semibold border-b h-10'>
                        Coast Guard
                    </h1>
                    <div className="mt-8">
                    {enabled ? 
                        <PieChart title={"Coast Guard"} series={[16.65585679, 15.36191465, 12.89726294, 11.21416526, 9.498637956, 8.308470619, 7.893371384, 6.978855883, 6.05136853, 5.140095992]} 
                            labels={["BM2", "BM3", "MK3", "BM1", "ET2", "BMC", "MK2", "MKC", "OSC", "OS1"]}
                            customLables={["Boatswain's Mate 2", "Boatswain's Mate 3", "Machinery Technician 3", "Boatswain's Mate 1", "Electronics Technician 2", "Chief Boatswain's Mate", "Machinery Technician 2", "Chief Machinery Technician", "Chief Operations Specialist", "Operations Specialist 1"]}/>
                    :   <PieChart title={"Coast Guard"} series={[13.5162166, 13.23148205, 13.15800216, 11.72820607, 11.24956626, 8.516522769, 7.59088033, 7.137754373, 7.064274488, 6.807094891]} 
                        labels={["BMC", "BM2", "MK2", "BM1", "ET2", "ET1", "MKC", "MK3", "MK1", "OS1"]}
                        customLables={["Chief Boatswain's Mate", "Boatswain's Mate 2", "Machinery Technician 2", "Boatswain's Mate 1", "Electronics Technician", "Chief Machinery Technician", "Machinery Technician 3", "Machinery Technician 1", "Operations Specialist 1"]}/> }
                    </div>
                    <div className='flex justify-end'>
                        <Button btnText={"View Details"} link={"/execStakeholder/personnelData/coastGuard"} />
                    </div>
                </div>
                </div>
                <div className="flex flex-row justify-between gap-10 mx-10 mb-8">
                    <div className='bg-white w-1/2 border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
                        <h1 className='flex flex-row justify-between text-xl items-center font-semibold border-b h-10'>
                        Marines
                        </h1>
                        <div className="mt-8">
                            {enabled ? <PieChart title={"Marines"} series={[16.30703691, 14.98075195, 12.49514639, 12.09465381, 7.775768535, 7.654844185, 7.53170104, 7.335337645, 7.153396421, 6.671363117]} 
                                labels={["E-4 0311", "E-5 0311", "E-5 3043", "E-4 3043", "E-4 3531", "E-3 0311", "E-4 3043", "E-5 3043", "E-5 0621", "E-5 1371"]}
                                customLables={["Port Security Unit", "Port Security Unit", "Supply Chain and Materiel Management Specialist", "Supply Chain and Materiel Management Specialist", "Motor Vehicle Operator", "Port Security Unit", "Motor Vehicle Operator", "Motor Vehicle Operator", "Radio Operator Marine Corps", "Combat Engineer Hitch Cover"]}/>
                            : <PieChart title={"Marines"} series={[17.23352343, 11.46010935, 10.76635899, 10.37587944, 9.070688067, 9.007976169, 8.309326435, 8.075626629, 7.873282772, 7.827228722]} 
                                labels={["E-4 3043", "E-5 3043", "E-5 0311", "E-4 3043", "E-3 0311", "E-3 3043", "E-4 0311", "E-6 3043", "E-4 0111", "E-5 0111" ]}
                                customLables={["Supply Chain and Materiel Management Specialist", "Supply Chain and Materiel Management Specialist", "Port Security Unit", "Supply Chain and Materiel Management Specialist", "Port Security Unit", "Supply Chain and Materiel Management Specialist", "Port Security Unit", "Supply Chain and Materiel Management Specialist", "Office of Work-Life", "Office of Work-Life"]}/>}  
                        </div>
                        <div className='flex justify-end'>
                        <Button btnText={"View Details"} link={"/execStakeholder/personnelData/marines"} />
                    </div>
                    </div>
                    <div className='bg-white w-1/2 border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
                        <h1 className='flex flex-row justify-between text-xl items-center font-semibold border-b h-10'>
                        Navy
                        </h1>
                        <div className="mt-8">
                        {enabled ? <PieChart title={"Navy"} series={[26.00185889, 19.71382765, 9.620793065, 8.690447186, 8.22091278, 5.941520257, 5.90783169, 5.852786977, 5.272260774, 4.777760733]} 
                            labels={["HM3", "HM2", "ET2", "HM1", "HN", "MM2", "HMC", "IT2", "ET1", "OS2"]}
                            customLables={["Hospital Corpsman 3", "Hospital Corpsman 2", "Electronics Technician 2", "Hospital Corpsman 1", "Hospitalman", "Machinist's Mate 2", "Chief Hospital Corpsman", "Information Technician 2", "Electronics Technician 1", "Operations Specialist" ]}/>
                        : <PieChart title={"Navy"} series={[20.90306411, 16.66338907, 14.37344451, 13.09835181, 7.814326575, 6.286750005, 6.129971835, 5.205690774, 4.786158946, 4.738852362]} 
                            labels={["HM2", "HM3", "HM1", "HN", "IT2", "IT1", "HMC", "MMN1", "ET2", "MA2"]}
                            customLables={["Hospital Corpsman 2", "Hospital Corpsman 3", "Hospital Corpsman 1", "Hospitalman", "Information Technician 2", "Information Technician 1", "Chief Hospital Corpsman", "Machinist's Mate Nuclear 1", "Electronics Technician 2", "Machine Accountant 2"]}/> }
                        </div>
                        <div className='flex justify-end'>
                            <Button btnText={"View Details"} link={"/execStakeholder/personnelData/navy"} />
                        </div>
                    </div>
                </div>
        </div>
      </DefaultLayout>
    );
}
