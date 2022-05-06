const input1 = [ 1,2,3,4,5,6,7,8,9 ]
// const input2= 3

 output: [ 4,5,6,7,8,9,1,2,3 ]

// // WE can not use inbuild function of javascript 

// let input2= [3,input1[1],input1[0]]

// for(let i=3; i<input1.length;i++){
//     console.log(input1[i]);
// }
// for(let j=input2.length-1;j>=0;j--){
//     console.log(input2[j]);
// }


Array.prototype.rotate = function(n) {
    var len = this.length;
    return !(n % len) ? this.slice()
                      : this.map((e,i,a) => a[(i + (len + n % len)) % len]);
    };
    var a = [1,2,3,4,5,6,7,8,9],
        b = a.rotate(-1);
        b = a.rotate(3);
    console.log(JSON.stringify(b));
