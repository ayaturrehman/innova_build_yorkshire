'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
        subMenuKey: "",
    });

    const handleToggle = (key, subMenuKey = "") => {
        if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
            setIsActive({
                status: false,
                key: "",
                subMenuKey: "",
            });
        } else {
            setIsActive({
                status: true,
                key,
                subMenuKey,
            });
        }
    };
    return (
        <>
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu} ></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu} ><i className="fa fa-times"></i></span>

                    <div className="logo-box">
                        <Link href="/"><img src="logo.jpeg" width={100} alt="" /></Link>
                    </div>

                    <div className="mobile-nav__container">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="main-menu__list">
                                <li><Link href="/">Home </Link></li>
                                <li> <Link href="about">About</Link></li>
                                {/* <li><Link href="/faq">FAQ</Link></li> */}
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="#">Services</Link>
                                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link className="current" href="service-details">Renovations</Link></li>
                                        <li><Link href="service-details">Architectural Design</Link></li>
                                        <li><Link href="service-details">Plumbing</Link></li>
                                        <li><Link href="service-details">Electrical</Link></li>
                                        <li><Link href="service-details">Pluming</Link></li>
                                        <li><Link href="service-details">Heating Solutions</Link></li>
                                        <li><Link href="service-details">Home Extensions</Link></li>
                                    </ul>
                                    <button className={isActive.key == 1 ? "expanded open" : ""} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></button>
                                </li>
                                
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <Link href="mailto:enquiries@innovabuildyorkshire.co.uk">enquiries@innovabuildyorkshire.co.uk</Link>                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <Link href="tel:447784687865">+44 778 468 7865</Link>
                            </li>
                    </ul>
                    
                </div>
            </div>



        </>
    )
}
export default MobileMenu;
