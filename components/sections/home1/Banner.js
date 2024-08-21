'use client'
import Link from "next/link"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 4500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

        {/*Main Slider Start*/}
        <section className="main-slider">
            <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                <div className="swiper-wrapper">
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="main-slider__bg"
                            style={{ backgroundImage: 'url(assets/images/banner/slider-1-1.jpg' }} ></div>
                        <div className="main-slider__shape-1"
                            style={{ backgroundImage: 'url(assets/images/shapes/main-slider-shape-1.jpg' }} ></div>
                        <div className="main-slider__img">
                            <img src="assets/images/banner/1.webp" alt=""/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider__content">
                                        <div className="main-slider__sub-title-box">
                                            <p className="main-slider__sub-title">Welcome to InnovaBuild Yorkshire</p>
                                            <div className="main-slider__sub-title-shape"></div>
                                        </div>
                                        <h2 className="main-slider__title">Your Vision<br/> Our Expertise</h2>
                                        <p className="main-slider__text">From innovative commercial projects to bespoke residential homes, we bring your ideas to life with precision and care. Trust us to deliver quality that stands the test of time.</p>
                                        <div className="main-slider__btn-and-video-box">
                                            {/* <div className="main-slider__btn-box">
                                                <Link href="contact" className="main-slider__btn thm-btn">Contact Us<span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div> */}
                                            {/* <div className="main-slider__video-link">
                                                <a onClick={() => setOpen(true)}
                                                    className="video-popup">
                                                    <div className="main-slider__video-icon">
                                                        <span className="icon-play"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                                <h4 className="main-slider__video-text">Play Video</h4>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="swiper-slide">
                    <div className="main-slider__bg"
                            style={{ backgroundImage: 'url(assets/images/banner/slider-1-1.jpg' }} ></div>
                        <div className="main-slider__shape-1"
                            style={{ backgroundImage: 'url(assets/images/shapes/main-slider-shape-1.jpg' }} ></div>
                        <div className="main-slider__img">
                        <img src="assets/images/banner/2.webp" alt=""/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider__content">
                                        <div className="main-slider__sub-title-box">
                                        <p className="main-slider__sub-title">Welcome to InnovaBuild Yorkshire</p>
                                        <div className="main-slider__sub-title-shape"></div>
                                        </div>
                                        <h2 className="main-slider__title">Crafting Homes<br/> with Heart</h2>
                                        <p className="main-slider__text">We specialise in creating homes that reflect your lifestyle and personality. Whether it's a new build or a renovation, we focus on every detail to make your dream home a reality.</p>
                                        {/* <div className="main-slider__btn-and-video-box">
                                            <div className="main-slider__btn-box">
                                                <Link href="contact" className="main-slider__btn thm-btn">Contact Us<span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                            <div className="main-slider__video-link">
                                                <a onClick={() => setOpen(true)}
                                                    className="video-popup">
                                                    <div className="main-slider__video-icon">
                                                        <span className="icon-play"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                                <h4 className="main-slider__video-text">Play Video</h4>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="swiper-slide">
                    <div className="main-slider__bg"
                            style={{ backgroundImage: 'url(assets/images/banner/slider-1-1.jpg' }} ></div>
                        <div className="main-slider__shape-1"
                            style={{ backgroundImage: 'url(assets/images/shapes/main-slider-shape-1.jpg' }} ></div>
                        <div className="main-slider__img">
                        <img src="assets/images/banner/3.webp" alt=""/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider__content">
                                        <div className="main-slider__sub-title-box">
                                            <p className="main-slider__sub-title">Welcome to InnovaBuild Yorkshire</p>
                                            <div className="main-slider__sub-title-shape"></div>
                                        </div>
                                        <h2 className="main-slider__title">Stress-Free <br/>Construction</h2>
                                        <p className="main-slider__text">Our comprehensive project management ensures a smooth construction process, from the initial design to the final handover. We take care of everything, so you can enjoy the results.</p>
                                        {/* <div className="main-slider__btn-and-video-box">
                                            <div className="main-slider__btn-box">
                                                <Link href="contact" className="main-slider__btn thm-btn">Contact Us<span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                            <div className="main-slider__video-link">
                                                <a onClick={() => setOpen(true)}
                                                    className="video-popup">
                                                    <div className="main-slider__video-icon">
                                                        <span className="icon-play"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                                <h4 className="main-slider__video-text">Play Video</h4>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </div>

                <div className="swiper-pagination" id="main-slider-pagination"></div>
                {/* If we need navigation buttons */}

            </Swiper>
        </section>
        {/*Main Slider End*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
            
        </>
    )
}
