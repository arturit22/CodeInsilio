import type { Issue } from "@/entities/issue/model/types";

export const noVar = (code: string): Issue[] => {
    let issues: Issue[] = []

    if (code.includes('var')) {
        issues.push({
            id: 3,
            title: 'Avoid using var',
            description: 'var is deprecated, use let or const instead',
            severity: "medium",
            suggestion: 'enter another variable',
            line: 25,
            rule: 'avoid vars',
        })
    };

    return issues
}