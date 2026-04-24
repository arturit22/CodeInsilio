import type { Issue } from "@/entities/issue/model/types";
import { rules } from "./rules";

export const runCodeAnalysis = (code: string): Issue[] => {
    const issues: Issue[] = []

    rules.forEach(rule => {
        const issue = rule(code)

        if (issue) {
            issues.push(issue)
        }
    });
    return issues
}