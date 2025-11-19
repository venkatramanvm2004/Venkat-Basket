import AboutImg from "../Components/abe1.jpg"; 

export default function About() {
  return (
    <section className="flex flex-col md:flex-row bg-tardary px-5">
      {/* Left Side - Text */}
      <div className="about-text md:bg-tardary flex flex-col justify-center">
        <h2 className="about-text h2 border-b-4">About</h2>
        <h3 className="about-text h3">Our Story</h3>
        <p className="about-text p text-white">
          V.M Venkat is dedicated to providing a wide selection of top-quality organic fruits,
          carefully curated to ensure freshness and flavor. We prioritize customer satisfaction
          by offering premium products and exceptional service. Our commitment to organic
          farming practices reflects in every bite, promoting a healthier lifestyle for our customers.
        </p>
        <button className="learn-more-btn flex flex-col justify-center">Learn More</button>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 bg-auto">
        <img src={AboutImg} alt="About" />
      </div>
    </section>
  );
}
