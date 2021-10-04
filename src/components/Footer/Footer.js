import React from 'react';

const Footer = () => {
    return (
        <div className="start-0 bottom-0 w-100 alert-dange">
            <div>

                <footer className="bg-dark text-center text-lg-start text-white">
                    <div className="container px-4 py-2">
                        <div className="row mt-4">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Home</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">Achievents
</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">Services</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Services</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">Free</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">Premium</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Address</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">The Calligraphy School</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">123 Street</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Write to us</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">demo@calligraphy.com</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">Fax: +783501</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pb-3">
                        © 2021 Copyright:
                        <a className="text-white text-decoration-none" href="https://github.com/nmso2"> MD. Nagib Mahfuz Subho</a>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default Footer;