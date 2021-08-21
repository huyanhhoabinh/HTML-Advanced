$(document).ready(function(){
    //set up quiz data
    var quiz=[
    {
       
        "question":"Anh vẩu đi đâu về đấy?",
        "listanswer":['Game','Bóng đá','Cờ vua','đánh nhau'],
        "answer":'Game',
        "score":false
    },
    {
       
        "question":"Anh đi đâu đấy",
        "listanswer":['đi chơi','đi ngủ','đi vệ sinh',"đi sinh nhật"],
        "answer":'đi ngủ',
        "score":false
    },
    {
       
        "question":"Anh an com chua",
        "listanswer":['chưa','rồi','không nói','ăn từ hôm qua'],
        "answer":'không nói',
        "score":false
    }
    ,
    {
       
        "question":"Mai đi chơi không",
        "listanswer":['có','không','tùy tâm trạng','không rảnh'],
        "answer":'không rảnh',
        "score":false
    }
    ];
    var ans=['#dapanA','#dapanB','#dapanC','#dapanD'];
    var size=quiz.length;
    console.log(size);
    var index=0;
    var score=0;
    var b=-1; 
    var music = document.getElementById("myAudio"); 
    var music2   =document.getElementById("myAudio2");
        function run(){
            var cauhoi=quiz[index];
            
            $("#quizX").text(cauhoi["question"]);
         
            loadAnswer(cauhoi);  
           
        }
        function loadAnswer(object){
            var arrQ=object["listanswer"];
                document.getElementById("dapan").innerHTML="";
                for(var j=0;j<ans.length;j++){
                    //delete result true or false
                    var x=setTimeout(function() {
                        $("#ketqua").html("");
                    },1000);
                   //get the name and set text for that selector.
                   
                   var x= document.createElement("li");
                   x.id=ans[j];
                   x.innerHTML=arrQ[j];
                   document.getElementById("dapan").appendChild(x);
                   $(x).click(function(){
                        // console.log($(this).text());

                                if($(this).text()==object['answer']){
                                    $("#ketqua").html("Đúng rồi!");
                                    music.play();
                                    object['score']=true;
                                    score++;
                                }
                                else{
                                    $("#ketqua").html("Sai rồi!");
                                   music2.play();
                                }
                                if(index<size-1) index++;
                                else
                                {
                                    if(b==-1){
                                        b=score;
                                    }
                                     $('#score').html(b);
                                     
                                }
                                run();




                   });
               }
            // if(index==size-1) {
            //     $('#score').html(score);
            //     return;
            // };
               
        }
        run();
             
   
        
                

           


    
   
});

