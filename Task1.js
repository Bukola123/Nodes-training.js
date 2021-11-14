console.log(1+2+3+4+5+6+7+8+9+10)

function Addition(num) { 
 
  start = 0;
  do {start = start + num;
  num--}
  while (num > 0);
  return start; 
   };

function Sum(n){
	n = n * (n+1)/2;
	return n

}

console.log(Sum(10))
console.log(Addition (10))
