import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/router"
import Dropdown from '@/components/dropdowns/Dropdown';
import Checkbox from '@/components/Checkbox';
import { PieChart } from 'react-minimal-pie-chart';

export function getServerSideProps(context) {
    const { esoManagementId } = context.query;
    return {
      props: {
        esoManagementId,
      },
    };
  }

export default function ESOManagementView({esoManagementId}) {

    const [esoData, setEsoData] = useState([]);
    const [editFlag, setEditFlag] = useState(false);
    const [selected, setSelected] = useState("");
    const [checked, setChecked] = useState("");

    const router = useRouter();

    useEffect(() => {
        axios
          .get(`/api/programAdmin/${esoManagementId}`)
          .then((res) => {
            setEsoData(res.data);
            setSelected(res.data.branch)
            setChecked(res.data.permissions)
        })
          .catch((err) => {
            console.log(err);
          });
    }, []);

    const handleClick = () => {
        router.push("/programAdmin/esoManagement");
    }

    const handleEdit = () => {
        setEditFlag(true);
    }

    const handleSave = () => {
        setEsoData((prev) => ({
            ...prev,
            branch: selected,
            permissions: checked,
        }))
        setEditFlag(false);
    }

    const onChange = (e) => {
        setSelected(e.target.name);
    }

    const onCheck = (e) => {
        setChecked(e.target.id);
        console.log(e.target.id);
    }

    console.log(esoData.tasks);
    return (
      <DefaultLayout>
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'> 
            <h1 className='pb-4 border-b mt-4 mb-4 text-3xl font-semibold'>
                <div className='flex flex-row justify-between'>  
                    {esoData.name} - ESO
                </div> 
            </h1>
            <div>
              <button onClick={handleClick}
              className='text-dod-500 hover:underline underline hover:text-blue-500 cursor-pointer mb-4 transition-all duration-150 ease-in-out'>                    
              ESO Management</button> -{`>`} {esoData.name}
            </div>

            <div className='bg-white w-full border h-50 mt-4 mb-4 rounded-md border-gray-200 p-4 pb-2 shadow'>
                <div className="flex flex-row justify-between font-semibold text-xl h-10 mb-4 border-b">
                    Permissions
                    {!editFlag  &&
                    <button onClick={handleEdit} className="flex justify-end mb-2 items-center text-sm gap-2 dod-500 rounded-md hover:shadow-md text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white px-6 p-1.5 transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none">Edit</button>
                    }
                </div>

                {editFlag ? 
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <p className="p-2 font-semibold">
                            Branch:
                        </p>
                        <Dropdown options={["Army", "Military", "Navy"]} keyName={"Branch"} initialValue={esoData.branch} onChange={onChange} />
                    </div>
                    <div className="flex flex-col">
                        <p className="p-2 font-semibold" >
                            Permissions: 
                        </p>
                       <div className="flex flex-col pl-8">
                            <Checkbox label="Inquiries" index="Inquiries" onChange={onCheck}/>
                            <Checkbox label="Degree Pathways Catalog" index="Degree Pathways Catalog" onChange={onCheck}/>
                            <Checkbox label="Counseling" index="Counseling" onChange={onCheck}/>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button onClick={handleSave} className="flex justify-end w-20 mb-2 items-center text-sm gap-2 dod-500 rounded-md hover:shadow-md text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white px-6 p-1.5 transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none">Save</button>
                    </div>
                </div> : 
                <div className="flex flex-col font-semibold">
                    <p className="p-2">
                        Branch: {esoData.branch}
                    </p>
                    <p className="p-2">
                        Permissions: {esoData.permissions}
                    </p>
                </div>
                }
            </div>

            <div className='bg-white w-full border h-50 mt-4 mb-4 rounded-md border-gray-200 p-4 pb-2 shadow'>
                <div className="font-semibold text-xl h-10 mb-4 border-b">
                    Assigned Tasks
                </div>
                <table className='w-full border-separate border' style={{ borderSpacing: 0 }}>
                    <thead className='bg-gray-50 '>
                        <tr>
                            <th scope='col' className='text-lg sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'>
                                Task ID
                            </th> 
                            <th scope='col' className='text-lg sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'>
                                Service Member Name
                            </th> 
                            <th scope='col' className='text-lg sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'>
                                Branch
                            </th> 
                            <th scope='col' className='text-lg sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'>
                                Inquiry/Career Path
                            </th> 
                            <th scope='col' className='text-lg sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'>
                                Status
                            </th> 
                            <th scope='col' className='text-lg sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'>
                                Task Duration
                            </th> 
                        </tr>
                    </thead>
        
                    {esoData.tasks?.map((task, index) => (
                        <tr key={index} className=' even:bg-gray-50 group'>
                            <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2'>{task.taskId}</td>
                            <td className='pl-2'>{task.name}</td>
                            <td className='pl-2'>{task.branch}</td>
                            <td className='pl-2'>{task.title}</td>
                            <td className='pl-2'>{task.status}</td>
                            <td className='pl-10'>{task.duration}</td>
                            {/* <td className='pl-5'><button onClick={() => handleView(post.id)} className="text-blue-700 ml-5">{post.viewProfile} </button></td> */}
                        </tr>
                    ))}
                </table>
            </div>

            <div className='bg-white w-full border h-50 mt-4 mb-4 rounded-md border-gray-200 p-4 pb-2 shadow'>
                <div className="font-semibold text-xl h-10 mb-4 border-b">
                    Statistics
                </div>
                <div className="flex flex-col font-semibold">
                    <p className="p-2">
                        Approximate time for Task Completion: {esoData.avgTime}
                    </p>
                </div>
                <div className='flex flex-row'>
                <div>
                    <p className="p-2 font-semibold">
                        Tasks Progress: 
                    </p>
                    <p className="pl-6">
                        In Progress: {esoData.inProgressTasks || 0}
                    </p><p className="pl-6">
                        Done: {esoData.completedTasks || 0}
                    </p><p className="pl-6">
                        Not Started: {esoData.notStartedTasks || 0}
                    </p>
                </div>
                {esoData.totalTasks &&
                <div className="pt-2 ml-32 w-1/4 h-1/4">
                <PieChart
                    data={[
                        { title: 'In Progress', value: esoData.inProgressTasks/esoData.totalTasks, color: '#2492C9' },
                        { title: 'Done', value: esoData.completedTasks/esoData.totalTasks, color: '#8BC3E1' },
                        { title: 'Not Started', value: esoData.notStartedTasks/esoData.totalTasks, color: '#989494' },
                    ]}
                    animation
                    animationDuration={500}
                    animationEasing="ease-out"
                    center={[50, 50]}
                    lengthAngle={360}
                    lineWidth={100}
                    paddingAngle={0}
                    radius={50}
                    // rounded
                    startAngle={0}
                    viewBoxSize={[100, 100]}
                    label={(data) => data.dataEntry.title}
                    labelPosition={65}
                    labelStyle={{
                        fontSize: "6px",
                        fontColor: "FFFFFA",
                        fontWeight: "500",
                    }}
                    />
                </div>
                }
                </div>
            </div>
            
        </div>
      </DefaultLayout>
    );
}
