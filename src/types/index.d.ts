export interface User {
    id: number;
    email: string;
    name?: string | null;
    profile?: Profile | null;
    clerkId?: string | null;
    createdAt: Date;
    updatedAt: Date;
    snippets: Snippet[];
    forks: ForkedSnippet[];
    stars: StarredSnippet[];
}

export interface Profile {
    id: number;
    userId: number;
    user: User;
}

export interface Snippet {
    id: number;
    filename: string;
    description: string;
    code: string;
    userId: number;
    user: User;
    comments: Comment[];
    forks: ForkedSnippet[];
    stars: StarredSnippet[];
}

export interface ForkedSnippet {
    id: number;
    userId: number;
    user: User;
    snippetId: number;
    snippet: Snippet;
}

export interface StarredSnippet {
    id: number;
    userId: number;
    user: User;
    snippetId: number;
    snippet: Snippet;
}

export interface Comment {
    id: number;
    message: string;
    snippetId: number;
    snippet: Snippet;
}
