<?php
// $mahasiswa = [
//     [
//         "nama" => "wahyu aprilliandhika",
//         "nim" => "21.11.3869",
//         "jurusan" => "S1 Informatika",
//         "Konsentrasi" => " Software Engineer"
//     ],
//     [
//         "nama" => "Anto",
//         "nim" => "11.11.1111",
//         "jurusan" => "S1 akuntasi",
//         "Konsentrasi" => "UIUX"
//     ]
// ];

$dbh = new PDO("mysql:host=localhost;dbname=karyawan", "root", "");
$db = $dbh->prepare('SELECT * FROM datakaryawan');
$db->execute();
$karyawan = $db->fetchAll(PDO::FETCH_ASSOC);

$cetak = json_encode($karyawan);
echo $cetak;
