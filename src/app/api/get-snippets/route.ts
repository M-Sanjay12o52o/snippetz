import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const snippets = await prisma.snippets.findMany();
        return Response.json(snippets, { status: 200 });
    } catch (error) {
        return Response.json({ error: 'Failed to fetch snippets' }, { status: 500 })
    }
}
