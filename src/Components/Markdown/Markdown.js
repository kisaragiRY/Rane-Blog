import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Markdown(props) {
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
  function flatten(text, child) {
    return typeof child === 'string'
      ? text + child
      : React.Children.toArray(child.props.children).reduce(flatten, text)
  }
    
  function HeadingRenderer(props) {
    var children = React.Children.toArray(props.children)
    var text = children.reduce(flatten, '')
    var id_code = Math.floor(Math.random()*100000)//text.toLowerCase().replace(/\W/g, Math.floor(Math.random()*10))
    return React.createElement('h' + props.level, {id: 'h'+ props.level+id_code}, props.children)
  }
  return (
    <ReactMarkdown
    children={props.content}
    remarkPlugins={[remarkMath,remarkGfm]}
    rehypePlugins={[rehypeKatex,rehypeRaw]}
    components={{
      code:CodeBlock,
      h1:HeadingRenderer,
      h2:HeadingRenderer,
      h3:HeadingRenderer,
      h4:HeadingRenderer
    }}
    />
  )
}