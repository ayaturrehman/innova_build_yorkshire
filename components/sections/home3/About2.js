import Link from "next/link"

export default function About2() {
    return (
        <>
            {/*About Four Start */}
        <section className="about-four">
            <div className="about-four__bg-color"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-four__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Know About Us</span>
                                </div>
                                <h2 className="section-title__title">Building Dreams One<br/> Brick at costruction</h2>
                            </div>
                            <p className="about-four__text">Et purus duis sollicitudin dignissim habitant. Egestas nulla
                                quis<br/> venenatis cras sed eu massa eu faucibus. Urna fusce ae</p>
                            <div className="about-four__btn-box">
                                <Link href="about" className="about-four__btn thm-btn">Read more<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-four__right">
                            <div className="row">
                                {/*About Four Single Start*/}
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                    <div className="about-four__single">
                                        <div className="about-four__icon">
                                            <span className="icon-hook"></span>
                                        </div>
                                        <h3 className="about-four__title"><Link href="about">Zone Constructions</Link></h3>
                                        <p className="about-four__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        </p>
                                    </div>
                                </div>
                                {/*About Four Single End*/}
                                {/*About Four Single Start*/}
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="about-four__single">
                                        <div className="about-four__icon">
                                            <span className="icon-robotic-arm"></span>
                                        </div>
                                        <h3 className="about-four__title"><Link href="about">Flow Builders</Link></h3>
                                        <p className="about-four__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        </p>
                                    </div>
                                </div>
                                {/*About Four Single End*/}
                                {/*About Four Single Start*/}
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                    <div className="about-four__single">
                                        <div className="about-four__icon">
                                            <span className="icon-crane-4"></span>
                                        </div>
                                        <h3 className="about-four__title"><Link href="about">Build Constructions</Link></h3>
                                        <p className="about-four__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        </p>
                                    </div>
                                </div>
                                {/*About Four Single End*/}
                                {/*About Four Single Start*/}
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                    <div className="about-four__single">
                                        <div className="about-four__icon">
                                            <span className="icon-industry"></span>
                                        </div>
                                        <h3 className="about-four__title"><Link href="about">Bespoke Build</Link></h3>
                                        <p className="about-four__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        </p>
                                    </div>
                                </div>
                                {/*About Four Single End*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Four End */}
        </>
    )
}
