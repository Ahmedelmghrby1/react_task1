import React from 'react'
import Star from '../Star/Star'

export default function Contact() {
  return (
    <>
    <div className="contact text-center vh-100 d-flex justify-content-center align-items-center flex-wrap">
        <div className="container">
            <div className="text-center">
                <h2 className='titel text-uppercase mt-4 fs-1 fw-bolder'>CONATCT SECTION</h2>
                <Star bgColor="#2C3E50"textColor="#2C3E50"/>


                <form className='w-50 p-3 mx-auto mt-5'>

                <input type="text" placeholder="userName" name="userName" class="form-control border-0 border-bottom py-4"></input>
                <input type="text" placeholder="userAge" name="userName" class="form-control border-0 border-bottom py-4"></input>
                <input type="text" placeholder="userEmail" name="userName" class="form-control border-0 border-bottom py-4"></input>
                <input type="text" placeholder="userPassword" name="userName" class="form-control border-0 border-bottom py-4"></input>

                <button class="btn mt-4 bg-info"> send Message </button>
                </form>


            </div>
        </div>

    </div>
    
    
    </>
  )
}
