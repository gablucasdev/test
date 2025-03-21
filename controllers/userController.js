import prisma from "../config/db.js";

export const getAllUsers = async(req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Error fetching users"});
    }
}