let strangerTextNodeList = document.querySelectorAll('.stranger.text')
let meTextNodeList = document.querySelectorAll('.me.text')

let strangerTextArray = []
let meTextArray = []

// if null
Array.prototype.map.call(strangerTextNodeList, ele => {
    strangerTextArray.push({
        mid: ele.getAttribute('mid') < 100 ? (ele.getAttribute('mid') < 10 ? '00' + ele.getAttribute('mid') : '0' + ele.getAttribute('mid')) : ele.getAttribute('mid'),
        text: ele.childNodes[1].data,
        from: 'stranger'
    })
})
Array.prototype.map.call(meTextNodeList, ele => {
    meTextArray.push({
        mid: ele.getAttribute('mid') < 100 ? (ele.getAttribute('mid') < 10 ? '00' + ele.getAttribute('mid') : '0' + ele.getAttribute('mid')) : ele.getAttribute('mid'),
        text: ele.childNodes[1].data,
        from: 'me'
    })
})

let conversationArray = strangerTextArray.concat(meTextArray)

for (let y = conversationArray.length - 1; y > 0; y--) {
    for (let i = 0; i < y; i++) {
        if (conversationArray[i].mid > conversationArray[i + 1].mid) {
            let temp = conversationArray[i + 1]
            conversationArray[i + 1] = conversationArray[i]
            conversationArray[i] = temp
        }
    }
}

conversationArray.map((e) => {
    console.log(e);
})



/*

*/

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
