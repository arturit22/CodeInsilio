
interface CodeEditorProps {
    code: string,
    onChange: () => void,
}

export const CodeEditor = ({code, onChange}: CodeEditorProps) => {
    
    return (
        <div>
            <textarea placeholder="Paste your code here..." name="" id=""></textarea>
            <button onChange={() => onChange}>Analyze new code</button>
        </div>
    )
}