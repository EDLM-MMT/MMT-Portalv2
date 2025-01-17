"use client";

import { useState } from "react";
import GraySecondaryButton from "./GraySecondaryButton";

export const users = [];
export function AdminUsersTable() {



    const data = [
        { firstName: 'Linh', lastName: "Tran", email: "linh.tran@mmt.edu", dateAdded: "December 2, 2024 1:45 PM" },
    ];



    return (
        <>
            <div className="mx-auto max-w-screen-xl">
                <div className="overflow-x-auto sm:justify-center bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden mb-8">

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-4 py-3"></th>
                                    <th scope="col" className="px-4 py-3">First Name</th>
                                    <th scope="col" className="px-4 py-3">Last Name</th>
                                    <th scope="col" className="px-4 py-3">Email</th>
                                    <th scope="col" className="px-4 py-3">Date Added</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((data, index) => {
                                    return (
                                        <tr className="border-b dark:border-gray-700" key={data.sentTo}>
                                            <li className="flex mt-3 justify-center">
                                                <input id="chkbx" type="checkbox" value="" className="px-2 py-2 h-4 w-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            </li>
                                            <td className="px-4 py-3">{data.firstName}</td>
                                            <td className="px-4 py-3">{data.lastName}</td>
                                            <td className="px-4 py-3">{data.email}</td>
                                            <td className="px-4 py-3">{data.dateAdded}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                    <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Showing
                            <span className="font-semibold text-gray-900 dark:text-white"> 1 </span>
                            of
                            <span className="font-semibold text-gray-900 dark:text-white"> 1</span>
                        </span>
                        <ul className="inline-flex items-stretch -space-x-px">
                            <li>
                                <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Previous</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">1</a>
                            </li>

                            <li>
                                <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Next</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex justify-end gap-5">
                    <GraySecondaryButton buttonLabel={"Save"} />
                    <GraySecondaryButton buttonLabel={"Delete"} />
                </div>
            </div>
        </>
    );
}
