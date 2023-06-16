import React from 'react'

function Footer() {
  return (
    <div className='text-white bg-dark'>
        <div className='row'>
            <h1 className='mt-5 ms-3 mb-3'>
                B
                <span className="text-danger">T</span>
                <span className="text-success">e</span>
                <span className="text-info">c</span>
                <span className="text-warning">h</span>
            </h1>
        </div>
        <div className='row mt-3 mb-3'>
            <div className='col-sm ms-3'>
                <hr></hr>
                <strong>Tổng đài</strong>
                <p className='mt-4'>Mua hàng: <a>0121.256743</a></p>
                <p>CSKH: <a>0121.256744</a></p>
            </div>
            <div className='col-sm ms-3'>
                <hr></hr>
                <strong>Hệ thống cửa hàng</strong>
                <p className='mt-4'>Xem cửa hàng</p>
                <p>Nội quy cửa hàng</p>
                <p>Chất lượng phục vụ</p>
                <p>Chính sách bảo hành & đổi trả</p>
            </div>
            <div className='col-sm ms-3'>
                <hr></hr>
                <strong>Hỗ trợ khách hàng</strong>
                <p className='mt-4'>Điều kiện giao dịch chung</p>
                <p>Hướng dẫn mua hàng online</p>
                <p>Chính sách giao hàng</p>
                <p>Hướng dẫn thanh toán</p>
            </div>
            <div className='col-sm ms-3'>
                <hr></hr>
                <strong> Thương hiệu BTech</strong>
                <p className='mt-4'>Giới thiệu</p>
                <p>Bán hàng doanh nghiệp</p>
                <p>Chính sách bảo mật</p>
            </div>
            <div className='col-sm ms-3'>
                <hr></hr>
                <strong>Chính sách bảo mật</strong>
                <p className='mt-4'>Giới thiệu</p>
            </div>
        </div>
        
    </div>
    )
}

export default Footer