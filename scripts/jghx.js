// 選擇房型
var currentHouseStyle = "thy";
function changeHouseStyle(selectedHouseStyle) {

    // 所選為桃花源
    if (selectedHouseStyle == "thy" || selectedHouseStyle == "thy-indicate") {


        // 更換指示箭頭 (黃箭頭)
        document.getElementById("thy-indicate").style.visibility = "";
        document.getElementById("hty-indicate").style.visibility = "hidden";

        // 更換3D預覽
        var threeDSrc = "./" + "w1" + ".html";
        document.getElementById("threeD").src = threeDSrc;

        // 更換map
        var mapSource;
        mapSource = "./images/zshx/map/bjt-" + "w1" + ".png";
        document.getElementById("map").src = mapSource;

        // 隱藏樓層選單
        document.getElementById('floorOption').style.display = "none";
        setTimeout(function () { document.getElementById('combine').src = "./images/btn/fen.png"; }, 0);
        currentCombine = true;

        // 隱藏所有指示
        for (i = 0; i < 3; i++) {
            document.getElementsByClassName("viewWayIndicater")[i].style.display = "none";
        }
        // 顯示選擇的這項的指示
        document.getElementById("swspViewWayIndicater").style.display = "";

        currentHouseStyle = "thy";

    }
    // 所選為海棠苑
    else {

        // 更換指示箭頭 (黃箭頭)
        document.getElementById("thy-indicate").style.visibility = "hidden";
        document.getElementById("hty-indicate").style.visibility = "";

        // 更換3D預覽
        var threeDSrc = "./" + "Q7" + ".html";
        document.getElementById("threeD").src = threeDSrc;

        // 更換map
        var mapSource;
        mapSource = "./images/fshx/map/" + "Q7" + "-map.png";
        document.getElementById("map").src = mapSource;

        // 隱藏樓層選單
        document.getElementById('floorOption').style.display = "none";
        setTimeout(function () { document.getElementById('combine').src = "./images/btn/fen.png"; }, 0);
        currentCombine = true;

        // 隱藏所有指示
        for (i = 0; i < 3; i++) {
            document.getElementsByClassName("viewWayIndicater")[i].style.display = "none";
        }
        // 顯示選擇的這項的指示
        document.getElementById("swspViewWayIndicater").style.display = "";

        currentHouseStyle = "hty";

    }

}



// 選取樓層
function changeTo3DFloor(floorNumber) {

    console.log(floorNumber);

    if (currentHouseStyle == "thy") {

        switch (floorNumber) {

            case "2F":
                document.getElementById("threeD").src = "./w1_2.html";
                break;

            case "1F":
                document.getElementById("threeD").src = "./w1_1.html";
                break;

            case "-1F":
                document.getElementById("threeD").src = "./w1_f1.html";
                break;

        }

    }

    if (currentHouseStyle == "hty") {

        switch (floorNumber) {

            case "2F":
                document.getElementById("threeD").src = "./Q7_2.html";
                break;

            case "1F":
                document.getElementById("threeD").src = "./Q7_1.html";
                break;

            case "-1F":
                document.getElementById("threeD").src = "./Q7_f1.html";
                break;

        }

    }

}



// 點選拆分合併按鈕
// a. 顯示樓層選單   |   b. 更換3D圖變成樓層一
var currentCombine = true;
function switchCombineBreak() {

    // 從合併變為拆分
    if (currentCombine) {

        // 顯示樓層選單
        document.getElementById('floorOption').style.display = "";
        setTimeout(function () { document.getElementById('combine').src = "./images/btn/he.png"; }, 200);

        // 更換3D圖變成樓層一
        if (currentHouseStyle == "thy") {
            document.getElementById('threeD').src = "./w1_1.html";
        }
        else {
            document.getElementById('threeD').src = "./Q7_1.html";
        }

        // 隱藏所有指示
        for (i = 0; i < 3; i++) {
            document.getElementsByClassName("viewWayIndicater")[i].style.display = "none";
        }
        // 顯示選擇的這項的指示
        document.getElementById("swlpViewWayIndicater").style.animationDelay = "0";
        document.getElementById("swlpViewWayIndicater").style.display = "";


        currentCombine = false;
    }
    // 從拆分變為合併
    else {

        // 隱藏樓層選單
        document.getElementById('floorOption').style.display = "none";
        setTimeout(function () { document.getElementById('combine').src = "./images/btn/fen.png"; }, 0);

        // 更換3D圖變成樓層一
        if (currentHouseStyle == "thy") {
            document.getElementById('threeD').src = "./w1.html";
        }
        else {
            document.getElementById('threeD').src = "./Q7.html";
        }

        // 隱藏所有指示
        for (i = 0; i < 3; i++) {
            document.getElementsByClassName("viewWayIndicater")[i].style.display = "none";
        }
        // 顯示選擇的這項的指示
        document.getElementById("swspViewWayIndicater").style.display = "";

        currentCombine = true;
    }

}



