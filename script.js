
var getGit = document.getElementById("getGit")


getGit.addEventListener("click",function(){
    fetch("https://api.github.com/users/adion81")
    .then(result=>result.json())
    .then(data=>{
        console.log(data);
        var userCard = document.getElementById("userCard");
        userCard.classList.remove("hidden");
        var userCardHeader= document.querySelector("#userCard h1")
        userCardHeader.innerHTML=data.name+ " has " + data.followers + " followers" 
        var userCardImg= document.querySelector("#userCard img")
        userCardImg.src=data.avatar_url
    });
});