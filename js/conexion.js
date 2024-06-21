
async function listarProdutos(){
    const conexion =  await fetch ("https://alurageek-whef-aukkwft6e-norma-surianos-projects.vercel.app/");

    const conexionConvertida = conexion.json();

    return conexionConvertida;

}

listarProdutos();


async function agregarCards(nombre,precio,imagen) {

    const conexion = await fetch("https://alurageek-whef-aukkwft6e-norma-surianos-projects.vercel.app/", {
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
        const res = await fetch(`https://alurageek-whef-aukkwft6e-norma-surianos-projects.vercel.app/productos/${id}`, {
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
