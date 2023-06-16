import React, {useEffect, useState } from 'react'
import Nav from "./NavBar";
import json from "../data.json"
import "./style.css";
import { useParams } from 'react-router-dom';
import Footer from './Footer';

function Detail (props) {

    const {key} = props
    console.log(key);
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [foundProduct, setFoundProduct] = useState(null);

    useEffect(() => {
        setData(json.products);
    }, [])

    useEffect(() => {
        if (data) {
            let foundProduct;
            const mac = data.mac.find((item) => item.id === parseInt(id));
            const phone = data.phone.find((item) => item.id === parseInt(id));
            const ipad = data.iPad.find((item) => item.id === parseInt(id));
            const watch = data.Watch.find((item) => item.id === parseInt(id));
            const phukien = data.Phukien.find((item) => item.id === parseInt(id));
            if(mac !== undefined){
                foundProduct = mac;
            }else if(phone !== undefined){
                foundProduct = phone;
            }else if(ipad !== undefined){
                foundProduct = ipad;
            }else if(watch !== undefined){
                foundProduct = watch;
            }else if(phukien !== undefined){
                foundProduct = phukien;
            }

            setFoundProduct(foundProduct);
        }
    }, [id, data])

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className='home-page-bg'>
            {/* Navbar */}
            <Nav />

            <p>{key}</p>

            {/* Content */}
            {foundProduct ? (
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img className='detail-page-img' src={foundProduct.image}></img>
                        </div>
                        <div className='col-md-6'>
                            <h3 className='text-white mt-5'>{foundProduct.name}</h3>
                            <p className='text-white'>Giá</p>
                            <h2 className='text-white mb-3'>{foundProduct.price.toLocaleString('en-US', {
                                                                minimumFractionDigits: 0,
                                                                maximumFractionDigits: 0})}đ
                            </h2>
                            <div className='btn btn-outline-secondary mb-4'>{foundProduct.store}</div>

                            {/* Card */}
                            <div className='card bg-dark mb-4'>
                                <strong className='card-title text-white ms-2 mt-4'>Khuyến mãi trị giá 100.000đ</strong>
                                <p className='text-white ms-2 mt-2'>Giá và khuyễn mãi áp dụng đến 23:00 | 31/05</p>
                                <div className='card-body '>
                                    <ul className='text-white'>
                                        <li>Phiếu mua hàng Microsoft 365 trị giá 100.000đ * </li>
                                        <li>Mua kèm LCD/ PC/ Máy in giảm thêm 5%</li>
                                        <li>Mua kèm Macbook ưu đãi thêm (Tùy sản phẩm và không áp dụng khuyến mãi khác của sản phẩm mua kèm).</li>
                                        <li>Nhập mã BTECK giảm ngay 1% tối đa 100.000đ khi thanh toán qua MOMO.</li>
                                        <li>Giảm 50% Sim Vina BÙM VIP khi mua kèm Điện thoại/ Laptop/ Tablet giá chỉ còn từ 470.000đ.</li>
                                        <li>Giảm 100.000 cho đơn hàng từ 10 triệu khi thanh toán quét mã SmartPay QR bằng ứng dụng ngân hàng</li>
                                        <li>Giảm đến 15% gói bảo hiển, bảo hành mở rộng</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Button */}
                            <button className='btn btn-primary w-100 mb-4 pt-3 pb-2'><h4>Mua ngay</h4></button>
                            <div className='row mb-4'>
                                <div className='col-sm-6'>
                                    <button className='btn btn-light w-100 pt-3 pb-0 mb-4'><strong>Mua trả góp 0%</strong><p>Qua công ty tài chính</p></button>
                                </div>
                                <div className='col-sm-6'>
                                    <button className='btn btn-light w-100 pt-3 pb-0'><strong>Trả góp 0% qua thẻ</strong><p>Visa, Mátercard, JCB, Amex</p></button>
                                </div>
                            </div>

                            {/* -- */}
                            {/* <div className='row'>
                                <div className='col'>
                                    <p>Hư gì đổi nấy 12 tháng tại 5484 siêu thị trên toàn quốc</p>
                                    <p>Bảo hành chính hãng 1 năm</p>
                                    <p>Giao hàng nhanh toàn quốc</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    
                </div>
            ) : (
                <p>No object found with ID: {id}</p>
            )}
            <Footer />
    </div>
    )
}

export default Detail