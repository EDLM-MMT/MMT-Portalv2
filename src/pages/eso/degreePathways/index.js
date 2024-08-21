import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useState, useEffect} from 'react';
import Dropdown from '@/components/dropdowns/Dropdown';
import Accordion from '@/components/Accordion';
import axios from 'axios';

export default function DegreePathways() {  
    const [selected, setSelected] = useState("School");
    const [searchInput, setSearchInput] = useState("");
    const [degreePathways, setDegreePathways] = useState([]);

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

    const panelCode = (content) =>
        content?.map((school, index) => {
            return(
                <Accordion key={school.id || index} title={school.name} className={"p-3 bg-dod-300/50"}
                content={
                    <div>
                        {school.datas.map((data, index) => {
                            return(
                            <Accordion key={data.id || index} title={data.data} className={"p-2 bg-slate-300"} 
                                content={
                                <div className='flex flex-row justify-between'>
                                {data.codes?.map((code, index) => {
                                    code['number']=index
                                    return(
                                        <div key={code.number} className='flex flex-col font-bold'> 
                                            {code}
                                        </div>
                                    );
                                })}
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