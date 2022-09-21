// let karyawan = {
//     nama: "wahyu aprilliandhika",
//     nik: "21.11.3869",
//     email: "wahyu@gmail.com"
// }

// console.log(JSON.stringify(karyawan));

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let karyawan = JSON.parse(this.responseText);
//         console.log(karyawan);
//     }
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();

$.getJSON('coba.json', function (data) {
    console.log(data);
});