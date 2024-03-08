import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import Blog from "../components/Blog";
import SingleBPage from "../components/SingleBPage";
import DashBoard from "../components/DashBoard";

function AllRoute() {
    return (
        <Routes>
            <Route path="/" element={<h1>HEADING</h1>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/singleBPage" element={<SingleBPage/>} />
            <Route path="/DashBoard" element={<DashBoard/>} />
          
        
        </Routes>
    )
}



// https://blogify-be.vercel.app/

export {AllRoute}