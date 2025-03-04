export const getLanguageFromFilename = (filename: string): string => {
    const extension = filename !== undefined && filename.split('.').pop()?.toLowerCase();

    const languageMap: { [key: string]: string } = {
        js: "javascript",
        ts: "typescript",
        jsx: "javascript",
        tsx: "typescript",
        py: "python",
        java: "java",
        cpp: "cpp",
        c: "c",
        cs: "csharp",
        rb: "ruby",
        swift: "swift",
        go: "go",
        php: "php",
        html: "html",
        css: "css",
        scss: "scss",
        sh: "bash",
        json: "json",
        yaml: "yaml",
        yml: "yaml",
        xml: "xml",
        sql: "sql",
        md: "markdown"
    };

    return extension && languageMap[extension] ? languageMap[extension] : "plaintext";
};
