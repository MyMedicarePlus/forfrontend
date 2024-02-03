import React, { useState } from "react";

const FindDoctor = () => {
  // Define the state to manage the visibility of the full information
  const [showFullInfo, setShowFullInfo] = useState(false);

  // Function to toggle the visibility of the full information
  const toggleFullInfo = () => {
    setShowFullInfo(!showFullInfo);
  };

  return (
    <div>
      <p>
        This is some basic information about finding a doctor. Click the button
        below to see full information.
      </p>
      {/* Button to toggle full information */}
      <button
        className="btn btn-primary"
        onClick={toggleFullInfo}
      >
        {showFullInfo ? "Hide Full Information" : "Show Full Information"}
      </button>
      {/* Conditional rendering of full information */}
      {showFullInfo && (
        <div>
          <h3>Full Information</h3>
          <p>Here is the full information about finding a doctor...</p>
        </div>
      )}
    </div>
  );
};

export default FindDoctor;
