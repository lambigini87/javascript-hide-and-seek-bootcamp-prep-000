function getFirstSelector (selector) {
  
  var element = document.querySelector(selector);
  
  return element
}

function nestedTarget(){
  
 return  document.querySelector('div.target')
}

function deepestChild() {
  const node = document.querySelectorAll('#grand-node div')
  for ( let m = 0; m< node.length;m++){
    if ( m === node.length -1 )
    node[m].innerHTML
  }
  }



function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}