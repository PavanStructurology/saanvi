import useWebflowOnLoad from "../components/useWebflowReinit";
// import useWebflowReinit from "../components/useWebflowReinit";
// import useWebflowWaitForElement from "../components/useWebflowWaitForElement";
import Footer from "./Footer";
import Header from "./Header";
import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('SPile +');
  const [description, setDescription] = useState('');
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
      subtitle: "Miami, Florida 1897 N MAIN ST., SEARCY, AR 72143Proposed Overall Site",
      description:
        "Saanvi Structural Soln designs and engineers commercial and residential structures for various building types, including timber, steel, concrete, and masonry...",
    }, {
      image: "images/2.jpg",
      title: " NX Horizon XTR_40",
      subtitle: "Austin, Texas",
      description:
        "Saanvi Structural Soln designs and engineers commercial and residential structures for various building types, including timber, steel, concrete, and masonry...",
    },

  ];
  const [fail, setFail] = useState(false)
  const [success, setSuccuss] = useState(false)
  const [emailerr, setEmailerr] = useState(false)
  const [nameerr, setNameerr] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email == "") {
      setEmailerr(true)
      return
    } else if (name == "") {
      setNameerr(true)
      return
    }
    else {
      setLoading(true);
      const data = {
        Name: name,
        Email: email,
        Phone: phone,
        Service: service,
        Description: description,
        site: true
      };
      try {
        const res = await fetch('http://localhost:6062/auth/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (res.ok) {
          setName('');
          setEmail('');
          setPhone('');
          setService('SPile +');
          setDescription('');
          setSuccuss(true);
        } else {
          setFail(true);
        }
      } catch (err) {
        setFail(true);
      } finally {
        setLoading(false);
      }
    }

  };

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <section
          className="hero-content-wrapper"
        >
          <div className="w-layout-blockcontainer container-34 w-container">
            <div className="div-block-39">
              <div className="clip">
                <div className="text-block-3">
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
                  className="xxl-heading one"
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
                  className="hero-button-wrapper"
                >
                  <a
                    href="contact.html"
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
              <a
                href="/services#Solar"
                className="anchor-link w-inline-block"
              >
                <img
                  src="images/solar-panel-vector-icon.jpg"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
                  srcSet="images/solar-panel-vector-icon-p-500.jpg 500w, images/solar-panel-vector-icon-p-800.jpg 800w, images/solar-panel-vector-icon.jpg 980w"
                  alt="solar-panel-vector-icon"
                  className="image-6"
                />
              </a>
              <a
                href="/services#buildings"
                className="anchor-link w-inline-block"
              >
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
          <div className="w-layout-blockcontainer container-8 w-container">
            <a
              href="/services#Solar"
              className="anchor-link w-inline-block"
            >
              <img
                src="images/solar-panel-vector-icon.jpg"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
                srcSet="images/solar-panel-vector-icon-p-500.jpg 500w, images/solar-panel-vector-icon-p-800.jpg 800w, images/solar-panel-vector-icon.jpg 980w"
                alt="solar-panel-vector-icon"
                className="image-6"
              />
            </a>
            <a href="/services#buildings" className="w-inline-block">
              <img
                src="images/buildings.png"
                loading="lazy"
                alt="buildings"
                className="image-4"
              />
            </a>
            <a
              href="/services#Telecommunications"
              className="w-inline-block"
            >
              <img
                src="images/tele.png"
                loading="lazy"
                alt="Telecommunication"
                className="image-5"
              />
            </a>
          </div>
        </section>
        <section className="section clip">
          <h1 className="heading-19">SERVICES</h1>
          <div id="services" className="Service_wrapper" >
            <div className="services-grid">
              <div className="card-hover-item">
                <div className="services-card">
                  <a href="/projects#Solarprojects" className="link-block-8 w-inline-block">
                    <img
                      src="images/1.jpg"
                      alt="Solar"
                      className="image-68"
                    />
                  </a>
                  <h1 className="heading-30">SOLAR</h1>
                  <div className="feature-card-info">
                    <div className="card-button-wrapper">
                      <div className="clip">
                        <a href="/projects#Solarprojects" className="button grey-outline small w-inline-block">
                          <div className="button-text">View</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="card-hover-item">
                <div className="services-card">
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
              <div className="card-hover-item">
                <div className="services-card">
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
          </div>
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
                <h1 className="heading-8">
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
                    href="contact.html"
                    className="button white-outline w-inline-block"
                  >
                    <div className="button-text">Contact us</div>
                  </a>
                </div>
              </div>
              <div className="w-layout-blockcontainer container-6 w-container">
                <div
                  id="w-node-_13f2d22c-ce5c-8c3b-55d7-3dcac59e07d5-1300b8df"
                  className="w-layout-blockcontainer w-container"
                />
                <div className="w-layout-blockcontainer container-3 w-container">
                  <h1 className="heading-11">
                    10GW
                    <br />
                  </h1>
                  <div className="text-block-5">Enegry</div>
                </div>
                <div className="w-layout-blockcontainer w-container">
                  <h1 className="heading-14">1500+</h1>
                  <div className="text-block-4">Sites</div>
                </div>
                <div className="w-layout-blockcontainer container-5 w-container">
                  <h1 className="heading-13">550+</h1>
                  <div className="text-block-6">Buildings</div>
                </div>
                <div className="w-layout-blockcontainer container-5 w-container">
                  <h1 className="heading-13">3000+</h1>
                  <div className="text-block-6">Telecomunications</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section no-verticle-padding dark">
          <div className="wrapper">
            <div className="testimonial-wrapper">
              <h1 className="heading-109">Competencies</h1>
              <div className="w-layout-grid grid-3">
                <div className="w-layout-blockcontainer container-36 w-container">
                  <img
                    src="images/Untitled-design-4.png"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="images/Untitled-design-4-p-500.png 500w, images/Untitled-design-4-p-800.png 800w, images/Untitled-design-4-p-1080.png 1080w, images/Untitled-design-4.png 1504w"
                    alt="Structural Eng"
                    className="image-57"
                  />
                  <div className="text-block-45">Structural Engineering</div>
                </div>
                <div className="w-layout-blockcontainer container-37 w-container">
                  <img
                    src="images/Untitled-design-5.png"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="images/Untitled-design-5-p-500.png 500w, images/Untitled-design-5-p-800.png 800w, images/Untitled-design-5-p-1080.png 1080w, images/Untitled-design-5-p-1600.png 1600w, images/Untitled-design-5-p-2000.png 2000w, images/Untitled-design-5.png 2048w"
                    alt="Civil 3d"
                    className="image-58"
                  />
                  <div className="text-block-47">Civil 3D</div>
                </div>
                <div className="w-layout-blockcontainer container-39 w-container">
                  <img
                    src="images/land.png"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="images/eb322c323c4798125b847fd465486e2c_land-p-500.png 500w, images/eb322c323c4798125b847fd465486e2c_land-p-800.png 800w, images/eb322c323c4798125b847fd465486e2c_land-p-1080.png 1080w, images/eb322c323c4798125b847fd465486e2c_land-p-1600.png 1600w, images/eb322c323c4798125b847fd465486e2c_land-p-2000.png 2000w, images/land.png 2048w"
                    alt="Land Deve"
                    className="image-59"
                  />
                  <div className="text-block-46">Land Development</div>
                </div>
                <div className="w-layout-blockcontainer container-40 w-container">
                  <img
                    src="images/steel-draw.png"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="images/449a06e93b80783a6b945b8ee5d3b114_steel-draw-p-500.png 500w, images/449a06e93b80783a6b945b8ee5d3b114_steel-draw-p-800.png 800w, images/449a06e93b80783a6b945b8ee5d3b114_steel-draw-p-1080.png 1080w, images/449a06e93b80783a6b945b8ee5d3b114_steel-draw-p-1600.png 1600w, images/449a06e93b80783a6b945b8ee5d3b114_steel-draw-p-2000.png 2000w, images/steel-draw.png 2048w"
                    alt="Steel Draw"
                    className="image-60"
                  />
                  <div className="text-block-48">Steel Soft Drawing</div>
                </div>
                <div
                  id="w-node-_0feadf17-19ba-fed9-03ed-8ac6d137a790-1300b8df"
                  className="w-layout-blockcontainer w-container"
                >
                  <img
                    src="images/Untitled-design-2.png"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="images/Untitled-design-2-p-500.png 500w, images/Untitled-design-2-p-800.png 800w, images/Untitled-design-2.png 1000w"
                    alt="Pile Des"
                    className="image-61"
                  />
                  <div className="text-block-49">Pile Foundation</div>
                </div>
                <div className="w-layout-blockcontainer container-38 w-container">
                  <a href="contact.html" className="button grey-outline small w-inline-block">
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
                        <img src={t.image} alt={t.title} className="testimonial-image" style={{ height: "inherit", borderRadius: "5px" }} />
                        <h2 className="Project_Title" >{t.title}
                          <h4 style={{ color: "#174b82" }}>{t.subtitle}</h4></h2>
                        <p className="Project_description">{t.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="Project_slide">
                  <button className="testimonial-arrow" onClick={prevSlide}>
                    {`P\nR\nE\nV\nI\nO\nU\nS`.split("\n").map((char, i) => (
                      <div key={i}>{char}</div>
                    ))}                  </button>
                  <button className="testimonial-arrow1" onClick={nextSlide}>
                    {`N\ne\nx\nt`.split("\n").map((char, i) => (
                      <div key={i}>{char}</div>
                    ))}
                  </button>
                </div>
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
                <div className="form-block-3 w-form">
                  <form
                    onSubmit={handleSubmit}
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"

                    className="form-3"
                    data-wf-page-id="67c002b32cafa0ea1300b8df"
                    data-wf-element-id="13a2dd79-730f-d4c6-136a-13d6ffe0890a"
                  >
                    <label htmlFor="name" className="field-label-6">
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
                      onChange={(e) => { setName(e.target.value); setNameerr(false) }}

                      id="name"
                      required=""
                    />
                    {nameerr &&
                      <div style={{ color: "red" }}>
                        Oops! Enter Name.
                      </div>}
                    <label htmlFor="email" className="field-label-7">
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
                      onChange={(e) => { setEmail(e.target.value); setEmailerr(false) }}

                      required=""
                    />
                    {emailerr &&
                      <div style={{ color: "red" }}>
                        Oops! Enter Correct Email id.
                      </div>}
                    <label htmlFor="Phone" className="field-label-8">
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
                    />
                    <label htmlFor="field" className="field-label-9">
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
                      value={description} />
                    <label className="field-label-3 global">Choose Service</label>
                    <select
                      name="Service"
                      className="text-field"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      required
                    >
                      <option value="SPile +">SPile +</option>
                      <option value="Solar Project">Solar Project</option>
                      <option value="Buildings">Buildings</option>
                      <option value="Telecommunication">Telecommunication</option>
                      <option value="Forensics">Forensics</option>
                    </select>
                    <input
                      type="submit"
                      className="w-button"
                      value={loading ? "Submitting..." : "Submit"}
                      disabled={loading} />
                  </form>
                  <div className="successtoast">
                    {
                      success && <div style={{ color: "green" }}>
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                    }
                    {fail &&
                      <div style={{ color: "red" }}>
                        Oops! Something went wrong while submitting the form.
                      </div>

                    }
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
