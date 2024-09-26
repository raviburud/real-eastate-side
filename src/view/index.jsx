//import liraries
import React, { Component } from 'react';
import { Route,Routes } from 'react-router-dom';
import Dashboard from './dashboard';
import Project from './project';
import AboutUs from './aboutUs';
import Enquiry from './Enquiry';
import Services from './services';
import Navbar from './navbar';
import ProjectDetails from './projectDeatils';

// create a component
const Index = () => {
    return (
      <>
      <Navbar/>
        <Routes>        
        <Route path="/"  element={<Dashboard/>} />
        <Route path="/project"  element={<Project />}/>
        <Route path="/aboutUs"  element={<AboutUs/>}/>
        <Route path="/Enquiry"  element={<Enquiry/>}/>
        <Route path="/services"  element={<Services/>}/>
        <Route path="/projectDetails"  element={<ProjectDetails/>}/>
      </Routes>
      </>
    );
};



//make this component available to the app
export default Index;
