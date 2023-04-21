window.onload = function() {
  // 获取查询参数中的总价信息
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var totalPrice = urlParams.get("totalPrice");
  
  // 显示总价信息
  document.getElementById("totalPrice").innerHTML = "总价：" + totalPrice + "元";
}




