let sel1=document.getElementById("sel")
let in1=document.getElementById("inbox")
let ul01=document.getElementById("ul1")
let ul02=document.getElementById("ul2")

function confirm(){
    let a=in1.value
    let b=sel1.value
    if(b=="boys"){
        let c=document.createElement("li")
        c.innerHTML=a
        ul01.appendChild(c)
        let group=ul01.getElementsByTagName("li")
        for(let i=0;i<group.length;i++){
            if(i%2==0){
                group[i].style.color="green"
            }else{
                group[i].style.color="yellow"
            }
        }
    }else if(b=="girls"){
        let d=document.createElement("li")
        d.innerHTML=a
        ul02.appendChild(d)
        let group=ul02.getElementsByTagName("li")
        for(let i=0;i<group.length;i++){
            if(i%2==0){
                group[i].style.color="green"
            }else{
                group[i].style.color="yellow"
            }
        }
    }else{
        prompt("Choose the Gender")
    }
}