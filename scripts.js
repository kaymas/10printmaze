$('#download').on('click',function(){
  console.log("entered");
  console.log(canvas.canvas);
  if(finished){
    let c = canvas.canvas;
    let url = c.toDataURL('image/jpeg');
    let w = window.open('about:blank', 'maze');
    w.document.write("<img src='"+ url +"' alt='maze' />");
  }else {
    alert('wait for the whole maze to load');
  }
});
