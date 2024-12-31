import React from "react";
import "./../styles/PriceDetails.css"; // Ensure you have the corresponding styles for this component

const PriceDetails = () => {
  return (
    <section className="price-details" id="price">
      <h2> Yoga Course Details</h2>
      
      {/* First card with full course details */}
      <div className="pricing-card">
        <h3>Yoga Course</h3>
        <p className="price">€18 / hour</p>
        <ul>
          <li><strong>Start Date:</strong> 8th January 2025</li>
          <li><strong>End Date:</strong> 26th February 2025</li>
          <li><strong>Days:</strong> Every Wednesday</li>
          <li><strong>Time:</strong> 20:00 - 21:30</li>
          <li><strong>Location:</strong> Kloster Flingern, Düsseldorf</li>
        </ul>
        <button className="subscribe-btn">Sign Up</button>
      </div>

      {/* Second card with "Coming Soon" */}
      <div className="pricing-card coming-soon">
        <h3>Advanced Yoga Course</h3>
        <p className="price">Coming Soon</p>
        <ul>
          <li><strong>Details:</strong> Course description will be available soon</li>
        </ul>
        <button className="subscribe-btn disabled" disabled>Coming Soon</button>
      </div>

      {/* Third card with "Coming Soon" */}
      <div className="pricing-card coming-soon">
        <h3>Yoga Retreat</h3>
        <p className="price">Coming Soon</p>
        <ul>
          <li><strong>Details:</strong> More information coming soon</li>
        </ul>
        <button className="subscribe-btn disabled" disabled>Coming Soon</button>
      </div>
      
    </section>
  );
};

export default PriceDetails;
