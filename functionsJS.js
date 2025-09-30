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


//reduce (previous,current)
let maxx=arrf.reduce((i,j)=>{
    
    return ((i>j)? i:i=j);
});
console.log(maxx);

//                                        Learning document of object model
let q= document.querySelectorAll("a");
console.dir(q);
console.log(q);
let di=document.querySelector("body");
console.log(di.innerText);
console.log(di.innerHTML);
console.log(q[1].innerText);
console.log(q[1].innerHTML);
console.log(di.tagName);
console.log(q[3].tagName);

let kl=document.body.children;
console.log(di.firstChild);
let s1=document.querySelector(".b1");
console.log(s1.innerText,"\n");
// console.log("\n");
console.log(s1.innerHTML);
let nl=s1.children;
console.log(nl);
console.log(nl[1].innerText);

// more ways of using document of object model - javascript

let a1=document.createElement("p");
(document.querySelector("#bp1")).after(a1);
a1.innerText="Please try to contribute sources";
a1.setAttribute("id","bp4");
a1.style.marginTop= "0.37rem";

let new1=document.querySelector(".b1");
let news1=document.createElement("div");
new1.after(news1);
news1.setAttribute("class","b2");
news1.innerHTML=`
<p>Thank you everyone</p>
    <p>please try to stay in touch</p>
`;
console.log(news1.classList);
news1.classList.add("newClass");
news1.remove();
// news1=null;
// console.log(news1.classList);
