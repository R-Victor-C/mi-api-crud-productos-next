//Endpoint Dinámico (GET por ID) Permite obtener un producto por su id. 
//Para permitir eliminar productos en nuestra API, vamos a crear un endpoint DELETE que elimine un producto específico de la lista, dado su ID.

let products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Teclado", price: 50 },
];

export default function handler(req, res) {
    const { id } = req.query; // Obtener el id de la URL

    if (req.method === "DELETE") {
        // Filtramos los productos para eliminar el que coincide con el id
        products = products.filter((p) => p.id !== parseInt(id));

        // Responder con un mensaje de éxito
        return res.status(200).json({ message: "Producto eliminado" });
    }

    // Si el método no es DELETE, responder con un error 405 (Método no permitido)
    res.status(405).json({ message: "Método no permitido" });
}
