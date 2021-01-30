let blockSlide = document.getElementById("blockSlide");
function prevNextHandler(leftVal, inputs) {
  console.log(leftVal, inputs);
  if(inputs != undefined) {
    let i, x=0;
    for(i=0; i< inputs.length; i++) {
      if(document.getElementById(inputs[i]).value == "") {
        x++;
      }
    }
    if(x == 0) {
      blockSlide.style.left=leftVal+"%";
    } else {
      alert("Every Field is Required");
    }
  } else {
    blockSlide.style.left=leftVal+"%";
  }
}