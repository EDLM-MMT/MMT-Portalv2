import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import { xAPISendStatement } from "@/utils/xapi/xAPISendStatement";


export default function ResetPassword() {
    const userData = useStore((state) => state.userData);
    const [setErrorMessage] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted] = useState(false);
    const [newPassword] = useState({
        password: '',
        retypePassword: '',
      });

    function handleSubmit(event){
        if (newPassword.password && newPassword.retypePassword){
            event.preventDefault();
            if(newPassword.password === newPassword.retypePassword){
                setIsOpen(!isOpen);
            }
            else{
                setErrorMessage("Passwords do not match");
            }
        }
    }

    console.log(handleSubmit);

    useEffect(() => {
        if (isSubmitted){
            const context = {
                actor: {
                  first_name: userData?.user?.first_name || 'Anonymous',
                  last_name: userData?.user?.last_name || 'User',
                },
                verb: {
                  id: "http://example.org/verb/reset",
                  display: `Password Updated`,
                },
                object: {
                    definitionName: `Password Updated`,
                },
                resultExtName: 'https://w3id.org/xapi/ecc/result/extensions/searchTerm',
                resultExtValue: "test",
            };
            xAPISendStatement(context);
            console.log("sent");
        }
    }, [isSubmitted]);

    return (
        <DefaultLayout >
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
        {/* <h1 className='my-2 pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
            <div className='flex flex-row justify-between'>  
                Change Password
            </div> 
        </h1>

        <form className='flex flex-col mt-4 items-center' onSubmit={handleSubmit} onChange={handleUpdate}>
            <div class="grid gap-6 mb-6 w-1/3 ">
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> New Password</label>
                    <input type="password" name="password" placeholder="New Password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Re-enter New Password</label>
                    <input type="password" name="retypePassword" placeholder="Confirm New Password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
            </div>

            <div className='flex flex-row items-center justify-between w-1/3 mt-2'>
                <Button btnText={"Cancel"} link={"/profile"} className={"ml-0"}></Button>
                <button onClick={handleSubmit} type="submit" class="text-white bg-dod-500/80 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 border-dod-500 border-2 ring-dod-500 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Password</button>
            </div>
        </form>
        {isOpen && <GeneralPurposeOverlay toggleModal={setIsOpen} title={"Reset Password Confirmation"} disable={setIsSubmitted} message={"Are you sure you want to reset you password?"} path={"/profile"}/>}
        {errorMessage && <Alert message={errorMessage} toggleModal={setIsOpen}></Alert>} */}

        </div>
        </DefaultLayout>
    );
}