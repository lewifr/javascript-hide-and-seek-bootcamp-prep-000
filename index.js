
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let ranked = document.querySelectorAll('.ranked-list')
  for (let r of ranked) {
    console.log(r)
    r.innerHTML = parseInt(r.innerHTML) + 1
  }
}
