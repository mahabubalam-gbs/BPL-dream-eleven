import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col'>
            <footer className="footer sm:footer-horizontal bg-[#060919] text-gray-400 p-10 flex justify-around">
                <div>
                    <h6 className="font-bold text-white">About Us</h6>
                    <p>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                </div>

                <nav>
                    <h6 className="font-bold text-white">Quick Links</h6>
                    <a className="link link-hover text-white">Home</a>
                    <a className="link link-hover text-white">Services</a>
                    <a className="link link-hover text-white">About</a>
                    <a className="link link-hover text-white">Contact</a>
                </nav>
                <form>
                    <h6 className="font-bold text-white">Subscribe</h6>
                    <fieldset className="w-80">
                        <label>Subscribe to our newsletter for the latest updates address</label>
                        <div className="join mt-3">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="input join-item" />
                            <button className="btn bg-linear-to-bl from-[#E591BA] to-[#F5D058] join-item ">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <footer className="footer text-white sm:footer-horizontal footer-center bg-[#060919] p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;