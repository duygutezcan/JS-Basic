document.getElementById("tarih").innerHTML = new Date();

function topla() {
    document.getElementById("sonuc").innerHTML = cevir("s1") + cevir("s2")
}
function cıkar() {
    document.getElementById("sonuc").innerHTML = cevir("s1") - cevir("s2")
}
function carp() {
    document.getElementById("sonuc").innerHTML = cevir("s1") * cevir("s2")
}
function bol() {
    let s1 = Number(document.getElementById("s1").value)
    let s2 = Number(document.getElementById("s2").value)
    document.getElementById("sonuc").innerHTML = s1 / s2
}
function cevir(id){
    return Number(document.getElementById(id).value)
}

    

