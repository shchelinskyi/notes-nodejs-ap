import { Router } from 'express';
import { createNote, deleteNote, editNote, getNote, getNotes, getStats } from '../services/notesService.ts';
import { validateNote } from '../helpers/validationHelper.ts';

const router = Router();

router.post('/notes', validateNote, createNote);
router.delete('/notes/:id', deleteNote);
router.patch('/notes/:id', validateNote, editNote);
router.get('/notes/:id', getNote);
router.get('/notes', getNotes);
router.get('/aggregated-data', getStats);

export default router;