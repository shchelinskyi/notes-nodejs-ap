const setDataFormat = () => {
    const currentDate = new Date();
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    const month = monthNames[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    return `${month} ${day}, ${year}`;
};
export default setDataFormat;
//# sourceMappingURL=setDataFormat.js.map