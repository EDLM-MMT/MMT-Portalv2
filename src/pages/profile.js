import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import Button from '@/components/buttons/Button';

export default function Profile() {
    const userData = useStore((state) => state.userData);
    console.log("user data:",userData?.learner.personnel.organization);

    return (
        <DefaultLayout >
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
        <h1 className='my-2 pb-4 border-b mt-4 text-3xl font-semibold'>
            <div className='flex flex-row justify-between'>  
                Profile
                <Button btnText={"Change Password"} link={"/resetPassword"} className={"mt-0"}></Button>
            </div> 
        </h1>

        <div className='flex flex-row justify-between'>
            <div></div>
            {userData?.role === 'Service Member' && 
            <div>
                <b className='mr-2'>Assigned ESO:</b>
                {userData?.learner.personnel.organization.assignedeso}
                
            </div> }
        </div>
        <form className='mt-4'>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={userData?.learner.personnel.person.firstName} required />
                </div>
                <div>
                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={userData?.learner.personnel.person.lastName} required />
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={userData?.learner.personnel.person.email} required />
                </div>  
                <div>
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position/Role</label>
                    <input type="text" id="position" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={userData?.role} required />
                </div>
                <div>
                    <label for="sector" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sector</label>
                    <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={userData?.learner.personnel.organization.organizationname} required />
                </div>  
                <div>
                    <label for="rank" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rank/Rating</label>
                    <input type="text" id="position" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={userData?.learner.personnel.organization.organizationidentificationcode} required />
                </div>
                <div>
                    <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                    <input type="text" id="position" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={userData?.learner.personnel.organization.location} required />
                </div>
            </div>
            <div className='flex justify-between'>
                <Button btnText={"Cancel"} link={"/dashboard"} className={"mt-0"}></Button>
                <button type="submit" class="text-white bg-dod-500/80 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
            </div>
        </form>

        </div>
        </DefaultLayout>
    );
}