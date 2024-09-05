import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
          Our privacy policy ensures that your personal information is protected and respected. We are committed to safeguarding your privacy and maintaining the confidentiality of your data. We collect only necessary information for processing orders and providing customer support, and we never share your data with third parties without your consent. Your trust and privacy are our top priorities.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;