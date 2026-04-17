
interface CodeEditorProps {
    code: string,
    onChange: (value: string) => void,
}

export const CodeEditor = ({code, onChange}: CodeEditorProps) => {
    
    return (
        <div>
            <textarea placeholder="Paste your code here..." value={code} onChange={(e) => onChange(e.target.value)} name="" id=""></textarea>
        </div>
    )
}