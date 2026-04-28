import type { Issue } from "@/entities/issue/model/types";
import { findLineByPattern } from "../lib/find-line-by-pattern";

export const noVar = (code: string): Issue | null => {
    const position = findLineByPattern(code, 'var')
    
    if (position !== null) {
        return {
            id: 3,
            title: 'Avoid using var',
            description: 'var is deprecated, use let or const instead',
            severity: "medium",
            suggestion: 'enter another variable',
            line: position.line,
            startColumn: position.startColumn,
            endColumn: position.endColumn,
            rule: 'avoid vars',
        }
    }
    return null
}