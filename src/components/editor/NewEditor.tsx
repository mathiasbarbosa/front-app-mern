import Editor from 'react-simple-code-editor'
import React, {Fragment, useState} from 'react'
import Highlight, {defaultProps, Language} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

const codeSnippet = `
    import azios from 'axios';
    const getUser = () => {
        return axios.get('https://tandomuser.me/api')
    }
`

// define Styles for editor
const styles: any = {
    root: {
        boxSizing: 'border-box',
        fontFamily: '"Dark Mono"',
        ...theme.plain
    }
}


const languages: Language[] = [
    "tsx",
    "typescript",
    "javascript",
    "jsx",
    "python",
    "go"
]

// higligth component 
const HighLightElement = (code:string, ) => (
    <Highlight {...defaultProps} theme={theme} code={codeSnippet} language={languages[0] }>
           
           {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Fragment>
                    { tokens.map((line, i) => (
                        <div {...getLineProps({line: line, key: i})}>
                            { line.map((token, key) => <span {...getTokenProps({token, key})} />
                                )}
                        </div>
                    )) }
                </Fragment>
            )}

    </Highlight>
)





export const NewEditor = () => {
    const [code, setCode] = useState(codeSnippet)
    const [languageSelected, setLanguageSelected] = useState(languages[0])

    const handleChange = (newCode:string) => {
        setCode(newCode)
    }

    const handleLanguageChange = (newValue:any) => {
        setLanguageSelected(newValue)
    }
    return (
        <div>
            <select name="" id="">

                {languages.map((language, index) => (
                    
                        <option onChange={(value) => handleLanguageChange(value)} value={language} key={index} ></option>
                ))}
             
            </select>
            <Editor
                value={code}
                onValueChange={handleChange}
                highlight={HighLightElement}
                padding={10}
                style={styles.root}
            />
            

        </div>
    )
}