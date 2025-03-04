import { prisma } from '../../../db/index';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const snippetId = searchParams.get("snippetId");

        if (!snippetId) {
            return Response.json({ error: "Snippet ID is required" }, { status: 400 });
        }

        const snippet = await prisma.snippet.findFirst(
            {
                where: {
                    id: parseInt(snippetId),
                },
                include: {
                    user: true,
                    comments: true,
                    forks: true,
                    stars: true,
                }
            }
        );

        if (!snippet) {
            return Response.json({ error: "Snippet not found" }, { status: 404 })
        }

        return Response.json(snippet, { status: 200 });
    } catch (error) {
        return Response.json({ error: 'Failed to fetch snippet' }, { status: 500 })
    }
}