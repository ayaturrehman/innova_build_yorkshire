import Link from "next/link"


export default function Services2() {
    return (
        <>
            {/*Services Six Start */}
        <section className="services-six">
            <div className="services-six__bg-box">
                <div className="services-six__bg"
                    style={{ backgroundImage: 'url(assets/images/shapes/services-six-bg-shape.png' }} ></div>
            </div>
            <div className="container">
                <div className="services-six__top">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Best Service</span>
                        </div>
                        <h2 className="section-title__title">Building Dreams Brick<br/> by Strenth</h2>
                    </div>
                    <div className="services-six__btn-box">
                        <Link href="services" className="services-six__btn thm-btn">Read more<span
                                className="icon-dabble-arrow-right"></span></Link>
                    </div>
                </div>
                <div className="services-six__bottom">
                    <div className="row">
                        {/*Services Six Single Start*/}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                            <div className="services-six__single">
                                <div className="services-six__img-box">
                                    <div className="services-six__img">
                                        <img src="assets/images/services/services-6-1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="services-six__content">
                                    <h3 className="services-six__title"><Link href="service-details">Elite Structures</Link>
                                    </h3>
                                    <p className="services-six__text">Et purus duis sollicit udin pur<br/> us duis
                                        sollicitudin
                                    </p>
                                    <div className="services-six__read-more">
                                        <Link href="service-details">Read more<span
                                                className="icon-dabble-arrow-right"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Services Six Single End*/}
                        {/*Services Six Single Start*/}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                            <div className="services-six__single">
                                <div className="services-six__img-box">
                                    <div className="services-six__img">
                                        <img src="assets/images/services/services-6-2.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="services-six__content">
                                    <h3 className="services-six__title"><Link href="service-details">Pixel Craft</Link>
                                    </h3>
                                    <p className="services-six__text">Et purus duis sollicit udin pur<br/> us duis
                                        sollicitudin
                                    </p>
                                    <div className="services-six__read-more">
                                        <Link href="service-details">Read more<span
                                                className="icon-dabble-arrow-right"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Services Six Single End*/}
                        {/*Services Six Single Start*/}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="600ms">
                            <div className="services-six__single">
                                <div className="services-six__img-box">
                                    <div className="services-six__img">
                                        <img src="assets/images/services/services-6-3.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="services-six__content">
                                    <h3 className="services-six__title"><Link href="service-details">Pro Build
                                            Innovations</Link>
                                    </h3>
                                    <p className="services-six__text">Et purus duis sollicit udin pur<br/> us duis
                                        sollicitudin
                                    </p>
                                    <div className="services-six__read-more">
                                        <Link href="service-details">Read more<span
                                                className="icon-dabble-arrow-right"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Services Six Single End*/}
                    </div>
                </div>
            </div>
        </section>
        {/*Services Six End */}
        </>
    )
}
