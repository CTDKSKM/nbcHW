const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGFmODc2MmE0MzI2MjMxOGQyMDI0MjM3ZjY3NjU5NiIsInN1YiI6IjY0NzQ4MjUwZGQ3MzFiMmQ3Y2Q3YTQzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYVhzGxBgqcGZbhWKQZFfY2XNHHsuW0whPKDt_b22Pc",
    },
  };
  
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => {response})