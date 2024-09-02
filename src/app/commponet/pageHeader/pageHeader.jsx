import DarkMode from "../darkMode";


const PageHeader = () => {
  return (
        <main className="flex  justify-between mx-2">
            <h1 className="capitalize mt-8 font-bold text-3xl lg:mt-2 lg:text-4xl">
                  near restaurants
            </h1>
            <div className="mt-2 md:mt-0">
                <DarkMode />
            </div>
        </main>
  );
};
export default PageHeader;