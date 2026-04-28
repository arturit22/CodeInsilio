import type { Issue } from "@/entities/issue/model/types";
import { findLineByPattern } from "../lib/find-line-by-pattern";

export const noConsoleLogs = (code: string): Issue | null => {
    const position = findLineByPattern(code, 'console.log')

    if (position !== null) {
        return {
            id: 2,
            title: 'Avoid using console logs',
            description: 'dont use console logs in production',
            severity: "low",
            suggestion: 'delete console log',
            line: position.line,
            startColumn: position.startColumn,
            endColumn: position.endColumn,
            rule: 'avoid console logs',
        }
    }
    return null
}