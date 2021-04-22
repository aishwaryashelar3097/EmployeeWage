const num = 365;
const PowerOfTwo = num => {
   // dealing only with non-negative numbers
   if(num < 0){
      num *= -1;
   }
   let base = 1;
   while(base < num){
      if(num - base < Math.floor(base / 2)){
         return base;
      };
      base *= 2;
   };
   return base;
};
console.log(PowerOfTwo(num));