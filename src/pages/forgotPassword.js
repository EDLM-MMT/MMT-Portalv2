import DefaultLayout from '@/components/layouts/DefaultLayout';
import Button from '@/components/buttons/Button';
import { useState } from 'react';
import { useRouter } from "next/router"
import ForgotPasswordOverlay from '@/components/overlays/ForgotPasswordOverlay';

export default function ForgotPassword() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const [email, setEmail] = useState('');
    
    const handleUpdate = (e) => {
        setEmail(e.target.value);
    };

    function handleSubmit(event){
        if(email !== ''){
            event.preventDefault();
            setIsOpen(!isOpen);
        }
    }

    const handleClick = () => {
        router.push(`/`);
    }

    return (
        <DefaultLayout >
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
        <h1 className='my-2 pb-4 border-b mt-4 text-3xl font-semibold'>
            <div className='flex flex-row justify-between'>  
                Forgot Password
            </div> 
        </h1>
        <div>
            <button onClick={handleClick}
            className='text-dod-500 mb-3 hover:underline underline hover:text-blue-500 cursor-pointer transition-all duration-150 ease-in-out'>                    
            Login </button> -{`>`} Forgot Password
        </div>

        <form className='flex flex-col mt-4 items-center' onSubmit={handleSubmit} onChange={handleUpdate}>
            <div class="grid gap-6 mb-6 w-1/3 ">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter the Email Address associated with your account</label>
                    <input type="email" name="email" placeholder="Email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
            </div>

            <div className='flex flex-row items-center justify-between w-1/3 mt-2'>
                <Button btnText={"Cancel"} link={"/"} className={"ml-0"}></Button>
                <button onClick={handleSubmit} type="submit" class="text-white bg-dod-500/80 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 border-dod-500 border-2 ring-dod-500 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset Password</button>
            </div>
        </form>
        {isOpen && <ForgotPasswordOverlay toggleModal={setIsOpen} 
            message={"Upon clicking Confirm below, a reset password email will be sent if an associated account exists with the given email."}/>}

        </div>
        </DefaultLayout>
    );
}