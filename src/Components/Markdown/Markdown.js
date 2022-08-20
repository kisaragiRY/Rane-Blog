import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
const CodeBlock= ({ inline, className, children }) => {
    if (inline) {
      return <code className="inlineCode">{children}</code>;
    }
    const match = /language-(\w+)/.exec(className || '');
    const lang = match && match[1] ? match[1] : '';
    return (
        // console.log(children)
      <SyntaxHighlighter
        style={okaidia}
        language={lang}
        children={String(children).replace(/\n$/, '')}
      />
    );
  };

export default function Markdown(props) {
  return (
    <ReactMarkdown
    children={props.content}
    remarkPlugins={[remarkMath,remarkGfm]}
    rehypePlugins={[rehypeKatex,rehypeRaw]}
    components={{code:CodeBlock}}
    />
  )
}