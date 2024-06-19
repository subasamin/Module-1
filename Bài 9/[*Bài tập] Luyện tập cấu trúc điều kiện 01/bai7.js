let a = parseFloat(prompt('nhap vao so phut da goi'));
let b = parseFloat();// so tien
const c = 2000;// cuoc goi 1 phu
if (0<a<3){
    b = 2*a*c ;
    alert('so tien het la'+b);
}
else if (3<=a<10) {
    b = 1/2*a*c ;
    alert('so tien het la'+b);
}
else if (10<=a) {
    b = a*c ;
    alert('so tien het la'+b);
}
