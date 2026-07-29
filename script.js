function mostrarFruta(value) {

    const nome = document.getElementById("nomeFruta");
    const descricao = document.getElementById("descricaoFruta");

    if (value == "abacaxi") {

        nome.innerHTML = "Abacaxi";

        descricao.innerHTML =
        "O abacaxi é uma fruta tropical rica em vitamina C e muito utilizada em sucos e sobremesas.";

    }

    else if (value == "banana") {

        nome.innerHTML = "Banana";

        descricao.innerHTML =
        "A banana é rica em potássio e fornece bastante energia.";

    }

    else if (value == "mamao") {

        nome.innerHTML = "Mamão";

        descricao.innerHTML =
        "O mamão é rico em fibras, vitaminas e auxilia na digestão.";

    }

    else if (value == "melancia") {

        nome.innerHTML = "Melancia";

        descricao.innerHTML =
        "A melancia possui muita água, sendo uma fruta refrescante e hidratante.";

    }

}