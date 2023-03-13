# Tech returners IMDB full-stack application (Group Task)
Built using create-react-app for the frontend and express for the backend, a simple IMDB clone

## Table of Contents

- Tech returners IMDB full-stack application (Group Task)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Installing](#installing)
  - [Usage](#usage)

## About
This was a task from Tech Returners to make a full-stack application in a group of 4 people. The task was open ended - We were told to use a public api and build a frontend and backend for it, we chose [OMDb API](https://www.omdbapi.com/)

## Prerequisites
register for a key at [OMDb API](https://www.omdbapi.com/)

## Getting Started
Open a terminal and navigate to a desired folder to clone the respository to and use 
```
git clone https://github.com/glend1/tr-omdb-api-fullstack/
```

## Installing
Make sure you have a new version of node installed on your computer then run

```
npm run custom-install
```

you must also populate `.env.local` in `server/` with the following key
```
API_KEY=<your-key>
```

## Usage
to run the application

```
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The REST api will be located at;

[http://localhost:3001/api/v1/search/{title}](http://localhost:3001/api/v1/search/). this requires a `title` url path with a movie name search term

[http://localhost:3001/api/v1/movie/{id}](http://localhost:3001/api/v1/movie/). this requires a `id` url path with a valid IMDB id.

## Tests
Tests can be run
```
npm run test-client
npm run test-server
```
