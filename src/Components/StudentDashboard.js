import React from 'react'

const StudentDashboard=({handleCourseClick,username})=>{

    return(
        <div>
            <h1>Welcome {username}</h1>
            <form onSubmit={handleCourseClick}>
                <div>
                    <h3>SDP-4</h3>
                </div>
        <button type="submit">View Course</button>
      </form>

        </div>
    )
}
export default StudentDashboard