import Joi from 'joi';
const noteSchema = Joi.object({
    nameValue: Joi.string().required(),
    categoryValue: Joi.string().valid('Task', 'Idea', 'Random Thought').required(),
    contentValue: Joi.string().required(),
    datesValue: Joi.string().allow(''),
    archived: Joi.boolean().required(),
});
export const validateNote = async (req, res, next) => {
    try {
        const { error } = await noteSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => {
                var _a, _b;
                return ({
                    field: (_b = (_a = err.context) === null || _a === void 0 ? void 0 : _a.key) !== null && _b !== void 0 ? _b : 'unknown',
                    message: err.message,
                });
            });
            res.status(400).json({ errors });
        }
        else {
            next();
        }
    }
    catch (err) {
        res.status(400).json({ errors: [{ message: err.message }] });
    }
};
//# sourceMappingURL=validationHelper.js.map