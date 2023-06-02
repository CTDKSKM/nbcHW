//var 는 함수단위로만 스코프가 나뉘고, let/const는 블록(>함수)단위로 스코프가 나뉜다.
//블록 for(let i = ; < ; i++ ) {
// 
// }            if () {}       while ... () {}






var i = 1;
if (i == 1) {
    let j = 3;
    console.log(i+j)
}
function add(a,b) {
    var i = 3 + 4 // 
}
console.log(i)
add(3,4)
console.log(i)

if (i == 1) {
    let k = 5;
    var i = 4;

}
console.log(i) // 4


//탐구심X 똑똑함 O
// let, const 
// function () {}        
var name = "seo"

let name2 = "seo2"

const name3 = "seo3"

function middle() {
  var another = 3;
  for(let i=0; i<3; i++) {

  }
  function bottom() {

  }
}

function middle2() {
  console.log(another)
}

function add(a, b) {
  let add = a + b
  console.log(add)
  return 10// 함수를 실행했을 때 반환되는 값. return == 값을 반환해달라.
}

let addTF = add(3, 5) // 8
console.log(add) // f = function
console.log(add(4,4)) // 8
console.log(addTF) // 8
function () {}

add(5,5) // 


let first = add; // f
let second = add() // 10

