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
  .then((response) => {
    //show movies
    const movies = response.results;
    let $container = document.createElement("div");
    $container.id = "container";
    document.querySelector("#wrap").appendChild($container);
    let showMovies = () => {
      movies.forEach((movie) => {
        let title = movie.original_title;
        let overview = movie.overview;
        let id = movie.id;
        let img = movie.poster_path;
        let rating = movie.vote_average;

        let movieCard = document.createElement("div");
        movieCard.id = `${id}`;
        movieCard.className = "item";
        movieCard.addEventListener("click", () => {
          alert(`영화 id: ${id}`);
        });

        let movieImg = document.createElement("img");
        movieImg.src = `https://image.tmdb.org/t/p/original/${img}`;
        movieImg.style.width = "100%";

        let movieTitle = document.createElement("h3");
        movieTitle.innerHTML = `${title}`;

        let movieOverview = document.createElement("p");
        movieOverview.innerHTML = `${overview}`;

        let movieRating = document.createElement("p");
        movieRating.innerHTML = `Rating: ${rating}`;

        $container.appendChild(movieCard);
        movieCard.appendChild(movieImg);
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieOverview);
        movieCard.appendChild(movieRating);
      });
    };
    showMovies();

    //search movies
    let searchBtn = document.createElement("button");
    document.querySelector("#search-box").appendChild(searchBtn);
    searchBtn.innerText = "검색";

    let searchMovies = () => {
      while ($container.firstChild) {
        $container.removeChild($container.firstChild);
      }
      let search = document.querySelector("#search-title").value.toLowerCase();
      let filtered = movies.filter((v) =>
        v.original_title.toLowerCase().includes(search)
      );
      filtered.forEach((fMovie) => {
        let title = fMovie.original_title;
        let overview = fMovie.overview;
        let id = fMovie.id;
        let img = fMovie.poster_path;
        let rating = fMovie.vote_average;

        let movieCard = document.createElement("div");
        movieCard.id = `${id}`;
        movieCard.className = "item";
        movieCard.addEventListener("click", () => {
          alert(`영화 id: ${id}`);
        });

        let movieImg = document.createElement("img");
        movieImg.src = `https://image.tmdb.org/t/p/original/${img}`;
        movieImg.style.width = "100%";

        let movieTitle = document.createElement("h3");
        movieTitle.innerHTML = `${title}`;

        let movieOverview = document.createElement("p");
        movieOverview.innerHTML = `${overview}`;

        let movieRating = document.createElement("p");
        movieRating.innerHTML = `Rating: ${rating}`;

        $container.appendChild(movieCard);
        movieCard.appendChild(movieImg);
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieOverview);
        movieCard.appendChild(movieRating);
      });
    };

    searchBtn.addEventListener("click", () => {
      searchMovies();
    });

    //input창에서 enter키로 검색하기
    let inputBox = document.querySelector("#search-title");
    inputBox.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        searchMovies();
      }
    });
  })
  .catch((err) => console.error(err));
//input에 포커싱하기
window.addEventListener("load", () => {
  document.querySelector("#search-title").focus();
});
