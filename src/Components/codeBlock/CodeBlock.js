import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark as CodeStyle} from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({className, children}) => {
  let lang = 'text'; // default monospaced text
  if (className && className.startsWith('lang-')) {
    lang = className.replace('lang-', '');
  }
  return (
    <SyntaxHighlighter language={lang} style={CodeStyle}>
      {children}
    </SyntaxHighlighter>
  );
}

// markdown-to-jsx uses <pre><code/></pre> for code blocks.
export const PreBlock = ({children, ...rest}) => {
  if ('type' in children) {
    return CodeBlock(children['props']);
  }
  return <pre {...rest}>{children}</pre>;
};