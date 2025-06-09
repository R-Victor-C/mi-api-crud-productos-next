
let products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Teclado", price: 50 },
    { id: 4, name: "Monitor", price: 300 },
    { id: 5, name: "Auriculares", price: 80 },
    { id: 6, name: "Silla Gamer", price: 350 },
    { id: 7, name: "Impresora", price: 210 },
    { id: 8, name: "Tablet", price: 450 },
    { id: 9, name: "Webcam", price: 10 },
    { id: 10, name: "Parlantes", price: 120 },
    { id: 11, name: "Disco Duro Externo", price: 100 },
    { id: 12, name: "Smartphone", price: 900 },
    { id: 13, name: "Lámpara LED", price: 40 },
    { id: 14, name: "Microfono USB", price: 95 },
    { id: 15, name: "Router WiFi", price: 65 },
    { id: 16, name: "Cámara de Seguridad", price: 180 },
    { id: 17, name: "Tarjeta Gráfica", price: 650 },
    { id: 18, name: "Memoria USB 64GB", price: 20 },
    { id: 19, name: "Batería portátil", price: 55 },
    { id: 20, name: "Proyector", price: 350 }
];

// Handler principal
export default function handler(req, res) {
    // Obtener lista filtrada de productos
    if (req.method === "GET") {
        let { minPrice, maxPrice, name } = req.query;

        let filtered = products;

        // Validar y aplicar filtro de precio mínimo
        if (minPrice !== undefined && !isNaN(minPrice)) {
            filtered = filtered.filter(p => p.price >= parseFloat(minPrice));
        }

        // Validar y aplicar filtro de precio máximo
        if (maxPrice !== undefined && !isNaN(maxPrice)) {
            filtered = filtered.filter(p => p.price <= parseFloat(maxPrice));
        }

        // Validar y aplicar filtro por nombre (case-insensitive)
        if (name) {
            const nameLower = name.trim().toLowerCase();
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(nameLower)
            );
        }

        return res.status(200).json(filtered);
    }

    // Crear nuevo producto (POST)
    if (req.method === "POST") {
        const { name, price } = req.body;
        if (!name || typeof price !== "number" || price <= 0) {
            return res.status(400).json({ message: "Nombre y precio válido son requeridos" });
        }
        const newProduct = {
            id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
            name,
            price,
        };
        products.push(newProduct);
        return res.status(201).json(newProduct);
    }

    // Si el método no es soportado
    res.status(405).json({ message: "Método no permitido" });
}
