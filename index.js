const input1 = [ 1,2,3,4,5,6,7,8,9 ]
const input2= 3

 output: [ 4,5,6,7,8,9,1,2,3 ]

// // WE can not use inbuild function of javascript 



function gcd( a, b){
  if (b == 0)
      return a;
  else
      return gcd(b, a % b);
}


function leftRotate(arr, d, n){
  /* To handle if d >= n */
  d = d % n;
  let g_c_d = gcd(d, n);
  for (let i = 0; i < g_c_d; i++) {
      /* move i-th values of blocks */
      let temp = arr[i];
      let j = i;

      while (1) {
          let k = j + d;
          if (k >= n)
              k = k - n;

          if (k == i)
              break;

          arr[j] = arr[k];
          j = k;
      }
      arr[j] = temp;
  }
}


function printArray(arr, size){
  for (let i = 0; i < size; i++)
     console.log(arr[i]);
}

let arr = input1;
let n = arr.length;
// Function calling
leftRotate(arr, input2, n);
printArray(arr, n);
