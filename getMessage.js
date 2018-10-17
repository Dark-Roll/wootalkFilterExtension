let strangerTextNodeList = document.querySelectorAll('.stranger.text')
let meTextNodeList = document.querySelectorAll('.me.text')

let strangerTextArray = []
let meTextArray = []

// if null
Array.prototype.map.call(strangerTextNodeList, ele => {
  strangerTextArray.push({
    mid: ele.getAttribute('mid'),
    text: ele.childNodes[1].data
  })
})
Array.prototype.map.call(meTextNodeList, ele => {
  meTextArray.push({
    mid: ele.getAttribute('mid'),
    text: ele.childNodes[1].data
  })
})


var tempData = {}
for (var index in data) {
  if (data[index].Status == 'Valid') {
    tempData[index] = data
  }
}
data = tempData

// {
//     '1': {data}
// }
