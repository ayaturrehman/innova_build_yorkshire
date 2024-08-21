import Link from "next/link"

export default function Footer1() {
    return (
        <>
            {/*Site Footer Start*/}
            <footer className="site-footer">
                <div className="site-footer__shape-1">
                    <img src="assets/images/shapes/site-footer-shape-1.png" alt="" />
                </div>
                <div className="site-footer__top">
                    <div className="container">
                        <div className="site-footer__top-inner">
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                    <div className="footer-widget__column footer-widget__about">
                                        <div className="footer-widget__logo">
                                        <Link href="/"><img src="logo.jpeg" width={70} alt=""/></Link>
                                        </div>
                                        <p className="footer-widget__about-text">InnovaBuild Yorkshire Limited delivers high-quality construction with a focus on innovation, sustainability, and strong client relationships.</p>
                                        <div className="site-footer__social-box">
                                            <h3 className="site-footer__social-title">Follow Us</h3>
                                            <div className="site-footer__social">
                                                <Link href="#"><i className="icon-facebook"></i></Link>
                                                <Link href="#"><i className="icon-twitter"></i></Link>
                                                <Link href="#"><i className="icon-link-in"></i></Link>
                                                <Link href="#"><i className="icon-pinterest"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                    {/* <div className="footer-widget__column footer-widget__services">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Service</h3>
                                    </div>
                                    <ul className="footer-widget__services-list list-unstyled">
                                        <li>
                                            <Link href="service-details">Chemical engineer</Link>
                                        </li>
                                        <li>
                                            <Link href="service-details">Concreted engineer</Link>
                                        </li>
                                        <li>
                                            <Link href="service-details">Roofing Constraction</Link>
                                        </li>
                                        <li>
                                            <Link href="service-details">Pillar engagement</Link>
                                        </li>
                                        <li>
                                            <Link href="service-details">Power supply Guid</Link>
                                        </li>
                                    </ul>
                                </div> */}
                                </div>
                                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                    {/* <div className="footer-widget__column footer-widget__news">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Latest News</h3>
                                    </div>
                                    <ul className="footer-widget__news-list list-unstyled">
                                        <li>
                                            <div className="footer-widget__news-date">
                                                <p><span className="icon-calender"></span>October 19, 2022</p>
                                            </div>
                                            <h3 className="footer-widget__news-title"><Link href="blog-details">Market
                                                    research helps<br/>
                                                    businesses understand</Link></h3>
                                        </li>
                                        <li>
                                            <div className="footer-widget__news-date">
                                                <p><span className="icon-calender"></span>October 19, 2022</p>
                                            </div>
                                            <h3 className="footer-widget__news-title"><Link href="blog-details">Market
                                                    research helps<br/>
                                                    businesses understand</Link></h3>
                                        </li>
                                    </ul>
                                </div> */}
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                    <div className="footer-widget__column footer-widget__contact">
                                        <div className="footer-widget__title-box">
                                            <h3 className="footer-widget__title">Contact</h3>
                                        </div>
                                        <ul className="footer-widget__contact-list list-unstyled">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-email"></span>
                                                </div>
                                                <div className="content">
                                                <p><Link href="mailto:enquiries@innovabuildyorkshire.co.uk">enquiries@innovabuildyorkshire.co.uk</Link></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-location"></span>
                                                </div>
                                                <div className="content">
                                                    <p>
                                                    Room 48, Park Lane Centre, Bradford, <br/>BD5 0LN, United Kingdom
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-call"></span>
                                                </div>
                                                <div className="content">
                                                    <p>
                                                        <Link href="tel:447784687865">+44 778 468 7865</Link>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <div className="site-footer__bottom-inner">
                            <p className="site-footer__bottom-text"><small> © 2024 Innovabuild Yorkshire Limited. All rights reserved. | Designed by <Link href="https://syslom.com" target="_blank">Syslom</Link></small>.</p>
                            <ul className="list-unstyled site-footer__bottom-menu">
                                {/* <li><Link href="about">Trams & Condition</Link></li>
                                <li><Link href="about">Privacy Policy</Link></li>
                                <li><Link href="contact">Contact Us</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            {/*Site Footer End*/}

        </>
    )
}
