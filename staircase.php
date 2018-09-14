<?php

//https://www.hackerrank.com/challenges/staircase/problem

$size = 5;

function staircase($size){
    $stair = '#';
    
    for($i = 1; $i <= $size; $i++){
        for($j = 1; $j <= $size - $i; $j++){
            echo '&nbsp';
        }
        for($k = 0; $k <= $size - ($j); $k++){
            echo $stair;
        }
        echo "<br>";
    }
}

staircase($size);

?>
