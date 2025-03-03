type User = {
    id: number;
    email: string;
    name: string;
    clerkId: string;
    createdAt: Date;
    updatedAt: Date;
    snippets: any[];
    forks: any[];
    stars: any[];
}

type Snippet = {
    id: number;
    filename: string;
    description: string;
    code: string;
    userId: number;
    user: User;
    comments: any[];
    forks: any[];
    stars: any[];
}

type Comment = {
    id: number;
    message: string;
    snippetId: number;
    snippet: Snippet;
}

export const exampleComments: Comment[] = [
    {
        id: 1,
        message: "Great snippet! Helped me understand closures.",
        snippetId: 101,
        snippet: {
            id: 101,
            filename: "closures.js",
            description: "JavaScript closures example",
            code: "function outer() { let count = 0; return () => count++; }",
            userId: 1,
            user: {
                id: 1,
                email: "user@example.com",
                name: "John Doe",
                clerkId: "clerk123",
                createdAt: new Date(),
                updatedAt: new Date(),
                snippets: [],
                forks: [],
                stars: [],
            },
            comments: [],
            forks: [],
            stars: [],
        },
    },
    {
        id: 2,
        message: "This could be optimized using a Set instead of an array.",
        snippetId: 102,
        snippet: {
            id: 102,
            filename: "unique-elements.ts",
            description: "Function to find unique elements in an array",
            code: "function unique(arr: number[]) { return [...new Set(arr)]; }",
            userId: 2,
            user: {
                id: 2,
                email: "dev@example.com",
                name: "Jane Doe",
                clerkId: "clerk456",
                createdAt: new Date(),
                updatedAt: new Date(),
                snippets: [],
                forks: [],
                stars: [],
            },
            comments: [],
            forks: [],
            stars: [],
        },
    },
];
