import {pool} from '../db.js'

export const getCliente = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM cliente')
    res.json(rows);
}

export const createCliente = async (req, res) => {
    
    const { id, name, phone, age, zipcode, married, income } = req.body;
    const cli = { id, name, phone, age, zipcode, married, income };
    const result = await pool.query('INSERT INTO cliente SET ?', cli);
    res.json(result);
}