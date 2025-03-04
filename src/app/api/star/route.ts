import { prisma } from "@/db";

export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json();
        const { userid, snippetId } = body;

        console.log("api/star: ", "userId: ", userid, "snippetId: ", snippetId);

        if (!userid || !snippetId) {
            return Response.json({ error: "User ID and Snipped ID are required." }, { status: 400 });
        }

        const starredSnippet = await prisma.starredSnippets.create({
            data: {
                userId: parseInt(userid),
                snippetId: parseInt(snippetId)
            },
        });

        return Response.json(starredSnippet, { status: 201 });
    } catch (error) {
        return Response.json({ error: "Failed to star the snippet" }, { status: 500 });
    }
}