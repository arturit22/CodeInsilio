    import { AnalysisPanel } from "@/widgets/analysis-panel/ui/AnalysisPanel"
    import { AnalysisResult } from "@/widgets/analysis-result/ui/AnalysisResult"
    import { CodeEditor } from "@/widgets/code-editor/ui/CodeEditor"
    import { Header } from "@/widgets/header/ui/Header"
    import { useState } from "react"
    import type { Issue } from "@/entities/issue/model/types"
    import type { Status } from "@/entities/analysis-result/model/types"
    import { runCodeAnalysis } from "@/features/run-code-analysis/model/run-code-analysis"

    export const HomePage = () => {

        const [code, setCode] = useState<string>('')
        const [status, setStatus] = useState<Status>('idle')
        const [result, setResult] = useState<Issue[]>([])
        const [selectedIssueId, setSelectedIssueId] = useState<number | null>(null)

        const selectedIssue = result.find(issue => issue.id === selectedIssueId) ?? null
        
        const onStartAnalyze = () => {
            setResult([])
            setStatus('loading')
            setTimeout(() => {
                setResult(runCodeAnalysis(code))
                setStatus('success')
                setSelectedIssueId(null)
            }, 1000)
        }

        const onChange = (newCode: string) => {
            setCode(newCode);
        }

        return (
            <div>
                <header>
                    <Header />
                </header>

                <main>
                    <section>
                        <CodeEditor onChange={onChange} code={code} selectedIssueId={selectedIssue?.line ?? null} issues={result} />
                        <AnalysisPanel onAnalyze={onStartAnalyze} status={status} />
                    </section>

                    <section>
                        <AnalysisResult issues={result} status={status} selectedIssueId={selectedIssueId} onSelectIssue={setSelectedIssueId} />
                    </section>
                </main>
            </div>
        )
    }