import { getLanguageFromFilename } from "@/helper/getlanguage";
import { Textarea } from "./ui/textarea";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface SnippetEditorProps {
  fileName: string;
  snippet: string;
  setSnippet: (value: string) => void;
}

const SnippetEditor = ({ fileName, snippet, setSnippet }: SnippetEditorProps) => {

  const language = getLanguageFromFilename(fileName);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSnippet(e.target.value);
  };

  return (
    <div className="flex border-0 border-gray-500 overflow-hidden h-96">
      {/* Line numbers */}
      <div className="bg-gray-900 text-gray-400 text-right pr-2 py-2 w-12 flex flex-col items-end">
        {snippet != undefined && snippet.split("\n").map((_, i) => (
          <div key={i} className="leading-6">
            {i + 1}
          </div>
        ))}
      </div>

      {/* Textarea */}
      <Textarea
        id="snippet-textarea"
        value={snippet}
        onChange={handleChange}
        className="flex-1 h-full border-gray-500 rounded-none bg-gray-800 text-white p-2 resize-none outline-none focus:ring-0 border-0 border-t-1 focus:border-gray-500 focus-visible:ring-0"
      />

      <SyntaxHighlighter language={language} style={dracula}>
        {snippet}
      </SyntaxHighlighter>
    </div>
  );
};

export default SnippetEditor;
