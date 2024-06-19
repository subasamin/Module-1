let sodien = parseFloat(prompt('so dien da tieu thu trong 1 thang'));
let sotien = parseFloat();
//const a=1 // a la he so tien khi muc tieu thu dien tu 0< sodien <=300
const b=1.5 // a la he so tien khi muc tieu thu dien tu 300< sodien <=600
const c=2 // a la he so tien khi muc tieu thu dien tu 6000< sodien
if (0<sodien&sodien<=300){
    sotien=sodien;
    alert('so tien la'+sotien);
}
else if (300<sodien&sodien<=600){
    sotien=300*a+(sodien-300)*b;
    alert('so tien la'+sotien);
}
else {
    sotien=300 + 300*b+(sodien-600)*c;
    alert('so tien la'+sotien);
}