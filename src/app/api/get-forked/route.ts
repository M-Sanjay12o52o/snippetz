import { prisma } from '../../../db/index';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get("userId");

        if (!userId) {
            return Response.json({ error: "User ID is required" }, { status: 400 });
        }

        const forkedSnippets = await prisma.forkedSnippets.findMany(
            {
                where: {
                    userId: parseInt(userId),
                },
                include: {
                    snippet: true, // Include the original snippet details
                }
            }
        );
        return Response.json(forkedSnippets, { status: 200 });
    } catch (error) {
        return Response.json({ error: 'Failed to fetch forked snippets' }, { status: 500 })
    }
}