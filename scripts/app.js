// console.log("success");

function init() {

    //首頁選單逐一旋轉顯示動畫
    setTimeout(function () {
        document.getElementById("topChoiceImg1").classList.remove("invisible", "rotateIn");
        document.getElementById("topChoiceImg1").classList.add("animated", "rotateIn");
    }, 200);
    setTimeout(function () {
        document.getElementById("topChoiceImg2").classList.remove("invisible", "rotateIn");
        document.getElementById("topChoiceImg2").classList.add("animated", "rotateIn");
    }, 400);
    setTimeout(function () {
        document.getElementById("topChoiceImg3").classList.remove("invisible", "rotateIn");
        document.getElementById("topChoiceImg3").classList.add("animated", "rotateIn");
    }, 600);
    setTimeout(function () {
        document.getElementById("topChoiceImg4").classList.remove("invisible", "rotateIn");
        document.getElementById("topChoiceImg4").classList.add("animated", "rotateIn");
    }, 800);

    // 首頁下方的文字進入動畫
    setTimeout(function () {
        document.getElementById("wordImg").classList.remove("invisible", "fadeInLeft");
        document.getElementById("wordImg").classList.add("animated", "fadeInLeft");
    }, 300);

}

init();