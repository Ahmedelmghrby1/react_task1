import React from 'react'
import img1 from "../../img/avataaars.svg"
import css from "../Start/Start.css"
import Star from '../Star/Star'

export default function Start() {
  return (
    <>
    <div className="home text-center vh-100 d-flex justify-content-center align-items-center flex-wrap text-white">
        <div className="container">
            <div>
                <img src={img1} alt="avatar" width={"250px"}/>
            </div>

            <div className="text-center pt-4">
            <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>Start Framework</h2>
            <Star bgColor="white"textColor="white"/>
            <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    </div>
    
    
    </>
  )
}
