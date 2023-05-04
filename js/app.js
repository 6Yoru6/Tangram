//Set figures on square form when page load
function Square() {
    document.querySelector(".red").setAttribute('class', 'figure red square');
    document.querySelector(".green").setAttribute('class', 'figure green square');
    document.querySelector(".blue").setAttribute('class', 'figure blue square');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow square');
    document.querySelector(".purple").setAttribute('class', 'figure purple square');
    document.querySelector(".brown").setAttribute('class', 'figure brown square');
    document.querySelector(".orange").setAttribute('class', 'figure orange square');
}
Square()

//Add buttons and links for each new figures
function AddFigures() {
    const Buttons = document.querySelector(".buttons");
    const Head = document.querySelector("head");

    //Change names of buttons
    document.querySelector("#btnOne").innerHTML = "Carré";
    document.querySelector("#btnTwo").innerHTML = "Chat";
    document.querySelector("#btnThree").innerHTML = "Bateau";
    document.querySelector("#btnFour").innerHTML = "4";
    document.querySelector("#btnFive").innerHTML = "Ours";
    document.querySelector("#btnSix").innerHTML = "6";
    document.querySelector("#btnSeven").innerHTML = "Papillon";


    // Height
    const newButton8 = document.createElement("button");
    Buttons.appendChild(newButton8);
    newButton8.setAttribute('id', 'btnHeight');
    newButton8.innerHTML = "8";

    const newLink8 = document.createElement("link");
    Head.appendChild(newLink8);
    newLink8.setAttribute('rel', 'stylesheet');
    newLink8.setAttribute('href', 'css/figure8.css');


    // Nine
    const newButton9 = document.createElement("button");
    Buttons.appendChild(newButton9);
    newButton9.setAttribute('id', 'btnNine');
    newButton9.innerHTML = "Kévin";

    const newLink9 = document.createElement("link");
    Head.appendChild(newLink9);
    newLink9.setAttribute('rel', 'stylesheet');
    newLink9.setAttribute('href', 'css/figure9.css');


    // Ten
    const newButton10 = document.createElement("button");
    Buttons.appendChild(newButton10);
    newButton10.setAttribute('id', 'btnTen');
    newButton10.innerHTML = "Cédric";

    const newLink10 = document.createElement("link");
    Head.appendChild(newLink10);
    newLink10.setAttribute('rel', 'stylesheet');
    newLink10.setAttribute('href', 'css/figure10.css');


    // Eleven
    const newButton11 = document.createElement("button");
    Buttons.appendChild(newButton11);
    newButton11.setAttribute('id', 'btnEleven');
    newButton11.innerHTML = "Gregory";

    const newLink11 = document.createElement("link");
    Head.appendChild(newLink11);
    newLink11.setAttribute('rel', 'stylesheet');
    newLink11.setAttribute('href', 'css/figure11.css');


    // Twelve
    const newButton12 = document.createElement("button");
    Buttons.appendChild(newButton12);
    newButton12.setAttribute('id', 'btnTwelve');
    newButton12.innerHTML = "Antoine";

    const newLink12 = document.createElement("link");
    Head.appendChild(newLink12);
    newLink12.setAttribute('rel', 'stylesheet');
    newLink12.setAttribute('href', 'css/figure12.css');
}
AddFigures()

// CHANGE CLASS WHEN CLICK ON BUTTONS TO ACTIVATE THE FIGURE WANTED //

//Square Figure
document.getElementById("btnOne").addEventListener('click', function() {
    document.querySelector(".red").setAttribute('class', 'figure red square');
    document.querySelector(".green").setAttribute('class', 'figure green square');
    document.querySelector(".blue").setAttribute('class', 'figure blue square');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow square');
    document.querySelector(".purple").setAttribute('class', 'figure purple square');
    document.querySelector(".brown").setAttribute('class', 'figure brown square');
    document.querySelector(".orange").setAttribute('class', 'figure orange square');
});

//Cat Figure
document.getElementById("btnTwo").addEventListener('click', function() {
    document.querySelector(".red").setAttribute('class', 'figure red cat');
    document.querySelector(".green").setAttribute('class', 'figure green cat');
    document.querySelector(".blue").setAttribute('class', 'figure blue cat');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow cat');
    document.querySelector(".purple").setAttribute('class', 'figure purple cat');
    document.querySelector(".brown").setAttribute('class', 'figure brown cat');
    document.querySelector(".orange").setAttribute('class', 'figure orange cat');
});

//Boat Figure
document.getElementById("btnThree").addEventListener('click', function() {
    document.querySelector(".red").setAttribute('class', 'figure red Boat');
    document.querySelector(".green").setAttribute('class', 'figure green Boat');
    document.querySelector(".blue").setAttribute('class', 'figure blue Boat');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow Boat');
    document.querySelector(".purple").setAttribute('class', 'figure purple Boat');
    document.querySelector(".brown").setAttribute('class', 'figure brown Boat');
    document.querySelector(".orange").setAttribute('class', 'figure orange Boat');
});

