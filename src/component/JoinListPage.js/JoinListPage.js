import React, { useState } from "react";
import "./JoinListPage.css";
import Header from "../Header/Navbar";

const JoinListPage = () => {
  const [showPlans, setShowPlans] = useState(false); // To toggle between sections
  const [showForm, setShowForm] = useState(false); // To show the form
  const [selectedPlan, setSelectedPlan] = useState(null); // To store the selected plan
  const [formSubmitted, setFormSubmitted] = useState(false); // To show confirmation message

  // Function to handle plan selection
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowForm(true);
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to submit the form data
    setFormSubmitted(true);
  };

  return (
    <>
      <Header />
      <div className="join-list-page">
        {/* Show the initial section if showPlans is false */}
        {!showPlans && (
          <div className="initial-section card">
            <h1>Next-Gen AI 3D Scanning</h1>
            <p className="subtitle">
              Pre-order now and be among the first to experience AI-powered
              precision scanning.
            </p>
            <button
              className="cta-button"
              onClick={() => setShowPlans(true)}
            >
              Get Early Access
            </button>
          </div>
        )}

        {/* Show the plans section if showPlans is true */}
        {showPlans && !showForm && (
          <>
            <h1>Unlock Exclusive Benefits</h1>
            <p className="subtitle">
              Choose a plan that suits your needs and take your experience to the
              next level!
            </p>
            <div className="plans">
              {/* Free Plan */}
              {/* <div className="plan">
                <h2>Free Plan</h2>
                <p className="price">
                  $0<span>/month</span>
                </p>
                <ul className="features">
                  <li>✔️ Access to basic features</li>
                  <li>✔️ Limited storage (5GB)</li>
                  <li>✔️ Community support</li>
                  <li>❌ No premium features</li>
                </ul>
                <button
                  className="cta-button"
                  onClick={() => handlePlanSelect("Free Plan")}
                >
                  Get Started
                </button>
              </div> */}

              {/* Basic Plan */}
              <div className="plan popular">
                <div className="popular-badge">Most Popular</div>
                <h2>Basic Plan</h2>
                <p className="price">
                  $10<span>/month</span>
                </p>
                <ul className="features">
                  <li>✔️ All Free Plan features</li>
                  <li>✔️ 50GB storage</li>
                  <li>✔️ Premium support</li>
                  <li>✔️ Advanced analytics</li>
                </ul>
                <button
                  className="cta-button"
                  onClick={() => handlePlanSelect("Basic Plan")}
                >
                  Buy Now
                </button>
              </div>

              {/* Premium Plan */}
              <div className="plan">
                <h2>Premium Plan</h2>
                <p className="price">
                  $20<span>/month</span>
                </p>
                <ul className="features">
                  <li>✔️ All Basic Plan features</li>
                  <li>✔️ Unlimited storage</li>
                  <li>✔️ Priority support</li>
                  <li>✔️ Exclusive features</li>
                </ul>
                <button
                  className="cta-button"
                  onClick={() => handlePlanSelect("Premium Plan")}
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* Back button to go back to the initial section */}
           <div className="back-button-div">
           <button
              className="back-button"
              onClick={() => setShowPlans(false)}
            >
              Back
            </button>
           </div>
          </>
        )}

        {showForm && !formSubmitted && (
          <div className="form-section card">
            <h2>Enter Your Details for {selectedPlan}</h2>
            <form onSubmit={handleFormSubmit}>
              
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="text" placeholder="Country" required />
              <input type="text" placeholder="City" required />
              <input type="text" placeholder="Postal Code" required />
              <button type="submit" className="cta-button">
                Submit
              </button>
            </form>
            <button
              className="back-button"
              onClick={() => setShowForm(false)}
            >
              Back
            </button>
          </div>
        )}

        {/* Show confirmation message after form submission */}
        {formSubmitted && (
          <div className="confirmation-section card">
            <h2>Thank You for Choosing {selectedPlan}!</h2>
            <p>
              Your request has been successfully submitted. Our team will contact
              you shortly with further details.
            </p>
            <p>
              Stay tuned for exciting updates and exclusive offers on our Next-Gen
              AI 3D Scanning technology.
            </p>
            <button
              className="back-button"
              onClick={() => {
                setShowPlans(false);
                setShowForm(false);
                setFormSubmitted(false);
              }}
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default JoinListPage;