/**
 *
 * Table component
 * @note on click requires a function to be passed in and the name of the primary key
 * @returns
 */

import { useRouter } from "next/router";

export default function BarGraphTable({
    rowsData,
    columnTitles,
}) {
    const router = useRouter();

    const handleView = (e) =>{
        router.push("/programAdmin/loginHistory");
    }

    const handleReset = () =>{
        router.push("/resetPassword"); 
    }

    const handleCareerCounseling = () =>{
        router.push("/serviceMember/counseling/ComputerScience"); 
    }

    const handleDelete = () =>{
        console.log("delete row")
    }

    return (
        <div className='px-4 sm:px-6 lg:px-8'>
            <div className='mt-8 flex flex-col'>
                <div className='-my-2 -mx-4 sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle'>
                        <div className='shadow ring-1 ring-black ring-opacity-5'>
                            <table
                                className='w-full border-separate '
                                style={{ borderSpacing: 0 }}
                            >
                                <thead className='bg-gray-50 '>
                                    <tr>
                                        {columnTitles.length > 0 && columnTitles.map((eachTitle, index) => (
                                            eachTitle['number']=index,
                                            <th
                                                key={eachTitle.number}
                                                scope='col'
                                                className='text-lg sticky top-0 z-10 hidden border-b
                                                 border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                                  text-left font-semibold text-gray-900 backdrop-blur
                                                   backdrop-filter sm:table-cell'
                                            >
                                                {eachTitle}
                                            </th>
                                        ))} 
                                    </tr>
                                </thead>
                                <tbody className='bg-white text-left '>
                                    {rowsData?.length > 0 &&
                                        rowsData.map((row, index) => {
                                            row['number']=index
                                            return (
                                                <tr
                                                    key={row.number}
                                                    className=' even:bg-gray-50 group'
                                                >
                                                    {row.map((eachItem, rindex) => (
                                                        eachItem['number']=rindex,
                                                        <td key={eachItem.number} className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2 '>
                                                            {(eachItem === "View") && <button onClick={handleView} className="text-blue-700 ml-5">{(eachItem)} </button>}
                                                            {(eachItem === "Reset") && <button onClick={handleReset} className="text-blue-700 ml-5">{(eachItem)} </button>}
                                                            {(eachItem === "Go To Counseling") && <button onClick={handleCareerCounseling} className="text-blue-700">{(eachItem)} </button>}
                                                            {(eachItem === "Delete") && <button onClick={handleDelete} className="text-blue-700">{(eachItem)} </button>}
                                                            {(eachItem !== "View" && eachItem !== "Reset" && eachItem !== "Go To Counseling" && eachItem !== "Delete") && (eachItem || '-')}

                                                        </td>
                                                    ))}
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                            {rowsData?.length === 0 && (
                                <div className='text-center text-gray-600 w-full'>
                                    No data found
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
