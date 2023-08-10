import { Request, Response } from 'express';
import { INote } from '../interfaces.js';
import { notesRepository} from '../repositories/notesRepository.js';

export const createNote = async (req: Request, res: Response): Promise<void> => {
    const note: INote = req.body;
    const createdNote = await notesRepository.create(note);
    res.status(201).json(createdNote);
};

export const deleteNote = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    await notesRepository.remove(id);
    res.sendStatus(204);
};

export const editNote = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const updatedNote = await notesRepository.update(id, req.body);
    res.json(updatedNote);
};

export const getStats = async (_req: Request, res: Response):  Promise<void>=> {
    const stats = await notesRepository.getStats();
    res.json(stats);
};

export const getNote = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const note = await notesRepository.findById(id);
    res.json(note);
};


export const getNotes = async (_req: Request, res: Response): Promise<void> => {
    try {
        const notes = await notesRepository.getAll();
        res.json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};





