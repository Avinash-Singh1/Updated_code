import React from 'react'
import User from  "./../../Images/user.jpg"
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
           <nav class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
                <Link to="index.html" class="navbar-brand d-flex d-lg-none me-4">
                    <h2 class="text-primary mb-0"><i class="fa fa-user-edit"></i></h2>
                </Link>
                <Link to="#" class="sidebar-toggler flex-shrink-0">
                    <i class="fa fa-bars"></i>
                </Link>
                <form class="d-none d-md-flex ms-4">
                    <input class="form-control bg-dark border-0" type="search" placeholder="Search"/>
                </form>
                <div class="navbar-nav align-items-center ms-auto">
                    <div class="nav-item dropdown">
                        <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="fa fa-envelope me-lg-2"></i>
                            <span class="d-none d-lg-inline-flex">Message</span>
                        </Link>
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <Link to="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src={User} alt="" style={{width: 40+"px", height: 40+"px"}}/>
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </Link>
                            <hr class="dropdown-divider"/>
                            <Link to="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="img/user.jpg" alt="" style={{width: 40+"px", height: 40+"px"}}/>
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </Link>
                            <hr class="dropdown-divider"/>
                            <Link to="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src={User} alt="" style={{width: 40+"px", height: 40+"px"}}/>
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </Link>
                            <hr class="dropdown-divider"/>
                            <Link to="#" class="dropdown-item text-center">See all message</Link>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="fa fa-bell me-lg-2"></i>
                            <span class="d-none d-lg-inline-flex">Notificatin</span>
                        </Link>
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <Link to="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">Profile updated</h6>
                                <small>15 minutes ago</small>
                            </Link>
                            <hr class="dropdown-divider"/>
                            <Link to="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">New user added</h6>
                                <small>15 minutes ago</small>
                            </Link>
                            <hr class="dropdown-divider"/>
                            <Link to="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">Password changed</h6>
                                <small>15 minutes ago</small>
                            </Link>
                            <hr class="dropdown-divider"/>
                            <Link to="#" class="dropdown-item text-center">See all notifications</Link>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img class="rounded-circle me-lg-2" src={User} alt="" style={{width: 40+"px", height: 40+"px"}}/>
                            <span class="d-none d-lg-inline-flex">John Doe</span>
                        </Link>
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <Link to="#" class="dropdown-item">My Profile</Link>
                            <Link to="#" class="dropdown-item">Settings</Link>
                            <Link to="#" class="dropdown-item">Log Out</Link>
                        </div>
                    </div>
                </div>
            </nav>
        <Outlet/>

    </>
  )
}

export default Navbar