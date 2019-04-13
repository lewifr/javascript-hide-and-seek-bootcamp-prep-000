
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let ranked = document.querySelectorAll('.ranked-list')
  for (let r of ranked) {
    r.innerHTML = parseInt(r.innerHTML) + 1
  }
}

function deepestChild() {
  let curr = document.querySelector('div#grand-node')
  console.log(curr.firstChild())
  while (true) {
    let next = curr.firstChild()
    if (!next) {
      return curr
    }
    else {
      curr = next
    }
  }
}
