
async function listarProdutos(){
    const conexion =  await fetch ("http://localhost:3000/productos");

    const conexionConvertida = conexion.json();

    return conexionConvertida;

}

listarProdutos();


async function agregarCards(nombre,precio,imagen) {

    const conexion = await fetch("http://localhost:3000/productos", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
      
        body:JSON.stringify({
            nombre,
            precio,  
            imagen,
            
        })
    });

    const conexionConvertida = conexion.json();
    return conexionConvertida;
}



const deleteProductos = async (id) => {

    try {
        const res = await fetch(`http://localhost:3000/productos/productos/${id}`, {
            method: "DELETE"
        });

        return await res.json();

    } catch (err) {
        return console.log(err);
    }
};


export const conexionApi = {
    listarProdutos,
    agregarCards,
    deleteProductos
}