let form = document.getElementById("contact-form");
let lista = document.getElementById("lista-contactos");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let contact = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        telefono: document.getElementById("telefono").value,
    };

    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    contactos.push(contact);
    localStorage.setItem("contactos", JSON.stringify(contactos));
    
    form.reset();
    mostrarContactos();
});

function mostrarContactos() {
    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    lista.innerHTML = "";

    contactos.forEach((c, i) => {
        const card = document.createElement("div");
        card.innerHTML = `
            <strong>${c.nombre}</strong><br>
            ${c.correo} - ${c.telefono}<br>
            <button onclick="eliminarContacto(${i})">Eliminar</button>
        `;
        lista.appendChild(card);
    });
}

function eliminarContacto(index) {
    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    localStorage.setItem("contactos", JSON.stringify(contactos));
    mostrarContactos(); 
}

mostrarContactos();


//elimianar contactos
//ordenar los contactos alfabeticamente mediante el nombre
//añadir validaciones: nombre - telefono 
//editar un contacto
//mostrar de 5, 10 o 15 contactos