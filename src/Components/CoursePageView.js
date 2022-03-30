import React from 'react'

const CoursePageView=({setDefault})=>{

    return(
        <div>
            <form onSubmit={setDefault}>
                <div>
                    <h3>Course Content ....</h3>
                </div>
        <button type="submit">Back To Dashboard</button>
      </form>

        </div>
    )
}
export default CoursePageView