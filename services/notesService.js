import { notesRepository } from '../repositories/notesRepository.js';
export const createNote = (req, res) => {
    const note = req.body;
    const createdNote = notesRepository.create(note);
    res.status(201).json(createdNote);
};
export const deleteNote = (req, res) => {
    const { id } = req.params;
    notesRepository.remove(id);
    res.sendStatus(204);
};
export const editNote = (req, res) => {
    const { id } = req.params;
    const updatedNote = notesRepository.update(id, req.body);
    res.json(updatedNote);
};
export const getNote = (req, res) => {
    const { id } = req.params;
    const note = notesRepository.findById(Number(id));
    res.json(note);
};
export const getNotes = (_req, res) => {
    const notes = notesRepository.getAll();
    res.json(notes);
};
export const getStats = (_req, res) => {
    const stats = notesRepository.getStats();
    res.json(stats);
};
//# sourceMappingURL=notesService.js.map