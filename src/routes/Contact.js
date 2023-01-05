import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/2.jpg";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
      <Footer />
    </div>
  );
}

export default Contact;
