# Web App Dev 2: Web API Labs & Assignment 2

Name: Shannon Garvey

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Get now playing movies from tmdb in movies-api
 + Get top rated movies from tmdb in movies-api
 + Actors collection created
 + Get actors and actors details from movies-api
 + tried adding get movies and get actors api to frontend but couldnt get it working
 + tried adding login and signup to frontend but couldnt get it working

## Setup requirements.

Need to run 'npm install' on the movies-api folder and on the movies folder.

Need to start both by using 'npm run dev' on the movies-api folder and 'npm start' on the movies folder

## API Configuration

You need to add an .env file to the movies-api folder and an .env file to the movies folder

For the movies-api folder, add the text below to the .env file:

______________________
NODEENV=development
PORT=8080
HOST=localhost
mongoDB= "YourMongoURL"
TMDB_KEY= "YourTMDBKey"
secret=YourJWTSecret
______________________

You can get your Mongo URL by going to: https://www.mongodb.com/cloud/atlas/efficiency
You can get your TMDB Key by going to: https://www.themoviedb.org 

For the movies folder, add the text below to the .env file:

______________________
NODE_ENV=development
PORT=3000
HOST=localhost
REACT_APP_TMDB_KEY= ... your API key value ... FAST_REFRESH=false
______________________

Replace 'your API value' with your tmdb api key from https://www.themoviedb.org


## API Design
Give an overview of your web API design:

- /api/movies/tmdb/upcoming | GET | Gets a list of upcoming movies
- /api/movies/tmdb/toprated | GET | Gets a list of top rated movies
- /api/actors | GET | Gets a list of actors 
- /api/actors/{actorid} | GET | Gets a single actor 


## Security and Authentication

The get movies has authentication added to it which mean you need to login to view it.
You can login or signup to create a new user.

## Integrating with React App

The Movies react app is not working but I changed the getMovies and getActors api to fetch from the movies-api api rather than the tmdb api.
I also tried to add a login and signup to the react app.
