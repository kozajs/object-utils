/**
 * Checks whether an object is empty
 * @param object Object
 * @returns True if the object is empty, false otherwise
 */
export function isObjectEmpty(object: object): boolean {
	return !Object.keys(object).length;
};