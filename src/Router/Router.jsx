import React from 'react'
import {Routes, Route } from "react-router-dom";
import Master from '../Master/Master'
import Nopage from './Nopage';
import Form from '../Master/Form/Form';
import Chart from '../Master/Chart/Chart';
import Button from '../Master/Element/Button';
import Typo from '../Master/Element/Typo';
import Element from '../Master/Element/Element';
import Signin from '../Master/Pages/Signin';
import Signup from '../Master/Pages/Signup';
import Widgets from '../Master/Widgets/Widgets';
// import { MyContext } from "./MyContext";
import User from "./../Images/user.jpg"
import FourZeroFour from '../Master/Pages/FourZeroFour';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Master/>}></Route>
                <Route path='/chart' element={<Chart/>} />
                <Route path="/form" element={<Form />} />

                {/* <Route path="#" element={<Element />} > */}
                    <Route path="/button" element={<Button />} />
                    <Route path="/typo" element={<Typo />} />
                    <Route path="/other" element={<Element />} />
                    <Route path="/widget" element={<Widgets icon={User} />} />
                {/* </Route> */}

                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<FourZeroFour />} />
            </Routes>
        </>
    )
}

export default Router