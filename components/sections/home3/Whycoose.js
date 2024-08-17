import Link from "next/link"

export default function Whycoose() {
    return (
        <>


        {/*Why Choose Three Start */}
        <section className="why-choose-three">
            <div className="why-choose-three__bg"
                style={{ backgroundImage: 'url(assets/images/backgrounds/why-choose-three-bg.jpg' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-7">
                        <div className="why-choose-three__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Why Cho0se us </span>
                                </div>
                                <h2 className="section-title__title">Raising the Standard<br/> in Construction</h2>
                            </div>
                            <p className="why-choose-three__text">Et purus duis sollicitudin dignissim habitant. Egestas
                                nulla quis venenatis cras sed eu massa eu faucibus. Urna fusce aenean tortor pretium.
                            </p>
                            <div className="why-choose-three__btn-box">
                                <Link href="about" className="why-choose-three__btn thm-btn">Read more<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                            <ul className="why-choose-three__contact-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-phone-call"></span>
                                    </div>
                                    <div className="content">
                                        <span>Need help?</span>
                                        <p><Link href="tel:4805550103">(480) 555-0103</Link></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-Group"></span>
                                    </div>
                                    <div className="content">
                                        <span>Requesting A Call:</span>
                                        <p><Link href="mailto:info@example.com">info@example.com</Link></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Why Choose Three End */}
            

        </>
    )
}
