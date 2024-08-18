'use client'
import Link from "next/link"


export default function Whychoose() {
    return (
        <>

        {/* Why Choose One Start */}
        <section className="why-choose-one">
            <div className="why-choose-one__bg"
                style={{ backgroundImage: 'url(assets/images/backgrounds/why-choose-one-bg.jpg' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="why-choose-one__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Specialising in Renovations and Extensions</span>
                                </div>
                                <h2 className="section-title__title">Transforming Spaces<br/> Enhancing Lives</h2>
                            </div>
                            <p className="why-choose-one__text">We specialise in renovations and extensions that revitalise your home. Whether you need more space or a modern update, our expert team delivers solutions that bring your vision to life, all with the care and precision your home deserves.</p>
                            <ul className="why-choose-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-crane"></span>
                                    </div>
                                    <h3><Link href="about">Modern Renovation</Link></h3>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-crane-1"></span>
                                    </div>
                                    <h3><Link href="about">Seamless Extension</Link></h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Why Choose One End */}
            
        </>
    )
}
