import react from "react";
import Highlight, {defaultProps} from "prism-react-renderer";

interface EditorProps{
    languaje?: any,
    children?:any,
    solution?: any
}

export const Editor = ({languaje, children, solution}:EditorProps) => {
    return(
        <Highlight {...defaultProps} code={children} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
                {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                    ))}
                </div>
                ))}
            </pre>
            )}
        </Highlight>
    )
}