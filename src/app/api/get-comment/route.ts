import { prisma } from '../../../db/index';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const snippetId = searchParams.get("snippetId");

        if (!snippetId) {
            return Response.json({ error: "Snippet ID is required" }, { status: 400 });
        }

        const comments = await prisma.comment.findMany(
            {
                where: {
                    snippetId: parseInt(snippetId),
                },
                include: {
                    snippet: true, // Include the original snippet details
                }
            }
        );
        return Response.json(comments, { status: 200 });
    } catch (error) {
        return Response.json({ error: 'Failed to fetch comments' }, { status: 500 })
    }
}