// 選取看房方式
function changeViewWay(selectedViewWay) {

    // 選擇三維沙盤
    if (selectedViewWay.id == "viewWaySwsp") {

        // 隱藏所有指示
        for (i = 0; i < 3; i++) {
            document.getElementsByClassName("viewWayIndicater")[i].style.display = "none";
        }
        // 顯示選擇的這項的指示
        document.getElementById("swspViewWayIndicater").style.display = "";

        // 更換3D模型
        if (currentHouseStyle == "thy") {
            document.getElementById("threeD").src = "./w1.html";
        }
        if (currentHouseStyle == "hty") {
            document.getElementById("threeD").src = "./Q7.html";
        }

        // 隱藏樓層選單
        document.getElementById('floorOption').style.display = "none";
        setTimeout(function () { document.getElementById('combine').src = "./images/btn/fen.png"; }, 0);

        // 待修: 更改動畫延遲時間失敗
        // document.getElementById("swspViewWayIndicater").style.animationDelay = "0";
        // console.log(document.getElementById("swspViewWayIndicater").style);
        // console.log(document.getElementsByClassName("viewWayIndicater")[0].style);

    }
    // 選擇三維樓層
    else if (selectedViewWay.id == "viewWaySwlp") {

        // 隱藏所有指示
        for (i = 0; i < 3; i++) {
            document.getElementsByClassName("viewWayIndicater")[i].style.display = "none";
        }
        // 顯示選擇的這項的指示
        document.getElementById("swlpViewWayIndicater").style.animationDelay = "0";
        document.getElementById("swlpViewWayIndicater").style.display = "";

        // 更換3D模型
        if (currentHouseStyle == "thy") {
            document.getElementById("threeD").src = "./w1_1.html";
        }
        if (currentHouseStyle == "hty") {
            document.getElementById("threeD").src = "./Q7_1.html";
        }

        // 顯示樓層選單
        document.getElementById('floorOption').style.display = "";
        setTimeout(function () { document.getElementById('combine').src = "./images/btn/he.png"; }, 200);

        // 更換3D圖變成樓層一
        if (currentHouseStyle == "thy") {
            document.getElementById('threeD').src = "./w1_1.html";
        }
        else {
            document.getElementById('threeD').src = "./Q7_1.html";
        }


    }
    // 選擇全景看房
    else if (selectedViewWay.id == "viewWayQjkf") {

        // 隱藏所有指示
        for (i = 0; i < 3; i++) {
            document.getElementsByClassName("viewWayIndicater")[i].style.display = "none";
        }
        // 顯示選擇的這項的指示
        document.getElementById("swlpViewWayIndicater").style.animationDelay = "0";
        document.getElementById("qjkfViewWayIndicater").style.display = "";
    }

}



// 桃花源
// 	三圍樓層
// 		2F iframe src="./w1_2.html"
// 		1F iframe src="./w1_1.html"
// 		-1F iframe src="./w1_f1.html"
// 	三圍沙盤 - iframe src="./w1.html"

// 海棠苑
// 	三圍樓層
// 		2F iframe src="./Q7_2.html"
// 		1F iframe src="./Q7_1.html"
// 		-1F iframe src="./Q7_f1.html"
// 	三圍沙盤 - iframe src="./Q7.html"