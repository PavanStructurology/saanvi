import React from 'react';
import Footer from './Footer';
import Header from './Header';

const teamMembers = [
  {
    name: 'Madhan Kumar K, MS, P.E',
    role: 'Partner',
    img: 'images/maf.avif',
    alt: 'madhan',
    linkedin: 'https://www.linkedin.com/in/madhankumark-ms-pe/',
  },
  {
    name: 'Sridhar Kethu P.E',
    role: 'Partner',
    img: 'images/sri.avif',
    alt: 'sridhar',
    linkedin: 'https://www.linkedin.com/in/sridhar-kethu-62997a166/',
  },
  {
    name: 'Venkatesh Kannan',
    role: 'Structural Engineer',
    img: 'images/Venkatesh.jpeg',
    alt: 'venkatesh',
    linkedin: 'https://www.linkedin.com/in/venkatesh-kannan-b52311b4/',
  },
  {
    name: 'Selvamuthumani T',
    role: 'Structural Engineer',
    img: 'images/SAANVI-STRUCTURAL-SOLN-3-1.png',
    alt: 'selvamuthumani',
    linkedin: 'https://www.linkedin.com/in/selvamuthumani-t-345355179/',
  },
  // {
  //   name: 'Kelli LeVasseur, P.E.',
  //   role: 'Partner',
  //   img: 'images/kell.avif',
  //   alt: 'kelli',
  // },
  // {
  //   name: 'Jennifer Sheppard, P.E.',
  //   role: 'Associate Partner, Forensics',
  //   img: 'images/jenni.jpg',
  //   alt: 'jenni',
  // },
];

const Team = () => {
  return (
    <>
      <Header />

      {/* About Section */}
      <section className="bg-white text-[#174b82] py-12 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-xl font-medium mb-6">
            Shaping the Future of Structural Engineering, Delivering Excellence in Design
          </p>
          <p className="text-base md:text-lg">
            Collaboration is in our DNA, and we strive to succeed together. Our team of experts delivers
            reliable and detail-oriented solutions for your project. From the first handshake to the final
            beam, superior service guides our every step. Explain who’s behind it, what it does, and what
            makes it unique. Share its core values and what this site has to offer.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-12 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#174b82] mb-10">Meet The Team</h2><br/>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 team-columns">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-xl transition">
                <img
                  src={member.img}
                  alt={member.alt}
                  className="w-56 h-56 object-cover rounded-full mb-4"
                  loading="lazy"
                />
                <h3 className="font-bold text-lg text-[#174b82]">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3"
                  >
                    <img src="images/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mx-auto" loading="lazy" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Team;
