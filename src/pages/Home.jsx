// import useWebflowOnLoad from "../components/useWebflowReinit";
// import useWebflowReinit from "../components/useWebflowReinit";
// import useWebflowWaitForElement from "../components/useWebflowWaitForElement";
import Footer from "./Footer";
import Header from "./Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("SPile +");
  const [description, setDescription] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  const testimonials = [
    {
      image: "images/5.jpg",
      title: "Guajiro_1 MX 129MW",
      subtitle: "Hyderabad India",
      description:
        "Saanvi Structural Soln provides solar design and engineering for residential and commercial projects, including fixed tilt/tracking systems, carports, and foundation expertise...",
    },
    {
      image: "images/4b.jpg",
      title: "Grand Avenue Lofts, Pheonix",
      subtitle: "New York, New York",
      description:
        "Saanvi Structural Soln designs and engineers commercial and residential structures for various building types, including timber, steel, concrete, and masonry...",
    },
    {
      image: "images/2t.jpg",
      title: " Skyward NSB",
      subtitle:
        "Miami, Florida 1897 N MAIN ST., SEARCY, AR 72143Proposed Overall Site",
      description:
        "Saanvi Structural Soln designs and engineers commercial and residential structures for various building types, including timber, steel, concrete, and masonry...",
    },
    {
      image: "images/2.jpg",
      title: " NX Horizon XTR_40",
      subtitle: "Austin, Texas",
      description:
        "Saanvi Structural Soln designs and engineers commercial and residential structures for various building types, including timber, steel, concrete, and masonry...",
    },
  ];
  const [fail, setFail] = useState(false);
  const [success, setSuccuss] = useState(false);
  const [emailerr, setEmailerr] = useState(false);
  const [nameerr, setNameerr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email == "") {
      setEmailerr(true);
      return;
    } else if (name == "") {
      setNameerr(true);
      return;
    } else {
      setLoading(true);
      const data = {
        Name: name,
        Email: email,
        Phone: phone,
        Service: service,
        Description: description,
        site: true,
      };
      try {
        const res = await fetch("http://localhost:6062/auth/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (res.ok) {
          setName("");
          setEmail("");
          setPhone("");
          setService("Solar");
          setDescription("");
          setSuccuss(true);
          setTimeout(() => {
            setSuccuss(false);
          }, 10000);
        } else {
          setFail(true);
          setTimeout(() => {
            setFail(false);
          }, 10000);
        }
      } catch (err) {
        console.log(err);
        setFail(true);
        setTimeout(() => {
          setFail(false);
        }, 10000);
      } finally {
        setLoading(false);
      }
    }
  };
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/services", { replace: false });
    setTimeout(() => {
      const element = document.getElementById("buildings");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // slight delay for navigation
  };
  const handleClick1 = (e) => {
    e.preventDefault();
    navigate("/projects", { replace: false });
    setTimeout(() => {
      const element = document.getElementById("buildings");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // slight delay for navigation
  };
  return (
    <>
      <Header />
      <div className="page-wrapper" style={{ marginTop: "96px" }}>
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
        <section
          className="hero-content-wrapper"
          style={{ margin: "auto", minHeight: "calc(100vh - 156px)" }}
        >
          {/* <div className="w-layout-blockcontainer container-34 w-container"> */}
          <div className="flex flex-col gap-4 w-full">
            <div className="div-block-39">
              <div className="clip max-[520px]:mx-auto">
                <div className="text-block-3 text-block-real">
                  Consulting Structural Engineers
                </div>
              </div>
              <div className="clip">
                <h1
                  // style={{
                  //   WebkitTransform:
                  //     "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)",
                  //   MozTransform:
                  //     "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)",
                  //   msTransform:
                  //     "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)",
                  //   transform:
                  //     "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)",
                  //   opacity: 0,
                  // }}
                  className="xxl-heading one "
                >
                  SAANVI
                </h1>
              </div>
              <div className="clip">
                <h1
                  // style={{
                  //   WebkitTransform:
                  //     "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)",
                  //   MozTransform:
                  //     "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)",
                  //   msTransform:
                  //     "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)",
                  //   transform:
                  //     "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)",
                  //   opacity: 0,
                  // }}
                  className="xxl-heading two"
                >
                  STRUCTURAL SOLN
                </h1>
              </div>
              <div className="clip">
                <div
                  // style={{
                  //   WebkitTransform:
                  //     "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)",
                  //   MozTransform:
                  //     "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)",
                  //   msTransform:
                  //     "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)",
                  //   transform:
                  //     "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)",
                  //   opacity: 0,
                  // }}
                  className="hero-button-wrapper max-[520px]:flex-col max-[520px]:mx-auto"
                  style={{
                    maxWidth: "446px",
                    width: "100%",
                  }}
                >
                  <a
                    href="/contact"
                    className="button white-outline w-inline-block"
                  >
                    <div className="button-text">Contact us</div>
                  </a>
                  <a
                    href="https://calendly.com/"
                    className="button white-outline w-inline-block"
                  >
                    <div className="button-text">Schedule a call</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="div-block-42">
              <a href="/services#Solar" className="anchor-link w-inline-block">
                <img
                  src="images/solar-panel-vector-icon.jpg"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
                  srcSet="images/solar-panel-vector-icon-p-500.jpg 500w, images/solar-panel-vector-icon-p-800.jpg 800w, images/solar-panel-vector-icon.jpg 980w"
                  alt="solar-panel-vector-icon"
                  className="image-6"
                />
              </a>
              <a onClick={handleClick} className="anchor-link w-inline-block">
                <img
                  src="images/buildings.png"
                  loading="lazy"
                  alt="buildings"
                  className="image-4"
                />
              </a>
              <a
                href="/services#Telecommunications"
                className="anchor-link w-inline-block"
              >
                <img
                  src="images/tele.png"
                  loading="lazy"
                  alt="Telecommunication"
                  className="image-5"
                />
              </a>
            </div>
          </div>
          <div className="flex h-full gap-4 flex-col max-[767px]:hidden">
            <a href="/services#Solar" className="anchor-link w-inline-block">
              <img
                src="images/solar-panel-vector-icon.jpg"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
                srcSet="images/solar-panel-vector-icon-p-500.jpg 500w, images/solar-panel-vector-icon-p-800.jpg 800w, images/solar-panel-vector-icon.jpg 980w"
                alt="solar-panel-vector-icon"
                className="w-[60px] transition-all hover:scale-105 cursor-pointer"

              // className="image-6"
              />
            </a>
            <a onClick={handleClick} className="w-inline-block">
              <img
                src="images/buildings.png"
                loading="lazy"
                alt="buildings"
                className="w-[60px] p-[5px] transition-all hover:scale-105 cursor-pointer"

              // className="image-4"
              />
            </a>
            <a href="/services#Telecommunications" className="w-inline-block">
              <img
                src="images/tele.png"
                loading="lazy"
                alt="Telecommunication"
                className="w-[60px] p-[5px] transition-all hover:scale-105 cursor-pointer"
              // className="image-5"
              />
            </a>
          </div>
        </section>
        <section className="section clip" style={{ marginTop: "50px" }}>
          <h1 className="heading-19">SERVICES</h1>
          {/* <div id="services" className="Service_wrapper" > */}
          <div
            className="grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:justify-center gap-4 my-6"
            style={{ display: "grid" }}
          >
            {/* <div className="grid-cols-2 gap-4 my-6" style={{display:"grid"}}> */}
            <div className="card-hover-item" style={{ width: "100%" }}>
              <div
                className="services-card"
                style={{ padding: "0px", width: "100%" }}
              >
                <a
                  href="/projects#Solarprojects"
                  className="link-block-8 w-inline-block"
                >
                  <img src="images/1.jpg" alt="Solar" className="image-68" />
                </a>
                <h1 className="heading-30">Solar</h1>
                <div className="feature-card-info">
                  <div className="card-button-wrapper">
                    <div className="clip">
                      <a
                        onClick={handleClick1}
                        className="button grey-outline small w-inline-block"
                      >
                        <div className="button-text">View</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-hover-item" style={{ width: "100%" }}>
              <div
                className="services-card"
                style={{ padding: "0px", width: "100%" }}
              >
                <a
                  href="/projects#Solarprojects"
                  className="link-block-8 w-inline-block"
                >
                  <img
                    src="images/4b.jpg"
                    loading="lazy"
                    sizes="(max-width: 1279px) 100vw, 1280px"
                    srcSet="images/4b-p-500.jpg 500w, images/4b-p-800.jpg 800w, images/4b-p-1080.jpg 1080w, images/4b.jpg 1280w"
                    alt="BUildings"
                    className="image-69"
                  />
                </a>
                <h1 className="heading-30">Buildings</h1>
                <div className="feature-card-info">
                  <div className="card-button-wrapper">
                    <div className="clip">
                      <a
                        href="/projects#BuildingsProjects"
                        className="button grey-outline small w-inline-block"
                      >
                        <div className="button-text">View</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-hover-item" style={{ width: "100%" }}>
              <div
                className="services-card"
                style={{ padding: "0px", width: "100%" }}
              >
                <a
                  href="/projects#Solarprojects"
                  className="link-block-8 w-inline-block"
                >
                  <img
                    src="images/4t.jpg"
                    loading="lazy"
                    sizes="(max-width: 903px) 100vw, 903px"
                    srcSet="images/4t-p-500.jpg 500w, images/4t.jpg 903w"
                    alt="Telecommunication"
                    className="image-70"
                  />
                </a>
                <h1 className="heading-30">Telecommunication</h1>
                <div className="feature-card-info">
                  <div className="card-button-wrapper">
                    <div className="clip">
                      <a
                        href="/projects#TeleProjects"
                        className="button grey-outline small w-inline-block"
                      >
                        <div className="button-text">View</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
        <section className="section video-section">
          <h1 className="heading-19">ABOUT US</h1>

          <div className="w-layout-blockcontainer container-23 w-container">
            <div className="text-block-9">
              <strong>Saanvi Structural Solutions</strong> is a leading
              structural engineering consultancy specializing in solar farms,
              telecom structures and building designsWith 40+ years of
              collective expertise, we deliver innovative, high-quality, and
              timely engineering solutions for projects of all sizes.
            </div>
          </div>
          <div className="w-layout-blockcontainer container-11 w-container">
            <img
              src="images/64527d7d5691bb43df6c68e9_sketching.png"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
              srcSet="images/64527d7d5691bb43df6c68e9_sketching-p-500.png 500w, images/64527d7d5691bb43df6c68e9_sketching-p-800.png 800w, images/64527d7d5691bb43df6c68e9_sketching.png 1041w"
              alt="Building diagram"
              className="image-7"
            />
          </div>
          <div className="wrapper">
            <div className="w-layout-blockcontainer container w-container">
              <div className="w-layout-blockcontainer container-7 w-container">
                <h1 className="heading-8" style={{ marginTop: "-100px" }}>
                  Cutting-edge structural engineering solutions in solar farms,
                  telecom structures, and building designs, ensuring precision
                  and efficiency.
                </h1>
                <h1 className="heading-10">
                  We are committed to excellence, client satisfaction, and
                  fostering long-term relationships through{" "}
                  <strong>innovation, integrity, and expertise</strong>.
                </h1>
                <div className="div-block-17">
                  <a
                    href="/contact"
                    className="button white-outline w-inline-block"
                  >
                    <div className="button-text">Contact us</div>
                  </a>
                </div>
              </div>
              <div
                className="w-layout-blockcontainer container-6 w-container"
                style={{ marginTop: -"142px" }}
              >
                <div
                  id="w-node-_13f2d22c-ce5c-8c3b-55d7-3dcac59e07d5-1300b8df"
                  className="w-layout-blockcontainer w-container"
                />
                <div>
                  <h1 className="heading-11">
                    10GW
                    <br />
                  </h1>
                  <div className="text-block-6">Enegry</div>
                </div>
                <div>
                  <h1 className="heading-11">1500+</h1>
                  <div className="text-block-6">Sites</div>
                </div>
                <div>
                  <h1 className="heading-11">550+</h1>
                  <div className="text-block-6">Buildings</div>
                </div>
                <div>
                  <h1 className="heading-11">3000+</h1>
                  <div className="text-block-6">Telecomunications</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section no-verticle-padding dark"
          style={{ marginTop: "40px" }}
        >
          <div className="wrapper">
            <div className="testimonial-wrapper">
              <h1 className="heading-109">Competencies</h1>
              {/* <div className="w-layout-grid grid-3"> */}
              <div
                className=" grid-cols-3 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1 gap-4 pt-6 pb-16"
                style={{ display: "grid" }}
              >
                {/*                 <div >
                 */}
                <div className="relative">
                  <img
                    src="images/Untitled-design-4.png"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="images/Untitled-design-4-p-500.png 500w, images/Untitled-design-4-p-800.png 800w, images/Untitled-design-4-p-1080.png 1080w, images/Untitled-design-4.png 1504w"
                    alt="Structural Eng"
                    className="w-full h-full rounded-lg transition-all hover:scale-95"
                    // className="image-57"
                    style={{
                      height: "310px"
                    }}
                  />
                  <div className="absolute bottom-0 z-10 text-2xl text-center block w-full mb-2">
                    Structural Engineering
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="images/Untitled-design-5.png"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="images/Untitled-design-5-p-500.png 500w, images/Untitled-design-5-p-800.png 800w, images/Untitled-design-5-p-1080.png 1080w, images/Untitled-design-5-p-1600.png 1600w, images/Untitled-design-5-p-2000.png 2000w, images/Untitled-design-5.png 2048w"
                    alt="Civil 3d"
                    className="w-full h-full rounded-lg transition-all hover:scale-95"

                    // className="image-58"
                    style={{
                      height: "310px"
                    }}
                  />
                  <div className="absolute bottom-0 z-10 text-2xl text-center block w-full mb-2">
                    Civil 3D
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="images/land.png"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="images/eb322c323c4798125b847fd465486e2c_land-p-500.png 500w, images/eb322c323c4798125b847fd465486e2c_land-p-800.png 800w, images/eb322c323c4798125b847fd465486e2c_land-p-1080.png 1080w, images/eb322c323c4798125b847fd465486e2c_land-p-1600.png 1600w, images/eb322c323c4798125b847fd465486e2c_land-p-2000.png 2000w, images/land.png 2048w"
                    alt="Land Deve"
                    className="w-full h-full rounded-lg transition-all hover:scale-95"

                    // className="image-58"
                    style={{
                      height: "310px"
                    }}
                  />
                  <div className="absolute bottom-0 z-10 text-2xl text-center block w-full mb-2">
                    Land Development
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="images/steel-draw.png"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="images/449a06e93b80783a6b945b8ee5d3b114_steel-draw-p-500.png 500w, images/449a06e93b80783a6b945b8ee5d3b114_steel-draw-p-800.png 800w, images/449a06e93b80783a6b945b8ee5d3b114_steel-draw-p-1080.png 1080w, images/449a06e93b80783a6b945b8ee5d3b114_steel-draw-p-1600.png 1600w, images/449a06e93b80783a6b945b8ee5d3b114_steel-draw-p-2000.png 2000w, images/steel-draw.png 2048w"
                    alt="Steel Draw"
                    className="w-full h-full rounded-lg transition-all hover:scale-95"

                    // className="image-57"
                    style={{
                      height: "310px"
                    }}
                  />
                  <div className="absolute bottom-0 z-10 text-2xl text-center block w-full mb-2">
                    Steel Soft Drawing
                  </div>
                </div>
                <div
                  // id="w-node-_0feadf17-19ba-fed9-03ed-8ac6d137a790-1300b8df"
                  // className="w-layout-blockcontainer container-36 w-container"
                  className="relative"
                >
                  <img
                    src="images/Untitled-design-2.png"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="images/Untitled-design-2-p-500.png 500w, images/Untitled-design-2-p-800.png 800w, images/Untitled-design-2.png 1000w"
                    alt="Pile Des"
                    className="w-full h-full rounded-lg transition-all hover:scale-95"

                    // className="image-59 "
                    style={{
                      height: "310px"
                    }}
                  />
                  <div className="absolute bottom-0 z-10 text-2xl text-center block w-full mb-2">
                    Pile Foundation
                  </div>
                </div>
                <div>
                  <a
                    href="/contact"
                    className="button grey-outline w-inline-block cont"
                  >
                    <div className="button-text">Contact us</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section no-verticle-padding dark">
          <div className="wrapper">
            <div className="testimonial-wrapper">
              <h1 className="heading-21">PROJECTS</h1>

              <div className="testimonial-slider-container">
                <div className="testimonial-slider">
                  {testimonials.map((t, index) => (
                    <div
                      className={`testimonial-slide ${index === currentSlide ? "active" : "inactive"
                        }`}
                      key={index}
                    >
                      <div className="testimonial-content">
                        <div className="relative">
                          <img
                            src={t.image}
                            alt={t.title}
                            className="testimonial-image "
                            style={{ borderRadius: "5px", height: "100%" }}
                          />
                          {/* <div className="Project_slide1"> */}
                          <div className="absolute top-0 left-0 flex flex-col justify-center items-center h-full gap-1 max-[1000px]:flex-row max-[1000px]:h-fit max-[1000px]:w-full">
                            {/* <button
                              className="testimonial-arrow3"
                              onClick={prevSlide}
                            >
                              <div>PREVIOUS</div>
                            </button>
                            <button
                              className="testimonial-arrow4"
                              onClick={nextSlide}
                            >
                              <div>Next</div>
                            </button> */}
                            <button
                              // className="testimonial-arrow"
                              className="Arrow_btn1"
                              onClick={prevSlide}
                            >
                              {`P\nR\nE\nV\nI\nO\nU\nS`
                                .split("\n")
                                .map((char, i) => (
                                  <div key={i}>{char}</div>
                                ))}{" "}
                            </button>
                            <button
                              // className="testimonial-arrow1"
                              className="Arrow_btn2"
                              onClick={nextSlide}
                            >
                              {`N\ne\nx\nt`.split("\n").map((char, i) => (
                                <div key={i}>{char}</div>
                              ))}
                            </button>
                          </div>
                        </div>
                        <h2 className="Project_Title">
                          {t.title}
                          <span style={{ color: "#174b82" }}>{t.subtitle}</span>
                        </h2>
                        <p className="Project_description">
                          {t.description} <br /> <br /> <br /> <br /> <br />
                          <div className="div-block-100">
                            <a
                              href="/projects"
                              className="button white-outline w-inline-block"
                            >
                              <div className="button-text">View Projects</div>
                            </a>
                          </div>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div className="Project_slide">
                  <button className="testimonial-arrow" onClick={prevSlide}>
                    {`P\nR\nE\nV\nI\nO\nU\nS`.split("\n").map((char, i) => (
                      <div key={i}>{char}</div>
                    ))}{" "}
                  </button>
                  <button className="testimonial-arrow1" onClick={nextSlide}>
                    {`N\ne\nx\nt`.split("\n").map((char, i) => (
                      <div key={i}>{char}</div>
                    ))}
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section className="section-4">
          <div className="wrapper">
            <div className="testimonial-wrapper">
              <div className="w-layout-grid grid-4">
                <div className="text-block-8">
                  <strong className="bold-text-2">
                    We are happy to assist you with your project – how can we
                    help?
                  </strong>
                </div>
                <div
                  className="form-block-3 w-form"
                  style={{
                    height: "100%",
                    marginTop: "0px",
                  }}
                >
                  <form
                    onSubmit={handleSubmit}
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    className="form-3"
                    data-wf-page-id="67c002b32cafa0ea1300b8df"
                    data-wf-element-id="13a2dd79-730f-d4c6-136a-13d6ffe0890a"
                    style={{
                      margin: "0px",
                    }}
                  >
                    <label
                      htmlFor="name"
                      className="field-label-6"
                      style={{
                        fontSize: "1.1rem",
                      }}
                    >
                      Name
                    </label>
                    <input
                      className="text-field-2 w-input"
                      maxLength={256}
                      name="name"
                      data-name="Name"
                      placeholder="Name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setNameerr(false);
                      }}
                      style={{
                        fontSize: "1.1rem",
                      }}
                      id="name"
                      required=""
                    />
                    {nameerr && (
                      <div style={{ color: "red" }}>Oops! Enter Name.</div>
                    )}
                    <label
                      htmlFor="email"
                      className="field-label-7"
                      style={{
                        fontSize: "1.1rem",
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      className="text-field-4 w-input"
                      maxLength={256}
                      name="email"
                      data-name="Email"
                      placeholder="Email"
                      type="email"
                      id="email"
                      value={email}
                      style={{
                        fontSize: "1.1rem",
                      }}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailerr(false);
                      }}
                      required=""
                    />
                    {emailerr && (
                      <div style={{ color: "red" }}>
                        Oops! Enter Correct Email id.
                      </div>
                    )}
                    <label
                      htmlFor="Phone"
                      className="field-label-8"
                      style={{
                        fontSize: "1.1rem",
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      className="text-field-3 w-input"
                      maxLength={256}
                      name="Phone"
                      data-name="Phone"
                      placeholder="Phone Number"
                      type="tel"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      id="Phone"
                      required=""
                      style={{
                        fontSize: "1.1rem",
                      }}
                    />
                    <label
                      htmlFor="field"
                      className="field-label-9"
                      style={{
                        fontSize: "1.1rem",
                      }}
                    >
                      Description
                    </label>
                    <textarea
                      id="field"
                      name="field"
                      maxLength={5000}
                      data-name="Field"
                      placeholder="Example Text"
                      className="textarea w-input"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      style={{
                        fontSize: "1.1rem",
                      }}
                    />
                    <label
                      className="field-label-3 global"
                      style={{
                        fontSize: "1.1rem",
                      }}
                    >
                      Choose Service
                    </label>
                    <select
                      name="Service"
                      className="text-field"
                      style={{
                        fontSize: "1.1rem",
                        padding: "10px",
                      }}
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      required
                    >
                      <option value="Solar">Solar</option>
                      <option value="Buildings">Buildings</option>
                      <option value="Telecommunication">
                        Telecommunication
                      </option>
                    </select>
                    <div className="w-full flex justify-end">
                      <input
                        type="submit"
                        className="w-button"
                        value={loading ? "Submitting..." : "Submit"}
                        disabled={loading}
                        style={{
                          marginTop: "30px",
                        }}
                      />
                    </div>
                  </form>
                  <div className="successtoast">
                    {/* {success && ( */}
                      <div style={{ color: "green" }}>
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                    {/* )} */}
                    {fail && (
                      <div style={{ color: "red" }}>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
