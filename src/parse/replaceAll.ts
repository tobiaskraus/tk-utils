/*
Inspiration: https://stackoverflow.com/a/15604206/4623244
- but replacing special characters wouldn't work there
- Inspiration how to deal with special characters: https://stackoverflow.com/a/3561711
*/

/**
 * Replace multiple values inside a string.
 * @param mapObj key: string search, value: string to replace with
 */
export function replaceAll(input: string, mapObj: { [key: string]: string }) {
    const replaceKeys = Object.keys(mapObj).map((key) =>
        // escape characters which are special regex characters: . / \ ( ) | { } ? ^ $ - +
        key.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    );
    const replacePattern = replaceKeys.join("|");
    var re = new RegExp(replacePattern, "gi");

    return input.replace(re, (matched) => mapObj[matched]);
}
