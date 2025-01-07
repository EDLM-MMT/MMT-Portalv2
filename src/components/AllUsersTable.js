"use client";

import { axiosxapiInstance } from "@/config/axiosConfig";
import { xapiUsers } from "@/config/endpoints";
import { ArrowDownIcon, ChevronDownIcon, FolderDownloadIcon, TableIcon } from "@heroicons/react/solid";
import { Checkbox, Table, Label, Progress, TableCell, Pagination, Tabs } from "flowbite-react";
import { useEffect, useState } from "react";
import Button from "./Button";
import GraySecondaryButton from "./GraySecondaryButton";
import { PlusIcon } from "@heroicons/react/outline";



export var users = [];

export function AllUsersTable() {

    // const [talentData, setTalentData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => setCurrentPage(page);


    const data = [
        { firstName: 'Linh', lastName: "Tran", email: "linh.tran@mmt.edu", dateAdded: "December 2, 2024 1:45 PM" },
        { firstName: 'Alex', lastName: "Flavio", email: "alex.flavio@mmt.edu", dateAdded: "December 2, 2024 1:45 PM" },
        { firstName: 'Mark', lastName: "Nguyen", email: "mark.nguyen@mmt.edu", dateAdded: "December 2, 2024 1:45 PM" },
        { firstName: 'Themba', lastName: "Eurja", email: "themba.eurja@mmt.edu", dateAdded: "December 2, 2024 1:45 PM"},
        { firstName: 'Anastasia', lastName: "Nguyen", email: "anastasia.nguyen@mmt.edu", dateAdded: "December 2, 2024 1:45 PM"},
        { firstName: 'Uty', lastName: "Coogan", email: "uty.coogan@mmt.edu", dateAdded: "December 2, 2024 1:45 PM"},
        { firstName: 'Olongo', lastName: "Shernick", email: "olongo.shernick@mmt.edu", dateAdded: "December 2, 2024 1:45 PM"},
        { firstName: 'Jeffery', lastName: "Snowman", email: "jeffery.snowman@mmt.edu", dateAdded: "December 2, 2024 1:45 PM"},
        { firstName: 'Leon', lastName: "Becker", email: "leon.becker@mmt.edu", dateAdded: "December 2, 2024 1:45 PM"},
        { firstName: 'Ember', lastName: "Muzuyka", email: "ember.muzuyka@mmt.edu", dateAdded: "December 2, 2024 1:45 PM"},
    ];

    // useEffect(() => {
    //     axiosxapiInstance
    //     .get(xapiUsers)
    //     .then((res) => {
    //         setTalentData(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, []);


    function updateUsers(event) {
        var index = users.indexOf(event.target.name)
        if (index >= 0) {
            users.splice(index, 1);
        } else {
            users.push(event.target.name);
        }
    }

    return (
        <>
            <div class="mx-auto max-w-screen-xl">
                <div class="overflow-x-auto sm:justify-center bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden mb-8">

                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-4 py-3"></th>
                                    <th scope="col" class="px-4 py-3">First Name</th>
                                    <th scope="col" class="px-4 py-3">Last Name</th>
                                    <th scope="col" class="px-4 py-3">Email</th>
                                    <th scope="col" class="px-4 py-3">Date Added</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((data, index) => {
                                    return (
                                        <tr class="border-b dark:border-gray-700" key={data.sentTo}>
                                            <li class="flex mt-3 justify-center">
                                                <input id="chkbx" type="checkbox" value="" className="px-2 py-2 h-4 w-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            </li>
                                            <td class="px-4 py-3">{data.firstName}</td>
                                            <td class="px-4 py-3">{data.lastName}</td>
                                            <td class="px-4 py-3">{data.email}</td>
                                            <td class="px-4 py-3">{data.dateAdded}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                    <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Showing
                            <span class="font-semibold text-gray-900 dark:text-white"> 1-10 </span>
                            of
                            <span class="font-semibold text-gray-900 dark:text-white"> 10</span>
                        </span>
                        <ul class="inline-flex items-stretch -space-x-px">
                            <li>
                                <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span class="sr-only">Previous</span>
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">1</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">20</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span class="sr-only">Next</span>
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
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
