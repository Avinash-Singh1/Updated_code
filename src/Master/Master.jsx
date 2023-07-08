import React, { useContext } from 'react'
import Sidebar from './MasterComponent/Sidebar';
import Content from './MasterComponent/Content';
import Navbar from './MasterComponent/Navbar';
import Footer from './MasterComponent/Footer';

function Master() {

    
  return (

    <div className="container-fluid position-relative d-flex p-0">
       <div className="content">


    {/* <!-- Spinner Start --> */}
    {/* <div id="spinner" className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{width:"3rem", height: "3rem"}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div> */}
    {/* <!-- Spinner End --> */}



     {/* <!-- Navbar Start --> */}
     <Navbar/>
        {/* <!-- Navbar End --> */}

    {/* <!-- Sidebar Start --> */}
        <Sidebar/>
    {/* <!-- Sidebar End --> */}

    {/* <!-- Content Start --> */}
        <Content/>
    {/* <!-- Content End --> */}

    {/* <!-- Back to Top --> */}


        {/* <!-- Footer Start --> */}
            <Footer/>
        {/* <!-- Footer End --> */}
       </div>
</div>

  )
}

export default Master