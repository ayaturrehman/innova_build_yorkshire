
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
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

export default function Gallery() {
    return (
        <>
        {/*Gallery Two Start */}
        <section className="gallery-two">
            <div className="gallery-two__shape-1"
                style={{ backgroundImage: 'url(assets/images/shapes/gallery-two-shape-1.png' }} ></div>
            <div className="container">
                <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Latest gallery</span>
                    </div>
                    <h2 className="section-title__title">Constructing the world<br/> we envision</h2>
                </div>
                <div className="gallery-two__bottom">
                <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                        <div className="swiper-wrapper">

                            {/*Gallery Two Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="gallery-two__single-wrap">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-1.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Roofing
                                                                    Installation</Link></h3>
                                                            <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p>
                                                        </div>
                                                        <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-1.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-2.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Roofing
                                                                    Installation</Link></h3>
                                                            <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p>
                                                        </div>
                                                        <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-2.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-3.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Roofing
                                                                    Installation</Link></h3>
                                                            <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p>
                                                        </div>
                                                        <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-3.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-4.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Roofing
                                                                    Installation</Link></h3>
                                                            <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p>
                                                        </div>
                                                        <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Gallery Two Single End*/}
                            {/*Gallery Two Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="gallery-two__single-wrap">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-5.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Roofing
                                                                    Installation</Link></h3>
                                                            <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p>
                                                        </div>
                                                        <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-5.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-6.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Roofing
                                                                    Installation</Link></h3>
                                                            <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p>
                                                        </div>
                                                        <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-6.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-7.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Roofing
                                                                    Installation</Link></h3>
                                                            <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p>
                                                        </div>
                                                        <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-7.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-8.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Roofing
                                                                    Installation</Link></h3>
                                                            <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p>
                                                        </div>
                                                        <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-8.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Gallery Two Single End*/}
                            {/*Gallery Two Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="gallery-two__single-wrap">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-9.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Roofing
                                                                    Installation</Link></h3>
                                                            <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p>
                                                        </div>
                                                        <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-9.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-10.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Roofing
                                                                    Installation</Link></h3>
                                                            <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p>
                                                        </div>
                                                        <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-10.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-11.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Roofing
                                                                    Installation</Link></h3>
                                                            <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p>
                                                        </div>
                                                        <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-11.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-12.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Roofing
                                                                    Installation</Link></h3>
                                                            <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p>
                                                        </div>
                                                        <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-12.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Gallery Two Single End*/}
                        </div>
                    </Swiper>
                    {/* If we need navigation buttons */}
                    <div className="gallery-two__nav">
                        <div className="swiper-button-prev1">
                            <i className="icon-arrow-left"></i>
                        </div>
                        <div className="swiper-button-next1">
                            <i className="icon-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Gallery Two End */}
        </>
    )
}
