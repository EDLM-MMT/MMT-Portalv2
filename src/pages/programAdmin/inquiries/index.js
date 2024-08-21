import DefaultLayout from '@/components/layouts/DefaultLayout';
import TwoChoiceCard from '@/components/cards/TwoChoiceCard';
import AddBtn from '@/components/buttons/AddButton';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sort from '@/components/Sort';

export default function Inquiry() {
    
    const [data, setData] = useState([]);
    const [setUpdate] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        axios
          .get('../api/programAdmin/inquiry')
          .then((res) => {
            setData(res.data.inquiries);
          })
          .catch((err) => {
          });
    }, []);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        Inquiries
                    </div> 
                </h1>
                <div className='flex align-middle justify-between'>
                    <input type="text" className=" w-1/2 mb-6 pl-4  bg-gray-50 border border-gray-300 text-gray-900 text-mid rounded-xl p-2" placeholder="Search by Service Member Name" onChange={handleChange} value={searchInput} />
                    <div className='flex flex-row align-middle'>
                        <Sort options={["Most Recent", "Status"]} data={data} setModifiedData={setData}/>
                    </div>
                </div>
                <div className=' flex-col flex h-18 justify-center w-full gap-5'>
                    {data?.filter(post => {
                        return (
                            searchInput === '' ||
                            post.submitted_by.toLowerCase().includes(searchInput.toLowerCase())
                        );
                    }).map((card, index) => {
                        card['number']=index
                        return(
                            <TwoChoiceCard key={card.number} title={card.title} description={card.description} 
                            buttonLabel={card.status} data={data} card={card} degreeIndex={index} 
                            firstRoutePath={card.firstRoutePath} viewRoutePath={card.secondRoutePath}
                            toggleModalUpdate={setUpdate} type="ESO" />
                        )
                    })}
                </div>
            </div>
        </DefaultLayout>
    );
}