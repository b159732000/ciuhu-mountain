var mapSrcRoute;

// 按所選戶型更換地圖
function changeMap(onClickId) {
    mapSrcRoute = "./images/fshx/map/" + onClickId + "-map.png";
    document.getElementById("map").src = mapSrcRoute;
}