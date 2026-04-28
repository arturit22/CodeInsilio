
export interface Issue {
    id: number,
    title: string,
    description: string,
    severity: "low" | "medium" | "high",
    suggestion: string,
    line: number,
    startColumn: number,
    endColumn: number,
    rule: string,
}