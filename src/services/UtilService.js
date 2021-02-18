// Removes leading and trailing whitespace or specified characters from string.
import * as moment from "moment";

export const trim = (str, c = '\\s') =>
    str.replace(new RegExp(`^([${c}]*)(.*?)([${c}]*)$`), '$2');

export const getDate = (date) => {
    return moment(date).format('DD-MM-YYYY');
};

export const isAnArray = (array) => {
    return typeof array !== 'undefined' && Array.isArray(array);
};

export const isArrayEmpty = (array) => {
    return isAnArray(array) && array.length === 0;
};

export const isNotUndefined = (data) => {
    return (typeof data !== 'undefined');
};

export const checkArray = (data) => {
    return isNotUndefined(data) && !isArrayEmpty(data)
};

// Exemple :
// Generate numbers range 1..10 with step of 2 = range(1, 10, 2)
export const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));