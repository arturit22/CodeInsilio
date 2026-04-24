export const findLineByPattern = (code: string ,pattern: string): number | null => {
    const lines = code.split('\n');
    const index = lines.findIndex(line => line.includes(pattern));

    if (index !== -1) {
        return index + 1
    }
    return null
}
