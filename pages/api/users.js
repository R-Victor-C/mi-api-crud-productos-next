let users = [
    { id: 1, name: "Juan Pérez", email: "juan@example.com", age: 25 },
    { id: 2, name: "María García", email: "maria@example.com", age: 30 },
];

export default function handler(req, res) {
    // Obtener usuario por id (GET /api/users?id=1)
    if (req.method === "GET") {
        const { id } = req.query;
        if (id) {
            const user = users.find(u => u.id === parseInt(id));
            if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
            return res.status(200).json(user);
        }
        // Si no hay id, devuelve todos
        return res.status(200).json(users);
    }

    // Crear nuevo usuario
    if (req.method === "POST") {
        const { name, email, age } = req.body;
        if (!name || !email || !age) {
            return res.status(400).json({ message: "Todos los campos son requeridos" });
        }
        if (users.some(u => u.email === email)) {
            return res.status(409).json({ message: "El email ya existe" });
        }
        const newUser = {
            id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
            name,
            email,
            age,
        };
        users.push(newUser);
        return res.status(201).json(newUser);
    }

    // Actualizar usuario por id (solo los campos enviados)
    if (req.method === "PUT") {
        const { id, name, email, age } = req.body;
        if (!id) return res.status(400).json({ message: "El id es requerido" });

        const index = users.findIndex(u => u.id === parseInt(id));
        if (index === -1) return res.status(404).json({ message: "Usuario no encontrado" });

        // Validar si intenta actualizar email a uno que ya existe
        if (email && users.some(u => u.email === email && u.id !== parseInt(id))) {
            return res.status(409).json({ message: "El email ya está en uso" });
        }

        // Actualiza solo los campos enviados
        if (name) users[index].name = name;
        if (email) users[index].email = email;
        if (age) users[index].age = age;

        return res.status(200).json(users[index]);
    }

    // Eliminar usuario por id (body: { id })
    if (req.method === "DELETE") {
        const { id } = req.body;
        if (!id) return res.status(400).json({ message: "El id es requerido" });

        const index = users.findIndex(u => u.id === parseInt(id));
        if (index === -1) return res.status(404).json({ message: "Usuario no encontrado" });

        users = users.filter(u => u.id !== parseInt(id));
        return res.status(200).json({ message: "Usuario eliminado" });
    }

    // Si el método no es soportado
    res.status(405).json({ message: "Método no permitido" });
}
