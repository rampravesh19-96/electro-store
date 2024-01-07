import React from "react";
import "./Footer.scss";
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa"
import Payment from "../../assets/payments.png"
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ipsam libero aut odio itaque excepturi, totam deleniti maxime aliquid debitis.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="text">
                        Address Lorem  dolor sit amet consectetur 208754.
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text">Phone 0471 272 0261</div>
                </div>
                <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">Email: store@jsdev.com</div>
                </div>
            </div>


            <div className="col">
                <div className="title">Category</div>
                <span className="text">Headphones</span>
                <span className="text">Smart watch</span>
                <span className="text">Bluetooth Speaker</span>
                <span className="text">Wireless earbuds</span>
                <span className="text">Home theatre</span>
                <span className="text">Projectors</span>

            </div>

            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    JSDEVSTORE 2022 CREATED BY JS DEV. PREMIUM ECOMMERCE SOLUTIONS.
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>;
};

export default Footer;
