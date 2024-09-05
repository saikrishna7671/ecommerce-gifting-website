import React from "react";
import Layout from "./../components/Layout/Layout";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { FcOnlineSupport } from "react-icons/fc";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact.jpg"
            alt="contact"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US AT ANY TIME</h1>
          <p className="text-justify mt-2">
            Ask anything and get answers immediately!!!
          </p>
          <p className="mt-3">
            <MdOutlineMailOutline /> : happy.parcel@gmail.com
          </p>
          <p className="mt-3">
            <MdPhoneInTalk /> : +91-7437238919
          </p>
          <p className="mt-3">
            <FcOnlineSupport /> : 9876-5432-1098
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;