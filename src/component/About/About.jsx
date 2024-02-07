import React from 'react'
import css from "../About/About.css"
import Star from '../Star/Star'
export default function About() {
  return (
    <>
    <div className="about text-center vh-100 d-flex justify-content-center align-items-center flex-wrap text-white">
        <div className="container">
            <div className="text-center">
                <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>ABOUT COMPONENT</h2>
                <Star bgColor="white"textColor="white"/>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>

        </div>
    </div>
    


    
    </>
  )
}
