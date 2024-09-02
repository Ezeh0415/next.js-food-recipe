import { Suspense } from "react";
import Loading from "./loading";
import Search from "../search";
import PageHeader from "@/app/commponet/pageHeader/pageHeader";

const  searchPage = async () => {

   return (
     <main className="mx-2 lg:grid lg:grid-cols-3 lg:overflow-hidden lg:h-[100vh]">
         <header className=" hidden lg:block mb-8 lg:col-span-1 lg:h-[100vh] lg:bg-gray-200">

         </header>
         <div className="lg:col-span-2 lg:mx-2 lg:overflow-y-scroll lg:h-[100vh]">

            <PageHeader />
            <div className=" lg:h-[100vh]  bg-gray-200 text-black dark:bg-gray-800 dark:text-white">
            <Suspense fallback={<Loading />}>
                <Search />
            </Suspense>
            </div>
         </div>

     </main>
  );
};
export default searchPage;