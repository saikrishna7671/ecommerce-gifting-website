import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout title={"Dashboard - Happy Parcel"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div
              className="card w-75 p-3"
              style={{
                backgroundColor: "#ffc0cb", // Pink background
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                padding: "20px",
              }}
            >
              <h2 style={{ color: "#333", marginBottom: "20px" }}>
                Dashboard
              </h2>
              <h3 style={{ color: "#333", marginBottom: "10px" }}>
                Name: {auth?.user?.name}
              </h3>
              <h4 style={{ color: "#333", marginBottom: "10px" }}>
                Email: {auth?.user?.email}
              </h4>
              <p style={{ color: "#333", marginBottom: "0" }}>
                Address: {auth?.user?.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
