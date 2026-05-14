import React from "react";
import Button from "./Button";

const ReviewDetails = ({ details, onPrev, onSubmit }) => {
    return (
        <div className='review-container'>
            <h2>Review Your Details</h2>

            {/* Personal Details Section */}
            <div className='review-card'>
                <h3>Personal Information</h3>
                <p>
                    <strong>Name:</strong>{" "}
                    {details.personalDetails.name || "Not provided"}
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    {details.personalDetails.email || "Not provided"}
                </p>
            </div>

            {/* Education Details Section */}
            <div className='review-card'>
                <h3>Education Background</h3>
                <p>
                    <strong>Degree:</strong>{" "}
                    {details.educationDetails.degree || "Not provided"}
                </p>
                <p>
                    <strong>CGPA:</strong>{" "}
                    {details.educationDetails.cgpa || "Not provided"}
                </p>
            </div>

            {/* Skills Details Section */}
            <div className='review-card'>
                <h3>Skills & Experience</h3>
                <p>
                    <strong>Primary Skill:</strong>{" "}
                    {details.skillsDetails.skill || "Not provided"}
                </p>
                <p>
                    <strong>Experience:</strong>{" "}
                    {details.skillsDetails.experience
                        ? `${details.skillsDetails.experience} Years`
                        : "Not provided"}
                </p>
            </div>

            {/* Navigation Actions */}
            <div
                className='button-group'
                style={{ display: "flex", gap: "10px", marginTop: "20px" }}
            >
                <Button onClick={onPrev}>Back</Button>
                <Button onClick={onSubmit} type='submit'>
                    Submit Form
                </Button>
            </div>
        </div>
    );
};

export default ReviewDetails;
