export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=35a83945d2c715eb13e6ff959171228a&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };