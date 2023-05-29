const pi = 3.14;

function Area() {
    let r = parseInt(document.getElementById('Radius').value);
    let h = parseInt(document.getElementById('Height').value);

    document.getElementById('Area').value = (2*pi*r*r) + (2*pi*r*h); 
}

function Volume(){
    let r = parseInt(document.getElementById('Radius').value);
    let h = parseInt(document.getElementById('Height').value);

    document.getElementById('Volume').value = pi*r*r*h;
}