import Link from "next/link"
export default function Home() {

    return (
        <>
            {/*Services Details Start*/}
            <section className="services-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="services-details__left">

                                <div className="services-details__content">
                                    <h3 className="services-details__title-1">Transform Your Space with Expert Renovations</h3>
                                    <p className="services-details__text-1">From Concept to Completion, We Make Your Renovation Dreams a Reality</p>
                                    <div className="services-details__img">
                                        <img src="/assets/images/services/services-details-img-1.jpg" alt="" />
                                    </div>
                                    <h3 className="services-details__title-2">Renovations</h3>
                                    <p className="services-details__text-2">At Innovabuild Yorkshire, we specialize in transforming spaces to meet your evolving needs. Whether it's a full home renovation or updating a specific area, we bring your vision to life with expert craftsmanship and attention to detail.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="services-details__right">
                                <div className="services-details__sidebar">

                                    <ul className="services-details__sidebar-points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>Kitchen Renovations</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p> Bathroom Renovations</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>Full Home Renovations</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>Interior Design/Space Planning</p>
                                        </li>
                                    </ul>
                                    <div className="services-details__sidebar-btn-box">
                                        <Link href="service-details" className="services-details__sidebar-btn thm-btn">Request
                                            service<span className="icon-dabble-arrow-right"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Services Details End*/}


            {/*CTA One Start*/}
            {/* <section className="cta-one">
                    <div className="container">
                        <div className="cta-one__inner">
                            <div className="cta-one__shape-1">
                                <img src="assets/images/shapes/cta-one-shape-1.png" alt="" />
                            </div>
                            <div className="cta-one__img">
                                <img src="assets/images/resources/cta-one-img.png" alt="" />
                            </div>
                            <h3 className="cta-one__title">Craftin digital experiences<br /> With that inspire</h3>
                            <div className="cta-one__from-box">
                                <form className="cta-one__form">
                                    <div className="cta-one__input-box">
                                        <input type="email" placeholder="Your E-mail" name="email" />
                                    </div>
                                    <button type="submit" className="cta-one__btn thm-btn">Subscribe Us</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section> */}
            {/*CTA One End*/}

        </>
    )
}