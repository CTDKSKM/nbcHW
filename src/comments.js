const URLParams = new URLSearchParams(location.search);

for (const value of URLParams) {
  const movieId = value[1];
  let comments = JSON.parse(localStorage.getItem(`comment_${movieId}`));
  //댓글 작성
  let commentBtn = document.querySelector("#comment-btn");
  commentBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let userName = document.querySelector("form").children[0].value;
    let userPassword = document.querySelector("form").children[1].value;
    //4자리 숫자인지 확인.
    if (userPassword.length == 4 && Number.isInteger(+userPassword)) {
    } else {
      console.log("비밀번호는 반드시 4자리 숫자여야 합니다.");
      console.log(userPassword.length);
      console.log(Number.isInteger(userPassword));
      return;
    }
    let userComment = document.querySelector("#comment").value;
    let commentId = Math.random(); // 해당 댓글의 수정/삭제를 위한 id값 할당
    //로컬스토리지에 코멘트 저장.
    let commentArray = [];
    let commentBox = {
      id: commentId,
      name: userName,
      password: userPassword,
      comment: userComment,
      releaseCmt: new Date(),
    };
    if (comments) {
      comments.map((v) => {
        commentArray.push(v);
      });
    }
    commentArray.push(commentBox);

    localStorage.setItem(`comment_${movieId}`, JSON.stringify(commentArray));
    location.reload();
  });

  let showComments = () => {
    comments.forEach((v) => {
      let commentInfoList = document.createElement("li");
      commentInfoList.id = v.id;
      commentInfoList.className = "cmt-info-list";
      document.querySelector("#comment-list").appendChild(commentInfoList);

      let commentInfoBox = document.createElement("div");
      commentInfoBox.className = "cmt-info";
      commentInfoList.appendChild(commentInfoBox);

      let commentVal = document.createElement("p");
      commentVal.innerHTML = `${v.name}: ${
        v.comment
      } 작성시간:${v.releaseCmt.substr(0, 10)} ${v.releaseCmt.substr(11, 8)}`;
      commentInfoBox.appendChild(commentVal);
    });
  };
  showComments();

  document.querySelector(".toHome").addEventListener("click", () => {
    location.href = "index.html";
  });
}
