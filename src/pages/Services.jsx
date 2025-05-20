import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./services.css"
const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
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
      <div className="page-wrapper" style={{ padding: "25px" }}>
        <div className="sticky-section">
          <div className="wrapper">
            <div className="div-block-5">
              <div className="div-block-8">
                <div className="div-block-4">
                  <a href="#Solar" className="anchor-link w-inline-block">
                    <div className="subtitle">Solar</div>
                  </a>
                </div>
                <div className="div-block-6">
                  <a href="#buildings" className="anchor-link w-inline-block">
                    <div className="subtitle">Buildings</div>
                  </a>
                </div>
                <div className="div-block-7">
                  <a
                    href="#Telecommunications"
                    className="anchor-link bottom w-inline-block"
                  >
                    <div className="subtitle">Telecommunication</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="Solar" data-w-id="0dba1441-ebbc-9621-1936-de8c26fe5a62">
          <div className="wrapper">
            <div className="banner-wrapper">
              <div className="banner-content">
                <div className="banner-intro">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="div-block-40"
                  >
                    <div className="">
                      <h2 className="heading">
                        Solar Structures: Tailored Designs and Engineering
                        Expertise
                      </h2>
                      <div className="body-display">
                        Saanvi offers comprehensive solar solutions with tailored designs and expert engineering,
                        ensuring efficient energy capture and reliable installations for diverse projects.
                      </div>
                    </div>
                  </motion.div>

                  <div className="div-block-16"  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2 }}
                      viewport={{ once: true }}
                      className="div-block-36"

                    >
                      <div className="w-full">
                        <a
                          href="/contact"
                          className="button white-outline w-inline-block"
                        >
                          <div className="button-text">Contact us</div>
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.4 }}
                      viewport={{ once: true }}
                      className="div-block-36"
                    >
                      <div className="w-full">
                        <a target="_blank" 
                          href="https://calendly.com/"
                          className="button white-outline w-inline-block"
                        >
                          <div className="button-text">Schedule a call</div>
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="background-banner service-1-banner">
                  <div className="image-overlay" />
                </div>
              </div>

              <div className="image-cover-wrapper">
                <div style={{ width: "100%" }} className="image-cover" />
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="services-wrapper">
              <div className="services-info">
                <div
                  id="w-node-_30697c31-5cdb-6fcf-5548-b4be320b7478-1300b8e8"
                  className="service-description"
                />
                <div
                  id="w-node-_30697c31-5cdb-6fcf-5548-b4be320b747b-1300b8e8"
                  className="service-description"
                />
              </div>
              <div className="div-block-9">
                <h1 className="heading-22">
                  Reasons To Choose Saanvi For Your Solar Structures
                </h1>
                <div className="text-block-27">
                  Choose Saanvi for your solar structures because we provide
                  customized designs and expert engineering and ensure efficient
                  installations that maximize energy capture and sustainability
                  for your projects.
                </div>
              </div>
              <div className="div-block-10">
                <div className="columns w-row">
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/solars.avif"
                      loading="lazy"
                      alt="Fixed tilt"
                      className="image-19"
                    />
                    <h1 className="heading-56">
                      <strong className="bold-text-7">Fixed Tilt</strong>
                    </h1>
                    <div className="text-block-26">
                      Low cost, easy maintenance, perfect for homes &amp;
                      businesses. Get reliable power today.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/high-temperature.png"
                      loading="lazy"
                      alt="Tracker"
                      className="image-19"
                    />
                    <h1 className="heading-57" >
                      <strong className="bold-text-8">Trackers</strong>
                    </h1>
                    <div className="text-block-26">
                      Track the Sun, Maximize Energy. Trackers optimize power
                      output. Invest in the future.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/mmer.avif"
                      loading="lazy"
                      alt="commercial"
                      className="image-19"
                    />
                    <h1 className="heading-39">
                      <strong className="bold-text-9">
                        Commercial Rooftop
                      </strong>
                    </h1>
                    <div className="text-block-26">
                      Power Your Business. Commercial rooftop solar solutions.
                      Reduce costs, generate clean energy.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/resid.avif"
                      loading="lazy"
                      alt="Residential"
                      className="image-19"
                    />
                    <h1 className="heading-40">
                      <strong className="bold-text-7">
                        Residential Rooftop
                      </strong>
                    </h1>
                    <div className="text-block-26">
                      Sun on Your Roof, Savings in Your Pocket. Residential
                      solar. Easy install, clean energy for your home.
                    </div>
                  </div>
                </div>
                <div className="columns w-row">
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/equiped.avif"
                      loading="lazy"
                      alt="equipped"
                      className="image-19"
                    />
                    <h1 className="heading-70">Equipment Support</h1>
                    <div className="text-block-26">
                      We design and install top-notch equipment support pads,
                      maximizing stability for your solar panels. Peace of mind,
                      maximized production.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/prerev.avif"
                      loading="lazy"
                      alt="Peer Review"
                      className="image-19"
                    />
                    <h1 className="heading-58">
                      <strong className="bold-text-11">Peer Review</strong>
                    </h1>
                    <div className="text-block-26">
                      Our solar projects undergo rigorous peer review by
                      industry experts. This ensures optimal design, maximizes
                      efficiency, and delivers peace of mind for you.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/t9.avif"
                      loading="lazy"
                      alt="pile design"
                      className="image-19"
                    />
                    <h1 className="heading-69">
                      <strong className="bold-text-10">Pile Design</strong>
                    </h1>
                    <div className="text-block-26">
                      Our expert engineers design custom pile systems for secure
                      solar installations on any terrain. Get a rock-solid
                      foundation.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/carpot.avif"
                      loading="lazy"
                      alt="carpot"
                      className="image-19"
                    />
                    <h1
                      id="w-node-bdf0a53f-14b5-e0c1-04db-96a550ed1b32-1300b8e8"
                      className="heading-59"
                    >
                      <strong className="bold-text-10">Carpots</strong>
                    </h1>
                    <div className="text-block-26">
                      Solar Carports. Parking + Power. Dual-use solutions, shade
                      your car, generate clean energy.
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_9a8de5c8-29a4-07b5-d9d5-b67c7365d1bd-1300b8e8"
                  className="columns w-row"
                >
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/t7.avif"
                      loading="lazy"
                      alt="independent"
                      className="image-19"
                    />
                    <h1 className="heading-34">
                      <strong className="bold-text-11">
                        Independent Engineering
                      </strong>
                    </h1>
                    <div className="text-block-26">
                      We utilize independent engineering reviews on all
                      projects, guaranteeing a reliable, code-compliant solar
                      solution built to last. Trust the experts, choose Saanvi.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/windTunnal.avif"
                      loading="lazy"
                      alt="wind tunnel"
                      className="image-19"
                    />
                    <h1 className="heading-81">Wind Tunnel <br />Guidance</h1>
                    <div className="text-block-52">
                      Wind tunnel guidance optimizes our solar projects for your
                      location. We engineer for strength, you enjoy clean energy
                      with confidence.
                      <br />
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3" />
                  <div className="solarcoloma w-col w-col-3">
                    <div className="w-layout-blockcontainer container-41 w-container">
                      <h1 className="heading-96">.</h1>
                    </div>
                    <div className="w-layout-blockcontainer w-container">
                      <h1 className="heading-96">.</h1>
                    </div>
                    <div className="div-block-36" >
                      <a
                        href="/contact"
                        className="button white-outline w-inline-block"
                      >
                        <div className="button-text">Contact us</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-layout-blockcontainer container-26 w-container">
                <div>
                  <h1 className="heading-31">
                    <strong className="bold-text-16">Projects</strong>
                  </h1>
                  <div className="text-block-30">
                    Check out our projects in Solar.
                    <br />
                  </div>
                </div>
                <div className="div-block-11">
                  <img
                    src="images/1.jpg"
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
                    srcSet="images/1-p-500.jpg 500w, images/1-p-800.jpg 800w, images/1-p-1080.jpg 1080w, images/1.jpg 1280w"
                    alt="Solar"
                    className="image-44"
                  />
                  <h1>
                    <strong className="bold-text-15">Guajiro MX 129MW</strong>
                  </h1>
                  <a
                    href="/projects#Solarprojects"
                    className="button-13 w-button"
                  >
                    View All
                  </a>
                </div>
              </div>
              <div className="w-layout-blockcontainer container-29 w-container" style={{ marginTop: "60px" }}>
                <h1 className="heading-37">
                  <strong className="bold-text-17">Benefits</strong>
                </h1>
                <h1 className="heading-38">
                  Here’s Why You Should Choose Saanvi
                  <br />
                </h1>
                <div className="servicecomponents" style={{ padding: "20px" }}>
                  <div className="flex-1/2">
                    <div>
                      <img
                        src="images/img.avif"
                        loading="lazy"
                        alt="comprehensive"
                        className="w-26"
                      />
                    </div>
                    <div>
                      <h1 style={{ lineHeight: "1px", marginTop: "15px" }}>
                        <strong className="text-3xl">
                          Comprehensive Engineering services
                        </strong>
                      </h1>
                    </div>
                    <div style={{ marginTop: "15px" }}>
                      From peer reviews to wind tunnel analysis, we provide
                      thorough engineering assessments for reliable project
                      validation.
                    </div>
                  </div>
                  <div className="flex-1/2">
                    <img
                      src="images/t7.avif"
                      loading="lazy"
                      alt="independent"
                      className="w-26"
                    />
                    <div>
                      <h1 style={{ lineHeight: "1px", marginTop: "15px" }}>
                        <strong className="text-3xl">
                          Specialized Structural <br />
                          Solutions
                        </strong>
                      </h1>
                    </div>
                    <div style={{ marginTop: "15px" }}>
                      Tailored designs for fixed-tilt and tracking systems,
                      solar carports, and equipment support pads ensure optimal
                      performance and stability.
                    </div>
                  </div>
                  <div className="">
                    <img
                      src="images/img3.avif"
                      loading="lazy"
                      alt="expertise"
                      className="w-26"
                    />
                    <h1 style={{ lineHeight: "1px", marginTop: "15px" }}>
                      <strong className="text-3xl">
                        Expertise Across <br />
                        Sectors
                      </strong>
                    </h1>
                    <div style={{ marginTop: "15px" }}>
                      Whether in solar, building, telecom, or forensic
                      engineering, we offer specialized expertise to meet
                      diverse project needs precisely.
                      <br />
                    </div>
                  </div>
                </div>
                <div className="div-block-36" style={{ margin: "auto", marginTop: "10px" }}>
                  <a
                    href="/contact"
                    className="button white-outline w-inline-block"
                  >
                    <div className="button-text">Contact us</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="buildings" data-w-id="7cd5cb55-b5cf-7f44-a1d7-8d3e464a1c2e">
          <div className="Servicesection">
            <div className="wrapper">
              <div className="banner-wrapper">
                <div className="banner-content">
                  <div className="banner-intro">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                    >
                      <div className="subtitle-wrapper">
                        <h2 className="heading">
                          Building Tomorrow’s Landmarks Today with Structural
                          Integrity and Precision
                        </h2>
                      </div>
                      <div className="body-display">
                        At Saanvi, we excel in engineering construction
                        projects, delivering precision-built structural design
                        and foundation engineering that exceed your
                        expectations.
                      </div>
                    </motion.div>

                    <div className="div-block-16">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="div-block-36"
                      >
                        <div className="w-full">
                          <a
                            href="/contact"
                            className="button white-outline w-inline-block"
                          >
                            <div className="button-text">Contact us</div>
                          </a>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4 }}
                        viewport={{ once: true }}
                        className="div-block-36"
                      >
                        <div className="w-full">
                          <a target="_blank" 
                            href="https://calendly.com/"
                            className="button white-outline w-inline-block"
                          >
                            <div className="button-text">Schedule a call</div>
                          </a>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="background-banner service-2-banner">
                    <div className="image-overlay" />
                  </div>
                </div>

                <div className="image-cover-wrapper right-side">
                  <div style={{ width: "100%" }} className="image-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="services-wrapper">
              <div className="services-info">
                <div
                  id="w-node-ab6722b6-e9d5-fd3c-17ec-c448b93aa8df-1300b8e8"
                  className="service-description"
                />
                <div
                  id="w-node-ab6722b6-e9d5-fd3c-17ec-c448b93aa8e0-1300b8e8"
                  className="service-description"
                />
              </div>
              <div className="div-block-9">
                <h1 className="heading-22">
                  Why Choose Us for Building Design &amp; Construction?
                </h1>
                <div className="text-block-27">
                  Choose Saanvi Structural Soln for your building construction
                  projects for expert structural design, precise foundation
                  engineering, seismic retrofitting expertise, and comprehensive
                  construction management, ensuring quality, efficiency, and
                  safety from start to finish.
                </div>
              </div>
              <div className="div-block-10">
                <div className="columns w-row">
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/img.avif"
                      loading="lazy"
                      alt="comprehensive"
                      className="image-19"
                    />
                    <h1 className="heading-41">
                      <strong className="bold-text-7">
                        Custom_Residential
                      </strong>
                    </h1>
                    <div className="text-block-26">
                      Where design meets precision. We create and build custom
                      homes, tailoring every detail to your unique style.
                      Experience brings expertise, trust brings your dream home
                      to life.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/spec.avif"
                      loading="lazy"
                      alt="speciation"
                      className="image-19"
                    />
                    <h1 className="heading-42">
                      <strong className="bold-text-12">
                        Special Inspections
                      </strong>
                    </h1>
                    <div className="text-block-26">
                      Where function meets artistry. We design and construct
                      captivating public art installations, fostering community
                      engagement and transforming spaces. Let's collaborate to
                      bring your artistic vision to life.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/multi.avif"
                      loading="lazy"
                      alt="multi house"
                      className="image-19"
                    />
                    <h1 className="heading-67">
                      <strong className="bold-text-9">Multi-family</strong>
                    </h1>
                    <div className="text-block-26">
                      Building vibrant communities. We design and construct
                      modern multifamily living spaces, prioritizing comfort,
                      functionality, and resident satisfaction.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/commercal.avif"
                      loading="lazy"
                      alt="commercial"
                      className="image-19"
                    />
                    <h1 className="heading-68">
                      <strong className="bold-text-7">Commercial</strong>
                    </h1>
                    <div className="text-block-26">
                      We design and construct high-performance commercial spaces
                      that inspire productivity and functionality. From concept
                      to completion, we optimize your workflow and create a
                      space that reflects your brand.
                    </div>
                  </div>
                </div>
                <div className="columns w-row">
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/indus.avif"
                      loading="lazy"
                      alt="industre"
                      className="image-19"
                    />
                    <h1 className="heading-61">
                      <strong className="bold-text-10">Industrial</strong>
                    </h1>
                    <div className="text-block-26">
                      Building the Backbone of Industry. We design and construct
                      robust, efficient industrial facilities that optimize
                      production and functionality. Our expertise ensures a
                      durable, adaptable space that empowers your business to
                      thrive.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/img.avif"
                      loading="lazy"
                      alt="comprehensive"
                      className="image-19"
                    />
                    <h1 className="heading-60">
                      <strong className="bold-text-11">Public Art</strong>
                    </h1>
                    <div className="text-block-26">
                      Where function meets artistry. We design and construct
                      captivating public art installations, fostering community
                      engagement and transforming spaces. Let's collaborate to
                      bring your artistic vision to life.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/hou.avif"
                      loading="lazy"
                      alt="retail"
                      className="image-19"
                    />
                    <h1 className="heading-66">
                      <strong className="bold-text-8">Retail</strong>
                    </h1>
                    <div className="text-block-26">
                      Building Your Retail Success. We design and construct
                      stunning retail spaces that optimize functionality and
                      customer experience.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/steel.avif"
                      loading="lazy"
                      alt="steel"
                      className="image-19"
                    />
                    <h1 className="heading-66">
                      <strong className="bold-text-8">Steel Detailing</strong>
                    </h1>
                    <div className="text-block-26">
                      Precision at the Core. We specialize in meticulous steel
                      detailing, ensuring your project's structural integrity
                      and efficient fabrication. We build with strength and
                      accuracy.
                    </div>
                  </div>
                </div>
                <div className="columns w-row">
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/cons.avif"
                      loading="lazy"
                      alt="concrete"
                      className="image-19"
                    />
                    <h1 className="heading-76">
                      <strong className="bold-text-7">
                        Construction Administration
                      </strong>
                    </h1>
                    <div className="text-block-26">
                      Streamlining Your Build. Our Construction Administration
                      team keeps your project on track, on budget, and exceeding
                      quality standards. Build with peace of mind.
                    </div>
                  </div>
                  <div className="column-15 w-col w-col-3" />
                  <div className="column-16 w-col w-col-3" />
                  <div className="w-col w-col-3">
                    <div className="w-layout-blockcontainer w-container">
                      <h1 className="heading-96">.</h1>
                    </div>
                    <div className="w-layout-blockcontainer w-container">
                      <h1 className="heading-96">.</h1>
                    </div>
                    <div className="div-block-36">
                      <a
                        href="/contact"
                        className="button white-outline w-inline-block"
                      >
                        <div className="button-text">Contact us</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-layout-blockcontainer container-26 w-container">
                <div>
                  <h1 className="heading-31">
                    <strong className="bold-text-16">Projects</strong>
                  </h1>
                  <div className="text-block-30">
                    Check Out Our Building Construction Portfolio.
                    <br />
                  </div>
                </div>
                <div className="div-block-11">
                  <img
                    src="images/5b.jpg"
                    loading="lazy"
                    sizes="(max-width: 700px) 100vw, 700px"
                    srcSet="images/5b-p-500.jpg 500w, images/5b.jpg 700w"
                    alt="building"
                    className="image-22"
                  />
                  <h1 className="heading-108">
                    <strong className="bold-text-15">
                      Grand Avenue Lofts, Pheonix
                    </strong>
                  </h1>
                  <a
                    href="/projects#BuildingsProjects"
                    className="button-13 w-button"
                    style={{ width: "142px" }}
                  >
                    View All
                  </a>
                </div>
              </div>
              <div className="w-layout-blockcontainer container-28 w-container" style={{ marginTop: "60px" }}>
                <h1 className="heading-37">
                  <strong className="bold-text-17">Benefits</strong>
                </h1>
                <h1 className="heading-38">
                  Here’s Why You Should Choose Saanvi
                  <br />
                </h1>
                <div className="servicecomponents" style={{ padding: "20px" }}>
                  <div className="flex-1/2">
                    <img
                      src="images/img3.avif"
                      loading="lazy"
                      alt="expertise"
                      className="w-26"
                    />
                    <h1 style={{ lineHeight: "1px", marginTop: "15px" }}>
                      <strong className="text-3xl">
                        Expertise Across
                        <br /> Disciplines
                      </strong>
                    </h1>
                    <div style={{ marginTop: "15px" }}>
                      Saanvi Structural Soln offers expertise in solar, telecom,
                      and forensic engineering and stamping, ensuring
                      specialised solutions for diverse project needs.
                    </div>
                  </div>
                  <div className="flex-1/2">
                    <img
                      src="images/innov.avif"
                      loading="lazy"
                      alt="innovation"
                      className="w-26"
                    />
                    <h1 style={{ lineHeight: "1px", marginTop: "15px" }}>
                      <strong className="text-3xl">
                        Innovative Design <br />
                        Solutions
                      </strong>
                    </h1>
                    <div style={{ marginTop: "15px" }}>
                      We provide innovative design and engineering solutions
                      tailored to optimize performance <br />
                      and efficiency while meeting regulatory standards.
                    </div>
                  </div>
                  <div className="flex-1/2">
                    <img
                      src="images/t2.avif"
                      loading="lazy"
                      alt="dis manag"
                      className="w-26"
                    />
                    <h1 style={{ lineHeight: "1px", marginTop: "15px" }}>
                      <strong className="text-3xl">
                        Project Management
                        <br />
                        <span className="dot">.</span>
                      </strong>
                    </h1>
                    <div style={{ marginTop: "15px" }}                     >
                      We offer comprehensive project management services from
                      concept to completion, ensuring quality, timeliness, and
                      cost-effectiveness in every project phase.
                      <br />
                    </div>
                  </div>
                </div>
                <div className="div-block-27" style={{ margin: "auto", marginTop: "10px" }}>
                  <a
                    href="/contact"
                    className="button white-outline w-inline-block"
                  >
                    <div className="button-text">Contact us</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="Telecommunications">
          <div className="Servicesection">
            <div className="wrapper">
              <div className="banner-wrapper">
                <div className="banner-content">
                  <div className="banner-intro">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className="div-block-41"
                    >
                      <div className="">
                        <h2 className="heading">
                          Empower Connectivity with Saanvi Structural Soln
                          Advanced Telecom Solutions
                        </h2>
                        <div className="body-display">
                          We deliver advanced telecom solutions, optimizing
                          connectivity and performance through expert network
                          design, tower analysis, site planning, and antenna
                          engineering.
                        </div>
                      </div>
                    </motion.div>

                    <div className="div-block-16">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="div-block-36"
                      >
                        <div className="w-full">
                          <a
                            href="/contact"
                            className="button white-outline w-inline-block"
                          >
                            <div className="button-text">Contact us</div>
                          </a>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4 }}
                        viewport={{ once: true }}
                        className="div-block-36"
                      >
                        <div className="w-full">
                          <a target="_blank" 
                            href="https://calendly.com/"
                            className="button white-outline w-inline-block"
                          >
                            <div className="button-text">Schedule a call</div>
                          </a>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="background-banner service-3-banner">
                    <div className="image-overlay" />
                  </div>
                </div>

                <div className="image-cover-wrapper">
                  <div style={{ width: "100%" }} className="image-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="services-wrapper">
              <div className="services-info">
                <div
                  id="w-node-_5c54945a-0ac1-a70e-f372-3c172296a186-1300b8e8"
                  className="service-description"
                />
                <div
                  id="w-node-_5c54945a-0ac1-a70e-f372-3c172296a187-1300b8e8"
                  className="service-description"
                />
              </div>
              <div className="div-block-9">
                <h1 className="heading-22">
                  Reasons To Choose Saanvi Structural Soln For Your
                  Telecommunication Projects
                </h1>
                <div className="text-block-27">
                  We provide specialized expertise, innovative solutions, and a
                  commitment to seamless integration for your telecommunication
                  projects. We ensure reliable, efficient, and future-proof
                  telecom infrastructure solutions tailored to your needs.
                </div>
              </div>
              <div className="div-block-10">
                <div className="columns w-row">
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/t1.avif"
                      loading="lazy"
                      alt="site survey"
                      className="image-19"
                    />
                    <h1 className="heading-36">
                      <strong className="bold-text-7">Site Surveys</strong>
                    </h1>
                    <div className="text-block-26">
                      Our comprehensive site surveys for telecommunication
                      projects identify optimal tower placement, ensuring strong
                      signal strength and a smooth build process.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/t9.avif"
                      loading="lazy"
                      alt="pile design"
                      className="image-19"
                    />
                    <h1 className="heading-35">
                      <strong className="bold-text-10">Pile Design</strong>
                    </h1>
                    <div className="text-block-26">
                      Expert pile design provides a rock-solid foundation for
                      your telecom tower on any terrain. Unwavering support,
                      unwavering signal.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/t10.avif"
                      loading="lazy"
                      alt="mount mapping"
                      className="image-19"
                    />
                    <h1 className="heading-74">
                      <strong className="bold-text-7">Mount Mapping</strong>
                    </h1>
                    <div className="text-block-26">
                      Our advanced mount mapping identifies the perfect
                      placement for telecom equipment, maximizing signal
                      strength and minimizing visual impact.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/t4.avif"
                      loading="lazy"
                      alt="tower"
                      className="image-19"
                    />
                    <h1 className="heading-44">
                      <strong className="bold-text-7">Tower Analysis</strong>
                    </h1>
                    <div className="text-block-26">
                      Expert tower analysis ensures your telecommunication tower
                      is safe, reliable, and meets all code requirements. We
                      maximize uptime, minimize.
                    </div>
                  </div>
                </div>
                <div className="columns w-row">
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/t5.avif"
                      loading="lazy"
                      alt="permit"
                      className="image-19"
                    />
                    <h1 className="heading-33">
                      <strong className="bold-text-7">
                        Permit Submission and Tracking
                      </strong>
                    </h1>
                    <div className="text-block-26">
                      We handle permit submissions and tracking for your telecom
                      project, expediting approvals and keeping you informed
                      every step of the way.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/t6.avif"
                      loading="lazy"
                      alt="complex"
                      className="image-19"
                    />
                    <h1 className="heading-46">
                      <strong className="bold-text-11">
                        Utility
                        <br />
                        Coordination
                      </strong>
                    </h1>
                    <div className="text-block-26">
                      Our expert team tackles complex utility coordination,
                      ensuring a smooth connection to the grid and avoiding
                      delays. We power your project, seamlessly.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/t7.avif"
                      loading="lazy"
                      alt="independent"
                      className="image-19"
                    />
                    <h1 className="heading-77">
                      <strong className="bold-text-7">
                        Independent <br />
                        Engineering
                      </strong>
                    </h1>
                    <div className="text-block-26">
                      We champion independent engineering reviews for your
                      telecom project. This ensures an objective assessment,
                      maximizing safety and code compliance.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/t8.avif"
                      loading="lazy"
                      alt="geotechnical"
                      className="image-19"
                    />
                    <h1 className="heading-80">
                      <strong className="bold-text-7">
                        Geotechnical Analysis
                      </strong>
                    </h1>
                    <div className="text-block-26">
                      Building a Strong Foundation for Your Tower. Expert
                      geotechnical analysis ensures your telecom tower has a
                      stable base, considering soil conditions and potential
                      risks.pen_spark.
                    </div>
                  </div>
                </div>
                <div className="columns w-row">
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/t2.avif"
                      loading="lazy"
                      alt="dis manag"
                      className="image-19"
                    />
                    <h1 className="heading-79">
                      <strong className="bold-text-7">
                        Zoning Construction Drawings
                      </strong>
                    </h1>
                    <div className="text-block-26">
                      Saanvi Structural soln streamlines telecom tower projects!
                      Our expert team handles zoning approvals and creates
                      detailed construction drawings, saving you time and
                      ensuring a compliant build.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3">
                    <img
                      src="images/Team-member-screen.avif"
                      loading="lazy"
                      alt="photosimul"
                      className="image-19"
                    />
                    <h1 className="heading-45" >
                      <strong className="bold-text-9">
                        Photo
                        <br />
                        simulations
                      </strong>
                    </h1>
                    <div className="text-block-26">
                      We create photo simulations for your telecom project,
                      showcasing its visual impact before construction begins.
                      Ensure a seamless integration into the landscape.
                    </div>
                  </div>
                  <div className="solarcoloma w-col w-col-3" />
                  <div className="solarcoloma w-col w-col-3">
                    <h1 className="heading-96">.</h1>
                    <h1 className="heading-97">.</h1>
                    <div className="div-block-29">
                      <div className="">
                        <a
                          href="/contact"
                          className="button white-outline w-inline-block"
                        >
                          <div className="button-text">Contact us</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-layout-blockcontainer container-26 w-container">
                <div>
                  <h1 className="heading-31">
                    <strong className="bold-text-16">Projects</strong>
                  </h1>
                  <div className="text-block-30">
                    Check Out Our&nbsp;Projects In Telecommunication.
                    <br />
                  </div>
                </div>
                <div className="div-block-11">
                  <img
                    src="images/1t.jpg"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="images/1t-p-500.jpg 500w, images/1t.jpg 736w"
                    alt="at@t"
                    className="image-22"
                  />
                  <div>
                    <h1>
                      <strong className="bold-text-15">AT&amp;T Wisil</strong>
                    </h1>
                    <div>
                      8113 Lemont Road, Darien, IL 60515Guyed Tower - Tower MOD
                    </div>
                  </div>
                  <a
                    href="/projects#TeleProjects"
                    className="button-13 w-button"
                  >
                    View All
                  </a>
                </div>
              </div>
            </div>
            <div className="w-layout-blockcontainer container-28 w-container" style={{ marginTop: "120px" }}>
              <h1 className="heading-37">
                <strong className="bold-text-17">Benefits</strong>
              </h1>
              <h1 className="heading-38">
                Reasons Why We Are The Best For You
                <br />
              </h1>
              <div className="servicecomponents" style={{ padding: "20px" }}>
                <div className="flex-1/2">
                  <img
                    src="images/start.png"
                    loading="lazy"
                    alt="strategic"
                    className="w-26"
                  />
                  <h1 style={{ lineHeight: "1px", marginTop: "15px" }}>
                    <strong className="text-3xl">
                      Strategic Telecom <br />
                      Design.
                    </strong>
                  </h1>
                  <div style={{ marginTop: "15px" }} >
                    We deliver precision-engineered telecom designs, adhering to
                    the most stringent US standards and regulations. Our remote
                    team leverages cutting-edge technology to ensure optimized
                    performance and seamless integration for your projects.
                  </div>
                </div>
                <div className="flex-1/2">
                  <img
                    src="images/values.avif"
                    loading="lazy"
                    alt="values"
                    className="w-26"
                  />
                  <h1 style={{ lineHeight: "1px", marginTop: "15px" }}>
                    <strong className="text-3xl">
                      Value-Driven Telecom <br />
                      Consulting.
                    </strong>
                  </h1>
                  <div style={{ marginTop: "15px" }}>
                    We provide strategic consulting and value engineering to
                    optimize your telecom infrastructure, delivering
                    cost-effective solutions without compromising on quality.
                    Our remote experts ensure efficient resource allocation and
                    accelerated project timelines for your initiatives.
                  </div>
                </div>
                <div className="flex-1/2">
                  <img
                    src="images/multi.avif"
                    loading="lazy"
                    alt="multi house"
                    className="w-26"
                  />
                  <h1 style={{ lineHeight: "1px", marginTop: "15px" }}>
                    <strong className="text-3xl">
                      Collaborative Telecom <br />
                      Innovation.
                    </strong>
                  </h1>
                  <div style={{ marginTop: "15px" }}>
                    We forge strong partnerships with US clients, offering
                    innovative telecom solutions tailored to their specific
                    needs. Our remote team brings deep domain expertise and
                    proactive communication, ensuring successful project
                    outcomes and long-term connectivity for your operations.
                    <br />
                  </div>
                </div>
              </div>
              <div className="div-block-28" style={{ margin: "auto", marginTop: "10px" }}>
                <a
                  href="/contact"
                  className="button white-outline w-inline-block"
                >
                  <div className="button-text">Contact us</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
