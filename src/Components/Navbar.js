import React from 'react'
import Image from '../Static/DefaultUserProfilePhoto/S.png'
import Courses from './Courses/Courses'
import CourseView from './Courses/CourseView'
const Navbar=(props)=>{


    const resetDefaults=()=>{
        props.setviewCoursesList(true)
        props.setViewCourses([false])
    }

  const  RenderElements=()=>{

    if(props.viewCoursesList===true)
    {
           return <Courses setViewCourses={props.setViewCourses} setviewCoursesList={props.setviewCoursesList}/>
    }
    else if(props.viewCourses[0]===true)
    {
        return <CourseView resetDefaults={resetDefaults}/>;        
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
                                <h4>{props.username}</h4>
                                <small>@4akhilkumar</small>
                            </div>
                            <span class="fas fa-angle-double-down"></span>
                        </div>
                    </div>

                    <div class="sidebar-menu">
                        <ul>
                            <li>
                                <a hrefLang='#' class="active">
                                    <span class="fas fa-th-large"></span>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a hrefLang='#'>
                                    <span class="fas fa-sign-out-alt"></span>
                                    <span>
                                    <button onClick={props.Logout}>Logout</button>
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