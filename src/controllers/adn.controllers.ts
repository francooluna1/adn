import { Request, Response } from "express"
import { Adn } from "../entities/Adn"
import { hasMutation } from "../utils/mutation"
import { AppDataSource } from "../db"

export const mutation = async (req: Request, res: Response) => {
    const haveMutation = hasMutation(req.body.adn)
    if (haveMutation !== null) {
        const newAdn = new Adn()
        newAdn.isMutation = haveMutation
        newAdn.adn = req.body.adn.toString()
        newAdn.save()
        if (haveMutation) return res.status(200).json(newAdn)
        return res.status(403).json(newAdn)
    }
    return res.status(403).json({
        message: 'invalid'
    })
}

export const stats = async (req: Request, res: Response) => {
    try {
        const result = await AppDataSource
            .getRepository(Adn)
            .createQueryBuilder('adn')
            .select('COUNT(CASE WHEN adn."isMutation" = true THEN 1 END) as count_mutations')
            .addSelect('COUNT(CASE WHEN adn."isMutation" = false THEN 1 END) as count_no_mutation')
            .addSelect('(COUNT(CASE WHEN adn."isMutation" = true THEN 1 END)::decimal / COUNT(CASE WHEN adn."isMutation" = false THEN 1 END)) as ratio')
            .getRawOne()

        return res.json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error en la consulta' });
    }
}




