import React from 'react'
import Image from '../Static/DefaultUserProfilePhoto/S.png'
import Courses from './Courses/Courses'
import StudentCourseView from './Courses/StudentCourseView'
import FacultyCourseView from './Courses/FacultyCourseView'
import { useState } from 'react'
const Navbar=(props)=>{

    const [course,setCourse]=useState(null)
    const resetDefaults=()=>{
        
        props.setviewCoursesList(true)
        props.setViewCourses(false)
        setCourse(null)
    }

  const  RenderElements=()=>{

    if(props.viewCoursesList===true)
    {
           return <Courses setViewCourses={props.setViewCourses} setviewCoursesList={props.setviewCoursesList} Courses={props.Courses} setCourse={setCourse} userid={props.userid}/>
    }
    else if(props.viewCourses===true && props.userType==='Faculty')
    {
        return <FacultyCourseView resetDefaults={resetDefaults} course={course} userid={props.userid} username={props.username}/>;        
    }
    else if(props.viewCourses===true && props.userType==='Student')
    {
        return <StudentCourseView resetDefaults={resetDefaults} course={course} userid={props.userid}/>;        
    }
     }
    return(
        
        <div>
            <input type="checkbox" name="toggle-checkbox" id="menu-toggle"/>
            <div class="overlay">
                <label htmlFor="menu-toggle"></label>
            </div>

            <div class="sidebar">
                <div class="sidebar-container">
                    <div class="brand">
                        <div class="first-box-in-brand">
                            <div class="first-coloumn-logo-icon">
                                <span class="fas fa-shield-alt akira"></span>
                            </div>
                            <div class="second-coloumn-title-subtitle">
                                <h2><span class="akira">AkirA</span></h2>
                                <h4><span class="akira">Course Management System</span></h4>
                            </div>
                        </div>
                        <div class="second-box-in-brand">
                            <label htmlFor="menu-toggle">
                                <span class="far fa-times-circle pointer-cursor"></span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="sidebar-avatar">
                        <div class="avatar-img">
                            <img src={Image} alt='' />
                        </div>
                        <div class="avatar-info">
                            <div class="avatar-text">
                                <h4>{props.first_name}</h4>
                                <small>{props.username}</small>
                            </div>
                            <span class="fas fa-angle-double-down"></span>
                        </div>
                    </div>

                    <div class="sidebar-menu">
                        <ul>
                            <li>
                                <a href='/' class="active">
                                    <span class="fas fa-th-large"></span>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href='/' onClick={props.Logout}>
                                    <span class="fas fa-sign-out-alt"></span>
                                    <span>
                                    Logout
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="main-content">
                <header>
                    <div class="header-title-wrapper">
                        <label htmlFor="menu-toggle">
                            <span class="fas fa-bars pointer-cursor"></span>
                        </label>
                        <div class="header-title">
                            <h1>KL University</h1>
                        </div>
                    </div>
                </header>
                <main>
                    <RenderElements/>
                </main>
            </div>
        </div>
    )
}
export default Navbar