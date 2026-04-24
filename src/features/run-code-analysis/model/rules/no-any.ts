import type { Issue } from "@/entities/issue/model/types"
import { findLineByPattern } from "../lib/find-line-by-pattern";

export const noAny = (code: string): Issue | null => {
    const line = findLineByPattern(code, 'any')
    
    if (line !== null) {
        return {
            id: 1,
            title: 'Avoid using any',
            description: 'use a more specific type instead of any',
            severity: "medium",
            suggestion: 'enter another type',
            line,
            rule: 'avoid any',
        }
    }
    return null
}