import React from 'react'
import Sidebar from '../MasterComponent/Sidebar'
import Navbar from '../MasterComponent/Navbar'
import { Link, Outlet } from "react-router-dom";
import Footer from '../MasterComponent/Footer';


function Chart() {
  return (
    <>
            <div>
           <div class="container-fluid position-relative d-flex p-0">
        {/* <!-- Spinner Start --> */}
        {/* <div id="spinner" class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style={{width:3+"rem", height: 3+"rem"}} >
                <span class="sr-only">Loading...</span>
            </div>
        </div> */}
        {/* <!-- Spinner End --> */}


        {/* <!-- Sidebar Start --> */}
                <Sidebar/>
        {/* <!-- Sidebar End --> */}


        {/* <!-- Content Start --> */}
        <div class="content">
            {/* <!-- Navbar Start --> */}
                    <Navbar/>
            {/* <!-- Navbar End --> */}


            {/* <!-- Chart Start --> */}
            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary rounded h-100 p-4">
                            <h6 class="mb-4">Single Line Chart</h6>
                            <canvas id="line-chart"></canvas>
                        </div>
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary rounded h-100 p-4">
                            <h6 class="mb-4">Multiple Line Chart</h6>
                            <canvas id="salse-revenue"></canvas>
                        </div>
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary rounded h-100 p-4">
                            <h6 class="mb-4">Single Bar Chart</h6>
                            <canvas id="bar-chart"></canvas>
                        </div>
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary rounded h-100 p-4">
                            <h6 class="mb-4">Multiple Bar Chart</h6>
                            <canvas id="worldwide-sales"></canvas>
                        </div>
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary rounded h-100 p-4">
                            <h6 class="mb-4">Pie Chart</h6>
                            <canvas id="pie-chart"></canvas>
                        </div>
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary rounded h-100 p-4">
                            <h6 class="mb-4">Doughnut Chart</h6>
                            <canvas id="doughnut-chart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Chart End --> */}


            {/* <!-- Footer Start --> */}
                <Footer/>
            {/* <!-- Footer End --> */}
        </div>
        {/* <!-- Content End --> */}


        {/* <!-- Back to Top --> */}
        <Link to="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></Link>
        <Outlet/>
    </div>
    </div>
    </>
  )
}

export default Chart