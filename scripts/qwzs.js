var secondMenuLastActivingTab = "1ed",
    secondMenuActivingTab = "1ed",
    secondMenuActivingTabImgFullSrc,
    secondMenuActivingTabImgFileName;

function changeToActiveTab(selectionId) {

    // 紀錄目前所在的頁面 (暫存入secondMenuLastActivingTab)
    secondMenuLastActivingTab = secondMenuActivingTab;

    // 將secondMenuActivingTab換為這次點選的項目
    secondMenuActivingTab = selectionId;

    // 判斷選中的Menu項目為何，將該項目換為紅色，並將其他項目設為黑色
    // 將所有檔案換為黑色
    // 將選中的檔案換為紅色

    // 全選項換成黑色
    document.getElementById("w1").src = "./images/w1.png";
    document.getElementById("w2").src = "./images/w2.png";
    document.getElementById("w3").src = "./images/w3.png";
    document.getElementById("w4").src = "./images/w4.png";
    document.getElementById("w5").src = "./images/w5.png";
    // 全對應的頁面隱藏
    document.getElementsByClassName("fourLakes")[0].style.display = "none";
    document.getElementsByClassName("traffic")[0].style.display = "none";
    document.getElementsByClassName("tjw")[0].style.display = "none";
    document.getElementsByClassName("xmpt")[0].style.display = "none";

    // 判斷選中的Menu項目為何
    // 1. IMG檔案名稱置換為對應名稱
    // 2. 將該項目頁面顯示
    switch (secondMenuActivingTab) {
        case "w1":
            secondMenuActivingTabImgFileName = "1ed";
            document.getElementsByClassName("fourLakes")[0].style.display = "";
            break;

        case "w2":
            secondMenuActivingTabImgFileName = "2ed";
            document.getElementsByClassName("traffic")[0].style.display = "";
            break;

        case "w3":
            secondMenuActivingTabImgFileName = "3ed";
            document.getElementsByClassName("tjw")[0].style.display = "";
            break;

        case "w4":
            secondMenuActivingTabImgFileName = "4ed";
            document.getElementsByClassName("xmpt")[0].style.display = "";
            break;

        case "w5":
            secondMenuActivingTabImgFileName = "5ed";
            break;
    }

    // 結合IMG檔案名稱，拼湊出完整檔案路徑
    secondMenuActivingTabImgFullSrc = "./images/" + secondMenuActivingTabImgFileName + ".png";

    // 將HTML元素的IMG路徑換為上面拼湊出的完整檔案路徑
    document.getElementById(selectionId).src = secondMenuActivingTabImgFullSrc;

}



var currentTravelWay = "to1",
    lastTravelWay = "to1";

function changeTravelDestination(selectedTravelWay) {

    lastTravelWay = currentTravelWay;
    currentTravelWay = selectedTravelWay;

    // 換項目的顏色
    // 將所有項目設為黑色
    document.getElementById("to1").src = "./images/to1.png";
    document.getElementById("to2").src = "./images/to2.png";
    document.getElementById("to3").src = "./images/to3.png";
    document.getElementById("to4").src = "./images/to4.png";
    document.getElementById("to5").src = "./images/to5.png";
    // 將選中項目設為紅色
    switch (selectedTravelWay) {

        case "to1":
            document.getElementById("to1").src = "./images/to1ed.png";
            break;

        case "to2":
            document.getElementById("to2").src = "./images/to2ed.png";
            break;

        case "to3":
            document.getElementById("to3").src = "./images/to3ed.png";
            break;

        case "to4":
            document.getElementById("to4").src = "./images/to4ed.png";
            break;

        case "to5":
            document.getElementById("to5").src = "./images/to5ed.png";
            break;
    }


    // 將所有圖片隱藏
    document.getElementById("tjw").getElementsByClassName("icon1")[0].style.display = "none";
    document.getElementById("tjw").getElementsByClassName("icon2")[0].style.display = "none";
    document.getElementById("tjw").getElementsByClassName("icon3")[0].style.display = "none";
    document.getElementById("tjw").getElementsByClassName("icon4")[0].style.display = "none";
    document.getElementById("tjw").getElementsByClassName("icon5")[0].style.display = "none";

    // 將該項目圖片顯示
    switch (selectedTravelWay) {

        case "to1":
            document.getElementById("tjw").getElementsByClassName("icon1")[0].style.display = "";
            break;

        case "to2":
            document.getElementById("tjw").getElementsByClassName("icon2")[0].style.display = "";
            break;

        case "to3":
            document.getElementById("tjw").getElementsByClassName("icon3")[0].style.display = "";
            break;

        case "to4":
            document.getElementById("tjw").getElementsByClassName("icon4")[0].style.display = "";
            break;

        case "to5":
            document.getElementById("tjw").getElementsByClassName("icon5")[0].style.display = "";
            break;
    }
}