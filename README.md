# Airbnb Clone

A full-stack Airbnb Clone web application that allows users to browse listings, view property details, create accounts, and manage accommodations.

## 🚀 Features

- User Authentication (Sign Up / Login / Logout)
- Browse available property listings
- View detailed information about each property
- Add new property listings
- Edit and delete listings
- Upload property images
- Responsive design for mobile and desktop
- Booking functionality
- User profile management

## 🛠️ Technologies Used

### Frontend
- HTML
- CSS
- JavaScript
- React.js
- Bootstrap / Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Other Tools
- Git & GitHub
- Cloudinary (for image uploads)
- JWT Authentication

## 📂 Project Structure

```
airbnb/
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── package.json
│
├── README.md
└── package.json
```

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/airbnb-clone.git
```

### Navigate to the project directory

```bash
cd airbnb-clone
```

### Install dependencies

For backend:

```bash
cd server
npm install
```

For frontend:

```bash
cd client
npm install
```

### Configure Environment Variables

Create a `.env` file inside the server directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## ▶️ Running the Application

Start backend server:

```bash
cd server
npm run dev
```

Start frontend:

```bash
cd client
npm start
```

The application will run at:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## 📸 Screenshots

Add screenshots of your application here.

Example:

```
screenshots/homepage.png
screenshots/listing-page.png
screenshots/property-details.png
```

## 🧪 Future Improvements

- Payment integration
- Wishlist functionality
- Reviews and ratings
- Google Authentication
- Advanced search and filters
- Email notifications

## 🤝 Contributing

Contributions are welcome. Feel free to fork the repository and submit pull requests.



## 👨‍💻 Author

Sunil Tiwari

GitHub: https://github.com/your-github-username
