import type { Status } from "@/entities/analysis-result/model/types"


interface AnalysisPanelProps {
    onAnalyze: () => void,
    status: Status,
}

export const AnalysisPanel = ({ onAnalyze, status }: AnalysisPanelProps) => {

    let buttonText = "";

    if (status === "idle") {
        buttonText = "Analyze"
    }

    if (status === "loading") {
        buttonText = "Analyzing..."
    }

    if (status === "success") {
        buttonText = "Run again"
    }

    return (
        <div>
                <button disabled={status === 'loading'} onClick={onAnalyze}>{buttonText}</button>
        </div>
    )
}