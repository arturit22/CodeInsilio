import type { Issue } from "@/entities/issue/model/types"
import { findLineByPattern } from "../lib/find-line-by-pattern";

export const noAny = (code: string): Issue | null => {
    const position = findLineByPattern(code, 'any')
    
    if (position !== null) {
        return {
            id: 1,
            title: 'Avoid using any',
            description: 'use a more specific type instead of any',
            severity: "medium",
            suggestion: 'enter another type',
            line: position.line,
            startColumn: position.startColumn,
            endColumn: position.endColumn,
            rule: 'avoid any',
        }
    }
    return null
}