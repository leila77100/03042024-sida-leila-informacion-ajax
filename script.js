
// nesesito de abrir el archivo con goLive (simulacion de un servidor)
document.getElementById("cargarDatos").addEventListener("click", function(){
    let xhr = new XMLHttpRequest(); //crear un nuevo objeto XMLHttprequest
//crear la solicitud de ese objeto
//mediante acciones del boton. GET o POST
xhr.open("GET", "datos.json", true);// metodo, url, asincrono (true) o sincronia(false)

//Confoguro la respuesta.realizar una accion en la pagina

xhr.onload = function(){
    // si recibe un dato entonces colocalo en la pagina
    //de los contrario dame un mensaje de error
    //actualiza el tiempo de busqueda entre 200 y 300 milisegundos

    if(xhr.status >= 200 && xhr.status < 300)
    // verifica que la solicitud es exitosa
    // actualiza el contenido en la pagina donde se reciben los datos
{
    document.getElementById("resultado").innerHTML= xhr.responseText;
}else{
    // en caso de error muestrar un mesage de error
    document.getElementById("resultado").innerText = "Error al cargar datos"
}

};
// manejo de red online
xhr.onerror = function(){
    console.log("error de connexion")
}
xhr.send();
})