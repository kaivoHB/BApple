import React from 'react'
import { Link } from "react-router-dom";
import data from "../data.json"
import Footer from './Footer';
import Nav from './NavBar'

function Phone() {

  const phones = data.products.phone;

  return (
    <div className='container-fluid ps-0 pe-0 phone-page-bg'>
      <Nav />

      {/* Title */}
      <div className="col d-flex d-row justify-content-center">
        <div className="text-white mt-4" style={{fontSize: '35px'}}><i className="fa-brands fa-apple"></i> iPhone</div>
      </div>
      
      <div className='conatiner'>
        {/* Carousel */}
        <div id="carouselExampleIndicators" className="carousel slide w-75 mt-4 mb-4 ms-auto me-auto" data-bs-ride="true">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"
            ></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"
            ></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"
            ></button>
            </div>
            <div className="carousel-inner rounded-4 mb-5">
            <div className="carousel-item active">
                <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/04/banner/iPhone-14-Pro-Max-2880-800-1920x533.png" className="d-block w-100" alt="Image"></img>
            </div>
            <div className="carousel-item">
                <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/05/banner/MacBook-Air-M1-2880-800-1920x533.png" className="d-block w-100" alt="Image"></img>
            </div>
            <div className="carousel-item">
                <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/04/banner/AW-S8-2880-800-1920x533.png" className="d-block w-100" alt="Image"></img>
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>

                <div className="row-sm">
                    <div className="col-sm d-flex d-row justify-content-center flex-wrap">
                        {phones.map((phone, key) => {
                            return(<Link className='nav-link mt-3 mb-5 ms-2 me-2' to={`/phone/${phone.id}`}>
                              <div className="card bg-dark mb-5" key={key}>
                                <img className="home-page-img-mac" src={phone.image}></img>
                                <div className="card-body">
                                    <h4 className="card-title text-white text-center">{phone.name}</h4>
                                    <h6 className="card-title text-white text-center">{phone.store}</h6>
                                    <p className="text-white text-center">{phone.price.toLocaleString('en-US', {
                                                                minimumFractionDigits: 0,
                                                                maximumFractionDigits: 0})}đ</p>
                                </div>
                            </div></Link>)
                        })}
                    </div>
                </div>
            
      </div>
      <Footer/>
    </div>
  )
}

export default Phone