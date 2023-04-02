function optionClicked(optionName, element) {

    let selected = db[optionName];

    // Selected são os dados referentes ao prato.
    // element é o elemento html do prato.

    const inOrder = checkIfOnOrder(selected.optionType);
    
    if(inOrder) {
        const elementoAnterior = currentOrderData[selected.optionType];
        removeSelection(elementoAnterior.element)

        addToOrder(element, selected)
        addSelection(element)
    } else {
        addToOrder(element, selected)
        addSelection(element)
    }

    console.log(currentOrderData)
    
    if(checkIfOrderComplete()) EnableButton()
}

function removeSelection(el) {
    el.classList.remove("selected-option");
    el.lastChild.previousElementSibling.classList.remove("selected-check")
}

function addSelection(el) {
    el.classList.add("selected-option");
    el.lastChild.previousElementSibling.classList.add("selected-check");
}

function checkIfOnOrder(optionTypeData) {
    //Checa se já existe o tipo de item que quer ser adicionado no pedido atual.
    const check = (currentOrderData[optionTypeData] != undefined)
    console.log(optionTypeData)

    check ? console.log("Já existe esse tipo no pedido") : console.log("Não havia este tipo no pedido")
    return check;
}
 
function addToOrder(elemento, currData) {
    currentOrderData[currData.optionType] = {"data": currData, "element": elemento}
}

function checkIfOrderComplete() {
    const res = checkIfOnOrder(optionType.Prato) && checkIfOnOrder(optionType.Bebida)  && checkIfOnOrder(optionType.Sobremesa);
    console.log("Is order full?: " + res )
    return res;
}

function EnableButton() {
    const fobutton = document.querySelector(".bottom-bar button");
    fobutton.disabled = false;
    fobutton.innerHTML = "Fechar pedido"
}

function finishOrder() {
    document.querySelector(".whiteBar").classList.remove("escondido");
    updateConfirmOrderModal();
}

function updateConfirmOrderModal() {
    const types = Object.values(optionType)
    totalPrice = 0;

    types.forEach(type => {
        document.querySelector("." + type + " h1").innerHTML = currentOrderData[type].data.name;
        document.querySelector("." + type + " span").innerHTML = currentOrderData[type].data.price;
        totalPrice += currentOrderData[type].data.price
    });

    document.querySelector(".total span").innerHTML = "R$ " + totalPrice;
}

function confirmOrder() {
    const nome = prompt("Digite seu nome: ")
    const endereco = prompt("Digite seu endereço: ")

    const texto = `Olá, gostaria de fazer o pedido:
    - Prato: ${currentOrderData["Prato"].data.name}
    - Bebida: ${currentOrderData["Bebida"].data.name}
    - Sobremesa: ${currentOrderData["Sobremesa"].data.name}
    Total: R$ ${totalPrice};

    Nome: ${nome}
    Endereço: ${endereco}
    `

    const URI = encodeURIComponent(texto);
    const URL = "https://wa.me/5584987938947?text="+URI; 

    window.open(URL, '_blank')
    console.log(texto)
}

function cancelOrder() {
     document.querySelector(".whiteBar").classList.add("escondido"); 
}

// Constantes e variáveis de "database" artificial.
// Preferi fazer dessa forma ao invés de buscar os dados no elemento por achar mais engenhoso e completo.
// Depois de terminado, percebi que o nível de complexidade poderia ter sido menor.
// Mas estou satisfeito com o resultado, pois ele atinge os objetivos necessários.

const optionType = {
    "Prato": "Prato",
    "Bebida": "Bebida",
    "Sobremesa": "Sobremesa",

}

const db = {
    "frangoyy": {
        "name": "Frango Yin Yang",
        "optionType": optionType.Prato,
        "price": 27.70
    },

   "coca": {
        "name": "Coquinha gelada",
        "optionType": optionType.Bebida,
        "price": 8.25
    },

    "brigadeiro": {
        "name": "Brigadeiro do vrau",
        "optionType": optionType.Sobremesa,
        "price": 3.50
    }, 
}

let totalPrice = 0;

let currentOrderData = {
    "Prato": undefined,
    "Bebida": undefined,
    "Sobremesa": undefined
}
