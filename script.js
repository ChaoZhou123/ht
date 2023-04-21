function calculateTotalPrice() {
  // 获取表单数据
  var ticketQty = document.getElementById("ticketQty").value;
  
  // 固定购票价格
  var ticketPrice = 77;
  
  // 计算总价
  var totalPrice = ticketQty * ticketPrice;
  
  // 跳转到新页面并传递总价信息作为查询参数
  window.location.href = "result.html?totalPrice=" + totalPrice;
}



