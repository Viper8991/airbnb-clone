# 🏨 Airbnb Hotel Booking Website

A full-stack hotel booking web application inspired by Airbnb.  
Users can book rooms using a responsive form, and all booking data is stored securely in MongoDB Atlas.

---

## 🔗 Live Demo

- **Frontend (Vercel):**  
  👉 https://airbnbhotelbooking.vercel.app

- **Backend API (Render):**  
  👉 https://airbnb-clone-ly0m.onrender.com

---

## 🚀 Features

- Responsive hotel booking form (mobile & desktop)
- Real-time form submission
- Data stored in MongoDB Atlas
- Success message after booking
- REST API integration
- Deployed frontend & backend
- Secure environment variables

---

## 🛠 Tech Stack

### Frontend
- HTML5  
- Tailwind CSS  
- JavaScript  

### Backend
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  

### Deployment
- Vercel (Frontend)  
- Render (Backend)

---

## 📦 API Endpoints

| Method | Endpoint      | Description            |
|------|---------------|------------------------|
| POST | `/booking`    | Save booking data      |
| GET  | `/bookings`   | Fetch all bookings     |

---

## 📸 Screenshots

_Add screenshots of:_
- Home page  
- Booking form  
- MongoDB Atlas data  

---

## ⚙️ Environment Variables

Create a `.env` file in backend:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
