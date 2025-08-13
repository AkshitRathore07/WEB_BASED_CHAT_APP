# Chat Application

A modern, real-time chat application built with Node.js, React, and Socket.IO featuring user authentication, group chats, file sharing, and admin management.

## 🚀 Features

### Core Features
- **Real-time Messaging**: Instant message delivery using Socket.IO
- **User Authentication**: Secure JWT-based authentication system
- **Group Chats**: Create and manage group conversations
- **File Sharing**: Upload and share images and documents
- **Online Status**: Real-time online/offline user indicators
- **Typing Indicators**: See when users are typing
- **Message Encryption**: Custom encryption for message security

### Admin Features
- **User Management**: View, manage, and monitor user accounts
- **Chat Management**: Oversee chat conversations and groups
- **Message Management**: Monitor and manage messages
- **Analytics Dashboard**: Visual charts and statistics
- **Admin Authentication**: Secure admin panel access

### User Features
- **Profile Management**: Update profile information and avatar
- **Search Functionality**: Find users and chats quickly
- **Notification System**: Real-time notifications for new messages
- **Responsive Design**: Works seamlessly on all devices

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Socket.IO** - Real-time communication
- **MongoDB** - Database with Mongoose ODM
- **JWT** - Authentication
- **Multer** - File upload handling
- **Cloudinary** - Cloud file storage
- **Custom Encryption** - Message security

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **Material-UI** - Component library
- **Socket.IO Client** - Real-time communication
- **React Router** - Navigation
- **Chart.js** - Data visualization
- **Framer Motion** - Animations

## 📁 Project Structure

```
demo/
├── backend/                 # Backend server
│   ├── app.js             # Main server file
│   ├── controllers/       # Route controllers
│   ├── middlewares/       # Custom middlewares
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── utils/             # Utility functions
│   └── tests/             # Test files
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── redux/         # State management
│   │   ├── hooks/         # Custom hooks
│   │   └── utils/         # Utility functions
│   └── public/            # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd demo/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the backend directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   NODE_ENV=development
   JWT_SECRET=your_jwt_secret
   ADMIN_SECRET_KEY=your_admin_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

4. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Update `src/constants/config.js` with your backend server URL.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Usage

### User Features
1. **Register/Login**: Create an account or sign in
2. **Start Chatting**: Find users and start conversations
3. **Create Groups**: Form group chats with multiple members
4. **Share Files**: Upload and share images/documents
5. **Real-time Updates**: Get instant message notifications

### Admin Features
1. **Admin Login**: Access admin panel with secret key
2. **Dashboard**: View system overview and analytics
3. **User Management**: Monitor and manage user accounts
4. **Chat Oversight**: Supervise conversations and groups
5. **Message Monitoring**: Track message activity

## 🔧 API Endpoints

### User Routes (`/api/v1/user`)
- `POST /register` - User registration
- `POST /login` - User authentication
- `GET /me` - Get current user profile
- `PUT /update` - Update user profile
- `POST /logout` - User logout

### Chat Routes (`/api/v1/chat`)
- `POST /new` - Create new chat
- `GET /my` - Get user's chats
- `POST /addmember` - Add member to group
- `DELETE /removemember` - Remove member from group
- `DELETE /:chatId` - Delete chat

### Admin Routes (`/api/v1/admin`)
- `POST /login` - Admin authentication
- `GET /dashboard` - Admin dashboard data
- `GET /users` - Get all users
- `GET /chats` - Get all chats
- `GET /messages` - Get all messages

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Custom Encryption**: Message content encryption
- **Admin Secret Key**: Protected admin access
- **CORS Configuration**: Cross-origin request handling
- **Input Validation**: Request data validation
- **Error Handling**: Comprehensive error management

## 🧪 Testing

Run the encryption tests:
```bash
cd backend
npm run test:encryption
```

## 📦 Deployment

### Backend
- Deploy to platforms like Heroku, Railway, or DigitalOcean
- Set environment variables in your hosting platform
- Ensure MongoDB connection is accessible

### Frontend
- Build the project: `npm run build`
- Deploy to Vercel, Netlify, or any static hosting service
- Update backend URL in production configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code structure

## 🔮 Future Enhancements

- Video calling capabilities
- Message reactions and replies
- Advanced search filters
- Push notifications
- Mobile app development
- Multi-language support

---

**Built with ❤️ using modern web technologies**
