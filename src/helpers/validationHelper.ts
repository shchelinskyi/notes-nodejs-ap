import { Request, Response, NextFunction } from 'express';
import Joi, { ValidationErrorItem } from 'joi';
import {INoteCreate} from '../interfaces.js';

const noteSchema: Joi.ObjectSchema<INoteCreate > = Joi.object({
    nameValue: Joi.string().required(),
    categoryValue: Joi.string().valid('Task', 'Idea', 'Random Thought').required(),
    contentValue: Joi.string().required(),
    datesValue: Joi.string().allow(''),
    archived: Joi.boolean().required(),
});

export const validateNote = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { error } = await noteSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err: ValidationErrorItem) => ({
                field: err.context?.key ?? 'unknown',
                message: err.message,
            }));
            res.status(400).json({ errors });
        } else {
            next();
        }
    } catch (err: any) {
        res.status(400).json({ errors: [{ message: err.message }] });
    }
};
