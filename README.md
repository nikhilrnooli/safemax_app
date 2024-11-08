# SafeMax Security - Landing Webpage

## Overview

SafeMax Security is an innovative cybersecurity leader dedicated to providing top-notch security solutions. This project showcases a responsive and interactive landing webpage designed to capture potential client inquiries and appointments, along with an admin content management system (CMS) for managing submissions effectively.

## Objective

Develop a responsive, interactive landing webpage for SafeMax Security that highlights the company’s offerings and facilitates client interaction through an appointment booking system and query management.

## Features

### Frontend

- **Responsive Design:** A visually engaging layout that adapts to various screen sizes, ensuring usability on desktops, tablets, and mobiles.
- **Dynamic Components:** Smooth transitions and dynamic loading for a fluid user experience.
- **Content Sections:**
    - **Hero Section:** Includes SafeMax’s tagline and a call-to-action (CTA) button for scheduling consultations.
    - **About Us Section:** Highlights SafeMax Security’s mission and values.
    - **Services Section:** Details core offerings such as Vulnerability Assessment and Penetration Testing (VAPT) and cybersecurity services.
    - **Why Choose Us Section:** Outlines the advantages of choosing SafeMax Security.
    - **Client Testimonials Section:** Displays feedback from clients.
    - **Contact/Appointment Section:** A form for users to schedule consultations.
    - **Footer Section:** Contains essential links (e.g., privacy policy, terms of service, and social media links).

### Backend

- **Appointment Booking System:** 
    - A form for potential clients to book appointments, capturing name, email, preferred date/time, and additional comments.
- **Admin CMS:**
    - View and manage all form submissions and appointment requests.
    - Respond to and track client inquiries.
    - Update appointment statuses (confirmed, pending, or canceled).
- **Query Management:** 
    - Display all submitted forms in the CMS for admin response and management.

## Tech Stack

- **Frontend:** React, React Router, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:

   git clone https://github.com/nikhil-nooli/safemax-app.git
   cd safemax-security
   

2. Navigate to the backend directory and install dependencies:

    cd backend
    npm install


3. Set up your MongoDB database:

    Create a new MongoDB database (e.g., safemax).
    Update the MongoDB connection string in backend/db.js as needed.


4. Navigate to the frontend directory and install dependencies:

    cd ../frontend
    npm install


###    Running the Application


1. Start the backend server:

    cd backend
    npm run dev
    
 This starts the Express server, typically at http://localhost:5000.


2. Start the frontend application:

    cd ../frontend
    npm start

This starts the React development server, typically at http://localhost:3000


### API Endpoints
POST /api/queries: Submit a new query.
GET /api/queries: Retrieve all queries.
PUT /api/queries/
/status: Update the status of a query.
POST /api/appointments: Schedule a new appointment.
GET /api/appointments: Retrieve all appointments.
PUT /api/appointments/
/status: Update the status of an appointment.