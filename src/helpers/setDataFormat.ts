const setDataFormat = (): string => {
    const currentDate = new Date();
    const monthNames: string[] = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    const month: string = monthNames[currentDate.getMonth()];
    const day: number = currentDate.getDate();
    const year: number = currentDate.getFullYear();
    return `${month} ${day}, ${year}`;
};

export default setDataFormat;