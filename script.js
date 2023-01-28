
let answer = {
    wife:"",
    children:"",
    country:"",
    year:""
}

function addFunction() {
    let wife = document.getElementById('womanW').value;
    let children = document.getElementById('childN').value;
    let country = document.getElementById('targetC').value;
    let year = document.getElementById('futureY').value;

    document.getElementById("joker").innerHTML = "In " + year + " you will be in " + country + " with your beautiful wife " + wife + " and " + children + " children!!!";

    document.querySelector(".joker__wrapper").style.display = "flex";

    return {wife,children,country,year}
}
