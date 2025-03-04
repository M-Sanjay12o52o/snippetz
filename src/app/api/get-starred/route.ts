import { prisma } from '../../../db/index';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get("userId");

        console.log("api/get-forked: ", userId)

        if (!userId) {
            return Response.json({ error: "User ID is required" }, { status: 400 });
        }

        const starredSnippets = await prisma.starredSnippets.findMany(
            {
                where: {
                    userId: parseInt(userId)
                },
                include: {
                    snippet: true, // Include the original snippet details
                }
            }
        );

        return Response.json(starredSnippets, { status: 200 });
    } catch (error) {
        return Response.json({ error: 'Failed to fetch Starred Snippets' }, { status: 500 })
    }
}