const searchId = new URLSearchParams(location.search);

for (const id of searchId) {
  console.log(id);
  const Details = JSON.parse(window.localStorage.getItem(id[1]));
  console.log(Details);
  //show details...
  let {
    adult,
    backdrop_path: backImg,
    title,
    overview,
    poster_path: img,
    release_date,
    vote_average: rating,
    vote_count: voteNum,
  } = Details;
  //img보여주기
  let imgBox = document.querySelector("#movie-img");
  let movieImg = document.createElement("img");
  movieImg.src = `https://image.tmdb.org/t/p/original/${img}`;
  movieImg.style.width = "230px";
  imgBox.append(movieImg);
  //정보보여주기
  let detailsBox = document.querySelector("#movie-details");

  let movieTitle = document.createElement("p");
  movieTitle.innerHTML = `영화 제목: ${title}`;
  detailsBox.appendChild(movieTitle);

  let movieRelease = document.createElement("p");
  movieRelease.innerHTML = `영화 개봉일: ${release_date}`;
  detailsBox.appendChild(movieRelease);

  //   let movieTitle = document.createElement("h1");
  //   let movieTitle = document.createElement("h1");
  //   let movieTitle = document.createElement("h1");
  //   let movieTitle = document.createElement("h1");
}
