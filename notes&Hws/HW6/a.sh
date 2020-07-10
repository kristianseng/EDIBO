#! /bin/bash

result=0
power=1
n=123

while [ $n -ne 0 ]
do
        modul=$(( $n % 2 ))
        result=$(( $modul * $power + $result ))
        power=$(( $power * 10 ))
        n=$(( $n / 2 ))
done

echo "number 123 to bin => $result"
