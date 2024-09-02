import Link from "next/link";

export default function Home() {
  return (
      <main className="bg-fixed bg-cover bg-center h-screen relative" style={{ backgroundImage: "url('./image/InkedScreenshot_20240819_015822_Opera Mini_LI.jpg')" }}>
         <Link className="absolute top-[90%] ml-[10%] border-2 bg-white rounded-lg capitalize p-3 w-[80%] text-xl text-center text-green-700 font-bold" href="./project-folder/landingPage"> lets start</Link>
      </main>
  );
}
// md:bg-[url('/path/to/medium-image.jpg')] lg:bg-[url('/path/to/large-image.jpg')]