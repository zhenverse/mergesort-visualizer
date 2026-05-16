const DEFAULT_SIZE = 20;
const DEFAULT_MIN_VALUE = 5;
const DEFAULT_MAX_VALUE = 100;
const MAX_ARRAY_SIZE = 200;

function generateRandomArray(
    size = DEFAULT_SIZE,
    min = DEFAULT_MIN_VALUE,
    max = DEFAULT_MAX_VALUE
) {
    if (!Number.isInteger(size)) {
        throw new Error("Array size must be an integer.");
    }

    if (size <= 0) {
        throw new Error("Array size must be greater than 0.");
    }

    if (size > MAX_ARRAY_SIZE) {
        throw new Error(`Array size cannot exceed ${MAX_ARRAY_SIZE}.`);
    }

    if (typeof min !== "number" || typeof max !== "number") {
        throw new Error("Minimum and maximum values must be numbers.");
    }

    if (min > max) {
        throw new Error("Minimum value cannot be greater than maximum value.");
    }

    const array = [];

    for (let i = 0; i < size; i++) {
        const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(randomValue);
    }

    return array;
}

export { generateRandomArray };