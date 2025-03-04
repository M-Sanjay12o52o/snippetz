"use client"

import { getLanguageFromFilename } from "@/helper/getlanguage";
import { FC, useEffect, useId, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "./ui/button";
import { useAuth, useClerk } from "@clerk/nextjs";

interface Snippet {
    id: string;
    filename: string;
    description: string;
    code: string;
    userId: string;
}

interface SnippetsDisplayProps { }

const SnippetsDisplay: FC<SnippetsDisplayProps> = () => {
    const [snippets, setSnippets] = useState<Snippet[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchSnippets() {
            try {
                const res = await fetch("/api/get-snippets");
                if (!res.ok) throw new Error("Failed to fetch snippets");
                const data = await res.json();
                setSnippets(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchSnippets();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center p-8">
                <p className="text-gray-400">Loading snippets...</p>
            </div>
        );
    }

    return <SnippetList snippets={snippets} />;
};

const SnippetList = ({ snippets }: { snippets: Snippet[] }) => {
    if (snippets.length === 0) {
        return (
            <div className="flex justify-center items-center p-8 text-gray-400">
                <p>No snippets available. Create your first snippet to get started.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-gray-200 text-xl font-bold">Your Code Snippets</h2>
            <div className="grid grid-cols-1 gap-6">
                {snippets.map((snippet) => (
                    <SnippetCard key={snippet.id} snippet={snippet} />
                ))}
            </div>
        </div>
    );
};

const SnippetCard = ({ snippet }: { snippet: Snippet }) => {
    const { userId } = useAuth();
    const [userid, setUserid] = useState<number | null>(null);

    console.log("SnippetCard : ", userid);

    const handleStarring = (snippetId: number) => {
        fetch("/api/star", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                snippetId,
                userid,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(snippet.code)
            .then(() => {
                console.log("Code copied to clipboard");
            })
            .catch((error) => {
                console.error("Failed to copy code", error);
            });
    };

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const response = await fetch(`/api/get-userId?userId=${userId}`);
                if (!response.ok) throw new Error("Failed to fetch userId");

                const data = await response.json();
                setUserid(data.userId);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserId();
    }, [userId]);

    // Split code into lines for line numbering
    const codeLines = snippet.code.split('\n');

    return (
        <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-lg">
            {/* Header section with file info */}
            <div className="p-3 border-b border-gray-700 flex items-center">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                        <span className="text-xs text-gray-300">👤</span>
                    </div>
                    <span className="text-blue-400 text-sm font-medium">{snippet.userId}</span>
                    <span className="text-gray-500">/</span>
                    <span className="text-blue-400 text-sm font-semibold">{snippet.filename}</span>
                </div>
                <div className="ml-auto flex gap-2">
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                        </svg>
                        1 file
                    </span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
                        </svg>
                        0 comments
                    </span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                            <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                        </svg>
                        0 forks
                    </span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                            <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path>
                        </svg>
                        <span onClick={() => handleStarring(parseInt(snippet.id))}>
                            0 stars
                        </span>
                    </span>
                </div>
            </div>

            {/* Description if present */}
            {snippet.description && (
                <div className="p-3 bg-gray-900 text-gray-300 text-sm">
                    {snippet.description}
                </div>
            )}

            {/* Code section with line numbers */}
            {/* <div className="relative bg-gray-950 text-gray-300 overflow-x-auto">
                <table className="w-full border-collapse">
                    <tbody>
                        {codeLines.map((line, index) => (
                            <tr key={index} className="bg-gray-800 h-58">
                                <td className="py-0 px-2 text-right text-gray-500 select-none border-r border-gray-700 bg-gray-900 w-12 align-top">
                                    {index + 1}
                                </td>
                                <td className="py-0 pl-4 pr-2 whitespace-pre font-mono text-sm align-top">
                                    {line || ' '}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}

            {/* Code section with syntax highlighting */}
            <div className="relative bg-gray-950 text-gray-300 overflow-x-auto p-3">
                <SyntaxHighlighter language={getLanguageFromFilename(snippet.filename)} style={dracula}>
                    {snippet.code}
                </SyntaxHighlighter>
            </div>

            {/* Footer with actions */}
            <div className="p-2 bg-gray-900 border-t border-gray-700 flex justify-end">
                <button
                    onClick={copyToClipboard}
                    className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md transition-colors flex items-center gap-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                        <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                    </svg>
                    Copy
                </button>
            </div>
        </div>
    );
};

export default SnippetsDisplay;