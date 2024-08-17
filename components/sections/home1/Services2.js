import Link from "next/link"
export default function Services2() {
    return (
        <>

        {/*Services Two Start */}
        <section className="services-two">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">What we offer</span>
                    </div>
                    <h2 className="section-title__title">Building Solid Foundations<br/> for a Lasting Future </h2>
                </div>
                <div className="row">
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-two__single">
                            <div className="services-two__img-box">
                                <div className="services-two__img">
                                    <img src="assets/images/services/1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-two__content">
                                <h3 className="services-two__title"><Link href="service-details">Renovations</Link></h3>
                                <p className="services-two__text">Is your home outdated? Our renovations modernise and refresh your space, improving both style and functionality to meet your current needs.</p>
                                <div className="services-two__btn-box">
                                    <Link href="service-details" className="services-two__btn thm-btn">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="services-two__single">
                            <div className="services-two__img-box">
                                <div className="services-two__img">
                                    <img src="assets/images/services/2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-two__content">
                                <h3 className="services-two__title"><Link href="service-details">Architectural Design</Link>
                                </h3>
                                <p className="services-two__text">Struggling with your vision? Our architectural design service turns your ideas into reality, creating practical, beautiful plans for your project.</p>
                                <div className="services-two__btn-box">
                                    <Link href="service-details" className="services-two__btn thm-btn">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="services-two__single">
                            <div className="services-two__img-box">
                                <div className="services-two__img">
                                    <img src="assets/images/services/3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-two__content">
                                <h3 className="services-two__title"><Link href="service-details">Electrical</Link>
                                </h3>
                                <p className="services-two__text">Worried about electrical safety? Our expert services ensure your wiring is safe, efficient, and up to code, solving problems before they start.</p>
                                <div className="services-two__btn-box">
                                    <Link href="service-details" className="services-two__btn thm-btn">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}




                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="services-two__single">
                            <div className="services-two__img-box">
                                <div className="services-two__img">
                                    <img src="assets/images/services/4.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-two__content">
                                <h3 className="services-two__title"><Link href="service-details">Plumbing</Link>
                                </h3>
                                <p className="services-two__text">Dealing with leaks or plumbing issues? We fix and upgrade your plumbing systems to ensure reliable water flow and prevent future problems</p>
                                <div className="services-two__btn-box">
                                    <Link href="service-details" className="services-two__btn thm-btn">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="services-two__single">
                            <div className="services-two__img-box">
                                <div className="services-two__img">
                                    <img src="assets/images/services/5.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-two__content">
                                <h3 className="services-two__title"><Link href="service-details">Heating</Link>
                                </h3>
                                <p className="services-two__text">Cold or inefficient heating? Our heating services keep your home warm and energy-efficient, providing comfort year-round.</p>
                                <div className="services-two__btn-box">
                                    <Link href="service-details" className="services-two__btn thm-btn">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="services-two__single">
                            <div className="services-two__img-box">
                                <div className="services-two__img">
                                    <img src="assets/images/services/6.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-two__content">
                                <h3 className="services-two__title"><Link href="service-details">Extensions</Link>
                                </h3>
                                <p className="services-two__text">Feeling cramped? Our house extensions add the space you need without the hassle of moving. From design to build, we expand your home to fit your lifestyle.</p>
                                <div className="services-two__btn-box">
                                    <Link href="service-details" className="services-two__btn thm-btn">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Services Two End */}
            

        </>
    )
}
