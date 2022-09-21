function tampilkansemuaMenu() {
    $.getJSON('data/pizza.json', function (hasil) {
        let menu = hasil.menu;
        $.each(menu, function (i, hasil) {
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/' + hasil.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + hasil.nama + '</h5><p class="card-text">' + hasil.deskripsi + '</p><h5 class="card-title">' + hasil.harga + '</h5><a href="#" class="btn btn-primary">Book Now! </a></div></div></div>');
        });
    });
};

$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'All Menu') {
        tampilkansemuaMenu();
        return;
    }

    $.getJSON('data/pizza.json', function (hasil) {
        let menu = hasil.menu;
        let content = '';

        $.each(menu, function (i, hasil) {
            if (hasil.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/' + hasil.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + hasil.nama + '</h5><p class="card-text">' + hasil.deskripsi + '</p><h5 class="card-title">' + hasil.harga + '</h5><a href="#" class="btn btn-primary">Book Now! </a></div></div></div>';
            }
        });
        $('#daftar-menu').html(content);
    });
});