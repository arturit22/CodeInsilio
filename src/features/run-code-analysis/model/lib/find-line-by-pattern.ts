export const findLineByPattern = (code: string, pattern: string): { line: number; startColumn: number; endColumn: number } | null => {
    const lines = code.split('\n');

    for (let i = 0; i < lines.length; i++) {
        const index = lines[i].indexOf(pattern)

        if (index !== -1) {
            return {
                line: i + 1,
                startColumn: index + 1,
                endColumn: index + 1 + pattern.length,
            }
        }
    }
    return null
}
