import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { snippetCustomStyle, snippetData } from "./localDatabase";

export default function DeveloperSnippet() {
  return (
    <div className="bg-gray-800 rounded-lg snippet opacity-0 scale-75">
      <div className="text-[#8632DF] text-sm m-2">// Developer Info</div>
      <SyntaxHighlighter
        showLineNumbers={true}
        wrapLongLines={true}
        language="jsx"
        style={dracula}
        customStyle={snippetCustomStyle}
      >
        {snippetData}
      </SyntaxHighlighter>
    </div>
  );
}
