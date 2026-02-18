const { Pool } = require('pg');

// Database connection pool configuration
const pool = new Pool({
  user: 'your_username',       // replace with your database username
  host: 'localhost',            // replace with your database host
  database: 'your_database',    // replace with your database name
  password: 'your_password',    // replace with your database password
  port: 5432,                   // default PostgreSQL port
});

// Example function to create a table
const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await pool.query(query);
    console.log('Table created successfully');
  } catch (error) {
    console.error('Error creating table:', error);
  }
};

// Export the pool and createTable function
module.exports = {
  pool,
  createTable,
};

// You can call createTable() function to create the table when needed.