import { prisma } from '../../../db/index';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const snippedId = searchParams.get("snippedId");

        if (!snippedId) {
            return Response.json({ error: "Snipped ID is required" }, { status: 400 });
        }

        const comments = await prisma.comment.findMany(
            {
                where: {
                    snippetId: parseInt(snippedId),
                }
            }
        );

        if (!comments) {
            return Response.json({ error: "Comments not found" }, { status: 404 })
        }

        return Response.json(comments, { status: 200 });
    } catch (error) {
        return Response.json({ error: 'Failed to fetch Comments' }, { status: 500 })
    }
}