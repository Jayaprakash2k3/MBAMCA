import React, { useEffect, useState } from 'react';
import LogoDark2x from "../images/logo-dark2x.png";
import {backendURL} from "../backendurl";
const PdfDisplay = () => {
  const [data,setData]=useState([]);
  const Value=(Data) => {

    console.log(css);
  return `
  <!DOCTYPE html>
  <html lang="en" dir="ltr">
  
  <head>
      <meta charset="utf-8" />
      <title>TNEA</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        content="Tailwind Multipurpose Admin & Dashboard Template"
        name="description"
      />
      <meta content="" name="Mannatthemes" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  
      <!-- App favicon -->
  
      <style>
      .watermark-container{
    opacity: 0.1;
    scale: 0.6;
    top: 50%;
    left: 50%;
    z-index:999 ;   
  }
      body {
        height: 100%;
      }
    </style>
  </head>

  <body data-layout-mode="light">
  
    <div class="sm:col-span-12  md:col-span-12 lg:col-span-12 xl:col-span-12 ">
      <div class="card">
          <div class="card-body">
              <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                  <div class="container flex flex-wrap justify-around items-center mx-auto">
                    <a href="inbox.html" class="flex items-center text-center">
                      <img class="w-20 h-20 rounded inline-block mr-2" src="${LogoDark2x}" alt="Rounded avatar">
                      <div class="container">
                        <span class="self-center text-center text-xl font-semibold whitespace-nowrap">Directorate of Technical Education - Chennai</span><br>
                        <span class="self-center text-center text-xl font-semibold whitespace-nowrap">Tamil Nadu Engineering Admission</span>
                      </div>
                    </a>
                  </div>
              </nav>
          </div><!--end card-body-->
      </div> <!--end card-->
      <div class="container-fluid my-5 flex items-center text-center justify-center">
      <h2 class="bg-green-100 text-green-800 text-2xl font-bold mr-5 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 border-4 border-green-800">DECLARATION FORM</h2>
      </div>
        <div class="card-body text-center">
            <h5 class=" font-medium text-base my-3">${Data.ccode}-${Data.can}</h5>
        </div><!--end card-body-->
   <div class="container flex items-center text-center justify-center">
   <div>
   <div class="px-4 sm:px-0">
     <h3 class="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
     <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
   </div>
   <div class="mt-6 border-t border-gray-100">
     <dl class="divide-y divide-gray-100">
       <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
         <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
         <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
       </div>
       <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
         <dt class="text-sm font-medium leading-6 text-gray-900">Application for</dt>
         <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
       </div>
       <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
         <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
         <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
       </div>
       <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
         <dt class="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
         <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
       </div>
       <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
         <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
         <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
       </div>
       <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
         <dt class="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
         <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
           <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
             <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
               <div class="flex w-0 flex-1 items-center">
                 <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                   <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                 </svg>
                 <div class="ml-4 flex min-w-0 flex-1 gap-2">
                   <span class="truncate font-medium">resume_back_end_developer.pdf</span>
                   <span class="flex-shrink-0 text-gray-400">2.4mb</span>
                 </div>
               </div>
               <div class="ml-4 flex-shrink-0">
                 <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
               </div>
             </li>
             <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
               <div class="flex w-0 flex-1 items-center">
                 <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                   <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                 </svg>
                 <div class="ml-4 flex min-w-0 flex-1 gap-2">
                   <span class="truncate font-medium">coverletter_back_end_developer.pdf</span>
                   <span class="flex-shrink-0 text-gray-400">4.5mb</span>
                 </div>
               </div>
               <div class="ml-4 flex-shrink-0">
                 <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
               </div>
             </li>
           </ul>
         </dd>
       </div>
     </dl>
   </div>
 </div>
 
   </div>
  </div>    
  </body>
  
  </html>
  `;
    }

  const getCollegeInfo =() => {
    fetch(`${backendURL}/collegeData`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        Value(data);
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCollegeInfo();
  }, []);
  useEffect(() => {
    document.open();
    document.write(Value(data));
    
    document.close();
  },[data])

  return null;
};

export default PdfDisplay;
