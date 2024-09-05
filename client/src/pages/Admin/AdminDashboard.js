import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  const containerStyle = {
    backgroundColor: '#f5f5f5',
    padding: '20px'
  };
  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: '20px'
  };
  const textStyle = {
    color: '#191970',
    fontSize: '18px',
    margin: '10px 0'
  };

  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard" style={containerStyle}>
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-3" style={cardStyle}>
                  <h3 style={textStyle}> Admin Name: </h3>
                  <p>{auth?.user?.name}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3" style={cardStyle}>
                  <h3 style={textStyle}> Admin Email: </h3>
                  <p>{auth?.user?.email}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3" style={cardStyle}>
                  <h3 style={textStyle}> Admin Contact: </h3>
                  <p>{auth?.user?.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;