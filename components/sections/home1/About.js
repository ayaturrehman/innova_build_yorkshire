import Link from "next/link"


export default function About() {
    return (
        <>
        {/*About One Start */}
        <section className="about-one">
            <div className="container mt-3">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left">
                            <div className="about-one__img wow slideInLeft mt-5" data-wow-delay="100ms"
                                data-wow-duration="1000ms">
                                <img src="assets/images/resources/about.webp" alt=""/>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-xl-6">
                        <div className="about-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">ABOUT US</span>
                                </div>
                                <h2 className="section-title__title">Your Partner in Innovative Building Solutions</h2>
                            </div>
                            <p className="about-one__text">At InnovaBuild Yorkshire, we’re a forward-thinking startup dedicated to transforming the construction industry. Our fresh approach combines innovative solutions with a strong commitment to quality, ensuring that every project we undertake exceeds expectations. Whether you’re looking to expand, renovate, or build from the ground up, we bring passion, precision, and a relentless focus on delivering exceptional results.</p>
                            <ul className="about-one__points-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-analytics"></span>
                                    </div>
                                    <div className="content">
                                        <h3><Link href="about">Innovative Solutions</Link></h3>
                                        <p>Using the latest techniques for smarter, faster builds.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-prestige"></span>
                                    </div>
                                    <div className="content">
                                        <h3><Link href="about">Quality Focus</Link></h3>
                                        <p>ttention to detail ensures durable, high-quality results.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End */}
        </>
    )
}
