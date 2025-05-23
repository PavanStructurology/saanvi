import { useState, useRef, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import teamMembers from "./TeamData";
import { useLocation } from "react-router-dom";
import "./Team_page.css";

const Team_page = () => {
  const location = useLocation();
  const topRef = useRef(null); // For scrolling to top section

  // Get passed member from navigation, or fall back to the first member
  const passedMember = location.state?.member;
  const [selectedMember, setSelectedMember] = useState(
    passedMember || teamMembers[0]
  );

  // Scroll to top if a new member is passed from location state
  useEffect(() => {
    if (passedMember && topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // console.log("passedMember", passedMember)
  }, [passedMember]);

  // Handler for manual clicking between members (if used)
  const handleMemberClick = (member) => {
    setSelectedMember(member);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <div class="preloader" ref={topRef}>
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
      <div className="page-wrapper" >
        <div  className="wrapper">
          <section>
            <div className="Teampage">
              <div>
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  style={{ borderRadius: "100%", paddingBottom: "15px", maxWidth: "400px" }}
                  className="w-lvh max-w-md h-auto"
                />
                <center>
                  <h1 className="name">{selectedMember.name}</h1>
                  <p className="role">{selectedMember.role}</p>
                  <div>
                    <a
                      href={selectedMember.linkedin}
                      className="team-social-icon"
                    >
                      <img src="images/linkedin.svg" alt="Linkedin" />
                    </a>
                  </div>
                </center>
              </div>
              <div className="rich-text">
                <div style={{ marginBottom: "15px" }}>
                  <strong
                    style={{ fontSize: "35px", color: "#174b82" }}
                    className="pb-16"
                  >
                    About
                  </strong>
                </div>
                <p className="bio">{selectedMember.bio1}</p>
                <p className="bio">{selectedMember.bio2}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Team Member List */}
        <div className="wrapper" style={{ marginTop: "6%" }}>
          <div className="tripple-grid">
            <div className="mission-column">
              <h1 className="large-heading one">Meet the team</h1>
            </div>

            <div
              className="collection-list"
              style={{
                // maxWidth: "682px",
                // margin: "auto",
                // alignItems: "center",
                // gridTemplateColumns: "1fr 1fr",
                display: "flex",
                justifyContent: "center",
                margin: "80px 0 80px 0",
                gap: "1rem",
              }}
            >
              {teamMembers.map((member) => (
                <div
                  className="team-collection-item"
                  key={member.id}
                  style={{
                    margin: "0px",
                    width: "100%",
                    maxWidth: "400px",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <div className="project-item" style={{ margin: "0px" }}>
                    <div className="project-image">
                      <div className="background-image">
                        <img
                          src={member.image}
                          alt={member.name}
                          style={{
                            objectFit: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                        />
                        <div className="image-overlay light-overlay" />
                      </div>
                    </div>
                    <div className="project-card-info">
                      <h3>{member.name}</h3>
                      <div
                        className="project-hover-link-wrapper"
                        style={{
                          height: "100px",
                        }}
                      >
                        <a
                          href="#"
                          className="hover-link"
                          onClick={() => handleMemberClick(member)}
                          style={{
                            height: "100px",
                            width: "100px",
                          }}
                        >
                          About
                        </a>
                      </div>
                      <div className="team-social-wrapper">
                        <a href={member.linkedin} className="team-social-icon">
                          <img src="images/linkedin.svg" alt="Linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Team_page;
