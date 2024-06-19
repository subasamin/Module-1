let a = parseFloat(prompt('nhap vao canh a tam giac'));
let b = parseFloat(prompt('nhap vao canh b tam giac'));
let c = parseFloat(prompt('nhap vao canh c tam giac'));
if (a||b||c<0){
    prompt('ba so a,b,c khong pahi la ba canh cua tam giac')
}
else ((a+b>c)&(a+c>b)&(b+c>a)) {
    prompt('ba so a b c la ba canh cua tam giac');
}