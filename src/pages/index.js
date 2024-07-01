// intial login page for the app
// all users must come here first before they can access the app

import Alert from '@/components/overlays/Alert';
import DODImage from '@/../public/logo.png';
import DefaultLayout from "../components/layouts/DefaultLayout"
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import useAuthRouter from '@/hooks/useAuthRouter';
import { useState } from 'react';
import useStore from '@/store/store';

export default function LoginPage() {
  const router = useAuthRouter();
  const { setUserData } = useStore((state) => state);
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleUpdate = (e) => {
    setCredentials((previous) => ({
      ...previous,
      [e.target.name]: e.target.value
    }));
  };
  const [errorMsg, setErrorMsg] = useState();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleLogin = (e) => {
    e.preventDefault();
    if(credentials.username === '' || credentials.password === ''){
      setErrorMsg('All fields required');
      setIsOpen(!isOpen);
    }
    if (credentials.username && credentials.password){
      axios
        .post('/api/login', { ...credentials })
        .then((res) => {
          setErrorMsg('');
          setUserData(res.data);
          router.push('/dashboard');
        })
        .catch(() => {
          setErrorMsg('Invalid credentials');
          setIsOpen(!isOpen);
        });
    }
  };

  return (
    <>
      <DefaultLayout >
        <div className='w-1/3 mx-auto p-8 rounded flex flex-col justify-center mb-10'>
          <Image src={DODImage} alt='DOD' width={200} height={200} className='mx-auto' />
            <h1 className="my-2 mx-auto text-2xl font-bold"> Sign in to your account </h1>

            <span className="mx-auto">
              or &nbsp;
              <button
                  id={'create-account-button'}
                  className='text-blue-400 hover:underline hover:text-blue-500 cursor-pointer transition-all duration-150 ease-in-out'
                  onClick={() => router.push("/register")}>
                  Create an Account
              </button>
            </span>
            
            <form className="p-2 align-center mx-auto"
              onSubmit={handleLogin} onChange={handleUpdate}>
              <input 
                  className='shadow focus:shadow-md rounded-md p-2 w-full border border-gray-200 text-gray-700 focus:ring-2 outline-none transition-all  duration-200'
                  type="text" name="username" placeholder="Username"/> 
              <input 
                  className='mt-2 shadow focus:shadow-md rounded-md p-2 w-full border border-gray-200 text-gray-700 focus:ring-2 outline-none transition-all duration-200'
                  type="password" name="password" required placeholder="Password"/>
              
              
              <div className='flex mx-auto flex-col justify-center items-center'>
                  {/* <div className="flex mt-2 content-center items-center justify-center text-red-600 ">
                      <span>{errorMsg}</span>
                  </div> */}
                  {isOpen && <Alert toggleModal={setIsOpen} message={errorMsg}/>}
                  <Link href="/dashboard">
                    <button
                      onClick={handleLogin}
                      className='mt-3 px-6 bg-dod-500 text-white font-bold py-2 rounded hover:bg-dod-300 focus:outline-none  focus:ring-dod-500 focus:shadow-outline-dod focus:ring-2 ring-offset-1'
                    >
                      Login
                    </button>
                  </Link>
              </div>
            </form>
            <button
                  id={'create-account-button'}
                  className='mt-3 text-blue-400 hover:underline hover:text-blue-500 cursor-pointer transition-all duration-150 ease-in-out'
                  onClick={() => router.push("/forgotPassword")}>
                  Forgot your password?
              </button>
            <span className='mt-3 text-gray-500 text-sm font-bold'>
              Trouble logging in? Please contact your IT department
            </span>
        </div>
      </DefaultLayout>
    </>
  );
}
