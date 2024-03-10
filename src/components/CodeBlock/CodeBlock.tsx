import classes from './CodeBlock.module.css'


interface Code {
    code: string;
}

const CodeBlock: React.FC<Code> = ({ code }) => {
    
    return (
        <pre className={classes.pre}>
          <code className={classes.code}>{code}</code>
        </pre>
    );
}

export default CodeBlock;