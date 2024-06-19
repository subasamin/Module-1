function tinhSoNgay(){
let thang = parseInt(document.getElementById('thang').value);
switch (thang){
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
        document.getElementById('songay').innerHTML = 'Thang '+thang +' co 30 ngay';
        break;
    case 2:
        document.getElementById('songay').innerHTML = 'Thang 2 co 29 hoac 30 ngay';
        break;
    case 4:
    case 6:
    case 8:
    case 10:
    case 12:
        document.getElementById('songay').innerHTML = 'Thang '+thang +' co 31 ngay';
        break
    }
}
