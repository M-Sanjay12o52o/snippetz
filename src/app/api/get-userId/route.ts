import { NextRequest } from 'next/server';
import { prisma } from '../../../db/index';

export async function POST(req: NextRequest) {
    const { userId } = await req.json();

    try {
        const userid = await prisma.user.findFirst({
            where: {
                clerkId: userId
            }
        })
        return Response.json(userid, { status: 200 });
    } catch (error) {
        return Response.json({ error: 'Failed to fetch snippets' }, { status: 500 })
    }
}
