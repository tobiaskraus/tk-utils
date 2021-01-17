/**
 * Replace multiple values inside a string.
 * As regex is used, remember to escape values like "." with "\\." or use the third param.
 * Other values to escape: . / \ ( ) | { } ? ^ $ - +
 * @param mapObj key: string search, value: string to replace with
 * @param autoEscapeKeys keys of mapObj will get escaped automatically with "//"
 */
export function replaceAll(
    input: string,
    mapObj: { [key: string]: string },
    autoEscapeKeys?: boolean
) {
    let replacePattern = Object.keys(mapObj).join("|");
    if (autoEscapeKeys) {
        replacePattern = replacePattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    var re = new RegExp(replacePattern, "gi");

    return input.replace(re, (matched) => mapObj[matched]);
}
