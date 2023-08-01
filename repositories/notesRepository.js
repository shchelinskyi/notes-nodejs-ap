import setDataFormat from "../helpers/setDataFormat.js";
let notes = [
    {
        id: 1790743110274,
        nameValue: "Сook food 05.08.2023 or 07/08/2023",
        formattedDate: "July 27, 2023",
        categoryValue: "Idea",
        contentValue: "Bake a pie",
        datesValue: "05/08/2023, 07/08/2023",
        archived: false
    },
    {
        id: 1790743110374,
        nameValue: "Go to the dentist 01/08/2023",
        formattedDate: "July 27, 2023",
        categoryValue: "Task",
        contentValue: "Examine teeth",
        datesValue: "01/08/2023",
        archived: false
    },
    {
        id: 1790743110554,
        nameValue: "Read book",
        formattedDate: "July 27, 2023",
        categoryValue: "Task",
        contentValue: "A Smarter Way to Learn JavaScript",
        datesValue: "",
        archived: false
    },
    {
        id: 1790743115275,
        nameValue: "Design a smart home automation system",
        formattedDate: "July 27, 2023",
        categoryValue: "Random Thought",
        contentValue: "Lighting, smart sockets",
        datesValue: "",
        archived: true
    },
    {
        id: 1790743110872,
        nameValue: "Develop mobile App for language learning",
        formattedDate: "July 27, 2023",
        categoryValue: "Idea",
        contentValue: "React Native, MUI",
        datesValue: "",
        archived: false
    },
    {
        id: 1790743110444,
        nameValue: "Prepare presentation",
        formattedDate: "July 27, 2023",
        categoryValue: "Task",
        contentValue: "Must use Canva or PowerPoint",
        datesValue: "",
        archived: true
    },
    {
        id: 1790743110171,
        nameValue: "Complete project report",
        formattedDate: "July 27, 2023",
        categoryValue: "Task",
        contentValue: "Deadline 03.08.2023",
        datesValue: "03/08/2023",
        archived: false
    }
];
export const notesRepository = {
    create: (note) => {
        const formattedDate = setDataFormat();
        const { nameValue, categoryValue, contentValue, datesValue, archived } = note;
        const newNote = {
            id: Date.now(),
            nameValue,
            formattedDate,
            categoryValue,
            contentValue,
            datesValue,
            archived
        };
        notes.push(newNote);
        return newNote;
    },
    remove: (id) => {
        notes = notes.filter((note) => note.id !== Number(id));
    },
    update: (id, note) => {
        const index = notes.findIndex((item) => item.id === Number(id));
        if (index === -1)
            return null;
        const updatedNote = { ...notes[index], ...note };
        notes[index] = updatedNote;
        return updatedNote;
    },
    findById: (id) => {
        return notes.find((note) => note.id === id) || null;
    },
    getAll: () => {
        return [...notes];
    },
    getStats: () => {
        const taskActive = notes.filter(item => item.categoryValue === 'Task' && !item.archived);
        const taskArchived = notes.filter(item => item.categoryValue === 'Task' && item.archived);
        const randomActive = notes.filter(item => item.categoryValue === 'Random Thought' && !item.archived);
        const randomArchived = notes.filter(item => item.categoryValue === 'Random Thought' && item.archived);
        const ideaActive = notes.filter(item => item.categoryValue === 'Idea' && !item.archived);
        const ideaArchived = notes.filter(item => item.categoryValue === 'Idea' && item.archived);
        return {
            taskActive: taskActive.length,
            taskArchived: taskArchived.length,
            randomActive: randomActive.length,
            randomArchived: randomArchived.length,
            ideaActive: ideaActive.length,
            ideaArchived: ideaArchived.length
        };
    },
};
//# sourceMappingURL=notesRepository.js.map