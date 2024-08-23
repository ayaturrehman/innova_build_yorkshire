import Link from "next/link"

export default function home() {
    return (
        <section className="services-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="services-details__left">

                            <div className="services-details__content">
                                <h1 className="services-details__title-1">Expand Your Living Space with Expert Home Extensions</h1>
                                <p className="services-details__text-1">Innovative Designs and Quality Craftsmanship for Your Dream Home Expansion</p>
                                <div className="services-details__img">
                                    <img src="/assets/images/services/heating.png" alt="" />
                                </div>
                                <h3 className="services-details__title-2 my-2">Home Extension</h3>
                                <p className="services-details__text-2">At Innovabuild Yorkshire, we specialize in transforming homes by adding beautiful, functional extensions that enhance your living space. Whether you're looking to expand your kitchen, add a new bedroom, or create a seamless indoor-outdoor living area, our expert team is here to bring your vision to life.</p>
                                <ul class="benefits-list">
                                    <li>Maximise living space without moving</li>
                                    <li>Increase property value</li>
                                    <li>Customise your home to better suit your lifestyle</li>
                                    <li>Seamless integration with your existing structure</li>
                                </ul>
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
                                        <p>Bedroom Extensions</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Garage Conversions</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Living Room Extensions</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Kitchen Extensions</p>
                                    </li>
                                </ul>
                                <div className="services-details__sidebar-btn-box">
                                    <Link href="/contact" className="services-details__sidebar-btn thm-btn">Start Your Project Today<span className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
