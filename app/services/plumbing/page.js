import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="services-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="services-details__left">

                                <div className="services-details__content">
                                    <h1 className="services-details__title-1">Expert Plumbing Solutions for Your Home and Business</h1>
                                    <p className="services-details__text-1">Reliable, Efficient, and Affordable Plumbing Services You Can Trust</p>
                                    <div className="services-details__img">
                                        <img src="/assets/images/services/plumbing.jpg" alt="" />
                                    </div>
                                    <h3 className="services-details__title-2">Renovations</h3>
                                    <p className="services-details__text-2">At Innovabuild Yorkshire, we offer comprehensive plumbing services tailored to meet the unique needs of both residential and commercial clients. Our team of certified and experienced plumbers is dedicated to delivering top-notch services, ensuring your plumbing systems are functioning optimally and efficiently.</p>
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
                                        <p>Emergency Plumbing Repairs</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Pipe Installation and Replacement</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Pipe Installation and Replacement</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Leak Detection and Repair</p>
                                    </li>
                                    </ul>
                                    <div className="services-details__sidebar-btn-box">
                                        <Link href="/contact" className="services-details__sidebar-btn thm-btn">Request
                                            service<span className="icon-dabble-arrow-right"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
