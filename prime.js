function checkprime(num){
let factor=0;
for(let i=1;i<=num;i++){
if(num%i==0){
factor++;}
}
if(factor>2){
return False;}
else{return True;}
}


if(checkprime==True){
console.log(num, "is Prime")}

else{console.log(num, "is not Prime")}