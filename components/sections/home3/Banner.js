
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
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
    return (
        <>
        

            

        {/*Main Slider Three Start*/}
        <section className="main-slider-three">
            <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                <div className="swiper-wrapper">
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="main-slider-three__social-box">
                            <div className="main-slider-three__social-title-box">
                                <h5 className="main-slider-three__social-title">Follow Us</h5>
                                <div className="main-slider-three__social-shape"></div>
                            </div>
                            <div className="main-slider-three__social">
                                <Link href="#"><i className="icon-facebook"></i></Link>
                                <Link href="#"><i className="icon-instagram"></i></Link>
                                <Link href="#"><i className="icon-Frame"></i></Link>
                                <Link href="#"><i className="icon-link-in"></i></Link>
                            </div>
                        </div>
                        <div className="main-slider-three__bg"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/slider-3-1.jpg' }} ></div>
                        <div className="main-slider-three__shape-1"></div>
                        <div className="main-slider-three__img">
                            <img src="assets/images/resources/main-slider-three-img-1-1.png" alt=""/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-three__content">
                                        <h2 className="main-slider-three__title">Engineering The <br/> Extraordinary </h2>
                                        <p className="main-slider-three__text">Et purus duis sollicitudin dignissim
                                            habitant. Egestas nulla quis <br/> venenatis cras sed eu massa eu faucibus.
                                            Urna fusce apretium.
                                        </p>
                                        <div className="main-slider-three__btn-boxes">
                                            <div className="main-slider-three__btn-box-1">
                                                <Link href="about" className="main-slider-three__btn-1 thm-btn">Read
                                                    more<span className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                            <div className="main-slider-three__btn-box-2">
                                                <Link href="contact" className="main-slider-three__btn-2 thm-btn">Contact
                                                    Us<span className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="main-slider-three__social-box">
                            <div className="main-slider-three__social-title-box">
                                <h5 className="main-slider-three__social-title">Follow Us</h5>
                                <div className="main-slider-three__social-shape"></div>
                            </div>
                            <div className="main-slider-three__social">
                                <Link href="#"><i className="icon-facebook"></i></Link>
                                <Link href="#"><i className="icon-instagram"></i></Link>
                                <Link href="#"><i className="icon-Frame"></i></Link>
                                <Link href="#"><i className="icon-link-in"></i></Link>
                            </div>
                        </div>
                        <div className="main-slider-three__bg"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/slider-3-2.jpg' }} ></div>
                        <div className="main-slider-three__shape-1"></div>
                        <div className="main-slider-three__img">
                            <img src="assets/images/resources/main-slider-three-img-1-1.png" alt=""/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-three__content">
                                        <h2 className="main-slider-three__title">Engineering The <br/> Extraordinary </h2>
                                        <p className="main-slider-three__text">Et purus duis sollicitudin dignissim
                                            habitant. Egestas nulla quis <br/> venenatis cras sed eu massa eu faucibus.
                                            Urna fusce apretium.
                                        </p>
                                        <div className="main-slider-three__btn-boxes">
                                            <div className="main-slider-three__btn-box-1">
                                                <Link href="about" className="main-slider-three__btn-1 thm-btn">Read
                                                    more<span className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                            <div className="main-slider-three__btn-box-2">
                                                <Link href="contact" className="main-slider-three__btn-2 thm-btn">Contact
                                                    Us<span className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="main-slider-three__social-box">
                            <div className="main-slider-three__social-title-box">
                                <h5 className="main-slider-three__social-title">Follow Us</h5>
                                <div className="main-slider-three__social-shape"></div>
                            </div>
                            <div className="main-slider-three__social">
                                <Link href="#"><i className="icon-facebook"></i></Link>
                                <Link href="#"><i className="icon-instagram"></i></Link>
                                <Link href="#"><i className="icon-Frame"></i></Link>
                                <Link href="#"><i className="icon-link-in"></i></Link>
                            </div>
                        </div>
                        <div className="main-slider-three__bg"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/slider-3-3.jpg' }} ></div>
                        <div className="main-slider-three__shape-1"></div>
                        <div className="main-slider-three__img">
                            <img src="assets/images/resources/main-slider-three-img-1-1.png" alt=""/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-three__content">
                                        <h2 className="main-slider-three__title">Engineering The <br/> Extraordinary </h2>
                                        <p className="main-slider-three__text">Et purus duis sollicitudin dignissim
                                            habitant. Egestas nulla quis <br/> venenatis cras sed eu massa eu faucibus.
                                            Urna fusce apretium.
                                        </p>
                                        <div className="main-slider-three__btn-boxes">
                                            <div className="main-slider-three__btn-box-1">
                                                <Link href="about" className="main-slider-three__btn-1 thm-btn">Read
                                                    more<span className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                            <div className="main-slider-three__btn-box-2">
                                                <Link href="contact" className="main-slider-three__btn-2 thm-btn">Contact
                                                    Us<span className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </div>


                {/* If we need navigation buttons */}
                <div className="main-slider-three__nav">
                    <div className="swiper-button-prev h1p" id="main-slider__swiper-button-next">
                        <i className="icon-arrow-left"></i>
                    </div>
                    <div className="swiper-button-next h1n" id="main-slider__swiper-button-prev">
                        <i className="icon-arrow-right"></i>
                    </div>
                </div>
            </Swiper>
        </section>
        {/*Main Slider Three End*/}
            
        </>
    )
}
