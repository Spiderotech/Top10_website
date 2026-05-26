# Top10 Website

Top10 Website is a full-stack web application for listing and managing top companies by category, such as IT companies and insurance companies. The project contains a React/Vite frontend and an Express/MongoDB backend API.

The project is currently not hosted. It is intended to run locally during development and can later be deployed by hosting the frontend and backend separately.

## Git Repository

- Repository: `git@github.com:Spiderotech/Top10_website.git`
- HTTPS URL: `https://github.com/Spiderotech/Top10_website`

## Tech Stack

### Frontend

- React 18
- Vite
- React Router
- Redux Toolkit
- Redux Persist
- Axios
- Tailwind CSS
- Flowbite
- Formik and Yup

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens
- bcrypt
- AWS S3 pre-signed upload URL support

## Project Structure

```text
Top10_website/
├── BACKEND/                  # Express API and MongoDB application
│   ├── app.js                # Backend entry point
│   ├── package.json          # Backend scripts and dependencies
│   └── src/
│       ├── adapters/         # Controllers
│       ├── application/      # Use cases, service interfaces, repository interfaces
│       ├── config/           # Backend configuration
│       ├── entities/         # Domain entity builders
│       └── framework/        # Express, routes, database, services, repositories
├── Top10-web/                # React frontend
│   ├── index.html
│   ├── package.json          # Frontend scripts and dependencies
│   ├── src/
│   │   ├── Components/       # Shared, user, and admin UI components
│   │   ├── Pages/            # Public-facing pages
│   │   ├── Routes/           # Route definitions
│   │   ├── redux/            # Redux store and slices
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
└── docs/
    ├── PROJECT_DOCUMENTATION.md
    └── HOSTING_DOCUMENTATION.md
```

## Main Features

- Public website pages:
  - Home
  - About
  - Contact
  - Advertise With Us
  - Insurance Companies
  - IT Companies
- Admin login
- Admin dashboard
- Add company data
- Edit company data
- Delete company data
- View company list
- Filter company data by company type
- Generate AWS S3 pre-signed upload URLs

## Local Setup

### 1. Clone the repository

```bash
git clone git@github.com:Spiderotech/Top10_website.git
cd Top10_website
```

### 2. Install backend dependencies

```bash
cd BACKEND
npm install
```

### 3. Install frontend dependencies

```bash
cd ../Top10-web
npm install
```

### 4. Start the backend

```bash
cd ../BACKEND
npm start
```

The backend currently listens on port `3000`.

### 5. Start the frontend

```bash
cd ../Top10-web
npm run dev
```

Vite will print the local frontend URL, usually `http://localhost:5173`.

## Useful Commands

### Frontend

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

### Backend

```bash
npm start
```



## Important Security Note

The backend currently contains hardcoded database, JWT, and AWS credentials in `BACKEND/src/config/config.js`. Before hosting, move all secrets into environment variables, rotate exposed credentials, and avoid committing real production secrets to Git.
