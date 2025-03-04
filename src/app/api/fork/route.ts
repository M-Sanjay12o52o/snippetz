import { prisma } from "@/db";

export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json();
        const { userid, snippetId } = body;

        if (!userid || !snippetId) {
            return Response.json({ error: "User ID and Snipped ID are required." }, { status: 400 });
        }

        const forkedSnippet = await prisma.forkedSnippets.create({
            data: {
                userId: parseInt(userid),
                snippetId: parseInt(snippetId)
            },
        });

        return Response.json(forkedSnippet, { status: 201 });
    } catch (error) {
        return Response.json({ error: "Failed to create fork" }, { status: 500 });
    }
}