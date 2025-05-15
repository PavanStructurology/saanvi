import Header from "./Header"
import Footer from "./Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Projects = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    const slides = [
        {
            img: 'images/1.jpg',
            alt: 'Solar',
            title: 'Guajiro_1 MX 129MW'
        },
        {
            img: 'images/2.jpg',
            alt: 'Solar',
            title: 'NX Horizon XTR_40'
        },
        {
            img: 'images/3.jpg',
            alt: 'solar3',
            title: 'Blythe_CA'
        },
        {
            img: 'images/4.jpg',
            alt: 'solar4',
            title: 'Warwick Solar Farm UQ AUS'
        },
        {
            img: 'images/5.jpg',
            alt: 'Guajiro',
            title: 'Sakaka NX ACWA Rows'
        },
        {
            img: 'images/6.jpg',
            alt: 'solar 6',
            title: 'Wright Terrian following Los Banos'
        },
        {
            img: 'images/7.jpg',
            alt: 'solar7',
            title: 'Wemen Solar Farm AUS'
        },
        {
            img: 'images/8.jpg',
            alt: 'solar8',
            title: 'Casa Don Pedro Spain aerial 2021'
        },
        {
            img: 'images/9.jpg',
            alt: 'solar9',
            title: 'Cove Mtn_4 Aerial_SRE FSLR'
        }
    ];
    const buildingSlides = [
        {
            img: 'images/1b.jpg',
            alt: 'whiskey',
            title: 'Whiskey Row Pheonix'
        },
        {
            img: 'images/2b.jpg',
            alt: 'build2',
            title: 'Stairs - Keim Drive Job'
        },
        {
            img: 'images/3b.jpg',
            alt: 'build3',
            title: '1460 Fillmore'
        },
        {
            img: 'images/4b.jpg',
            alt: 'buildings',
            title: 'Barrow Neurological Association'
        },
        {
            img: 'images/5b.jpg',
            alt: 'building',
            title: 'Grand Avenue Lofts, Pheonix'
        }
    ];
    const telecomSlides = [
        {
            img: 'images/1t.jpg',
            alt: 'AT&T',
            title: 'AT&T Wisil',
            description: '8113 Lemont Road, Darien, IL 60515 — Guyed Tower - Tower MOD'
        },
        {
            img: 'images/2t.jpg',
            alt: 'Skyward',
            title: 'Skyward NSB',
            description: '1897 N MAIN ST., SEARCY, AR 72143 — Proposed Overall Site'
        },
        {
            img: 'images/3t.jpg',
            alt: 'Anchor Project',
            title: 'Anchor Project',
            description: '3810 Bancroft Street, San Diego, CA 92104 — Proposed FRP Screen'
        },
        {
            img: 'images/4t.jpg',
            alt: 'Verizon',
            title: 'Verizon',
            description: '34551 Kaiser Dr, Fremont, CA 94555 — FRP Mount MOD'
        },
        {
            img: 'images/5t.jpg',
            alt: 'SAC (MXEXP)',
            title: 'SAC (MXEXP)',
            description: '2660 Civic Center Dr, Roseville, MN 55113 — Monopole tower MOD'
        },
        {
            img: 'images/6t.jpg',
            alt: 'US Cellular',
            title: 'US Cellular',
            description: `289 N. Pekin Rd., Woodland, WA 98674 — Self-Support Tower MOD, Platform Mount MOD`
        }
    ];

    return (
        <>
            <Header />
            <div class="preloader">
                <div class="preloader-middle">
                    <div class="left-preloader"></div>
                    <div class="middle-preloader">
                        <div class="stripe-preloader left"></div>
                        <div class="stripe-preloader middle"></div>
                        <div class="stripe-preloader right"></div>
                    </div>
                    <div class="right-preloader"></div>
                </div>
            </div>
            <div className="page-wrapper">

                    <h className="Contact">PROJECTS</h>
                    <hr className="hr1" />
                    <section  className="section"id="Solarprojects" >
                        <div className="wrapper">
                            <div className="w-layout-blockcontainer container-build w-container">
                                <h1 className="heading-49">Solar</h1>
                            </div>

                            <section className="team-slider">
                                <div className="container-30">
                                    <Swiper
                                        modules={[Autoplay]}
                                        loop={true}
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        autoplay={{
                                            delay: 1000, // Change slide every 3 seconds
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: false
                                        }}
                                        speed={1000} // Duration of the transition animation
                                    >
                                        {slides.map((slide, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="team-block">
                                                    <img
                                                        src={slide.img}
                                                        alt={slide.alt}
                                                        className="image-30"
                                                        loading="lazy"
                                                    />
                                                    <div className="team-block-info">
                                                        <h3 className="team-member-name-two">{slide.title}</h3>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section  className="section"id="BuildingsProjects">
                        <div className="wrapper">
                            <div className="w-layout-blockcontainer container-32 w-container">
                                <h1 className="heading-49">Buildings
                                </h1>
                            </div>
                            <section className="team-slider">
                                <div className="container-30">
                                    <Swiper
                                        modules={[Autoplay]}
                                        loop={true}
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        autoplay={{
                                            delay: 1000, // Change slide every 3 seconds
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: false
                                        }}
                                        speed={1000} // Duration of the transition animation
                                    >
                                        {buildingSlides.map((slide, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="team-block">
                                                    <img
                                                        src={slide.img}
                                                        alt={slide.alt}
                                                        className="image-30"
                                                        loading="lazy"
                                                    />
                                                    <div className="team-block-info">
                                                        <h3 className="team-member-name-two">{slide.title}</h3>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section className="section" id="TeleProjects">
                        <div className="wrapper">
                            <div className="w-layout-blockcontainer container-33 w-container">
                                <h1 className="heading-49">Telecommunication
                                </h1>
                            </div>
                            <section className="team-slider">
                                <div className="container-30">
                                    <Swiper
                                        modules={[Autoplay]}
                                        loop={true}
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        autoplay={{
                                            delay: 1000, // Change slide every 3 seconds
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: false
                                        }}
                                        speed={1000} // Duration of the transition animation
                                    >
                                        {telecomSlides.map((slide, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="team-block">
                                                    <img
                                                        src={slide.img}
                                                        alt={slide.alt}
                                                        className="image-30"
                                                        loading="lazy"
                                                    />
                                                    <div className="team-block-info">
                                                        <h3 className="team-member-name-two">{slide.title}</h3>
                                                        <p className="team-member-text">{slide.description}</p>

                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </section>
                        </div>
                    </section>

                <Footer />
            </div>
        </>

    )
}

export default Projects
