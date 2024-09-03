"use client"

import { fetchSearch } from "@/app/_api/fetch";
import { Suspense, useState } from "react";
import Loading from "./loading";
import Link from "next/link";
import Image from "next/image";

 const Search = () => {
    
    const [query, setQuery] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [emptyText, setEmptyText] = useState(true);

    const handleSearch = (e) => {
      const value = e.target.value;
      setQuery(value);
    };;

    const handleClick = async () => {
      setLoading(true); 
      setResult(null);
      setEmptyText(false)
      try {
        const searchResults = await fetchSearch(query);
        setResult(searchResults);
      } catch (err) {
         throw new Error("Failed to fetch search results. Please try again.");
      } finally {
        setQuery("")
        setLoading(false)
      }
   };
    
    

  return (
   <main className="lg:h-[100vh] lg:overflow-y-scroll">

    <div className=" lg:mx-2 lg:overflow-y-scroll">

    <div className="flex  mt-2 p-2 shadow-md rounded-lg mb-5">
                 <div className="bg-green-600 text-white p-1 rounded-lg" >
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
                 </div>
            
                 <input
                     type="text"
                     value={query}
                     onChange={handleSearch}
                     placeholder="Search..."
                     className="w-[100%] p-1 outline-none text-lg font-bold px-1 rounded-md ml-1 text-black"
                 />

                 <div className="p-1" onClick={handleClick}>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                 </svg>   
                 </div>

    </div>
    
    <Suspense fallback={<Loading />}>
       {loading &&  
          <div className=" w-[100%] md:grid md:grid-cols-2 md:gap-5 mt-3">
            <div>
            {/* /* From Uiverse.io by sahilxkhadka */}
               <div class="relative flex w-[100%] animate-pulse gap-2 p-4">
                  <div class="h-12 w-12 rounded-full bg-slate-400"></div>
                  <div class="flex-1">
                  <div class="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
                  <div class="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
                  </div>
                  <div class="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
            </div>
            </div>
            <div>
            {/* /* From Uiverse.io by sahilxkhadka */}
               <div class="relative flex w-[100%] animate-pulse gap-2 p-4">
                  <div class="h-12 w-12 rounded-full bg-slate-400"></div>
                  <div class="flex-1">
                  <div class="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
                  <div class="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
                  </div>
                  <div class="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
            </div>
            </div>
            <div>
            {/* /* From Uiverse.io by sahilxkhadka */}
               <div class="relative flex w-[100%] animate-pulse gap-2 p-4">
                  <div class="h-12 w-12 rounded-full bg-slate-400"></div>
                  <div class="flex-1">
                  <div class="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
                  <div class="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
                  </div>
                  <div class="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
            </div>
            </div>
            <div>
            {/* /* From Uiverse.io by sahilxkhadka */}
               <div class="relative flex w-[100%] animate-pulse gap-2 p-4">
                  <div class="h-12 w-12 rounded-full bg-slate-400"></div>
                  <div class="flex-1">
                  <div class="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
                  <div class="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
                  </div>
                  <div class="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
            </div>
            </div>
            <div>
            {/* /* From Uiverse.io by sahilxkhadka */}
               <div class="relative flex w-[100%] animate-pulse gap-2 p-4">
                  <div class="h-12 w-12 rounded-full bg-slate-400"></div>
                  <div class="flex-1">
                  <div class="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
                  <div class="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
                  </div>
                  <div class="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
            </div>
            </div>
            <div>
            {/* /* From Uiverse.io by sahilxkhadka */}
               <div class="relative flex w-[100%] animate-pulse gap-2 p-4">
                  <div class="h-12 w-12 rounded-full bg-slate-400"></div>
                  <div class="flex-1">
                  <div class="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
                  <div class="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
                  </div>
                  <div class="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
            </div>
            </div>
            <div>
            {/* /* From Uiverse.io by sahilxkhadka */}
               <div class="relative flex w-[100%] animate-pulse gap-2 p-4">
                  <div class="h-12 w-12 rounded-full bg-slate-400"></div>
                  <div class="flex-1">
                  <div class="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
                  <div class="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
                  </div>
                  <div class="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
            </div>
            </div>
            <div>
            {/* /* From Uiverse.io by sahilxkhadka */}
               <div class="relative flex w-[100%] animate-pulse gap-2 p-4">
                  <div class="h-12 w-12 rounded-full bg-slate-400"></div>
                  <div class="flex-1">
                  <div class="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
                  <div class="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
                  </div>
                  <div class="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
            </div>
            </div>
            <div>
            {/* /* From Uiverse.io by sahilxkhadka */}
               <div class="relative flex w-[100%] animate-pulse gap-2 p-4">
                  <div class="h-12 w-12 rounded-full bg-slate-400"></div>
                  <div class="flex-1">
                  <div class="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
                  <div class="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
                  </div>
                  <div class="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
            </div>
            </div>
            <div>
            {/* /* From Uiverse.io by sahilxkhadka */}
               <div class="relative flex w-[100%] animate-pulse gap-2 p-4">
                  <div class="h-12 w-12 rounded-full bg-slate-400"></div>
                  <div class="flex-1">
                  <div class="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
                  <div class="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
                  </div>
                  <div class="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
            </div>
            </div>
            <div>
            {/* /* From Uiverse.io by sahilxkhadka */}
               <div class="relative flex w-[100%] animate-pulse gap-2 p-4">
                  <div class="h-12 w-12 rounded-full bg-slate-400"></div>
                  <div class="flex-1">
                  <div class="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
                  <div class="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
                  </div>
                  <div class="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
            </div>
            </div>
          </div>
       }
       <div className="md:grid md:grid-cols-2 md:gap-5  bg-gray-200 text-black dark:bg-gray-800 dark:text-white">
       {result ? (
                     result.map((recipe) => {
                     const { publisher, image_url, title, id } = recipe;
                     return (
                     <div
                        className="flex justify-evenly capitalize mt-5 rounded-md shadow-md"
                        key={id}
                     >
                        <Link href=""  className="flex justify-evenly capitalize mt-5  rounded-md shadow-md"> 
                           <div className="w-[30%] p-2">
                                    <Image 
                                       src={image_url} 
                                       alt={title}
                                       width={300}
                                       height={100}
                                       blurDataURL="data:..."
                                       placeholder="blur"
                                       className="object-cover rounded-md w-[200px] h-[100px]" 
                                    />
                           </div>

                           <div className="mt-1 w-[65%]">
                              <h2 className="mb-2 text-sm md:text-lg font-bold">{title}</h2>
                              <div className="flex justify-around mb-2 text-gray-500">
                              <span>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    class="size-6" // Changed to className
                                 >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                    />
                                 </svg>
                              </span>
                              <p>{publisher}</p>
                              <span>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    class="size-6" // Changed to className
                                 >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                 </svg>
                              </span>
                              </div>

                              <div class="flex font-bold text-md">
                              <p>minimum order :</p>
                              <svg
                                 className="w-4 ml-1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 class="size-6" // Changed to className
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                 />
                              </svg>
                              <p>15</p>
                              </div>
                           </div>
                        </Link>
                     </div>
                     );
                  })
               ) : (
                  <h1 className={emptyText ? "font-bold text-center text-xl capitalize block" : "font-bold text-center text-xl capitalize hidden"}>please search to fetch recipe</h1>
               )
                  }
       </div>
    </Suspense>
    </div>

</main>
  
  );
};
export default Search;