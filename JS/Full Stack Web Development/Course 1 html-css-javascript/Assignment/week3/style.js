
  function showBody(){
    var top=25,left=25;
    var width=500,height=500;
    var color_list=["red","orange","yellow","green","blue","indigo","violet"];
    var body=document.getElementsByTagName('body')[0];
    while(width>50){
      var childDiv=document.createElement('div');
      var random=Math.floor(Math.random()*7);
      childDiv.style.top=top+"px";
      childDiv.style.left=left+"px";
      childDiv.style.width=width+"px";
      childDiv.style.height=height+"px";
      childDiv.style.background=color_list[random];
      
      body.appendChild(childDiv);
      top+=10;
      left+=10;
      width-=20;
      height-=20;
    }


  }
