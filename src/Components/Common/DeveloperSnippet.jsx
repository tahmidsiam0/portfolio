// import { useEffect, useState } from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { motion } from "motion/react";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// const jsonData = {
//   Developer: {
//     tech: "React",
//     experience: "Fresher",
//     projects: "10+",
//     openToWork: true,
//   },
// };

// export default function DeveloperSnippet() {
//   const [text, setText] = useState("");
//   const jsonString = JSON.stringify(jsonData, null, 2);

//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       setText(jsonString.slice(0, i));
//       i++;
//       if (i > jsonString.length) clearInterval(interval);
//     }, 30);
//     return () => clearInterval(interval);
//   }, [jsonString]);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-xl mx-auto bg-gray-900 text-white p-4 rounded-lg shadow-lg"
//     >
//       <div className="text-green-400 text-sm mb-2">// Developer Info</div>
//       <SyntaxHighlighter language="json" style={oneDark}>
//         {text || "{}"}
//       </SyntaxHighlighter>
//     </motion.div>
//   );
// }
