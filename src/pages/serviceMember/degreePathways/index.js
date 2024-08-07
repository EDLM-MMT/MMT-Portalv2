import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useState, useEffect} from 'react';
import Dropdown from '@/components/dropdowns/Dropdown';
import AddBtn from '@/components/buttons/AddButton';
import ViewBtn from '@/components/buttons/ViewBtn';
import Accordion from '@/components/Accordion';
import { PlusCircleIcon } from '@heroicons/react/outline';
import { useRouter } from "next/router"
import axios from 'axios';
import { data } from 'autoprefixer';
import useStore from '@/store/store';
import { xAPISendStatement } from "@/utils/xapi/xAPISendStatement";

export default function DegreePathways() {  
    const [selected, setSelected] = useState("School");
    const [searchInput, setSearchInput] = useState("");
    const [degree, setDegree] = useState([]);
    const [degreePathways, setDegreePathways] = useState([]);

    const user = useStore((state) => state.userData);
    const router = useRouter();

    useEffect(() => {
        axios
          .get(`/api/degreePathways`)
          .then((res) => {
            let data = res.data.degreePathways
            console.log("data:", data)
            setDegreePathways(data);
          })
          .catch((err) => {
          });

    },[]);

    console.log("degreePathways list:", degreePathways[0]?.schoolsList);

    // const handlePost = (newDegree) =>{
    //     axios.post('/api/careerCounseling', {body: newDegree}).then((response) => {
    //         console.log(response.status, response.data);
    //         console.log("degree list inside axios post: ", degree)
            
    //     });
    // }


    const onChange = (e) => {
        setSelected(e.target.name);
    }

    const onFilterChange = (e) => {
    }

    

    const sort = () => {
        if (selected === "School"){
            const filtered = degreePathways[0]?.schoolsList.filter(post => {
                if (searchInput === ''){
                    return post;
                } else if(post.name.toLowerCase().includes(searchInput.toLowerCase())){
                    return post;
                }else if(post.datas[0].data.toLowerCase().includes(searchInput.toLowerCase())){
                    return post;
                }
    
            })
            return (
                <>
                {panelCode(filtered)}
                </>
            ) 
        }
        else if (selected === "Major"){
            const filtered = degreePathways[1]?.majorsList.filter(post => {
                if (searchInput === ''){
                    return post;
                } else if(post.name.toLowerCase().includes(searchInput.toLowerCase())){
                    return post;
                }else if(post.datas[0].data.toLowerCase().includes(searchInput.toLowerCase())){
                    return post;
                }
            })
            return (
                <>
                {panelCode(filtered)}
                </>
            ) 
        } 
    }

    const handleClick = (name, schoolData) => {

        console.log("school data: ", schoolData)
        const min = 306;
        const max = 407;
        const randId = parseInt(min + Math.random() * (max - min));
          
        const newDegree= {
            "id": randId,
            "degree": schoolData.data,
            "school": name,
            "submitted_by": user?.learner.personnel.person.name,
            "username": "",
            "personid": user?.learner.personnel.person.personid,
            "mosCode": "AET",
            "degree_startDate": "May 2023",
            "projected_graduation": "December 2027",
            "assigned_eso": "Luis Doe",
            "total_creditHours": 60,
            "creditHours_completed": 28,
            "course_plan": [
                {
                    "course_number": "MAC1105",
                    "course_name": "Intro to Algebra",
                    "required": "Yes",
                    "credit_hours": 3,
                    "projected_semester": "Fall 2022",
                    "status": "Approved"
                }
            ],
            "counselingComments": [],
            "ESOComments": [
                {
                    "date": "2/14/2023 3:12:57 PM",
                    "purpose": "Approved",
                    "comment": "Approved added required courses"

                }
            ]
        }
        
        //handlePost(newDegree)

        axios.post('/api/careerCounseling', {body: newDegree}).then((response) => {
            console.log(response.status, response.data);
            console.log("degree list inside axios post: ", degree)          
        });
        const context = {
            actor: {
              first_name: user?.user?.first_name || 'Anonymous',
              last_name: user?.user?.last_name || 'User',
            },
            verb: {
              id: "http://example.org/verb/planned",
              display: `Counseling started with ESO`,
            },
            object: {
                definitionName: `Counseling started with ESO`,
            },
            resultExtName: 'https://w3id.org/xapi/ecc/result/extensions/searchTerm',
            resultExtValue: "test",
        };
        xAPISendStatement(context);
        console.log("sent");
        router.push("/serviceMember/counseling");

    }

    const panelCode = (content) =>
        content?.map((school, index) => {
            return(
                <Accordion title={school.name} className={"p-3 bg-dod-300/50"}
                content={
                    <div>
                        {school.datas.map((data, index) => {
                            return(
                            <Accordion title={data.data} className={"p-2 bg-slate-300"} 
                                content={
                                <div className='flex flex-row justify-between'>
                                {data.codes?.map((code, index) => {
                                    return(
                                        <div className='flex flex-col font-bold'> 
                                            {code}
                                        </div>
                                    );
                                })}
                                <div className="flex flex-row gap-2">
                                    {<ViewBtn path={`/serviceMember/credits`}/>}
                                    {/* {<AddBtn btnText={"Add to List"} link={"/serviceMember/counseling"}/>} */}
                                    {<button 
                                        id={'add-button-to-list'}
                                        className='flex justify-center items-center w-max px-2 p-1.5 gap-2 dod-500 hover:shadow-md font-medium rounded-lg text-sm text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none' 
                                        title='Add to list'
                                        onClick={()=> handleClick(school.name, data)}
                                    >
                                        <PlusCircleIcon className='h-5 w-5'/>
                                        Add to List
                                    </button>}
                                </div>
                                </div>
                            }/>
                            );
                        })}
                    </div>
                }/>
            );
        });

        const handleChange = (e) => {
            setSearchInput(e.target.value);
        };

    return (
        <div>
            <DefaultLayout>
                <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                    <h1 className='pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
                        <div className='flex flex-row justify-between'>  
                            Degree Pathways Catalog
                        </div> 
                    </h1>
                    <div>
                        <input type="text" className=" w-1/2 mb-1 pl-4 bg-gray-50 border border-gray-300 text-gray-900 text-mid rounded-xl p-2" placeholder={`Search for School or Major`} onChange={handleChange} value={searchInput} />
                    </div>
                    <div className='flex align-middle '>
                         <div className='p-2 font-medium'> Filter By MOS Code: </div> 
                        <Dropdown options={["All", "ABE", "ABF", "ABH", "AC", "AD", "AE", "BM", "CS", "CTR", "DC", "EM", "HT", "IC", "PS", "SW", "UT", "YN"]} keyName={"MOS"} initialValue={"All"} onChange={onFilterChange} />
                        <div className='p-2 font-medium'> Sort By: </div> 
                        <Dropdown options={["School", "Major"]} keyName={"Degree"} initialValue={"School"} onChange={onChange} />
                    </div>
                    {sort()}
                </div>
            </DefaultLayout>
        </div>
    );
}