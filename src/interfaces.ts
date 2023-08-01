export interface INote {
    id: number;
    nameValue: string,
    formattedDate: string,
    categoryValue: string,
    contentValue: string,
    datesValue: string,
    archived: boolean
}

export interface INoteStats {
    taskActive: number,
    taskArchived: number,
    randomActive: number,
    randomArchived: number,
    ideaActive: number,
    ideaArchived: number,
}


export interface INoteCreate {
    nameValue: string,
    categoryValue: string,
    contentValue: string,
    datesValue: string,
    archived: boolean
}