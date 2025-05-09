import Footer from "./Footer"
import Header from "./Header"
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('SPile +');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
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
        <h className="Contact">Contact us</h>
        <section>
          <div className="wrapper">
            <div className="project-description-wrapper">
              <div
                id="w-node-_0afe1988-388e-b5cb-404e-8a553a0bef5a-1300b8e7"
                className="project-description top-grey-border">
                <div
                  id="w-node-c1386cff-6b52-7e7b-943b-f01eec93797f-1300b8e7"
                  className="w-form">
                  <form
                    id="email-form"
                    name="email-form"
                    onSubmit={handleSubmit}
                    data-name="Email Form"
                    className="form"
                    data-wf-page-id="67c002b32cafa0ea1300b8e7"
                    data-wf-element-id="c1386cff-6b52-7e7b-943b-f01eec937980"                  >
                    <div className="field-wrapper">
                      <label
                        htmlFor="name"
                        id="w-node-c1386cff-6b52-7e7b-943b-f01eec937981-1300b8e7"
                        className="field-label"                      >
                        Name
                      </label>
                      <input
                        className="text-field w-input"
                        maxLength={256}
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        name="name"
                        data-name="Name"
                        placeholder="Your Name"
                        type="text"
                        id="name"
                      />
                      {nameerr &&
                        <div style={{ color: "red" }}>
                          Oops! Enter Name.
                        </div>}
                      {/* <input
                        className="text-field w-input"
                        maxLength={256}
                        name="name-2"
                        data-name="Name 2"
                        placeholder="Your last name"
                        type="text"
                        id="name-2"
                      /> */}
                    </div>
                    <div className="field-wrapper">
                      <label
                        htmlFor="name-3"
                        id="w-node-_5e3db900-a825-6509-a424-cf926f0e51a6-1300b8e7"
                        className="field-label"
                      >
                        Email Address
                      </label>
                      <input
                        className="text-field w-node-_5e3db900-a825-6509-a424-cf926f0e51a8-1300b8e7 w-input"
                        maxLength={256}
                        name="name-3"
                        data-name="Name 3"
                        value={email}

                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        type="email"
                        id="name-3"
                      />
                      {emailerr &&
                        <div style={{ color: "red" }}>
                          Oops! Enter Correct Email id.
                        </div>}
                    </div>
                    <div className="field-wrapper">
                      <label
                        htmlFor="name-4"
                        id="w-node-_9f611142-c9c4-1dbb-5d72-be5bad231d1e-1300b8e7"
                        className="field-label"
                      >
                        Message
                      </label>
                      <textarea
                        placeholder="Example Text"
                        maxLength={5000}
                        id="field"
                        value={description}

                        onChange={(e) => setDescription(e.target.value)}
                        name="field"
                        data-name="field"
                        className="text-field large w-node-_9ecb47d5-8f4d-56b8-1721-4ed5246ec8ac-1300b8e7 w-input"
                        defaultValue={""}
                      />
                    </div>
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
                      data-wait="Please wait..."
                      id="w-node-c1386cff-6b52-7e7b-943b-f01eec937987-1300b8e7"
                      className="submit-button w-button"
                      defaultValue="Submit"
                      value={loading ? "Submitting..." : "Submit"}
                      disabled={loading}
                    />
                  </form>

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
              <div
                id="w-node-_0afe1988-388e-b5cb-404e-8a553a0bef68-1300b8e7"
                className="project-features"
              >
                <div className="sticky-services-menu">
                  <div className="list-heading-wrapper">
                    <div className="subtitle">Quick links</div>
                  </div>
                  <div className="service-menu-list">
                    <a
                      href="https://calendly.com/"
                      target="_blank"
                      className="menu-list-item w-inline-block"
                    >
                      <div
                        id="w-node-e9ec757d-bde5-cfd1-09ea-ee86b7bf3893-1300b8e7"
                        className="list-item-text"
                      >
                        Schedule a meeting
                      </div>
                      <img
                        src="images/arrow-right48x482x.svg"
                        loading="lazy"
                        id="w-node-e9ec757d-bde5-cfd1-09ea-ee86b7bf3895-1300b8e7"
                        alt="arrow"
                        className="list-item-arrow"
                      />
                    </a>
                    <a
                      href="mailto:info@template.com"
                      className="menu-list-item w-inline-block"
                    >
                      <div
                        id="w-node-b5f0f859-f2e3-8e3f-1204-c264ea8fba83-1300b8e7"
                        className="list-item-text"
                      >
                        contact@saanvistructural.com{" "}
                      </div>
                      <img
                        src="images/arrow-right48x482x.svg"
                        loading="lazy"
                        id="w-node-b5f0f859-f2e3-8e3f-1204-c264ea8fba85-1300b8e7"
                        alt="arrow"
                        className="list-item-arrow"
                      />
                    </a>
                    <a
                      href="tel:+15555555555"
                      className="menu-list-item w-inline-block"
                    >
                      <div
                        id="w-node-b57d97ad-744c-763d-df42-64a37c179c93-1300b8e7"
                        className="list-item-text"
                      >
                        PH - 044- 4284 5115
                      </div>
                      <img
                        src="images/arrow-right48x482x.svg"
                        loading="lazy"
                        id="w-node-b57d97ad-744c-763d-df42-64a37c179c95-1300b8e7"
                        alt="arrow"
                        className="list-item-arrow"
                      />
                    </a>
                  </div>
                  <h1 className="heading-55">Address</h1>
                  <div className="text-block-34">
                    20 A Gandhi StreetJanakiram Colony
                    <br /> Extn,Arumbakkam, Chennai 600106
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>

  )
}

export default Contact
