import Link from "next/link";

const ForgetPassword = () => {
  return (
     <main className="mx-2 md:mt-[30%] md:flex md:mx-3 md:items-center">
       <div className="mt-[20%] md:w-[100%] flex flex-col justify-center items-center" >
        <div className="mr-[70%]">
            <Link href="./login">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    class="size-6"
                >
                <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" 
                />
                </svg>
            </Link>
        </div>
        <h1 className="text-xl font-bold font-mono capitalize mt-[2%]">Enter your email for reset </h1>

            <div className="flex flex-col w-[68%] border border-gray-300">
                <input
                    type="email"
                    placeholder="Enter your email..."
                    className="w-[100%] p-1  text-lg font-bold px-1 rounded-md ml-1 text-black border"
                />
            </div>
            <button className="mt-3 p-2 w-[80%] rounded-lg mx-[10%] text-white capitalize font-semibold bg-green-400">
                    reset password
            </button>
       </div>
     </main>
  );
};
export default ForgetPassword;