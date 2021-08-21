<html>
    <head>
        <title>title</title>
        <style>
            h2{
                font-weight: bold;
                color: green;
            }
            h1{
                font-weight: bold;
                color: black;
            }
            #work{
                display: block;
                width: 60%;
                margin: 0 auto;
                border: 2px solid black;
                padding-left:20%;
            }
            
        </style>
    </head>
    <body>
        <form action="result.php" method="post" id="work">
             <?php
            //store all to arr_All
            $arr_All=array();
            $listFile=array('question.txt','options.txt','result.txt');
            for($i=0;$i<count($listFile);$i++){
                $my_File = fopen($listFile[$i], "r") or die("Unable to open file!");
                $j=0;
                while(!feof($my_File)) {

                  $arr_All[$i][$j]=fgets($my_File);
                  $j++;
                }
                fclose($my_File);
            }

            for($i=1;$i<count($arr_All[0]);$i++){
                $idQ=explode('|',$arr_All[0][$i])[0];
                $queS=explode('|',$arr_All[0][$i])[1];
                echo "<h1>$queS</h1>"."<br>";
                for($j=1;$j<count($arr_All[1]);$j++){
                    $idO=explode('|',$arr_All[1][$j])[0];
                    if($idQ==$idO){
                        
                        $val_O=explode('|',$arr_All[1][$j])[3];
                        $op_D=explode('|',$arr_All[1][$j])[1].'.'.explode('|',$arr_All[1][$j])[2];
                        echo "<input type='radio' value=".$val_O." name=".$idO.">".$op_D."<br>";
                    }
                }
            }

            ?>
            
            
            
            
            
            
            
            <input type="submit">
        </form>
      
  
       
        
        
        
    </body>
</html>

