import fetchPizza from "@/app/_api/pizza/fetch";
import { Suspense } from "react";
import Link from "next/link";
import Loading from "./loading";
import Image from "next/image";
import fetchBeans from "@/app/_api/beans/fetch";
import fetchFish from "@/app/_api/fish/fetch";
import fetchTea from "@/app/_api/tea/fetch";
import PageHeader from "@/app/commponet/pageHeader/pageHeader";

const  landingPage = async () => {

   const PizzaRecipe = await fetchPizza();

   const beansRecipe = await fetchBeans();
   
   const fishRecipe = await fetchFish();
   
   const teaRecipe = await fetchTea();

   return (
     <main className="mx-2 lg:grid lg:grid-cols-3">
           <header className=" hidden lg:block mb-8 lg:col-span-1 lg:h-[100vh]">

           </header>
         <div className="lg:col-span-2 lg:mx-2 lg:overflow-y-scroll lg:h-[100vh]">

           <PageHeader />
            <div className="mt-8 mx-2 flex  md:justify-evenly">
                  <div className=" w-[40%] h-[30%] rounded-full p-2 shadow-lg hover:bg-green-500 hover:text-white transition duration-300 ease md:w-[20%]">
                     <Link href="./landingPage">
                        <Image
                            src={PizzaRecipe[3].image_url} 
                            alt={PizzaRecipe[3].title}
                            width={300}
                            height={100}
                            blurDataUrl="data:..."
                            placeHolder="blur" 
                            className="w-[100%] h-[150px] object-cover shadow-sm rounded-full "
                        />
                        <p className="mt-8 text-sm  capitalize text-center md:text-xl">pizza</p>
                      </Link>
                  </div>
                  <div className="2 w-[40%] rounded-full p-2 ml-2 shadow-lg hover:bg-green-500 hover:text-white transition duration-300 ease md:w-[20%]">
                     <Link href="./beansPage">
                     <Image 
                        src={beansRecipe[6].image_url} 
                        alt={beansRecipe[6].title}
                        width={300}
                        height={100}
                        blurDataUrl="data:..."
                        placeHolder="blur" 
                        className="w-[100%] h-[150px] object-cover  shadow-sm rounded-full"
                     />
                        <p className="mt-8 text-sm  capitalize text-center md:text-xl">beans</p>
                     </Link>
                  </div>
                  <div className=" w-[40%] rounded-full p-2 ml-2 shadow-lg hover:bg-green-500 hover:text-white transition duration-300 ease md:w-[20%]">
                     <Link href="./fishPage">
                        <Image 
                           src={fishRecipe[9].image_url} 
                           alt={fishRecipe[8].title}
                           width={300}
                           height={100}
                           blurDataUrl="data:..."
                           placeHolder="blur" 
                           className="w-[100%] h-[150px] object-cover  shadow-sm rounded-full "
                        />
                        <p className="mt-8 text-sm  capitalize text-center md:text-xl">Fish</p>
                     </Link>
               </div>
               <div className="w-[40%] rounded-full p-2 ml-2 shadow-lg hover:bg-green-500 hover:text-white transition duration-300 ease md:w-[20%]">
                  <Link href="./teaPage">
                     <Image 
                        src={teaRecipe[1].image_url} 
                        alt={teaRecipe[1].title}
                        width={300}
                        height={100}
                        blurDataUrl="data:..."
                        placeHolder="blur" 
                        className="w-[100%] h-[150px] object-cover  shadow-sm rounded-full"
                     />
                     <p className="mt-8 text-sm  capitalize text-center md:text-xl">Tea</p>
                  </Link>
               </div>
            </div>
            <Suspense fallback={<Loading />}>
               <div className="md:grid md:grid-cols-2 md:gap-5">

                  {PizzaRecipe.map(pizza => {
                     const {publisher,image_url,title,id} = pizza;
                     return (
                           <div key={pizza.id}>
                              <Link href={`./landingPage/${pizza.id}`} className="flex justify-evenly capitalize  mt-5 rounded-md shadow-md" >
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
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                           <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                           </svg>
                                       </span>
                                          <p>{publisher}</p>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                                       </span>
                                    </div>

                                    <div className="flex font-bold text-md">
                                       <p>minimum order :</p>
                                       <svg className="w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                     </svg>
                                    <p>15</p>
                                    </div>
                                 </div>
                              </Link>
                           </div>
                     )
                  })}
               </div>
            </Suspense>
         </div>

     </main>
  );
};
export default landingPage;