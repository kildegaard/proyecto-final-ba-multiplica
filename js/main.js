// JavaScript file

let suplementos = document.getElementById('suplementos');

const fetchdata = async () => {
    const respuesta = await fetch('../js/suplementos.json');
    const data = await respuesta.json();

    data.forEach(suplemento => {
        let suple = document.createElement('suple');

        suple.innerHTML =
            `
            <div class="card">
                <img src="${suplemento.img}" class="card__img" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${suplemento.title}</h5>
                    <p class="card-text">${suplemento.desc}</p>
                    <a href="#" class="btn btn-primary">Comprar!</a>
                </div>
            </div>
        `

        suplementos.append(suple);
    })
};

fetchdata();