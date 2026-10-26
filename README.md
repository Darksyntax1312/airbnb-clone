# Airbnb Clone - Full Stack (Node.js, Express, EJS)

A fully functional, mobile-responsive clone of Airbnb's core flow. Built from scratch as the capstone project of my Node.js & Express learning journey.

## Links
- 🌐 **Live Demo**: `https://airbnb-clone-bp7n.onrender.com`
- 💻 **Backend Learning Portfolio**: [github.com/Darksyntax1312/nodejs-backend-learning](https://github.com/Darksyntax1312/nodejs-backend-learning)

## Features

### For Hosts (Admins)

- Add new homes with details (Name, Price, Location, Rating, Phone, Description).
- View a dashboard of all listed homes.
- Edit existing home details.
- Delete homes.
- Dynamic routing for editing/deleting specific homes (using `req.params`).

### For Users (Guests)

- Browse all available homes.
- View detailed information about a specific home.
- Add homes to a "Favourites" list (persisted).
- View the Favourites list and remove items.
- Reserve a home and view bookings.

### Technical Features

- **MVC Architecture:** Clean separation of Routes, Controllers, Models, and Views.
- **Responsive UI:** Fully mobile-friendly using Tailwind CSS / Custom CSS.
- **Custom 404 Page:** Handles unmatched routes gracefully.
- **JSON Persistence:** Uses `fs` to store data without a heavy database.
- **Dynamic Templates:** EJS partials for reusable headers, footers, and navs.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS (Embedded JavaScript Templates), Tailwind CSS / Custom CSS
- **Routing:** Express Router (Modular routing)
- **Data Storage:** JSON files (`Newfile.txt`, `NewIdFile.txt`) via the `fs` module
- **Utilities:** `crypto.randomUUID()` for unique IDs, `path` for directory management

## Folder Structure

- `App.js` (Express server entry point)
- `Controller/` (MVC Controllers - business logic)
- `Model/` (MVC Models - data layer)
- `routes/` (Express Routers)
- `views/` (EJS Templates - admin, store, user, partials)
- `public/` (Static assets - CSS, images)
- `src/` (Tailwind source files)

## How to Run Locally

1. Clone the repository: `git clone https://github.com/Darksyntax1312/airbnb-clone.git`
2. Navigate into the folder: `cd airbnb-clone`
3. Install dependencies: `npm install`
4. Start the server: `node App.js`
5. Open in browser: Visit `http://localhost:3000`

## What I Learned Building This

- How to structure a large Express app using **MVC**.
- How to keep routers clean by moving logic to controllers.
- How to persist data using the file system (`fs`) and JSON when a database isn't available.
- How to handle dynamic routes for editing and deleting specific items.
- How to build a fully responsive UI with EJS partials and Tailwind.

## Future Improvements

- Migrate JSON file storage to **MongoDB** or **MySQL**.
- Add **User Authentication** (sessions, password hashing with bcrypt).
- Implement image uploads for homes (using Multer).
- Add a search/filter bar for browsing homes.
