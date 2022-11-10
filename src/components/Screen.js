import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Screen = (props) => {
  const markdown = props.markdowndata;
  return (
    <>
      <div className="output">
        <h2>Output</h2>

        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      </div>
    </>
  );
};

export default Screen;
