'use client'
import Link from "next/link"
import { useState } from 'react'
 

export default function Faq() {
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
        {/*FAQ One Start*/}
        <section className="faq-one mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">SOME fAQS</span>
                                </div>
                                <h2 className="section-title__title">Got Questions?</h2>
                            </div>
                            <p className="faq-one__text">We’re here to help. Check out our FAQ for quick answers to common questions. If you need more info, just reach out—we’re ready to assist!</p>
                            <div className="faq-one__btn-box">
                                <Link href="faq" className="faq-one__btn thm-btn">Learn more<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__right">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>How long will my project take??</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>The timeline depends on the project’s size and complexity. We’ll provide a detailed schedule upfront and keep you updated throughout.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>How do you manage project costs?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>We provide a clear, upfront estimate and monitor costs closely, making adjustments only with your approval to stay within budget.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4> Can I make changes during the project?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Yes, you can. We’re flexible and will work with you to accommodate changes, ensuring they align with your budget and timeline.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4>How do you ensure quality?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>We use top-quality materials and employ skilled professionals, with regular inspections to ensure every detail meets our high standards.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*FAQ One End*/}
            
        </>
    )
}
