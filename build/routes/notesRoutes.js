import { Router } from 'express';
import { createNote, deleteNote, editNote, getNote, getNotes, getStats } from '../services/notesService.js';
import { validateNote } from '../helpers/validationHelper.js';
const router = Router();
router.post('/notes', validateNote, createNote);
router.get('/stats', getStats);
router.delete('/notes/:id', deleteNote);
router.patch('/notes/:id', validateNote, editNote);
router.get('/notes/:id', getNote);
router.get('/notes', getNotes);
export default router;
//# sourceMappingURL=notesRoutes.js.map