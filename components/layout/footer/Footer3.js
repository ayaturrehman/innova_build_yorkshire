import Link from "next/link"

export default function Footer3() {
    return (
        <>
       {/*Site Footer Two Start*/}
       <footer className="site-footer-three">
            <div className="site-footer-three__shape-1 float-bob-x">
                <img src="assets/images/shapes/site-footer-three-shape-1.png" alt=""/>
            </div>
            <div className="site-footer-three__top">
                <div className="container">
                    <div className="site-footer-three__top-inner">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget-three__column footer-widget-three__about">
                                    <div className="footer-widget-three__logo">
                                        <Link href="/"><img src="assets/images/resources/footer-logo-2.png"
                                                alt=""/></Link>
                                    </div>
                                    <p className="footer-widget-three__about-text">It is a long established fact that a
                                        reader will be distracted</p>
                                    <form className="footer-widget-three__about-form mc-form">
                                        <div className="footer-widget-three__about-form-input-box">
                                            <input type="email" placeholder="Your mail address" name="EMAIL"/>
                                            <button type="submit" className="footer-widget-three__about-btn"><span
                                                    className="icon-paper-plane"></span></button>
                                        </div>
                                    </form>
                                    <div className="site-footer-three__social">
                                        <Link href="#"><i className="icon-facebook"></i></Link>
                                        <Link href="#"><i className="icon-twitter"></i></Link>
                                        <Link href="#"><i className="icon-link-in"></i></Link>
                                        <Link href="#"><i className="icon-pinterest"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget-three__column footer-widget-three__link">
                                    <div className="footer-widget-three__title-box">
                                        <h3 className="footer-widget-three__title">Quick Links</h3>
                                    </div>
                                    <ul className="footer-widget-three__link-list list-unstyled">
                                        <li>
                                            <Link href="service-details">Credit industrys</Link>
                                        </li>
                                        <li>
                                            <Link href="service-details">Credit Consulting</Link>
                                        </li>
                                        <li>
                                            <Link href="service-details">Business Credit industry</Link>
                                        </li>
                                        <li>
                                            <Link href="service-details">Finance industry</Link>
                                        </li>
                                        <li>
                                            <Link href="service-details">Software development</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget-three__column footer-widget-three__page">
                                    <div className="footer-widget-three__title-box">
                                        <h3 className="footer-widget-three__title">Page</h3>
                                    </div>
                                    <ul className="footer-widget-three__link-list list-unstyled">
                                        <li>
                                            <Link href="faq">FAQ</Link>
                                        </li>
                                        <li>
                                            <Link href="contact">Contact</Link>
                                        </li>
                                        <li>
                                            <Link href="testimonials">Testimonials</Link>
                                        </li>
                                        <li>
                                            <Link href="about">Work Process</Link>
                                        </li>
                                        <li>
                                            <Link href="gallery">Gallery</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget-three__column footer-widget-three__contact">
                                    <div className="footer-widget-three__title-box">
                                        <h3 className="footer-widget-three__title">Contact</h3>
                                    </div>
                                    <ul className="footer-widget-three__contact-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-location"></span>
                                            </div>
                                            <div className="content">
                                                <span>Address</span>
                                                <p>66 Broklyant, New York India</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <div className="content">
                                                <span>Phone Number</span>
                                                <p><Link href="tel:0123456789101">012 345 678 9101</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-email"></span>
                                            </div>
                                            <div className="content">
                                                <span>Emai</span>
                                                <p><Link href="mailto:abcd@gmail.com">abcd@gmail.com</Link></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer-three__bottom">
                <div className="container">
                    <div className="site-footer-three__bottom-inner">
                        <p className="site-footer-three__bottom-text">© Starplate 2024 | All Rights Reserved</p>
                        <ul className="list-unstyled site-footer-three__bottom-menu">
                            <li><Link href="about">Trams & Condition</Link></li>
                            <li><Link href="about">Privacy Policy</Link></li>
                            <li><Link href="contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        {/*Site Footer End*/}
        </>
    )
}
