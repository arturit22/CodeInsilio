import type { Issue } from "@/entities/issue/model/types"
import type { Status } from "@/entities/analysis-result/model/types"

interface AnalysisResultProps {
    issues: Issue[]
    status: Status,
    selectedIssueId: number | null,
    onSelectIssue: (id: number) => void,
}

export const AnalysisResult = ({ issues, status, selectedIssueId, onSelectIssue }: AnalysisResultProps) => {


    if (status === 'idle') {
        return <div>No analysis yet</div>
    }

    if (status === 'loading') {
        return <div>Analyzing code...</div>
    }

    return (
        <div>
            {issues.length > 0 ? (
                issues.map((issue) => (
                    <div key={issue.id} onClick={() => onSelectIssue(issue.id)}>
                        <h3>{issue.title}</h3>
                        <p>{issue.severity}</p>
                        <p>{issue.description}</p>
                        <p>{issue.suggestion}</p>
                        <p>Line: {issue.line}</p>
                        <p>Rule: {issue.rule}</p>
                        {selectedIssueId === issue.id && <p>Selected</p>}
                    </div>
                ))
            ) : (
                <div>No issues found</div>
            )}
            
        </div>
    )
}