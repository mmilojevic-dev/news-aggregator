# News Aggregator Application

## Overview

The News Aggregator Application is a dynamic web application that aggregates news from various sources, allowing users to search, filter, and customize their news feed according to their interests. This application leverages modern web technologies and is designed to be both responsive and accessible on multiple devices.

## Features

- **Dynamic Article Search**: Users can search for news articles by keywords.
- **Advanced Filtering**: Articles can be filtered by date, category, source, and author.
- **Customizable News Feed**: Users can personalize their news feed by selecting their preferred news sources, categories, and authors.
- **Responsive Design**: Optimized for a seamless experience across all device sizes.
- ***Color Theme Handling***
- ***Notification System***

## Technology Stack

- **React.js**: For building the user interface.
- **Redux Toolkit**: For client state management.
- **React Router**: For navigation and routing.
- **Vite**: As a build tool for blazing fast rebuilds.
- **Tailwind CSS**: For styling and responsive design.
- **TypeScript**: For static type checking.
- **React Query**: For fetching, caching, and server state management.
- **Axios**: For making HTTP requests.
- **Docker**: For containerization and easy deployment.

## Getting Started

### Prerequisites

- Node.js
- npm or Yarn
- Docker (for containerization)

### Installation

Clone the project repository:

```bash
git clone https://github.com/your-github-username/news-aggregator.git
cd news-aggregator
```

Install the dependencies:

```bash
npm install
# or
yarn install
```

### Running the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at http://localhost:3000.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

### Running with Docker

To containerize the application, use the following commands:

```bash
docker build -t news-aggregator .
docker run -p 3000:80 news-aggregator
```

This will build and run the Docker container, making the app accessible at http://localhost:3000.

## API Configuration

The application uses the following environment variables which you need to replace with your own API keys:

- `REACT_APP_GUARDIAN_API_KEY`: API key for The Guardian.
- `REACT_APP_NEWSAPI_KEY`: API key for NewsAPI.
- `REACT_APP_NYTIMES_API_KEY`: API key for The New York Times.

Ensure these are set in your `.env` file based on the `.env.example` provided.
