import React from 'react'
import { Outlet, Link, Form, useParams } from "react-router-dom";
import Footer from './Footer'
import Nav from './NavBar'
import data from "../data.json"
import "./style.css";

function Phukien() {

  const phukien = data.products.Phukien;

  return (
    <div className='home-page-bg'>
      <Nav />
      
      {/* Title */}
      <div className="col d-flex d-row justify-content-center">
        <div className="text-white mt-4" style={{fontSize: '35px'}}><i className="fa-brands fa-apple"></i> Phụ kiện</div>
      </div>
      
      {/* Container */}
      <div className='conatiner'>

        <div className='row'>
          <div className='col'>
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
            <div className="carousel-inner rounded-4">
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
          </div>
        </div>
        
        {/* Show */}
        <div className="row">
          <div className="col d-flex d-row justify-content-center flex-wrap ms-auto me-auto">
              {phukien.map((pk, key) => {
              return(<Link className='nav-link mt-3 mb-5 ms-2 me-2' to={`/phukien/${pk.id}`}><div className="card bg-dark" key={key}>
                      <img className="home-page-img-mac" src={pk.image}></img>
                      <div className="card-body">
                        <h5 className="card-title text-white text-center">{pk.name}</h5>
                        <p className="text-white text-center">{pk.price.toLocaleString('en-US', {
                                                                minimumFractionDigits: 0,
                                                                maximumFractionDigits: 0})}đ</p>
                      </div>
                    </div></Link>)
              })}
          </div>
        </div>
            
      </div>

      <Footer />
    </div>
  )
}

export default Phukien