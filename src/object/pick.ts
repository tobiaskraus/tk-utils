/**
 * like lodash.pick, but lodash doesn't support type safe keys (second param should depend on first)
 */

export function pick<T, U extends keyof T>(obj: T, keys: U[]): Pick<T, U> {
    const result = {} as Pick<T, U>;
    Object.entries(obj).forEach(([key, value]) => {
        const k = key as U;
        if (keys.includes(k)) {
            result[k] = value;
        }
    });
    return result;
}
