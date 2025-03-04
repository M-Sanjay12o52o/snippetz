import { prisma } from '../../../db/index';

export async function GET() {
    try {
        const snippets = await prisma.snippet.findMany();
        return Response.json(snippets, { status: 200 });
    } catch (error) {
        return Response.json({ error: 'Failed to fetch snippets' }, { status: 500 })
    }
}
