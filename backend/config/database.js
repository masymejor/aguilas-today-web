const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS usuarios ( 
        id SERIAL PRIMARY KEY, 
        username VARCHAR(255) NOT NULL, 
        email VARCHAR(255) NOT NULL, 
        password VARCHAR(255) NOT NULL, 
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS eventos ( 
        id SERIAL PRIMARY KEY, 
        nombre VARCHAR(255) NOT NULL, 
        fecha TIMESTAMP NOT NULL, 
        lugar VARCHAR(255), 
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS promotores ( 
        id SERIAL PRIMARY KEY, 
        nombre VARCHAR(255) NOT NULL, 
        contacto VARCHAR(255), 
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
      );
    `);

    console.log('Tablas creadas con éxito');
  } catch (error) {
    console.error('Error al crear las tablas', error);
  }
};

createTables();

module.exports = pool;