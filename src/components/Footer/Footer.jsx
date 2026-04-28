import React from 'react';

const Footer = () => {
    return (
        <div>
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
                        <label>Enter your email address</label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;