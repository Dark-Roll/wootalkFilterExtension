
let curMid = -1;

const fil = () => { 
    // init
    let left = document.querySelectorAll(".system")
    if (left[left.length - 2] && left[left.length - 2].childNodes[1]) {//.childNodes[1]){
        if (left[left.length - 2].childNodes[1].data == "對方離開了，請按離開按鈕回到首頁") {

            let changePersonButton = document.querySelector('#changeButton input')
            if (changePersonButton) changePersonButton.click()
            // changePerson()
            // changePerson後重設回話值
            curMid = -1;
        }
    }



    isStart()
    // 還沒跑出來 抓不到怎麼寫function
    isAnybodyIn()

    let filterText = document.querySelectorAll('.stranger');
    if (filterText && filterText !== "") {
        let filterArr = ["男", "色", "boy", "臺北", "台北", "妹", "缺", "妳", "約", "嗯", "摁", "是啊", "Y", "恩", "對", "公的", "沒錯", "ㄣ", "雞雞", "Boy", "找女"];
        filterArr.push("葛格", "女友", "修幹", "休幹", "北投", "炮", "女孩嗎", "高雄", "女？", "是的","女生嗎");
        let tempArr = Object.values(filterText).filter((e, i) => i % 2 == 0)

        // because it is not an array, it will be so complicated
        // start filtering
        tempArr.map((ele) => {
            // if (ele=="打字中..."||"") return false;
            if (!ele || !ele.childNodes[1]) return false;
            console.log(tempArr)
            let filterTA = ele.childNodes[1].data;//.innerText; (X )  //toString fuck find so long
            // 打字中... //會end function  // 一下打 一下不打 會undefined
            console.log("%c%s", "color:purple; font-size: 14px;", filterTA)  // What does other people say

            // 哪時set true?
            // let shouldRes=true;

            filterArr.map((e) => {
                if (filterTA.indexOf(e) > -1) {
                    console.log("match")
                    let changePersonButton = document.querySelector('#changeButton input')
                    if (changePersonButton) changePersonButton.click()
                    // changePerson()
                    let yes = document.querySelector('#popup-yes')
                    yes.click()
                    // reset response value
                    curMid = -1

                } else {
                    // 等他再講一次話再set true
                    // 取得 .length
                    // true 會進來跑一次
                    // 但會一直進來 因為會 回呼這個function

                    // return false;
                    // 等他講話才會有res
                    // 這邊會結束 篩選
                    // 不會 因為下面還有function要跑
                }
            })
        })
        setTimeout(fil, 1500);

    } else {
        console.log("no value exist")
        setTimeout(fil, 1500);
    }
}

const isStart = () => {
    let start = document.querySelector('#startButton')
    if (start) {
        start.click()
    } else {
        // if start already been touched?
        setTimeout(isStart, 500)
    }
}

const isAnybodyIn = () => {
    let sys = document.querySelectorAll('.system')
    if (sys[2] && sys[2].childNodes[1]) {
        //otherwise it appears sys[2] undefined
        // using while will overuse the memory
        //  not always on sys[2]
        // 中途聊天輸入function 必須要增加childNodes的判斷
        if (sys[2].childNodes[1].data !== "加密連線完成，開始聊天囉！") {
            sys = document.querySelectorAll('.system')
            setTimeout(isAnybodyIn, 1500)
        } else {
            // console.log("you can talk")     
        }
    } else {
        console.log("ready to start")
        let start = document.querySelector('#startButton')
        start.click()
        setTimeout(isAnybodyIn, 1000)
    }
}
fil()

