"use client"
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SignUp = () => {
    const [email,setEmail] = useState("")
    const [pwd,setPwd] = useState("")
    const [result,setResult] = useState({})
    const [error,setError] = useState(false)
    const [data,setData] = useState({})
    const [errorMessage,setErrorMessage] = useState("");


    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        // Update state with new input value
        
        setEmail(emailValue);
      };

    const handlePwdChange = (e) => {
        const pwdValue = e.target.value;
        // Update state with new input value
        setPwd(pwdValue);
      };

      useEffect(() => {
        if(email === "" || !email.includes("@gmail.com") || pwd === "" || pwd.length < 8 ) {
            setError(false)
            
        } else {
            setError(true)
        }

      },[email,pwd])

      const handleSubmit = () => {
         setResult({
            email,
            pwd
         })
         setEmail("")
         setPwd("")
        
        // You can add form validation or further processing here
        if(typeof window !== 'undefined') {
            const storeData = localStorage.getItem('userInfo');
            if(storeData) {
               setData(JSON.parse(storeData));
            }
        }
    };

    useEffect(() => {
        const userEmail = data.email;
        const userPwd = data.pwd;
        const resultEmail = result.email;
        const resultPwd = result.pwd;
        if(resultEmail !== userEmail || resultPwd !== userPwd) {
            if(typeof window !== 'undefined') {
                localStorage.setItem('userInfo', JSON.stringify(result));
                window.location.href = "./project-folder/landingPage";
              
            };
        } else {
            setErrorMessage("if you sign up and you were not redirected please login")
        }
        
    },[result,data])


      



  return (
    <main>
        <main className="mx-2 md:mt-[10%] md:flex md:mx-3 md:items-center">
            <div className="hidden md:block md:w-[55%] md:mt-[16%] lg:mt-[5%]">
                    <Link href="#" className="p-2 flex items-center border border-gray-400 w-[70%]  rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-5" ><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                        <h1 className="ml-3 capitalize font-bold text-xl ">
                            signUp with google
                        </h1>
                    </Link>
                    <Link href="#" className="p-2 flex items-center border border-gray-400 w-[70%] mt-[6%] rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-5" ><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                        <h1 className="ml-3 capitalize font-bold text-xl">
                            signUp with github
                        </h1>
                    </Link>
            </div>
            <div className="mt-[20%] md:w-[45%]" >
                <h1 className="text-xl font-bold font-mono capitalize mt-[2%]">welcome to quick recipe</h1>

                    <div className="flex flex-col w-[98%]">
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            value={email}
                            onChange={handleEmailChange}
                            className="w-[100%] p-1  text-lg font-bold px-1 rounded-md ml-1 text-black border"
                        />
                        <input
                            type="password"
                            placeholder="enter your password..."
                            value={pwd}
                            onChange={handlePwdChange}
                            className="w-[100%] p-1 text-lg font-bold px-1 rounded-md ml-1 text-black mt-[3%] border"
                        />
                        <div className=" w-[100%] h-3 rounded-full mt-3 mb-3 capitalize font-semibold ">
                            <p className='text-red-400'>{errorMessage}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center capitalize mt-[2%]">
                        <p className="font-semibold">have an account <Link href="./login" className="text-green-500 font-bold font-mono" > login</Link></p>
                        <Link href="./forgotPassword" className="text-green-500 font-bold font-mono">forgot password</Link>
                    </div>
                    <div className="flex items-center w-[25%] mt-[2%] justify-between md:hidden">
                        <Link href="#" className="p-2 bg-green-400 rounded-md ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-5" ><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                        </Link>
                        <Link href="#" className="p-2 bg-green-400 rounded-md ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-5" ><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                        </Link>
                    </div>
                    { error ? (
                        <button className= " mt-3 p-2 w-[80%] rounded-lg mx-[10%] text-white capitalize font-semibold bg-green-400"onClick={handleSubmit}>
                        sign Up
                        </button>
                        ) : (
                        <button className= " hidden mt-3 p-2 w-[80%] rounded-lg mx-[10%] text-white capitalize font-semibold bg-green-400"onClick={handleSubmit}>
                        sign Up
                        </button>
                        )
                    }
            </div>
        </main>
    </main>
  );
};
export default SignUp;