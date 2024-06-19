let weight = parseFloat(prompt('nhap vao can nang'));
let height = parseFloat(prompt('nhap vao chieu cao'));
let bim = parseFloat();
bim = weight / (height*height);t
if (bim<18.5){
    alert('underwweight');
}
else if (bim<25.0){
    alert('Normal');
}
else if (bim<30){
    alert('Overwweight');
}
else if (30<=bim){
    alert('Normal');
}
