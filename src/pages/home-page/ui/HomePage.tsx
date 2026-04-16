    import { AnalysisPanel } from "@/widgets/analysis-panel/ui/AnalysisPanel"
    import { AnalysisResult } from "@/widgets/analysis-result/ui/AnalysisResult"
    import { CodeEditor } from "@/widgets/code-editor/ui/CodeEditor"
    import { Header } from "@/widgets/header/ui/Header"
    import { useState } from "react"
    import type { Issue } from "@/entities/issue/model/types"

    export const HomePage = () => {

        const [code, setCode] = useState<string>('')
        const [status, setStatus] = useState<"idle" | "loading" | "success">('idle')
        const [result, setResult] = useState<Issue[]>([])

        const onStartAnalyze = () => {
            setResult([])
            setStatus("loading")
            let issue: Issue[] = []
            setTimeout(() => {
                if (code.includes('any')) {
                setStatus("success")
                issue = [{
                    id: 1,
                    title: 'Avoid using any',
                    description: 'use a more specific type instead of any',
                    severity: "medium",
                    suggestion: 'enter another type',
                    line: 15,
                    rule: 'avoid any',
                }]
                } else {
                    issue = []
                    setStatus('success')
                }
                setResult(issue)
            
                
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
                        <CodeEditor onChange={onChange} code={code} />
                        <AnalysisPanel onAnalyze={onStartAnalyze} status={status} />
                    </section>

                    <section>
                        <AnalysisResult issues={result} status={status} />
                    </section>
                </main>
            </div>
        )
    }