import { prisma } from '../../../db/index';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get("userId");

        if (!userId) {
            return Response.json({ error: "UserId is required" }, { status: 400 });
        }

        const snippets = await prisma.starredSnippets.findMany(
            {
                where: {
                    userId: parseInt(userId)
                }
            }
        );

        if (!snippets) {
            return Response.json({ error: "Starred Snippets not found" }, { status: 404 })
        }

        return Response.json(snippets, { status: 200 });
    } catch (error) {
        return Response.json({ error: 'Failed to fetch Starred Snippets' }, { status: 500 })
    }
}