let a = parseFloat(prompt('nhap vao so a'));
let b = parseFloat(prompt('nhap vao so b'));
let c = parseFloat(prompt('nhap vao so c'));
let delta = (b*b)-4*a*c;
let d = Math.sqrt(delta); // d la can bac 2 cua delta
if(a=0){
      if (b=0){
        alert('phuong trinh vo nghiem');
    }
      else if (c=0){
          alert('phuong trinh co vo so nghiem');
      }
     else {
         alert('phuong trinh co duy nhat mot nghiem la' +(-c/a));
     }
}
else {
    if (delta<0){
        alert('pt vo nghiem');
    }
    else if (delta=0) {
    alert('pt co nghiem kep la' +(-b/(2*a)));}
    else {
        alert('pt co hai nghiem phan biet la');
        alert('nghiem thu nhat x1 = '+(-b+d)/(2*a));
        alert('nghiem thu nhat x2 = '+(-b-d)/(2*a));
    }

}