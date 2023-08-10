import { notesRepository } from '../repositories/notesRepository.js';
export const createNote = async (req, res) => {
    const note = req.body;
    const createdNote = await notesRepository.create(note);
    console.log("created", createdNote);
    res.status(201).json(createdNote);
};
export const deleteNote = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const note = await notesRepository.remove(id);
    res.json(note);
};
export const editNote = async (req, res) => {
    const { id } = req.params;
    const updatedNote = await notesRepository.update(id, req.body);
    res.json(updatedNote);
};
export const getStats = async (_req, res) => {
    const stats = await notesRepository.getStats();
    res.json(stats);
};
export const getNote = async (req, res) => {
    const { id } = req.params;
    const note = await notesRepository.findById(Number(id));
    console.log(note);
    res.json(note);
};
export const getNotes = async (_req, res) => {
    try {
        const notes = await notesRepository.getAll();
        res.json(notes);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
//# sourceMappingURL=notesService.js.map