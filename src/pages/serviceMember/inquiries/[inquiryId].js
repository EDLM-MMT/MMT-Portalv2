import DefaultLayout from '@/components/layouts/DefaultLayout';
import ViewCard from '@/components/cards/InquiryViewCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/router"
import useStore from '@/store/store';

export function getServerSideProps(context) {
    const { inquiryId } = context.query;
    return {
      props: {
        inquiryId,
      },
    };
  }

export default function InquiryView({inquiryId}) {

  const userData = useStore((state) => state.userData);
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  const timestamp = `${currDate}  ${currTime}`;

    const [inquiry, setInquiry] = useState([]);
    const router = useRouter();
    const [comments,setComments] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        axios
          .get(`/api/inquiry/${inquiryId}`)
          .then((res) => {
            setInquiry(res.data);
            setComments(res.data.inquiryComments);
          })
          .catch((err) => {
          });
    }, []);

    const handleClick = () => {
        router.push("/serviceMember/inquiries");
    }

    const handleInquiry = () => {
      setStatus(!status)
      if(status){
        inquiry.inquiry_status = "Open";
      }else{
        inquiry.inquiry_status = "Closed";
      }
    }

    const handlePost = (event) => {
      event.preventDefault()
      const newComment = {
        author: `${userData?.learner.personnel.person.firstName} ${userData?.learner.personnel.person.lastName}`,
        title:"",
        comment: event.target.comment?.value,
        timestamp: timestamp,
      }
      setComments(comments =>[newComment, ...comments]);
      if(event.target.comment?.value){
        event.target[0].value = "";
      }
    }
    
    return (
      <DefaultLayout>
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'> 
            <h1 className='pb-4 border-b mt-4 mb-4 text-3xl font-semibold'>
                <div className='flex flex-row justify-between'>  
                  {inquiry.title} Inquiry
                  {inquiry.inquiryStatus !== 'Closed' &&
                    (<button onClick={handleInquiry} className="flex justify-end items-center text-sm gap-2 dod-500 rounded-md hover:shadow-md text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white px-6 p-1.5 transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none">{status ? "Reopen" : "Close"} Inquiry</button>) 
                  }
                </div> 
            </h1>
            <div>
              <button onClick={handleClick}
              className='text-dod-500 hover:underline underline hover:text-blue-500 cursor-pointer mb-4 transition-all duration-150 ease-in-out'>                    
              My Inquiries </button> -{`>`} {inquiry.title}
            </div>
            <div className=' flex-col flex h-18 justify-center w-full gap-5'>
                    <ViewCard key={inquiry.id} inquiry={inquiry}/>                   
            </div>
            <div className='bg-white w-full border h-50 mt-4 mb-4 rounded-md border-gray-200 p-4 pb-2 shadow'>
              <div className="font-semibold text-xl border-b mb-4 ">
                Inquiry Communication Timeline
              </div>
              <form onSubmit={handlePost}>
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add a comment:</label>
                <input type="text-area" id="description" name="comment" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={"Please provide comments if necessary."} required />
                <div className="flex justify-end w-full">
                    <button className="flex justify-end items-center text-sm gap-2 dod-500 rounded-md hover:shadow-md text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white px-6 p-1.5 transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none">Post</button>
                </div>              </form>
              {comments?.map((data, index) => {
                    return(
                        (data.title === 'ESO') ? (
                          <div className='bg-white w-3/4 text-black border h-50 mt-2 mb-4 rounded-md border-gray-200 p-4 pb-2 shadow'>
                            <div className="flex-row flex justify-between text-base mb-4 font-medium">
                              <div className="flex-row flex pr-2 text-base mb-2 font-medium">{`${data.author} (${data.title})`}</div> 
                              <div>{data.timestamp}</div>
                            </div>
                            <div className="text-sm pl-4">{data.comment}</div>
                          </div>
                        ):(
                          <div className="mt-4 mb-4 ml-96">
                            <div className='bg-dod-300 bg-opacity-30 w-3/4 text-black border h-50 mt-0 rounded-md border-gray-200 p-4 pb-2 shadow'>
                              <div className="flex-row flex justify-between text-base mb-4 font-medium">
                                <div className="flex-row flex pr-2 text-base mb-2 font-medium">{data.author} </div> 
                                <div>{data.timestamp}</div>
                              </div>
                              <div className="text-sm pl-4">{data.comment}</div>
                            </div>
                          </div>
                        )
                    )
                })
              }            
            </div>
          </div>
        </DefaultLayout>
    );
}