//
document.getElementById("btnFour").addEventListener('click', function() {
    document.querySelector(".red").setAttribute('class', 'figure red ');
    document.querySelector(".green").setAttribute('class', 'figure green ');
    document.querySelector(".blue").setAttribute('class', 'figure blue ');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow ');
    document.querySelector(".purple").setAttribute('class', 'figure purple ');
    document.querySelector(".brown").setAttribute('class', 'figure brown ');
    document.querySelector(".orange").setAttribute('class', 'figure orange ');
});

//Bear Figure
document.getElementById("btnFive").addEventListener('click', function() {
    document.querySelector(".red").setAttribute('class', 'figure red ours');
    document.querySelector(".green").setAttribute('class', 'figure green ours');
    document.querySelector(".blue").setAttribute('class', 'figure blue ours');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow ours');
    document.querySelector(".purple").setAttribute('class', 'figure purple ours');
    document.querySelector(".brown").setAttribute('class', 'figure brown ours');
    document.querySelector(".orange").setAttribute('class', 'figure orange ours');
});

//
document.getElementById("btnSix").addEventListener('click', function() {
    document.querySelector(".red").setAttribute('class', 'figure red ');
    document.querySelector(".green").setAttribute('class', 'figure green ');
    document.querySelector(".blue").setAttribute('class', 'figure blue ');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow ');
    document.querySelector(".purple").setAttribute('class', 'figure purple ');
    document.querySelector(".brown").setAttribute('class', 'figure brown ');
    document.querySelector(".orange").setAttribute('class', 'figure orange ');
});

//Butterfly Figure
document.getElementById("btnSeven").addEventListener('click', function() {
    document.querySelector(".red").setAttribute('class', 'figure red butterfly');
    document.querySelector(".green").setAttribute('class', 'figure green butterfly');
    document.querySelector(".blue").setAttribute('class', 'figure blue butterfly');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow butterfly');
    document.querySelector(".purple").setAttribute('class', 'figure purple butterfly');
    document.querySelector(".brown").setAttribute('class', 'figure brown butterfly');
    document.querySelector(".orange").setAttribute('class', 'figure orange butterfly');
});

//
document.getElementById("btnHeight").addEventListener('click', function() {
    document.querySelector(".red").setAttribute('class', 'figure red ');
    document.querySelector(".green").setAttribute('class', 'figure green ');
    document.querySelector(".blue").setAttribute('class', 'figure blue ');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow ');
    document.querySelector(".purple").setAttribute('class', 'figure purple ');
    document.querySelector(".brown").setAttribute('class', 'figure brown ');
    document.querySelector(".orange").setAttribute('class', 'figure orange ');
});

//Kévin Secret Figure
document.getElementById("btnNine").addEventListener('click', function() {
    document.querySelector(".red").setAttribute('class', 'figure red ');
    document.querySelector(".green").setAttribute('class', 'figure green ');
    document.querySelector(".blue").setAttribute('class', 'figure blue ');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow ');
    document.querySelector(".purple").setAttribute('class', 'figure purple ');
    document.querySelector(".brown").setAttribute('class', 'figure brown ');
    document.querySelector(".orange").setAttribute('class', 'figure orange ');
});

//Cédric Secret Figure
document.getElementById("btnTen").addEventListener('click', function() {
    document.querySelector(".red").setAttribute('class', 'figure red ');
    document.querySelector(".green").setAttribute('class', 'figure green ');
    document.querySelector(".blue").setAttribute('class', 'figure blue ');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow ');
    document.querySelector(".purple").setAttribute('class', 'figure purple ');
    document.querySelector(".brown").setAttribute('class', 'figure brown ');
    document.querySelector(".orange").setAttribute('class', 'figure orange ');
});

//Gregory Secret Figure
document.getElementById("btnEleven").addEventListener('click', function() {
    document.querySelector(".red").setAttribute('class', 'figure red ');
    document.querySelector(".green").setAttribute('class', 'figure green ');
    document.querySelector(".blue").setAttribute('class', 'figure blue ');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow ');
    document.querySelector(".purple").setAttribute('class', 'figure purple ');
    document.querySelector(".brown").setAttribute('class', 'figure brown ');
    document.querySelector(".orange").setAttribute('class', 'figure orange ');
});

//Antoine Secret Figure
document.getElementById("btnTwelve").addEventListener('click', function() {
    document.querySelector(".red").setAttribute('class', 'figure red ');
    document.querySelector(".green").setAttribute('class', 'figure green ');
    document.querySelector(".blue").setAttribute('class', 'figure blue ');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow ');
    document.querySelector(".purple").setAttribute('class', 'figure purple ');
    document.querySelector(".brown").setAttribute('class', 'figure brown ');
    document.querySelector(".orange").setAttribute('class', 'figure orange ');
});