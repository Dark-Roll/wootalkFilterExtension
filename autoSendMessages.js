
// 同時進行回話方式
let talk = document.querySelector('#messageInput')
let reRun
let interval  // global var mdfk, otherwise con won't get the variabel
// 要等對方講話再回嗎 ??
const RES = () => {
    console.log("running res")
    let filterText = document.querySelectorAll('.stranger'); // ori
    let myArray = Array.from(filterText)
    let textMyArray = myArray.filter((e, i) => i % 2 == 0)
    if (!textMyArray || !textMyArray[textMyArray.length - 1]) {
        return; //對方沒講話 //因為對方打字中null 會過? //因為 null !== ""
        // 打字中會過 
    } else {

        console.log("%c%s", "color:purple; font-size:20px;", curMid)
        let mid = textMyArray[textMyArray.length - 1].getAttribute('mid');
        console.log("curMid:", curMid, "mid:", mid)
        //  沒有reset curMid
        if (mid && mid > curMid) {
            if (curMid == -1) { //有講話做判斷
                talk.value = "嗨"//"你是男生嗎"
                
                let sendMessageButton =document.querySelector('#sendButton input')
                if (sendMessageButton) sendMessageButton.click()
                // sendMessage()
            } else {
                // talk.value = "桃園金城武嫁到"//"你剛剛跌倒了嗎"
                // let femaleArray = ["女生", "不是"];
                let secondTalkArray = ["你剛剛跌倒了嗎", "剛剛起床發現了一件事", "平常會運動嗎"]; //謝謝你
                let ramdomNum = Math.floor((Math.random() * (secondTalkArray.length - 1))); // 取得小於得最大整數 ， -1要括號起來 先*/後+-
                talk.value = secondTalkArray[ramdomNum];
                let sendMessageButton =document.querySelector('#sendButton input')
                if (sendMessageButton) sendMessageButton.click()
                // sendMessage()
                clearInterval(interval);
                reRun = setInterval(interRun, 7000); //不會第二句跳完馬上跳第一句 
                // 會一直哈囉?  //因為沒有clear
                // 打字中會把 null 傳給 curMid
                return false;
            }
        }
        if (mid) {
            // 避免mid傳null值 給curMid ,對方打字中會在send 依次第一句話
            curMid = mid;
            //   對方狂輸入 會回不了畫 ((因為會一直抓到null 不過沒什麼大礙))
        }
    }
}
const interRun = () => {
    if (reRun) { clearInterval(reRun) }
    curMid = -1;
    reRunInterRun()
    interval = setInterval(RES, 3000);
}

const reRunInterRun = () => {
    let sys = document.querySelectorAll('.system')
    console.log("reRun")
    if (sys[2] && sys[2].childNodes[1]) {
        if (sys[2].childNodes[1].data !== "加密連線完成，開始聊天囉！") {
            sys = document.querySelectorAll('.system')  //?
            setTimeout(reRunInterRun, 7000)
        } else {
            // console.log("you can talk")     
        }
    } else {
        console.log("ready to start")

        setTimeout(reRunInterRun, 1000)
    }
}
interRun()