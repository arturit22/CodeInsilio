import { useRef } from "react"
import { useEffect } from "react"
import * as monaco from 'monaco-editor'
import { Editor } from "@monaco-editor/react"
import type { editor } from 'monaco-editor'
import './CodeEditor.css'
import type { Issue } from "@/entities/issue/model/types"

interface CodeEditorProps {
    code: string,
    onChange: (value: string) => void,
    issues: Issue[],
    selectedIssueId: number | null,
}

export const CodeEditor = ({ code, onChange, selectedIssueId, issues }: CodeEditorProps) => {
    // const lines = code.split('\n');
    const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null)
    const decorationsRef = useRef<editor.IEditorDecorationsCollection | null>(null)


    useEffect(() => {
        if (!editorRef.current || !decorationsRef.current) return

        if (issues.length === 0) {
            decorationsRef.current.clear()
            return
        }

        const decorations = issues.map((issue) => ({
            range: new monaco.Range(issue.line, 1, issue.line, 1),
            options: {
                isWholeLine: true,
                className: selectedIssueId === issue.id ? "selectedIssueLine" : "issueLine",
            },
        }))

        decorationsRef.current.set(decorations)
    }, [issues, selectedIssueId])

    return (
        <div>
            <Editor
                height="400px"
                defaultLanguage="typescript"
                value={code} onChange={(value) => onChange(value || "")}
                onMount={(editor) => {
                    editorRef.current = editor
                    decorationsRef.current = editor.createDecorationsCollection()
                }} />
        </div>
    )
}