
export default function ESOCommentsTable({ESOComments}) {


    return(
        <div className='mt-8'>
            <table className='w-full border-separate border' style={{ borderSpacing: 0 }}>
                <thead className='bg-gray-50 '>
                    <tr>
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                text-left font-semibold text-gray-900 backdrop-blur
                                backdrop-filter sm:table-cell'
                            >
                                Date
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                 text-left font-semibold text-gray-900 backdrop-blur
                                  backdrop-filter sm:table-cell'
                           >
                                Purpose
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Comments
                            </th>       
                    </tr>
                </thead>
                {ESOComments?.map((comment, index) => ( 
                    <tr key={comment.id || index} className=' even:bg-gray-50 group'>
                        <td className='pl-2 p-2 '>{comment.date}</td>
                        <td className='pl-2'>{comment.purpose}</td>
                        <td className='pl-2'>{comment.comment}</td>
                    </tr>
                ))}
            </table>
        </div>

    )
}