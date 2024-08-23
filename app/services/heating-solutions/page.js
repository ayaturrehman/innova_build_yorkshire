import Link from "next/link";

export default function HeatingSolutions() {
    return (
        <section className="services-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="services-details__left">

                            <div className="services-details__content">
                                <h1 className="services-details__title-1">Reliable Heating Solutions<br/> for Every Home</h1>
                                <p className="services-details__text-1">From Concept to Completion, We Make Your Renovation Dreams a Reality</p>
                                <div className="services-details__img">
                                    <img src="/assets/images/services/heating.png" alt="" />
                                </div>
                                <h3 className="services-details__title-2">Heating Solutions</h3>
                                <p className="services-details__text-2">Stay Warm and Comfortable with Our Expert Heating Services. At Innovabuild Yorkshire, we understand the importance of a reliable and efficient heating system. Whether you need a new installation, an upgrade, or maintenance, our team of experts is here to ensure your home stays warm and comfortable all year round.</p>
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
                                        <p>Heating System Installations</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p> Boiler Repairs and Replacements</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Underfloor Heating Systems</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Regular Maintenance and Servicing</p>
                                    </li>
                                </ul>
                                <div className="services-details__sidebar-btn-box">
                                    <Link href="/contact" className="services-details__sidebar-btn thm-btn">Schedule a Service<span className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
