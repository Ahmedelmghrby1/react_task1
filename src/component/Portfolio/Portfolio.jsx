import React, { useState } from 'react'
import img1 from "../../img/poert1.png"
import img2 from "../../img/port2.png"
import img3 from "../../img/port3.png"
import css from "../Portfolio/Portfolio.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Star from '../Star/Star'

export default function Portfolio() {
    const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };
  const closeImage = () => {
    setSelectedImage(null);
  };
  return (
    <>
    {selectedImage && (
        <div className="img_layer  position-fixed d-flex justify-content-center align-content-center flex-wrap" onClick={closeImage}>
          <div className="model">
            <img src={selectedImage} width={"600px"} alt="Selected" className="rounded-3" />
          </div>
        </div>
      )}
    <div className="portfolio text-center">
        <div className="container">
            <h2 className='titel text-uppercase fw-bolder'>PORTFOLIO COMPONENT</h2>
            <Star bgColor="#2C3E50"textColor="#2C3E50"/>

            <div className="row g-5 py-4">
                <div className="col-md-4" onClick={() => openImage(img1)}>
                    <div className="img position-relative">
                        <img src={img1} alt="poert" className='w-100'/>
                        <div className="layer position-absolute d-flex justify-content-center align-items-center text-white">
                        <FontAwesomeIcon icon={faPlus} className='fw-border layer_icon' />
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4" onClick={() => openImage(img2)}>
                    <div className="img position-relative">
                        <img src={img2} alt="poert" className='w-100' />
                        <div className="layer position-absolute d-flex justify-content-center align-items-center text-white">
                        <FontAwesomeIcon icon={faPlus} className='fw-border layer_icon' />
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4" onClick={() => openImage(img3)}>
                    <div className="img position-relative">
                        <img src={img3} alt="poert" className='w-100' />
                        <div className="layer position-absolute d-flex justify-content-center align-items-center text-white">
                        <FontAwesomeIcon icon={faPlus} className='fw-border layer_icon' />
                        </div>
                    </div>
                </div>
                <div className="col-md-4" onClick={() => openImage(img1)}>
                    <div className="img position-relative">
                        <img src={img1} alt="poert" className='w-100'/>
                        <div className="layer position-absolute d-flex justify-content-center align-items-center text-white">
                        <FontAwesomeIcon icon={faPlus} className='fw-border layer_icon' />
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4" onClick={() => openImage(img2)}>
                    <div className="img position-relative">
                        <img src={img2} alt="poert" className='w-100' />
                        <div className="layer position-absolute d-flex justify-content-center align-items-center text-white">
                        <FontAwesomeIcon icon={faPlus} className='fw-border layer_icon' />
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4" onClick={() => openImage(img3)}>
                    <div className="img position-relative">
                        <img src={img3} alt="poert" className='w-100' />
                        <div className="layer position-absolute d-flex justify-content-center align-items-center text-white">
                        <FontAwesomeIcon icon={faPlus} className='fw-border layer_icon'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>





    </>
  )
}
