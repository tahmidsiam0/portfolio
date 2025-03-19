import SyntaxHighlighter from "react-syntax-highlighter";
import { motion } from "framer-motion";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { motion } from "motion/react";
const jsonData = `const Developer = () => {
    const [openToWork, setOpenToWork] = useState(true);
    return  <div> 
                <Experience>Fresher</Experience>
                <Project count="10+" />
            </div>
};`;

const customStyle = {
  color: "grey",
  borderRadius: "7px",
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  fontStyle: "italic",
  fontSize: "15px",
  padding: "5px",
  margin: 0,
};

export default function DeveloperSnippet() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-800 rounded-lg"
    >
      <div className="text-[#8632DF] text-sm m-2">// Developer Info</div>
      <SyntaxHighlighter
        showLineNumbers={true}
        wrapLongLines={true}
        language="jsx"
        style={dracula}
        customStyle={customStyle}
      >
        {jsonData}
      </SyntaxHighlighter>
    </motion.div>
  );
}
