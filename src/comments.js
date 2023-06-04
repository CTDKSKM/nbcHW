const URLParams = new URLSearchParams(location.search);
const movieId = URLParams.get("id");

let comments = JSON.parse(localStorage.getItem(`comment_${movieId}`));
//1. 댓글 작성 및 저장
//1-1)댓글 작성.
let commentBtn = document.querySelector("#comment-btn");
commentBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let userName = document.querySelector("form").children[0].value;
  let userPassword = document.querySelector("form").children[1].value;
  //4자리 숫자인지 확인.    +userPassword인 이유? html에서 가져온 값은 문자열.
  if (userPassword.length == 4 && Number.isInteger(+userPassword)) {
  } else {
    alert("비밀번호는 반드시 4자리 숫자여야 합니다.");
    return;
  }
  let userComment = document.querySelector("#comment").value;
  let commentId = Math.random(); // 해당 댓글의 수정/삭제를 위한 id값 할당
  //1-2)댓글 저장.
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
//2. 댓글 보여주기
let showComments = () => {
  comments.map((v) => {
    document.querySelector("#comment-list-box").innerHTML += `
                <li id="${v.id}"class="cmt-info-list">
                    <p class="cmt">${v.comment}</p>
                    <div>
                        <span class="cmt-author">${v.name}</span>
                        <span class="cmt-release-date">${v.releaseCmt.substr(
                          0,
                          10
                        )} ${v.releaseCmt.substr(11, 8)}</span>
                        <button class="cmt-update" onclick="updateComments(${
                          v.id
                        })">수정</button>
                        <button class="cmt-delete" onclick="deleteComments(${
                          v.id
                        })">삭제</button>
                    </div>
                </li>`;
  });
};
showComments();
//3. 댓글 수정하기
let updateComments = (commentId) => {
  let commentPassword = prompt("비밀번호를 입력해주세요(4자리 숫자)", "0000");
  let updatedCommentsArray = comments.map((v) => {
    if (v.id == commentId && v.password == commentPassword) {
      let newComment = prompt("새 댓글을 작성해주세요.", `${v.comment}`);
      let updatedComment = {
        ...v, // 기존 요소의 속성을 모두 복사
        releaseCmt: new Date(),
        comment: newComment,
      };
      return updatedComment;
    } else {
      return v;
    }
  });
  console.log(updatedCommentsArray);
  console.log(comments);
  //기존 데이터와 바뀐게 있는지? 없다면 패스워드가 달랐던 것이기때문에..
  if (JSON.stringify(updatedCommentsArray) === JSON.stringify(comments)) {
    //객체끼리 비교해도 updatedComments = comments로 복사할당한게 아니라 comment.map함수로 comments이지만 comments가 아닌 새로운 객체를 반환했기때문에 정확한 비교를 위해 문자열로 바꾸어서 비교함.
    alert("비밀번호가 다릅니다");
    return;
  }
  console.log(updatedCommentsArray == comments);
  localStorage.setItem(
    `comment_${movieId}`,
    JSON.stringify(updatedCommentsArray)
  );
  location.reload();
};
//4. 댓글 삭제
let deleteComments = (commentId) => {
  let commentPassword = prompt("비밀번호를 입력해주세요(4자리 숫자)", "0000");
  let updatedCommentsArray = comments.filter((v) => {
    if (v.id != commentId || v.password != commentPassword) {
      return v;
    } else if (v.id != commentId) return v;
  });
  localStorage.setItem(
    `comment_${movieId}`,
    JSON.stringify(updatedCommentsArray)
  );
  location.reload();
};
