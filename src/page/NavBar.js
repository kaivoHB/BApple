import React from "react";
import { Outlet, Link } from "react-router-dom";

function header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Link class="navbar-brand active text-white" to={`/`}>
                    <h2>
                        B
                        <span className="text-danger">T</span>
                        <span className="text-success">e</span>
                        <span className="text-info">c</span>
                        <span className="text-warning">h</span>
                    </h2>
                    
                    </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><Link class="nav-link" to={`/phone`}>iPhone</Link></li>
                    <li class="nav-item"><Link class="nav-link" to={`/mac`}>Mac</Link></li>
                    <li class="nav-item"><Link class="nav-link" to={`/ipad`}>iPad</Link></li>
                    <li class="nav-item"><Link class="nav-link" to={`/watch`}>Watch</Link></li>
                    <li class="nav-item"><Link class="nav-link" to={`/phukien`}>Phụ kiện</Link></li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default header;