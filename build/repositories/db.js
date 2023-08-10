import pkg from 'pg';
const { Pool } = pkg;
export const pool = new Pool({
    user: 'root',
    password: 'root',
    database: 'my_db',
    host: 'postgres',
    port: 5432,
});
//# sourceMappingURL=db.js.map