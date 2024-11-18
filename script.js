//Seleccionar items del DOM
const inputField = document.getElementById("item-input");
const addButton = document.getElementById("add-item-btn");
const wishList = document.getElementById("wish-list");
const clearListButton = document.getElementById("clear-list-btn");

//Afegir desitjos a la llista
addButton.addEventListener("click", () => {
    const wishText = inputField.value.trim();

    //Valido que l'entrada no estigui buida
    if (wishText === "") {
        alert("Please write a wish before adding");
        return;
    }

    //Creo un nou element per la llista
    const listItem = document.createElement("li");
    listItem.textContent = wishText;

    //Creo un botó per eliminar ítem
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });
    
    listItem.appendChild(deleteButton);
    wishList.appendChild(listItem);
   
    inputField.value = "";
});

//Esborrar tota la llista
clearListButton.addEventListener("click", () => {
    wishList.innerHTML = ""; //Esborrar tota la llista
});
