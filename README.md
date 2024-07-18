<div align="center">

  <img src="./public/images/convayto-logo.png" alt="Convayto logo" width="230" height="auto">

  <!-- <h1>Convayto</h1> -->

  <h3>
    <a href="https://convayto.vercel.app">
      <strong>🖱️Live Website</strong>
    </a>
  </h3>

  <div align="center">
    <a href="https://github.com/CodePapa360/Convayto/issues">Report Bug</a>
    •
    <a href="https://github.com/CodePapa360/Convayto/pulls">Request Feature</a>
  </div>

  <hr>

</div>

<!-- Badges -->
<div align="center">
<br/>

[![Twitter Follow](https://img.shields.io/twitter/follow/CodePapa360?style=social&logo=x)](https://x.com/CodePapa360)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=social&logo=linkedin)](https://www.linkedin.com/in/CodePapa360)

![version](https://img.shields.io/github/package-json/v/CodePapa360/Convayto?color=blue)

</div>

<!-- Brief -->
<p align="center">
Welcome to Convayto! This is a real-time chat app that I've developed to sharpen my skills with React.js and Supabase. Featuring user authentication, profile management, and real-time chat, Convayto showcases what modern web development can achieve. Built as a learning exercise, this project includes the basic features you'd expect from a chat app.
</p>

<!-- Screenshot -->
<a align="center" href="https://convayto.vercel.app">

![Screenshot](./public/images/convayto-mockup.jpg)

</a>

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Structure](#project-structure)
- [Database Design](#database-design)
- [Security Considerations](#security-considerations)
- [Challenges and Solutions](#challenges-and-solutions)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Technologies Used

- **React**: For building the user interface.
- **Supabase**: For backend services and database management.
- **React Router DOM**: For handling routing.
- **React Hook Form**: For form management.
- **TanStack React Query**: For data fetching and state management.
- **Tailwind CSS**: For styling.
- **Vite**: For build tooling and development server.

## Features

- **User Authentication**: Secure signup and signin processes, including password reset and account confirmation.
- **Profile Management**: Users can update their profiles, including setting a profile picture and editing personal information.
- **Real-Time Chat**: Send and receive messages in real-time, ensuring seamless communication.
- **Protected Routes**: Access control for authenticated users, protecting sensitive routes and data.
- **Responsive Design**: A user-friendly interface that adapts to various screen sizes and devices.
- **Dark Mode**: Toggle between dark and light themes based on user preference.
- **Sidebar and Menus**: Easy navigation with a collapsible sidebar, friend list, and account settings.
- **Search Functionality**: Quickly find and connect with other users.
- **Error Handling**: Toast notifications to inform users of errors and important updates.
- **Optimized Performance**: Efficient state management and data fetching with React Query and React Hook Form.

### Project Structure

The project is organized for clarity and modularity, following a typical React application structure:

- **Public Assets**
  - `public/`: Contains static assets, including fonts, images, `robots.txt`, and `sitemap.xml`.

- **Source Code**
  - `src/`: Main application source code.
    - `main.jsx`: Main entry point for rendering the application.
    - `App.jsx`: Application entry point.
    - `components/`: Reusable UI components.
    - `contexts/`: Global state management.
    - `features/`: Feature-specific modules (authentication, messaging, sidebar, user profile, user search).
    - `services/`: External service integrations, e.g., Supabase.
    - `styles/`: Custom and global styles.
    - `utils/`: Utility functions and hooks.

This structure ensures maintainability and scalability by logically organizing components, features, and utilities, facilitating independent development and enhancing code reusability.

## Database Design

## Security Considerations

## Challenges and Solutions

## Future Improvements

## Contributing

Contributions to Convayto are welcome! Before contributing, please ensure you follow these guidelines:

### .env File

Convayto uses environment variables stored in a `.env` file to manage sensitive information. Ensure you have the following variables set up:

```plaintext
VITE_SUPABASE_URL=https://your-supabase-url.com
VITE_SUPABASE_KEY=your-supabase-key
```

You can find a template for these variables in `.env.example`.

### Getting Started

To contribute to Convayto, follow these steps:

- Fork the repository and clone it locally.
- Install dependencies: `npm install`.
- Set up your `.env` file using `.env.example` as a template.
- Make your changes and test them thoroughly.
- Submit a pull request with a clear description of your changes and their purpose.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Author

**Alamin**

- LinkedIn: [CodePapa360](https://www.linkedin.com/in/codepapa360)
- X (formerly Twitter): [CodePapa360](https://twitter.com/CodePapa360)

Feel free to reach out if you have any questions or suggestions regarding the project!
