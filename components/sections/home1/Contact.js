'use client'
import Link from "next/link"
 

export default function Contact() {
    
    return (
        <>
        {/*Contact And Team Start*/}
        <section className="contact-and-team">
            <div className="contact-and-team__bg-shape"
                style={{ backgroundImage: 'url(assets/images/shapes/contact-and-team-bg-shape.png' }} ></div>
            <div className="contact-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="contact-one__left">
                                <form className="contact-one__form contact-form-validated">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-one__input-box">
                                                <input type="text" placeholder="Name" name="name"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-one__input-box">
                                                <input type="email" placeholder="E-mail" name="email"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-one__input-box">
                                                <input type="text" placeholder="Phone" name="email"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-one__input-box">
                                                <input type="text" placeholder="Address" name="email"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12">
                                            <div className="contact-one__input-box text-message-box">
                                                <textarea name="message" placeholder="Type Here..."></textarea>
                                            </div>
                                            <div className="contact-one__btn-box">
                                                <button type="submit" className="thm-btn contact-one__btn">Submit
                                                    Now<span className="icon-dabble-arrow-right"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="result"></div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="contact-one__right">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">Talk to us</span>
                                    </div>
                                    <h2 className="section-title__title">Building with the Passion Ensuring Satisfaction
                                    </h2>
                                </div>
                                <p className="contact-one__text">Et purus duis sollicitudin dignissim.Egestas nulla qui
                                    venen acras sed eu massa eu faucibus. Urna fusce aenean tortor pretium. Et purus
                                    duis sollicitudin loren ipsum dummy text</p>
                                <ul className="contact-one__call-box list-unstyled">
                                    <li>
                                        <h4 className="contact-one__call-title">Helpline 24/7</h4>
                                        <div className="contact-one__call-number">
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <p><Link href="tel:+236856220">+236 856 220</Link></p>
                                        </div>
                                    </li>
                                    <li>
                                        <h4 className="contact-one__call-title">E-mail Us:</h4>
                                        <div className="contact-one__call-number">
                                            <div className="icon">
                                                <span className="icon-email"></span>
                                            </div>
                                            <p><Link href="mailto:de.olt@exa.com">de.olt@exa.com</Link></p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="contact-one__social-box">
                                    <div className="contact-one__social-title">Follow Us</div>
                                    <div className="contact-one__social">
                                        <Link href="#"><span className="icon-facebook"></span></Link>
                                        <Link href="#"><span className="icon-twitter"></span></Link>
                                        <Link href="#"><span className="icon-link-in"></span></Link>
                                        <Link href="#"><span className="icon-pinterest"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact And Team End*/}
            
        </>
    )
}
