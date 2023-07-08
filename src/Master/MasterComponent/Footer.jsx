import React from 'react'
import { Link, Outlet } from "react-router-dom";


const Footer = () => {
  return (
    <>
          {/* <!-- Footer Start --> */}
          <div className="container-fluid pt-4 px-4">
            <div className="bg-secondary rounded-top p-4">
                <div className="row">
                    <div className="col-12 col-sm-6 text-center text-sm-start">
                        &copy; <Link to="#">Your Site Name</Link>, All Right Reserved. 
                    </div>
                    <div className="col-12 col-sm-6 text-center text-sm-end">
                       
                        Designed By <Link to="https://htmlcodex.com">HTML Codex</Link>
                        <br/>Distributed By: <Link href="https://themewagon.com" target="_blank">ThemeWagon</Link>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer