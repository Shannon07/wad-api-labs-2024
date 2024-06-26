import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import ActorPage from "./pages/actorDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import ActorsPage from "./pages/actorsPage";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signUpPage";
import MustWatchMoviesPage from "./pages/mustWatchMoviesPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
      <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
      <Route path="/movies/mustwatch" element={<MustWatchMoviesPage />} />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/movies/nowplaying" element={<NowPlayingMoviesPage />} />
        <Route path="/movies/toprated" element={<TopRatedMoviesPage />} />
        <Route path="/movies/trending" element={<TrendingMoviesPage />} />
        <Route path="/actors/popular" element={<ActorsPage />} />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/actors/:id" element={<ActorPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);