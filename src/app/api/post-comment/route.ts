import { prisma } from "@/db";

export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json();
        const { message, snippetId } = body;

        if (!message || !snippetId) {
            return Response.json({ error: "Message and Snipped ID are required." }, { status: 400 });
        }

        const comment = await prisma.comment.create({
            data: {
                message,
                snippetId: parseInt(snippetId)
            },
        });

        return Response.json(comment, { status: 201 });
    } catch (error) {
        return Response.json({ error: "Failed to create comment" }, { status: 500 });
    }
}