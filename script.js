let form = document.getElementById("contact-form");
let lista = document.getElementById("lista-contactos");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;

    if (nombre.length < 2) {
        alert("El nombre debe tener al menos 2 caracteres.");
        return;
    }

    for (let char of telefono) {
    if (char < '0' || char > '9') {
        alert("El teléfono solo debe contener números.");
        return;
    }
}


    let contact = { nombre, correo, telefono };

    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    contactos.push(contact);
    localStorage.setItem("contactos", JSON.stringify(contactos));
    
    form.reset();
    mostrarContactos();
});

function mostrarContactos() {
    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];

    contactos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    lista.innerHTML = "";

    contactos.forEach((c, i) => {
        const card = document.createElement("div");
        card.innerHTML = `
            <strong>${c.nombre}</strong><br>
            ${c.correo} - ${c.telefono}<br>
            <button onclick="editarContacto(${i})">Editar</button>
            <button onclick="eliminarContacto(${i})">Eliminar</button>
        `;
        lista.appendChild(card);
    });
}

function eliminarContacto(index) {
    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    contactos.splice(index);
    localStorage.setItem("contactos", JSON.stringify(contactos));
    mostrarContactos(); 
}

function editarContacto(index) {
    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    let contacto = contactos[index];

    document.getElementById("nombre").value = contacto.nombre;
    document.getElementById("correo").value = contacto.correo;
    document.getElementById("telefono").value = contacto.telefono;

    editIndex = index; 
}


mostrarContactos();


//elimianar contactos (ok)
//ordenar los contactos alfabeticamente mediante el nombre (ok)
//añadir validaciones: nombre (minimo 2 caracteres)- telefono (no se admiten letras)  (ok)
//editar un contacto (ok)
//mostrar de 5, 10 o 15 contactos