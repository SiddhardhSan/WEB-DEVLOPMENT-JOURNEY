//                                        learning functions and some array methods


//for-each loop
arr01=["maths","physics","chemistry","biology"];
arr01.forEach(i => {
    console.log(i);
    
});
console.log("\n");


//map 
let newarr01=arr01.map((j)=>{
    return j;
}
);
newarr01.forEach((k)=>{
    console.log(k);
});


//filter
let arrf=[1,34,55,67,32,41,53,76];
let newarrf=arrf.filter((j)=>{
    return j%2===0;
});
newarrf.forEach((i)=>{console.log(i);});
console.log("\n");


//reduce
let maxx=arrf.reduce((i,j)=>{
    
    return ((i>j)? i:i=j);
});
console.log(maxx);


