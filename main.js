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
    const movies = response.results;
    let $container = document.createElement("div");
    $container.id = "container";
    document.querySelector("#wrap").appendChild($container);
    //show movies
    let showMovies = (data) => {
      data.forEach((movie) => {
        let {
          original_title: title,
          overview,
          id,
          poster_path: img,
          vote_average: rating,
        } = movie;

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
    showMovies(movies);

    //search movies
    let searchBtn = document.createElement("button");
    document.querySelector("#search-box").appendChild(searchBtn);
    searchBtn.innerText = "검색";
    let beforeSearch = "";

    let searchMovies = (value) => {
      $container.innerHTML = ``;
      let filtered = movies.filter((v) =>
        v.original_title.toLowerCase().includes(value)
      );
      showMovies(filtered);
      beforeSearch = value;
    };

    searchBtn.addEventListener("click", () => {
      let search = document
        .querySelector("#search-title")
        .value.trim()
        .toLowerCase();
      if (search == beforeSearch) return; // 무한 검색 방지
      searchMovies(search);
    });

    //input창에서 enter키로 검색하기
    let inputBox = document.querySelector("#search-title");
    inputBox.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        let search = document
          .querySelector("#search-title")
          .value.trim()
          .toLowerCase();
        if (search == beforeSearch) return;
        searchMovies(search);
      }
    });
  })
  .catch((err) => console.error(err));
//input에 포커싱하기
window.addEventListener("load", () => {
  document.querySelector("#search-title").focus();
});
