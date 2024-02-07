import React from 'react'
import "../Footer/Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faTwitter,faLinkedinIn,} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <>
    <footer className='fot_top'>
        <div className="container">
            <div className="row pt-4 py-5">
                <div className="col-md-4 text-center">
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="col-md-4 text-center">
                    <h3>AROUND THE WEB</h3>
                    <ul className='list-unstyled d-flex justify-content-center'>
                        <li className='list_item me-2 d-flex justify-content-center align-items-center'><FontAwesomeIcon icon={faFacebook} /></li>
                        <li className='list_item me-2 d-flex justify-content-center align-items-center'><FontAwesomeIcon icon={faTwitter} /></li>
                        <li className='list_item me-2 d-flex justify-content-center align-items-center'><FontAwesomeIcon icon={faLinkedinIn} /></li>
                        <li className='list_item me-2 d-flex justify-content-center align-items-center'><FontAwesomeIcon icon={faGlobe} /></li>
                    </ul>
                </div>
                <div className="col-md-4 text-center">
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    
                </div>
            </div>
        </div>
    </footer>

    <footer className='fot_bot py-3 text-center'>
        <div className="container">
            <p>Copyright © Your Website 2021</p>
        </div>

    </footer>
    
    
    
    </>
  )
}
