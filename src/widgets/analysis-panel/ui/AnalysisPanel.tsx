
interface AnalysisPanelProps {
    onAnalyze: () => void,
    status: string,
}

export const AnalysisPanel = ({onAnalyze, status}: AnalysisPanelProps) => {
    
    return (
        <div>
            <button>Click analyze to start</button>
        </div>
    )
}