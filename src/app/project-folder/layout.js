import Header from "../commponet/header";


export const metadata = {
  title: "HOME PAGE | NEXT APP",
  description: "Generated by create next app",
};

const Layout = ({children}) => {
  return (
    <div className="dark:bg-gray-800 dark:text-white">
      {children}
      <Header />
    </div>
  );
};
export default Layout;
