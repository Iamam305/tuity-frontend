import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <> 
      <Sidebar />
      <Navbar />
      <div className=" md:ml-4/12  lg:ml-[25%] xl:ml-[20%] 2xl:ml-[15%] p-4">
       
        {children}
        
      </div>
    </>
  );
};

export default AdminLayout;
