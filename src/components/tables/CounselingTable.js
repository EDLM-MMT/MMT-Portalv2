import { useState, useEffect } from "react";
import Checkbox from "../Checkbox";

export default function CounselingTable({coursePlan}) {

    const [checkedState, setCheckedState] = useState(
        new Array(coursePlan.length).fill(false)
    );
    const [courseTable, setCourseTable] = useState([])
    console.log("coursePlan: ",coursePlan)
    console.log("courseTable: ",courseTable)

    useEffect(() => {
        setCourseTable(coursePlan)
    }, [coursePlan]);



    const handleChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    };
    
    const handleDelete = (courseIndex,e) =>{
        setCourseTable(courseTable.filter((course,i) => i !== courseIndex));
        //setIsOpen(true)
    }

    return(
        <div>
            <table className='w-full border-separate border' style={{ borderSpacing: 0 }}>
                <thead className='bg-gray-50 '>
                    <tr>
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                text-left font-semibold text-gray-900 backdrop-blur
                                backdrop-filter sm:table-cell'
                            >
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                 text-left font-semibold text-gray-900 backdrop-blur
                                  backdrop-filter sm:table-cell'
                           >
                                Course Number
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Course Name
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Required
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Credit Hours
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Projected Semester
                            </th>     
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Status
                            </th>       
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                               Delete 
                            </th>                      
                    </tr>
                </thead>
                {(coursePlan.length !== 0) ? (courseTable.map((course, index) => ( 
                            <tr key={course.id || index} className=' even:bg-gray-50 group'>
                                {}
                                <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2'>
                                    <label>
                                        {/* <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        checked={checkedState[index]}
                                        onChange={() => handleChange(index)}
                                        /> */}
                                        <Checkbox 
                                            label=""
                                            value={checkedState[index]}
                                            onChange={() => handleChange(index)}
                                            index={index}
                                            testid={`test-${course.course_number}`}
                                        />
                                    </label></td>
                                <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2'>{course.course_number}</td>
                                <td className='pl-2'>{course.course_name}</td>
                                <td className='pl-2'>{course.required}</td>
                                <td className='pl-12'>{course.credit_hours}</td>
                                <td className='pl-2'>{course.projected_semester}</td>
                                <td className='pl-2'>{course.status}</td>
                                <td><button data-testid={"delete-button"} onClick={(e) => handleDelete(index,e)} className="text-blue-700 pl-2">Delete</button></td>
                            </tr>
                ))):(
                    <tr key={0}>
                        <td className='text-sm font-medium text-gray-900'></td>
                        <td></td>
                        <td></td>
                        <td >
                            <div className='justify-center m-2 font-light text-gray-600'>
                                No courses found
                            </div>
                        </td>
                    </tr>
                    )}
            </table>
        </div>

    )
}