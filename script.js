var input1Value = document.getElementById("input1").value;
var input2Value = document.getElementById("input2").value;
var data = {
    input1: input1Value,
    input2: input2Value
  };
  
  var jsonData = JSON.stringify(data);
  var blob = new Blob([jsonData], {type: "application/json"});
  saveAs(blob, "data.json");
   