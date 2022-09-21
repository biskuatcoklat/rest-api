<?php
$data = file_get_contents('coba.json');
$karyawan = json_decode($data, true);

echo $karyawan[0]['dospem']['pemb1'];
