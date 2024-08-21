'use client'
import Layout from "@/components/layout/Layout"
import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link"
import { useState } from 'react'


export default function About() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
                {/*About One Start */}
                <section className="about-one about-seven">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">

                            </div>
                            <div className="col-xl-6">
                                <div className="about-one__left">
                                    <div className="about-one__img wow slideInLeft" data-wow-delay="100ms"
                                        data-wow-duration="500ms">
                                        <img src="assets/images/resources/about-header.jpg" alt="about-header" />
                                    </div>
                                    <small style={{fontSize:"10px !important"}} class="text-secondary">Image by <a href="https://www.freepik.com" className="text-decoration-none text-secondary" target="_blank" rel="noopener noreferrer">Freepik</a></small>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="about-one__right">
                                    <div className="section-title text-left">
                                        <div className="section-title__tagline-box">
                                            <span className="section-title__tagline">ABOUT US</span>
                                        </div>
                                        <h2 className="section-title__title">Innovating Spaces<br />Building Dreams</h2>
                                    </div>
                                    <p className="about-one__text">
                                        At Innovabuild Yorkshire Limited, we’re passionate about building and transforming spaces that enhance the way you live and work. As a dynamic startup in the construction industry, we bring fresh ideas, innovative solutions, and a commitment to quality that sets us apart.
                                    </p>
                                    <p className="mt-2">Our mission is simple: to deliver exceptional results that exceed your expectations, whether it’s a new build, a renovation, or an extension.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*About One End */}

                {/* Counter Two Start */}
                <section className="counter-two" style={{ backgroundColor: "rgba(0, 22, 89, 0.9)", padding: "5rem", marginBottom: "4rem" }}>
                    {/* <div className="counter-two__bg-box">
                        <div className="counter-two__bg" ></div>
                    </div> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="text-white">
                                    We understand that every project is more than just bricks and mortar—it’s about creating spaces where memories are made and businesses thrive. That’s why we approach each job with the same level of care, attention to detail, and dedication as if it were our own.
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p className="text-white">Our team of skilled professionals is committed to delivering projects on time and within budget, without compromising on quality. We take pride in our ability to adapt to your unique needs, offering personalised service and practical solutions that make the construction process smooth and stress-free.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="counter-five">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="mb-4">
                                    At InnovaBuild Yorkshire Limited, we’re not just building structures; we’re building trust and lasting relationships with our clients. We understand that construction projects can be daunting, which is why we place a strong emphasis on open communication, transparency, and collaboration throughout the entire process. From the initial consultation to the final handover, our goal is to make you feel confident and supported every step of the way.
                                </p><p className="mb-4"> As a company, we believe that the foundation of any successful project lies in the relationships we build with our clients. We take the time to understand your unique vision, needs, and goals, ensuring that the final result is a true reflection of what you imagined. By prioritizing your satisfaction and consistently delivering on our promises, we aim to earn your trust not just for one project, but for all your future construction needs.
                                    As a company, we believe that the foundation of any successful project lies in the relationships we build with our clients. We take the time to understand your unique vision, needs, and goals, ensuring that the final result is a true reflection of what you imagined. By prioritizing your satisfaction and consistently delivering on our promises, we aim to earn your trust not just for one project, but for all your future construction needs.
                                </p>
                                <p className="mb-4">
                                    As we continue to grow, our commitment to excellence remains unwavering. We are dedicated to staying ahead of industry trends, embracing sustainable practices, and using the highest quality materials to ensure that every project we undertake is built to last. Our focus on sustainability isn’t just about the materials we use, but also about creating spaces that are energy-efficient, environmentally friendly, and designed to enhance the well-being of those who use them.
                                </p><p className="mb-4">
                                    At Innovabuild Yorkshire Limited, we believe in the power of construction to transform lives and communities. Whether we’re building a family home, renovating a commercial space, or adding an extension to enhance your living area, we approach every project with the same level of passion and commitment. Let’s build something great together, not just for today, but for the future.
                                </p>

                                <p className="my-5 fst-italic bg-light px-2">
                                    If you have any questions or would like to discuss your next project, feel free to reach out at enquiries@innovabuildyorkshire.co.uk.
                                </p>

                                <p className="text-dark mb-5 fw-bold">
                                INNOVABUILD YORKSHIRE LIMITED <br/>
                                Company number: 15896642
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


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


