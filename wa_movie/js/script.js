function searchMovies() {
    $('#movie-list').html('')
    $.ajax({
        url: "http://www.omdbapi.com",
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': 'dca61bcc',
            's': $('#search-input').val()
        },
        success: function (result) {
            if (result.Response == "True") {
                let movies = result.Search;
                $.each(movies, function (i, hasil) {
                    $('#movie-list').append(`
                    <div class="col-md-4>
                        <div class="card" style="width: 18rem;">
                            <img src="`+ hasil.Poster + `" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">`+ hasil.Title + `</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">`+ hasil.Year + `</h6>
                                    <a href="#" class="card-link see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ hasil.imdbiD + `">info</a>
                                </div>
                        </div>
                    </div>
                    `);
                });

                $('#search-input').val('');
            }
            else {
                $('#movie-list').html(`
                <div class="col">
                <h1 class="text-center">`+ result.Error + `</h1>
                </div>
                `)
            }
        }
    })
}

$('#search-button').on('click', function () {
    searchMovies()
})

$('#search-input').on('keyup', function (e) {
    if (e.keyCode === 13) {
        searchMovies()
    }
})

$('#movie-list').on('click', '.see-detail', function () {
    $.ajax({
        url: "http://www.omdbapi.com",
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': 'dca61bcc',
            'i': $(this).hasil('id')
        },
        success: function (movie) {
            if (movie.Response === "True") {
                $('.modal-body').html(`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="`+ movie.Poster + `" class="img-fluid">
                        </div>

                        <div class="col-md-8">
                            <ul class="list-group">
                                <li class="list-group-item"><h3>`+ movie.Title + `</h3></li>
                                <li class="list-group-item">Realesed :`+ movie.Released + `</h3></li>
                                <li class="list-group-item">Genre :`+ movie.Genre + `</h3></li>
                                <li class="list-group-item">Director :`+ movie.Director + `</h3></li>
                                <li class="list-group-item">Actor :`+ movie.Actors + `</h3></li>
                            </ul>
                        </div>
                    </div>
                </div>
                `)
            }
        }
    })
})