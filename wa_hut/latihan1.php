<?php
$pizza = file_get_contents("data/pizza.json");
$menu = json_decode($pizza, true);
$menu = $menu["menu"];

?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>wa hut</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <!-- <div class="container-fluid"> -->
            <a class="navbar-brand" href="#"><img src="img/logo.png" width="120"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Menu</a>
                </div>
            </div>
            <!-- </div> -->
        </div>
    </nav>

    <div class="container">
        <div class="row mt-3">
            <h1>Menu</h1>
        </div>

        <div class="row">
            <?php foreach ($menu as $all) : ?>
                <div class="col-md-4">
                    <div class="card mb-3">
                        <img src="img/pizza/<?= $all['gambar'] ?>" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title"><?= $all['nama'] ?></h5>
                            <p class="card-text"><?= $all['deskripsi'] ?></p>
                            <h5 class="card-title"><?= $all['harga'] ?></h5>
                            <a href="#" class="btn btn-primary">Book Now! </a>
                        </div>
                    </div>
                </div>
            <?php endforeach ?>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
</body>

</html>