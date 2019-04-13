
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

function deepestChild() {
  let curr = document.querySelectorAll('div#grand-node')
  while (true) {
    let next = curr.querySelector('div')
    if (!next) {
      return curr
    }
    else {
      curr = next
    }
  }
}
