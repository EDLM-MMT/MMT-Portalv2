import { useRouter } from "next/router"
import { xAPISendStatement } from "@/utils/xapi/xAPISendStatement";

export default function DashboardCard({ title, description, buttonLabel, secondButtonLabel, dashboardImage, routePath, secondRoutePath, children, user }){
    const router = useRouter();
    const handleClick = () => {
        const context = {
            actor: {
              first_name: user?.user?.first_name || 'Anonymous',
              last_name: user?.user?.last_name || 'User',
            },
            verb: {
              id: "http://example.org/verb/explored",
              display: `Viewed ${buttonLabel}`,
            },
            object: {
                definitionName: `Viewed ${buttonLabel}`,
            },
            resultExtName: 'https://w3id.org/xapi/ecc/result/extensions/searchTerm',
            resultExtValue: "test",
        };
        xAPISendStatement(context);
        console.log("sent");
        router.push(`/${routePath}`);
    }
    const handleSecondClick = () => {
        const context = {
            actor: {
              first_name: user?.user?.first_name || 'Anonymous',
              last_name: user?.user?.last_name || 'User',
            },
            verb: {
              id: "http://example.org/verb/explored",
              display: `Viewed ${secondButtonLabel}`,
            },
            object: {
                definitionName: `Viewed ${secondButtonLabel}`,
            },
            resultExtName: 'https://w3id.org/xapi/ecc/result/extensions/searchTerm',
            resultExtValue: "test",
        };
        xAPISendStatement(context);
        console.log("sent");
        router.push(`/${secondRoutePath}`);
    }
    return(
        <div className='bg-white border h-83 rounded-md border-gray-200 p-4 shadow-lg focus:shadow-lg'>
            <h1 className='flex text-xl font-semibold h-10 mb-4 items-center justify-center align-middle border-b'>
                {title}
            </h1>
            {/* <div className="flex h-48">
                <Image src={dashboardImage} alt={'home'} />
            </div> */}
            <p className='flex px-6 pt-8 mt-4 font-sans line-clamp-6 h-28 text-center'>
                {description}
            </p>
            {children}
            {buttonLabel &&
            <div className='flex align-bottom items-bottom justify-center mt-10 mb-4'>
                <div className='inline-block align-bottom gap-2'>
                    <button
                        id={'view-course-button-'}
                        className='flex justify-center items-center gap-2 dod-500 w-64 rounded-lg hover:shadow-md text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white px-2 p-1.5 transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none'
                        title={title}
                        onClick={handleClick}
                    >
                        {buttonLabel}
                    </button>
                </div>
            </div>
            }
            {secondButtonLabel &&
            <div className='flex align-bottom items-bottom justify-center mt-5 mb-4'>
                <div className='inline-block align-bottom gap-2'>
                    <button
                        id={'view-course-button-'}
                        className='flex justify-center items-center gap-2 dod-500 w-64 rounded-lg hover:shadow-md text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white px-2 p-1.5 transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none'
                        title={title}
                        onClick={handleSecondClick}
                    >
                        {secondButtonLabel}
                    </button>
                </div>
            </div>
            }
        </div>
    )
}