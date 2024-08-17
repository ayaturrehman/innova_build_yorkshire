import CounterUp from "@/components/elements/CounterUp"

export default function Counter() {
    return (
        <>
            {/*Counter Three Start */}
        <section className="counter-three">
            <div className="container">
                <div className="counter-three__inner">
                    <ul className="counter-three__count-list list-unstyled">
                        <li>
                            <div className="counter-three__big-count count-box">
                            <CounterUp end={200} />
                                <span>+</span>
                            </div>
                            <div className="counter-three__count count-box">
                            <CounterUp end={200} />
                                <span>+</span>
                            </div>
                            <p className="counter-three__text">Team <br/>member</p>
                        </li>
                        <li>
                            <div className="counter-three__big-count count-box">
                            <CounterUp end={20} />
                                <span>+</span>
                            </div>
                            <div className="counter-three__count count-box">
                            <CounterUp end={20} />
                                <span>+</span>
                            </div>
                            <p className="counter-three__text">Winning<br/> award</p>
                        </li>
                        <li>
                            <div className="counter-three__big-count count-box">
                            <CounterUp end={30} />
                                <span>+</span>
                            </div>
                            <div className="counter-three__count count-box">
                            <CounterUp end={30} />
                                <span>+</span>
                            </div>
                            <p className="counter-three__text">Client<br/> review</p>
                        </li>
                        <li>
                            <div className="counter-three__big-count count-box">
                            <CounterUp end={10} />
                                <span>K</span>
                                <span>+</span>
                            </div>
                            <div className="counter-three__count count-box">
                            <CounterUp end={10} />
                                <span>K</span>
                                <span>+</span>
                            </div>
                            <p className="counter-three__text">Complete <br/>project</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        {/*Counter Three End */}
        </>
    )
}
