import React from "react";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Home1 from "../assets/12.jpg";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={Home1}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </div>
  );
}

export default Home;
