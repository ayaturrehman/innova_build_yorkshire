import Link from "next/link"

export default function Recent() {
    return (
        <>

        {/*Recent Project Start */}
        <section className="recent-project">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">recent project</span>
                    </div>
                    <h2 className="section-title__title">Where Quality Meets<br/> Construction</h2>
                </div>
                <ul className="recent-project__list-box list-unstyled">
                    <li className="wow fadeInUp" data-wow-delay="100ms">
                        <div className="recent-project__img">
                            <img src="assets/images/project/recent-project-1-1.jpg" alt=""/>
                        </div>
                        <div className="recent-project__list-content">
                            <div className="icon">
                                <span className="icon-architect"></span>
                            </div>
                            <div className="content">
                                <h3><Link href="project-details">Tier Developments</Link></h3>
                                <p>Et purus duis sollicit udin pur Et purus duis<br/> sollicit udin pur </p>
                            </div>
                        </div>
                        <div className="recent-project__btn-box">
                            <Link href="project-details" className="recent-project__btn thm-btn">Read more<span
                                    className="icon-dabble-arrow-right"></span></Link>
                        </div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="300ms">
                        <div className="recent-project__img">
                            <img src="assets/images/project/recent-project-1-1.jpg" alt=""/>
                        </div>
                        <div className="recent-project__list-content">
                            <div className="icon">
                                <span className="icon-blueprint-2"></span>
                            </div>
                            <div className="content">
                                <h3><Link href="project-details">Infinity Spaces</Link></h3>
                                <p>Et purus duis sollicit udin pur Et purus duis<br/> sollicit udin pur </p>
                            </div>
                        </div>
                        <div className="recent-project__btn-box">
                            <Link href="project-details" className="recent-project__btn thm-btn">Read more<span
                                    className="icon-dabble-arrow-right"></span></Link>
                        </div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="600ms">
                        <div className="recent-project__img">
                            <img src="assets/images/project/recent-project-1-1.jpg" alt=""/>
                        </div>
                        <div className="recent-project__list-content">
                            <div className="icon">
                                <span className="icon-blueprint-1"></span>
                            </div>
                            <div className="content">
                                <h3><Link href="project-details">Luxe Living Creations</Link></h3>
                                <p>Et purus duis sollicit udin pur Et purus duis<br/> sollicit udin pur </p>
                            </div>
                        </div>
                        <div className="recent-project__btn-box">
                            <Link href="project-details" className="recent-project__btn thm-btn">Read more<span
                                    className="icon-dabble-arrow-right"></span></Link>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        {/*Recent Project End */}

        </>
    )
}
