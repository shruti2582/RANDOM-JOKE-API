function relode(){
    window.location.reload();
}
try{
async function getData(){
    let data = await fetch('https://official-joke-api.appspot.com/random_joke');
    let joke = await data.json();
    console.log(joke);
    printData(joke);
}
getData();
}catch(error){
    console.log(error);
}


function printData(print) {
    let setup=document.querySelector(".setup");
    setup.innerHTML = print.setup;
    let punch=document.querySelector(".punch");
    punch.innerHTML = print.punchline;
}
   