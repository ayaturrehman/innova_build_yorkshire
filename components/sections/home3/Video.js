'use client'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'

export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>


       {/*Video One Start*/}
       <section className="video-one">
            <div className="container">
                <div className="video-one__inner">
                    <div className="video-one__shape-1"></div>
                    <div className="video-one__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/video-one-bg.jpg' }} ></div>
                    <div className="video-one__content">
                        <h3 className="video-one__title">Create Innovative sustain
                            <br/> Place in the</h3>
                        <div className="video-one__video-link">
                            <a onClick={() => setOpen(true)} className="video-popup">
                                <div className="video-one__video-icon">
                                    <span className="icon-play"></span>
                                    <i className="ripple"></i>
                                </div>
                            </a>
                        </div>
                        <p className="video-one__text">watch video</p>
                    </div>
                </div>
            </div>
        </section>
        {/*Video One End*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />

        </>
    )
}
