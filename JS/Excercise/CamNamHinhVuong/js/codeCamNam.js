		var screen=document.getElementById('big');
		screen.style.width=window.innerWidth+'px';
		screen.style.height=window.innerHeight+'px';
		var box=document.getElementById('box');
		var test=new BigBox(box);
		test.work();
		function BigBox(object){
			var left;
			var top;
			var getLeft = function() { return object.style.left; };
  			var getTop = function() {return object.style.top; };
  			var move=function(a,b){
  				object.style.left=a+'px';
  				object.style.top=b+'px';
  			};
  			this.work=function(){
  				console.log("work");
  				object.onmousedown=function(e){
  				_startX = e.clientX;
        		_startY = e.clientY;
        		_offsetX = ExtractNumber(getLeft());
	        	_offsetY = ExtractNumber(getTop());
	        	console.log(ExtractNumber(_offsetX)+":"+ExtractNumber(_offsetY));
	        		screen.onmousemove=function(e){
						move(_offsetX + e.clientX -_startX,_offsetY + e.clientY -_startY);
						screen.onmouseup=function(){
							screen.onmousemove=null;
							
						};
					};
  				};


  			};

  			
		}
		function ExtractNumber(value)
		{
		    var n = parseInt(value);
			
		    return n == null || isNaN(n) ? 0 : n;
		}
		
		