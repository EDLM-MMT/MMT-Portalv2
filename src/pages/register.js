import DefaultLayout from '@/components/layouts/DefaultLayout';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/../public/logo.png';
import { useRouter } from "next/router"
import { useState } from 'react';

export default function Register() {
    const router = useRouter();
    const [credentials, setCredentials] = useState({
        first_name:"",
        last_name:"",
        email:"", 
        password:"",
        confirmPassword:"",
    });

    console.log(credentials);

    function handleChange(event){
        const {name, value} = event.target;
        setCredentials((prev)=>({...prev,[name]:value}));
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(credentials);
    }

    return (
        <DefaultLayout>
        <div className='w-1/3 mx-auto p-8 rounded flex flex-col justify-center m-10'> 
            <Image src={logo} alt='DOD' width={200} height={200} className= 'mx-auto'/>
            <h1 className="my-2 mx-auto text-2xl font-bold"> Create your account </h1>

            <span className="mx-auto">
                or &nbsp;
                <button
                    id={'create-account-button'}
                    className='text-blue-400 hover:underline hover:text-blue-500 cursor-pointer transition-all duration-150 ease-in-out'
                    onClick={() => router.push("/")}>
                    Sign in to your Account
                </button>
            </span>
            <form className="p-2 align-center" onSubmit={handleSubmit} onChange={handleChange}>
                <input 
                    className='shadow focus:shadow-md rounded-md p-2 w-full border border-gray-200 text-gray-700 focus:ring-2 outline-none transition-all  duration-200'
                    type="text" name="first_name" placeholder="First Name"/>
                <input 
                    className='mt-2 shadow focus:shadow-md rounded-md p-2 w-full border border-gray-200 text-gray-700 focus:ring-2 outline-none transition-all  duration-200'
                    type="text" name="last_name" placeholder="Last Name"/>
                <input 
                    className='mt-2 shadow focus:shadow-md rounded-md p-2 w-full border border-gray-200 text-gray-700 focus:ring-2 outline-none transition-all  duration-200'
                    type="text" name="email" placeholder="Email"/>
                <input  
                    className='mt-2 shadow focus:shadow-md rounded-md p-2 w-full border border-gray-200 text-gray-700 focus:ring-2 outline-none transition-all  duration-200'
                    type="password" name="password" required placeholder="Password"/>
                <input 
                    className='mt-2 shadow focus:shadow-md rounded-md p-2 w-full border border-gray-200 text-gray-700 focus:ring-2 outline-none transition-all  duration-200'
                    type="password" name="confirmPassword" required placeholder="Confirm Password"/>
                <div className='flex mx-auto flex-col justify-center items-center'>
                <Link href="/dashboard">
                    <button
                    onClick={handleSubmit}
                    className='mt-3 px-6 bg-dod-500 text-white font-bold py-2 rounded hover:bg-dod-300 focus:outline-none  focus:ring-dod-500 focus:shadow-outline-dod focus:ring-2 ring-offset-1'
                    >
                    Register
                    </button>
                </Link>
                </div>
            </form>
        </div>
        </DefaultLayout>
    )
}