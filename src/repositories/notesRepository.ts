import setDataFormat from '../helpers/setDataFormat.js';
import {INote, INoteCreate, INoteStats} from '../interfaces.js';
import {pool} from './db.js';
export const notesRepository = {

    create: async (note: INoteCreate): Promise<INote> => {

        try {

            const formattedDate = setDataFormat();
            const {
                nameValue,
                categoryValue,
                contentValue,
                datesValue,
                archived
            } = note;

            const newNoteQuery = `
            INSERT INTO notes (id, nameValue, formattedDate, categoryValue, contentValue, datesValue, archived)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *;
        `;
            const values = [Date.now(), nameValue, formattedDate, categoryValue, contentValue, datesValue, archived];

            try {
                const result = await pool.query(newNoteQuery, values);
                return result.rows[0];
            } catch (error) {
                console.error('Error executing SQL query:', error);
                throw error;
            }
        } catch (error) {
            console.error('Error connecting to database:', error);
            throw error;
        }
    },

    remove: async (id: string): Promise<void> => {

        try {
            const deleteNoteQuery = `
            DELETE FROM notes
            WHERE id = $1;
        `;
            const bigIntValue = BigInt(id);
            const checkNoteValues = [bigIntValue];
            await pool.query(deleteNoteQuery, checkNoteValues);

        } catch (error) {
            console.error('Error removing note:', error);
            throw error;
        }
    },

    update: async (id: string, note: INote): Promise<INote | null> => {

        try {

            const checkNoteQuery = `
            SELECT id
            FROM notes
            WHERE id = $1;
        `;
            const bigIntValue = BigInt(id);
            const checkNoteValues = [bigIntValue];
            const checkResult = await pool.query(checkNoteQuery, checkNoteValues);

            if (checkResult.rows.length === 0) {
                console.log(`Note with id ${id} does not exist.`);
                return null;
            }

            const {
                nameValue,
                categoryValue,
                contentValue,
                datesValue,
                archived
            } = note;

            const updateNoteQuery = `
            UPDATE notes
            SET nameValue = $1,
                categoryValue = $2,
                contentValue = $3,
                datesValue = $4,
                archived = $5
            WHERE id = $6
            RETURNING *;
        `;
            const updateValues = [nameValue, categoryValue, contentValue, datesValue, archived, id];

            try {
                const result = await pool.query(updateNoteQuery, updateValues);
                return result.rows[0];
            } catch (error) {
                console.error('Error executing SQL query:', error);
                throw error;
            }
        } catch (error) {
            console.error('Error connecting to database:', error);
            throw error;
        }
    },

    findById: async (id: string): Promise<INote | null> => {
        const findNoteQuery = `
        SELECT * FROM notes
        WHERE id = $1;
    `;

        try {
            const bigIntValue = BigInt(id);
            const checkNoteValues = [bigIntValue];
            const result = await pool.query(findNoteQuery, checkNoteValues);
            return result.rows[0] || null;
        } catch (error) {
            console.error('Error finding note:', error);
            throw error;
        }
    },

    getAll: async (): Promise<INote[]> => {

        try {

            const result = await pool.query('SELECT * FROM notes');
            console.log('Query result:', result.rows);

            return result.rows;

        } catch (err) {
            console.error('Error:', err);
            throw err;
        }
    },

    getStats: async (): Promise<INoteStats> => {
        console.log("55555");

        const getStatsQuery = `
            SELECT
                COUNT(*) FILTER (WHERE categoryValue = 'Task' AND NOT archived) AS taskActive,
                COUNT(*) FILTER (WHERE categoryValue = 'Task' AND archived) AS taskArchived,
                COUNT(*) FILTER (WHERE categoryValue = 'Random Thought' AND NOT archived) AS randomActive,
                COUNT(*) FILTER (WHERE categoryValue = 'Random Thought' AND archived) AS randomArchived,
                COUNT(*) FILTER (WHERE categoryValue = 'Idea' AND NOT archived) AS ideaActive,
                COUNT(*) FILTER (WHERE categoryValue = 'Idea' AND archived) AS ideaArchived
            FROM notes;
        `;

        try {
            const result = await pool.query(getStatsQuery);
            return result.rows[0];
        } catch (error) {
            console.error('Error getting statistics:', error);
            throw error;
        }
    },
};
