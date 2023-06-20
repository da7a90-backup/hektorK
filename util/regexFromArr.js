const regexFromArr = (items) => {
    return items.reduce((acc, item) => {
    return acc + `${acc.length > 1 ? '|' : ''}/${item}/.*`;
    }, '(') + ')';
};

export default regexFromArr;