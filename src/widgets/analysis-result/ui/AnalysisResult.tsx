
interface AnalysisResultProps {
    issues: string[],
    status: string,
}

export const AnalysisResult = ({issues, status}: AnalysisResultProps) => {
    
    return (
        <div>
            <span>No analysis yet</span>
        </div>
    )
}