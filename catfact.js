document.addEventListener('DOMContentLoaded', function() {
    let addButton = document.getElementById('button');
    let para = document.getElementById('para');
    let thumbsup = document.getElementById('thumbsup');
    let thumbsdown = document.getElementById('thumbsdown');
    let ul = document.getElementById('ul');
    
    let likedFacts = [];

    let cat=async ()=>{
        let catfact=await fetch('https://meowfacts.herokuapp.com/')
        let fact=await catfact.json()
        let para=document.getElementById("para")
        para.innerText=fact.data
      }

    addButton.addEventListener('click', function() {
        cat();
    });


    thumbsup.addEventListener('click', function(event) {
        event.preventDefault();
        let fact = para.textContent;
        if (fact && !likedFacts.includes(fact)) {
            likedFacts.push(fact);
            let li = document.createElement('li');
            li.textContent = fact;
            ul.appendChild(li);
        }
    });


    thumbsdown.addEventListener('click', function(event) {
        event.preventDefault();
        let removalCount = 1;
        for (let i = 0; i < removalCount; i++) {
            if (likedFacts.length > 0) {
                likedFacts.pop();
                let lastChild = ul.lastElementChild;
                if (lastChild && lastChild.textContent !== "Liked Facts") {
                    ul.removeChild(lastChild);
                }
            }
        }
    });

    cat();
});
