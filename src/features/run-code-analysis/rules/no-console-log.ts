import type { Issue } from "@/entities/issue/model/types";

export const noConsoleLogs = (code: string): Issue[] => {
    let issues: Issue[] = []

    if (code.includes('console.log')) {
        issues.push({
            id: 2,
            title: 'Avoid using console logs',
            description: 'dont use console logs in production',
            severity: "low",
            suggestion: 'delete console log',
            line: 17,
            rule: 'avoid console logs',
        })
    };

    return issues
}