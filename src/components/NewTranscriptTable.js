"use client";

import { axiosxapiInstance } from "@/config/axiosConfig";
import { xapiUsers } from "@/config/endpoints";
import { ArrowDownIcon, ChevronDownIcon, FolderDownloadIcon, TableIcon } from "@heroicons/react/solid";
import { Checkbox, Table, Label, Progress, TableCell, Pagination, Tabs } from "flowbite-react";
import { useEffect, useState } from "react";



export var users = [];

export function NewTranscriptTable() {

    // const [talentData, setTalentData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => setCurrentPage(page);


    const data = [
        { firstName: 'Linh', lastName: "Tran", dob: "9 SEP 1991", status: "New", branch: "Army", receivedOn: "29 MAR 2024", downloadDate: "30 MAR 2024", downloadBy: "Emma Hobert", requestedBy: "Service Member" },
        { firstName: 'Alex', lastName: "Flavio", dob: "20 JAN 1989", status: "New", branch: "Navy", receivedOn: "29 MAR 2024", downloadDate: "30 MAR 2024", downloadBy: "Emma Hobert", requestedBy: "Service Member" },
        { firstName: 'Mark', lastName: "Nguyen", dob: "1 DEC 1980", status: "New", branch: "Navy", receivedOn: "29 MAR 2024", downloadDate: "30 MAR 2024", downloadBy: "Emma Hobert", requestedBy: "Institution" },
        { firstName: 'Themba', lastName: "Eurja", dob: "30 JUN 1991", status: "New", branch: "Army", receivedOn: "29 MAR 2024", downloadDate: "30 MAR 2024", downloadBy: "Emma Hobert", requestedBy: "Institution" },
        { firstName: 'Anastasia', lastName: "Nguyen", dob: "20 JUL 1982", status: "New", branch: "Army", receivedOn: "29 MAR 2024", downloadDate: "30 MAR 2024", downloadBy: "Emma Hobert", requestedBy: "Institution" },
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
                {/* <!-- Start coding here --> */}
                <div class="overflow-x-auto sm:justify-center bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden mb-8">
                    {/* <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div class="w-full md:w-1/2">
                            <form class="flex items-center">
                                <label for="simple-search" class="sr-only">Search</label>
                                <div class="relative w-full">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <Tabs aria-label="Default tabs" variant="underline">
                        <Tabs.Item active title="Profile">
                            This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
                            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                            control the content visibility and styling.
                        </Tabs.Item>
                        <Tabs.Item title="Dashboard">
                            This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
                            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                            control the content visibility and styling.
                        </Tabs.Item>
                    </Tabs> */}
                    <div class="w-full md:w-auto flex flex-col pl-2 md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center md:space-x-2 flex-shrink-0">
                        <div class="flex items-center space-x-2 w-full size-20 text-xs md:w-auto">
                            <div className=" mb-2 overflow-hidden font-medium rounded-lg bg-gradient-to-r from-purple to-blue-custom from-accent-blue to-purple">
                                <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-small text-white focus:outline-none bg-purple opacity-50 rounded-lg border border-gray-200 hover:bg-purple hover:opacity-50 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-800 dark:text-black-400 dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-700" type="button">
                                    <FolderDownloadIcon className="pr-1 h-4" />
                                    Download
                                    <ChevronDownIcon className="pl-1 h-6" />
                                </button>
                            </div>
                            <div className="font-semibold">Filters</div>

                            <div id="actionsDropdown" class="hidden z-2 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                                    <li>
                                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                                    </li>
                                </ul>
                                <div class="py-1">
                                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
                                </div>
                            </div>
                            <div className="p-0.5 mb-2 overflow-hidden font-medium rounded-lg bg-gradient-to-r from-purple to-blue-custom from-accent-blue to-purple">
                                <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full md:w-auto flex  py-2 px-2 font-small text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                    Added Last 30 Days
                                    <svg class=" w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-r from-purple to-blue-custom from-accent-blue to-purple">
                                <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-2 font-small text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">

                                    Status
                                    <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-0.5 mb-2 overflow-hidden font-medium rounded-lg bg-gradient-to-r from-purple to-blue-custom from-accent-blue to-purple">
                                <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-2 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">

                                    Service Branch
                                    <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-0.5 mb-2 overflow-hidden font-medium rounded-lg bg-gradient-to-r from-purple to-blue-custom from-accent-blue to-purple">
                                <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">

                                    Downloaded by
                                    <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-0.5 mb-2 overflow-hidden font-medium rounded-lg bg-gradient-to-r from-purple to-blue-custom from-accent-blue to-purple">
                                <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">

                                    Requested By
                                    <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-0.5 mb-2 overflow-hidden font-medium rounded-lg">
                                <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 font-medium text-purple ring-white outline-white focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-primary-700 dark:bg-gray-800 dark:text-gray-400  dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                    Clear Filter
                                </button>
                            </div>
                            <div className="p-0.5 mb-2 overflow-hidden font-medium rounded-lg bg-gradient-to-r from-purple to-blue-custom from-accent-blue to-purple">
                                <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 font-medium text-purple focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                    <TableIcon className="pl-1 h-6" />
                                    Export to Excel
                                </button>
                            </div>
                            <div id="filterDropdown" class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                                <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
                                <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                    <li class="flex items-center">
                                        <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="fitbit" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="fitbit" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Microsoft (16)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="razor" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="razor" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Razor (49)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="nikon" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="nikon" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Nikon (12)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="benq" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="benq" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">BenQ (74)</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-4 py-3"></th>
                                    <th scope="col" class="px-4 py-3">First Name</th>
                                    <th scope="col" class="px-4 py-3">Last Name</th>
                                    <th scope="col" class="px-4 py-3">DOB</th>
                                    <th scope="col" class="px-4 py-3">Status</th>
                                    <th scope="col" class="px-4 py-3">Branch</th>
                                    <th scope="col" class="px-4 py-3">Received On</th>
                                    <th scope="col" class="px-4 py-3">Download On</th>
                                    <th scope="col" class="px-4 py-3">Downloaded By</th>
                                    <th scope="col" class="px-4 py-3">Requested By</th>
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
                                            <td class="px-4 py-3">{data.dob}</td>
                                            <td class="px-4 my-3">
                                                <div className="bg-blue-200 rounded p-1 font-semibold text-center">
                                                    {data.status}
                                                </div>
                                            </td>
                                            <td class="px-4 py-3">{data.branch}</td>
                                            <td class="px-4 py-3">{data.receivedOn}</td>
                                            <td class="px-4 py-3">{data.downloadDate}</td>
                                            <td class="px-4 py-3">{data.downloadBy}</td>
                                            <td class="px-4 py-3">{data.requestedBy}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                    <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Showing
                            <span class="font-semibold text-gray-900 dark:text-white"> 1-5 </span>
                            of
                            <span class="font-semibold text-gray-900 dark:text-white"> 5</span>
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
                                <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span class="sr-only">Next</span>
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* <div className="flex overflow-x-auto sm:justify-center">
                <Pagination layout="table" currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
            </div> */}
                </div>
            </div>
        </>
    );
}
