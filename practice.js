// let sel1=document.getElementById("sel")
// let in1=document.getElementById("inbox")
// let ul01=document.getElementById("ul1")
// let ul02=document.getElementById("ul2")

// function confirm(){
//     let a=in1.value
//     let b=sel1.value
//     if(b=="boys"){
//         let c=document.createElement("li")
//         c.innerHTML=a
//         ul01.appendChild(c)
//         let group=ul01.getElementsByTagName("li")
//         for(let i=0;i<group.length;i++){
//             if(i %2 == 0){
//                 group[i].style.color="green"
//             }else{
//                 group[i].style.color="yellow"
//             }
//         }
//     }else if(b=="girls"){
//         let d=document.createElement("li")
//         d.innerHTML=a
//         ul02.appendChild(d)
//         let group=ul02.getElementsByTagName("li")
//         for(let i=0;i<group.length;i++){
//             if(i%2==0){
//                 group[i].style.color="green"
//             }else{
//                 group[i].style.color="yellow"
//             }
//         }
//     }else{
//         prompt("Choose the Gender")
//     }
// }

// let change=document.getElementById("div")

// change.addEventListener("click",function changed() {
//     change.innerText="Alternate Text"
// })
// change.addEventListener("mouseenter",function mouse() {
//     change.style.color="blue"
// })
// change.addEventListener("mouseleave",function new1(){
//     change.style.color="yellow"
// })
// change.addEventListener("mousedown",function new2(){
//     change.style.color="red"
// })

const cars = [
    {
      name: "Toyota Camry",
      price: 24000,
      color: "Silver",
      quantity: 5
    },
    {
      name: "Honda Civic",
      price: 22000,
      color: "Blue",
      quantity: 8
    },
    {
      name: "Ford Mustang",
      price: 35000,
      color: "Red",
      quantity: 2
    },
    {
      name: "Chevrolet Malibu",
      price: 23000,
      color: "White",
      quantity: 4
    },
    {
      name: "Tesla Model 3",
      price: 40000,
      color: "Black",
      quantity: 3
    },
    {
      name: "BMW 3 Series",
      price: 45000,
      color: "Gray",
      quantity: 6
    },
    {
      name: "Audi A4",
      price: 42000,
      color: "Silver",
      quantity: 2
    },
    {
      name: "Mercedes-Benz C-Class",
      price: 50000,
      color: "Blue",
      quantity: 4
    },
    {
      name: "Hyundai Sonata",
      price: 21000,
      color: "Red",
      quantity: 7
    },
    {
      name: "Kia Optima",
      price: 22000,
      color: "White",
      quantity: 5
    }
  ];
  

  // let func=(get)=>{
  //   console.log(`${get} is the getted value`);
  // }
  // let funct=(a,b,getted)=>{
  //   let c=a*b
  //   getted(c)
  // }

let rohith=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let don=false
      if(don){
        resolve("my Don")
      }else{
        reject("we are Don")
      }
    })
    })
}

let pavi=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let don = false
      if(don){
        resolve("my Daughter")
      }
      else{
        reject("we are Don")
      }
    },2000)
  })
}

rohith().then(value=>{console.log(value);return pavi()})
.then(value=>{console.log(value);console.log("friends forever");})
.catch(error=>{console.log("error");})