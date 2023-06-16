import React from "react";
import { Link } from "react-router-dom";
import Nav from "./NavBar";
import data from "../data.json"
import "./style.css";
import Footer from "./Footer";

function Home() {

    const phones = data.products.phone;
    const macs = data.products.mac;
    const ipads = data.products.iPad;
    const watch = data.products.Watch;
    const phukien = data.products.Phukien;

    const showMac = () => {
        const items = [];
        for(let i = 0; i < 4; i++){
            items.push(<Link className="nav-link" to={`/mac/${macs[i].id}`}>
                        <div className="card bg-dark mt-5 mb-5" key={i} style={{width: '320px'}}>
                                <img className="home-page-img-mac" src={macs[i].image}></img>
                                <div className="card-body">
                                    <h4 className="card-title text-white text-center">{macs[i].name}</h4>
                                    <p className="text-white text-center">{macs[i].price.toLocaleString('en-US', {
                                                                minimumFractionDigits: 0,
                                                                maximumFractionDigits: 0})}đ</p>
                                </div>
                            </div>
                        </Link>);
                        }
        return items;
    }

    const showPad = () => {
        const items = [];
        for(let i = 0; i < 4; i++){
            items.push(<Link className="nav-link" to={`/ipad/${ipads[i].id}`}>
                <div className="card bg-dark mt-5 mb-5" key={i} style={{width: '320px'}}>
                                <img className="home-page-img-mac" src={ipads[i].image}></img>
                                <div className="card-body">
                                    <h4 className="card-title text-white text-center">{ipads[i].name}</h4>
                                    <p className="text-white text-center">{ipads[i].price.toLocaleString('en-US', {
                                                                minimumFractionDigits: 0,
                                                                maximumFractionDigits: 0})}đ</p>
                                </div>
                            </div></Link>);
                        }
        return items;
    }

    const showWatch = () => {
        const items = [];
        for(let i = 0; i < 4; i++){
            items.push(<Link className="nav-link" to={`/watch/${watch[i].id}`}>
                <div className="card bg-dark mt-5 mb-5" key={i} style={{width: '320px'}}>
                                <img className="home-page-img-mac" src={watch[i].image}></img>
                                <div className="card-body">
                                    <h4 className="card-title text-white text-center">{watch[i].name}</h4>
                                    <p className="text-white text-center">{watch[i].price.toLocaleString('en-US', {
                                                                minimumFractionDigits: 0,
                                                                maximumFractionDigits: 0})}đ</p>
                                </div>
                            </div></Link>);
                        }
        return items;
    }

    const showPhukien = () => {
        const items = [];
        for(let i = 0; i < 4; i++){
            items.push(<Link className="nav-link" to={`/phukien/${phukien[i].id}`}>
                <div className="card bg-dark mt-5 mb-5" key={i} style={{width: '320px'}}>
                                <img className="home-page-img-mac" src={phukien[i].image}></img>
                                <div className="card-body">
                                    <h4 className="card-title text-white text-center">{phukien[i].name}</h4>
                                    <p className="text-white text-center">{phukien[i].price.toLocaleString('en-US', {
                                                                minimumFractionDigits: 0,
                                                                maximumFractionDigits: 0})}đ</p>
                                </div>
                            </div></Link>);
                        }
        return items;
    }
    

    return (
        <>
            <Nav />

            {/* Carousel */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"
            ></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"
            ></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"
            ></button>
            </div>
            <div className="carousel-inner">
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


        <div className="container-fluid home-page-bg">
            <div className="row">
                {/* iPhone */}
                <div className="col d-flex d-row justify-content-center">
                    {/* <img className="mt-5" src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Category/42/WiPhone-120x35.png"></img> */}
                    <div className="text-white mt-5" style={{fontSize: '35px'}}><i className="fa-brands fa-apple"></i> iPhone</div>
                </div>
                <div className="row-sm">
                    <div className="col-sm d-flex d-row justify-content-around flex-wrap">
                        {phones.map((phone, key) => {
                            return(<Link className="nav-link" to={`/phone/${phone.id}`}><div className="card bg-dark mt-5 mb-5" key={key}>
                                <img className="home-page-img-mac" src={phone.image}></img>
                                <div className="card-body">
                                    <h4 className="card-title text-white text-center">{phone.name}</h4>
                                    <p className="text-white text-center">{phone.price.toLocaleString('en-US', {
                                                                minimumFractionDigits: 0,
                                                                maximumFractionDigits: 0})}đ</p>
                                </div>
                            </div></Link>)
                        })}
                    </div>
                </div>

                {/* iMac */}
                <div className="col-sm d-flex d-row justify-content-center">
                    <div className="text-white" style={{fontSize: '35px'}}><i className="fa-brands fa-apple"></i> Mac</div>
                </div>
                <div className="row-sm">
                    <div className="col-sm d-flex d-row justify-content-around flex-wrap">
                        { showMac() }
                    </div>
                </div>

                {/* iPad */}
                <div className="col d-flex d-row justify-content-center">
                    <div className="text-white" style={{fontSize: '35px'}}><i className="fa-brands fa-apple"></i> iPad</div>
                </div>
                <div className="row-sm">
                    <div className="col-sm d-flex d-row justify-content-around flex-wrap">
                        { showPad() }
                    </div>
                </div>

                {/* Watch */}
                <div className="col d-flex d-row justify-content-center">
                    <div className="text-white" style={{fontSize: '35px'}}><i className="fa-brands fa-apple"></i> Watch</div>
                </div>
                <div className="row-sm">
                    <div className="col-sm d-flex d-row justify-content-around flex-wrap">
                        { showWatch() }
                    </div>
                </div>

                {/* iMac */}
                <div className="col d-flex d-row justify-content-center">
                    <div className="text-white" style={{fontSize: '35px'}}><i className="fa-brands fa-apple"></i> Phụ kiện</div>
                </div>
                <div className="row-sm">
                    <div className="col-sm d-flex d-row justify-content-around flex-wrap">
                        { showPhukien() }
                    </div>
                </div>
            </div>
            
        </div>

        <Footer />
        </>
    );
}

export default Home;
