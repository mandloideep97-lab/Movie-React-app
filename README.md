# Movie Discovery App

A responsive movie browsing and favorites web application built with React, React Router, and the TMDB API.

## Features

- **Popular Movies Feed:** Automatically fetches and displays popular movies on load.
- **Real-Time Movie Search:** Search for movies by title with loading and error states.
- **Favorites Management:** Save or remove favorite movies using React Context and persistent `localStorage`.
- **Multi-Page Navigation:** Seamless client-side routing between Home and Favorites pages via React Router.

## Tech Stack

- **Frontend:** React, React Router DOM
- **API:** The Movie Database (TMDB) REST API
- **Styling:** Custom CSS
- **Build Tool:** Vite

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory and add your TMDB API key:

   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. **Run the app locally**
   ```bash
   npm run dev
   ```
