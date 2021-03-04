/**
 * Random string generator. Safe for minting ids.
 */
export function randString(l = -1) {
    let result = "";
    const alphanumeric_characters = "012345789abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const r = l > 0 ? l : (Math.floor(Math.random() * 20) + 20);
    for (let i = 0; i < r; i++) {
        result += alphanumeric_characters.charAt(
            Math.floor(Math.random() * alphanumeric_characters.length)
        );
    }
    return result;
}

/**
 * Maps month index to its name 
 */
export const monthMap = (n: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11, long: boolean) => {
	switch (n) {
		case 0:
			return long ? 'January' : 'Jan';
		case 1:
			return long ? 'February' : 'Feb';
		case 2:
			return long ? 'March' : 'Mar';
		case 3:
			return long ? 'April' : 'Apr';
		case 4:
			return long ? 'May' : 'May';
		case 5:
			return long ? 'June' : 'Jun';
		case 6:
			return long ? 'July' : 'Jul';
		case 7:
			return long ? 'August' : 'Aug';
		case 8:
			return long ? 'September' : 'Sep';
		case 9:
			return long ? 'October' : 'Oct';
		case 10:
			return long ? 'November' : 'Nov';
		case 11:
			return long ? 'December' : 'Dec';
		default:
			throw new Error('invalid month number passed to month_map');
	}
};

/**
 * Returns true if the `s` param is a valid string
 */
export const validString = (s: string|null|undefined, requires_letters: boolean) => {
    return (
        s !== null &&
        s !== undefined &&
        typeof s === 'string' &&
        (!requires_letters || s.length > 0)
    );
};