import { Request, Response } from 'express';
import { INote } from '../interfaces.js';
import { notesRepository } from '../repositories/notesRepository.js';

export const createNote = (req: Request, res: Response): void => {
    const note: INote = req.body;
    const createdNote = notesRepository.create(note);
    res.status(201).json(createdNote);
};

export const deleteNote = (req: Request, res: Response): void => {
    const { id } = req.params;
    notesRepository.remove(id);
    res.sendStatus(204);
};

export const editNote = (req: Request, res: Response): void => {
    const { id } = req.params;
    const updatedNote = notesRepository.update(id, req.body);

    res.json(updatedNote);
};

export const getNote = (req: Request, res: Response): void => {
    const { id } = req.params;
    const note = notesRepository.findById(Number(id));
    res.json(note);
};

export const getNotes = (_req: Request, res: Response): void => {
    const notes = notesRepository.getAll();
    res.json(notes);
};

export const getStats = (_req: Request, res: Response): void => {
    const stats = notesRepository.getStats();
    res.json(stats);
};