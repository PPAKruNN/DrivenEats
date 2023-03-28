function optionClicked(optionName, element) {
    let selected = db[optionName];

    console.log(selected)

    console.log("funcionou! : " , selected.price + 1)
    // Checa se o item já estava selecionado antes
    // (Caso sim, remova-o do currentOrder e retire a classe selected.)
    // (Caso não, continue)
    
    // troca o currentOrder da categoria correta do item.
    // Remove a classe selected do item anterior.

    // checa se tem 3 itens selecionados e libera o botão.
}



// Constantes e variáveis de "database" artificial.

const optionType = {
    "Prato": 0,
    "Bebida": 1,
    "Sobremesa": 1,

}

const db = {
    "prato": {
        "name": "Frango Yin Yang",
        "optionType": optionType.Prato,
        "price": 27.70
    }
}


var currentOrder = {
    "Prato": undefined,
    "Bebida": undefined,
    "Sobremesa": undefined
}
