var mapSrcRoute;

// 按所選戶型更換地圖
function changeMap(onClickId) {
    mapSrcRoute = "./images/zshx/map/bjt-" + onClickId + ".png";
    document.getElementById("map").src = mapSrcRoute;
}
