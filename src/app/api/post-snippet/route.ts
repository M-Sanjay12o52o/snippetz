import { prisma } from '../../../db/index';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { filename, description, code, userId } = await req.json();

        // Validate required fields
        if (!filename || !description || !code || !userId) {
            return NextResponse.json(
                { error: 'All fields (filename, description, code, userId) are required' },
                { status: 400 }
            );
        }

        // Save snippet to the database
        const newSnippet = await prisma.snippet.create({
            data: {
                filename,
                description,
                code,
                userId,
            },
        });

        return NextResponse.json(newSnippet, { status: 200 });
    } catch (error) {
        console.error("Error saving snippet:", error);
        return NextResponse.json({ error: 'Failed to save snippet' }, { status: 500 });
    }
}
