<html>
    <head>
        <style>
            h1{
                display: block;
                color: violet;
                background-color: black;
                font-weight: bold;
                text-align: center;
                border: 4px solid green;
            }
            
            
        </style>
        
        
    </head>
<body>

    <?php
        //read file question to get code question and get value
        $file_Q = fopen('question.txt', "r") or die("Unable to open file!");
        $i=0;
        $arr_Id=array();
        $sum=0;
         while(!feof($file_Q)) {

                  $arr_Id[$i]=fgets($file_Q);
                  $i++;
                }
        fclose($file_Q);  
        
        
        //get value of question from POST
        for($j=1;$j<count($arr_Id);$j++){
            $id= split("\|", $arr_Id[$j])[0];
            if(isset($_POST[$id])){
                $sum+= $_POST[$id];
            }
            
        
        }      
//        echo $sum;
        $file_A = fopen('result.txt', "r") or die("Unable to open file!");
     
        $new_Arr=array();
        $i=0;
        while(!feof($file_A)) {

                  $new_Arr[$i]=fgets($file_A);
                  $i++;
                }
        fclose($file_A);       
        for($i=1;$i<count($new_Arr);$i++){
            $temp= split("\|", $new_Arr[$i]);
            $num1=intval($temp[0]);
            $num2=intval($temp[1]);
            if(($sum>=$num1)&&($sum<=$num2)){
                echo "<h1>Điểm số là ".$sum.":".$temp[2]."</h1>";
            }
        }
    ?>

</body>
</html>