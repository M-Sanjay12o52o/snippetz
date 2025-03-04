import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../db/index';

export async function GET(req: NextRequest) {
    try {
        const userId = req.nextUrl.searchParams.get('userId');

        console.log("api/get-userId userId: ", userId)

        if (!userId) {
            return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
        }

        const user = await prisma.user.findFirst({
            where: {
                clerkId: userId
            },
            select: { id: true },
        })

        return NextResponse.json({ userId: user!.id }, { status: 200 });
    } catch (error) {
        console.error("Error fetching userId:", error);
        return NextResponse.json({ error: 'Failed to fetch userId' }, { status: 500 })
    }
}
