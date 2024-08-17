import Link from "next/link"

export default function Cta() {
    return (
        <>
        {/*CTA Two Start*/}
        <section className="cta-two">
            <div className="cta-two__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/cta-two-bg.png' }} ></div>
            <div className="cta-two__wrap">
                <div className="container">
                    <div className="cta-two__inner">
                        <h3 className="cta-two__title">Need any help?Contract</h3>
                        <div className="cta-two__call-box">
                            <div className="icon">
                                <span className="icon-call"></span>
                            </div>
                            <div className="call-number">
                                <Link href="tel:2055550100">+(205) 555-0100</Link>
                                <Link href="tel:6035550123">+(603) 555-0123</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA Two End*/}      

        </>
    )
}
