import type { Issue } from "@/entities/issue/model/types";
import { findLineByPattern } from "../lib/find-line-by-pattern";

export const noVar = (code: string): Issue | null => {
    const line = findLineByPattern(code, 'var')
    
    if (line !== null) {
        return {
            id: 3,
            title: 'Avoid using var',
            description: 'var is deprecated, use let or const instead',
            severity: "medium",
            suggestion: 'enter another variable',
            line,
            rule: 'avoid vars',
        }
    }
    return null
}