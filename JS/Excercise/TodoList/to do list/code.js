
var works;

function loadDuLieu(){
	
	document.getElementById("congviec").innerHTML="";
	works=(document.cookie).split(";");
	
	 
	if(works.toString()!=""){
		
                
		for(var i=0;i<works.length;i++){
                var small=works[i].split("=");
                if(small[0].indexOf("tdlHA113")!=-1){
                    var one=document.createElement("p");
                    
                    one.innerHTML=(small[1].substring(0,small[1].length-3));
                    one.id=small[0].trim();
                    
//                    var cb = document.createElement('input');
//                    cb.type = 'checkbox';
                    var value_cb=small[1].substring(small[1].length-3,small[1].length);
//                    alert(value_cb);
                    if(value_cb=="YeS"){
                        one.style.textDecoration='none';
                        
                    }
                    else if(value_cb=="NoN"){
                       one.style.textDecoration='line-through';
                    }
//                    one.appendChild(cb);
                    one.addEventListener('click',
                            function(){
//                                alert("nhan");
//                                alert(this.id);
                                if(value_cb=="YeS"){
                                    document.cookie=this.id+'='+this.innerHTML.substring(0,(this.id).length-3)+"NoN";
                                    this.style.textDecoration='line-through';
                                    
                                }
                                else if(value_cb=="NoN"){
                                    document.cookie=this.id+'='+this.innerHTML.substring(0,(this.id).length-3)+"YeS";
                                    this.style.textDecoration='none';
                                    
                                }
                            }

                        );
                      
                    one.addEventListener('dblclick',
                                    function(){
                                            this.remove();
                                            var d = new Date();
                                        d.setDate(d.getDate() -1);
                                        var expires = "expires="+ d.toUTCString();


                                        document.cookie = this.id+"=;" + expires;

				});
                                
                    document.getElementById("congviec").appendChild(one);
                }
		
	}




	}
	

}
function add(){
	var work=document.getElementById("inputWord").value;
	var count=works.length;
	var id = (new Date()).valueOf();
	var first=("tdlHA113"+id).trim();
	document.cookie=first+'='+work+"YeS";
	loadDuLieu();

}

