import type { Issue } from "@/entities/issue/model/types"

export const noAny = (code: string): Issue[] => {
    let issues: Issue[] = []

    if (code.includes('any')) {
        issues.push({
            id: 1,
            title: 'Avoid using any',
            description: 'use a more specific type instead of any',
            severity: "medium",
            suggestion: 'enter another type',
            line: 15,
            rule: 'avoid any',
        })
    }

    return issues
}