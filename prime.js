function checkprime(num){
let factor=0;
for(let i=2;i<num;i++){
if(num%i==0){
factor++;}
}
if(factor>0){
return True;}
else{return False;}
}


if(checkprime==True){
console.log(num, "is Prime")}

else{console.log(num, "is not Prime")}