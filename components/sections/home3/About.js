'use client'


export default function About() {
    return (
        <>

           {/*About Three Start */}
        <section className="about-three">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-three__left">
                            <div className="about-three__img wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/resources/about-three-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-three__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">About Us</span>
                                </div>
                                <h2 className="section-title__title">Crafting Foundations for Better Tomorrow</h2>
                            </div>
                            <p className="about-three__text">Et purus duis sollicitudin dignissim habitant. Egestas nulla
                                quis venenatis cras sed eu massa eu faucibus. Urna fusce aenean tortor pretium.</p>
                            <ul className="about-three__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-3"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Superior Synergy Construction</h3>
                                        <p>Et purus duis sollicit udin pur us duis sollicitudin Et purus<br/> duis
                                            sollicit
                                            udin pur us duis sollicitudin</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-3"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Infinite Innovations Builders</h3>
                                        <p>Et purus duis sollicit udin pur us duis sollicitudin Et purus<br/> duis
                                            sollicit
                                            udin pur us duis sollicitudin</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Three End */}
    
        </>
    )
}
