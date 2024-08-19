
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact">

                {/*Contact Page Start*/}
                <section className="contact-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-page__left">
                                    <div className="contact-page__img">
                                        <img src="assets/images/resources/contact-header.jpg" alt="" />
                                    </div>
                                    <small style={{ fontSize: "10px !important" }} class="text-secondary">Image by <a href="https://www.freepik.com" className="text-decoration-none text-secondary" target="_blank" rel="noopener noreferrer">Freepik</a></small>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-page__right">
                                    <h3 className="contact-page__title">Got a Vision? Let's Bring It to Life</h3>
                                    <p className="mb-5">
                                        Whether you're planning a new construction, a renovation, or an extension, we're here to bring your vision to life. Reach out today to discuss how we can help create the home of your dreams
                                    </p>
                                    <ul className="contact-page__contact-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-location"></span>
                                            </div>
                                            <div className="content">
                                                <h3>Location</h3>
                                                <p>Room 48, Park Lane Centre, <br />Bradford,
                                                    BD5 0LN,<br /> United Kingdom</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <div className="content">
                                                <h3>Phone number</h3>
                                                <p><Link href="tel:+447784687865">+44 778 468 7865</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-email"></span>
                                            </div>
                                            <div className="content">
                                                <h3>Email</h3>
                                                <p><Link href="mailto:enquiries@innovabuildyorkshire.co.uk">enquiries@innovabuildyorkshire.co.uk</Link></p>
                                            </div>
                                        </li>
                                    </ul>
                                    {/* <div className="contact-page__social">
                                <Link href="#"><i className="icon-facebook"></i></Link>
                                <Link href="#"><i className="icon-twitter"></i></Link>
                                <Link href="#"><i className="icon-instagram"></i></Link>
                                <Link href="#"><i className="icon-link-in"></i></Link>
                            </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Contact Page End*/}

                {/*Google Map Start*/}
                <section className="google-map-one">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d171.11104499838707!2d-1.7598998!3d53.7827983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487be13346a4421d%3A0x3b3fce2c3fe02fd0!2sPark%20Lane%20Centre!5e0!3m2!1sen!2suk!4v1691859631995!5m2!1sen!2suk"
                        className="google-map__one"></iframe>

                </section>
                {/*Google Map End*/}

                {/*Contact Three Start*/}
                <section className="contact-three">
                    <div className="container">
                        <div className="row">
                            <div className="section-title text-center">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Get in touch</span>
                                </div>
                                <h2 className="section-title__title">Send us a message</h2>
                            </div>
                            <form action="assets/inc/sendemail.php" className="contact-three__form contact-form-validated">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-6">
                                        <div className="contact-three__input-box">
                                            <input type="text" placeholder="Your Name" name="name" />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6">
                                        <div className="contact-three__input-box">
                                            <input type="email" placeholder="Your Email" name="email" />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6">
                                        <div className="contact-three__input-box">
                                            <input type="text" placeholder="Phone Number" name="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6">
                                        <div className="contact-three__input-box">
                                            <input type="text" placeholder="Your Subject" name="Subject" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12">
                                        <div className="contact-three__input-box text-message-box">
                                            <textarea name="message" placeholder="Write your Message"></textarea>
                                        </div>
                                        <div className="contact-three__btn-box">
                                            <button type="submit" className="thm-btn contact-three__btn">Send message<span
                                                className="icon-dabble-arrow-right"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="result"></div>
                        </div>
                    </div>
                </section>
                {/*Contact Three End*/}

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

            </Layout>
        </>
    )
}