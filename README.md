# Udemy Clone

A modern Udemy clone built with Next.js, ShadcnUI, RTK Query, and Redux Persist.

## Features

- 🔐 Authentication with JWT
- 🎓 Course Management
- 📚 Module and Lesson Organization
- 📝 Quiz System
- 👥 User Management
- 🛠️ Admin Dashboard
- 🎨 Modern UI with ShadcnUI
- 🔄 Real-time Data with RTK Query
- 💾 Persistent State with Redux Persist

## Tech Stack

- **Frontend Framework**: Next.js 14
- **UI Components**: ShadcnUI
- **State Management**: Redux Toolkit + RTK Query
- **Persistence**: Redux Persist
- **Form Handling**: React Hook Form + Zod
- **Styling**: Tailwind CSS
- **Authentication**: JWT

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/udemy-clone.git
   cd udemy-clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_API_URL=https://a1school.onrender.com
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── auth/            # Authentication pages
│   ├── courses/         # Course management pages
│   ├── admin/           # Admin dashboard pages
│   └── layout.tsx       # Root layout
├── components/          # React components
│   ├── ui/             # ShadcnUI components
│   └── auth/           # Auth-related components
├── lib/                # Utility functions and store
│   ├── store/         # Redux store setup
│   │   ├── api/      # RTK Query API endpoints
│   │   └── slices/   # Redux slices
│   └── utils.ts       # Utility functions
└── public/            # Static files
```

## API Integration

The application integrates with a RESTful API at `https://a1school.onrender.com` that provides:

- Authentication endpoints
- Course management
- User management
- Quiz system
- Admin functionalities

## Features in Detail

### Authentication

- User registration and login
- JWT-based authentication
- Protected routes
- Role-based access control

### Course Management

- Create, read, update, and delete courses
- Organize courses into modules and lessons
- Rich text editor for lesson content
- File upload for course materials

### Quiz System

- Create quizzes for modules
- Multiple-choice questions
- Automatic grading
- Progress tracking

### User Management

- User profiles
- Course enrollment
- Progress tracking
- Role management

### Admin Dashboard

- Platform statistics
- User management
- Course oversight
- Content moderation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
