import React from 'react';
// import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand ms-5" href="/home">Makeup maven</a>
                <div className="container">
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto py-3 px-3">
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/home">Home</a>
                        </li>
                        <li className="nav-item " >
                            <a className="nav-link text-light" href="/order-review">Order Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/contact-us">Contact Us</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>

            <div className="container my-5">
                <h3 className="text-center">
                Welcome to Makeup Maven. <br /> Please Choose Your desired product at minimum cost.
                </h3>

            </div>
        </>
    );
};

export default Header;