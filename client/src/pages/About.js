import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Happy Parcel"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutus.jpg"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Our gifting website offers a curated collection of unique and memorable presents, making it easy to find the perfect gift for your loved ones. From personalized keepsakes to luxurious treats, discover a diverse range of options that are sure to delight and inspire.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;