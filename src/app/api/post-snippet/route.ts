import { prisma } from '../../../db/index';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { filename, description, code, userid } = await req.json();

        console.log("api/post-snippet: ", "filename: ", filename, "description: ", description, "code: ", code, "userid: ", userid);

        // Validate required fields
        if (!filename || !description || !code || !userid) {
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
                userId: userid
            },
        });

        return NextResponse.json(newSnippet, { status: 200 });
    } catch (error) {
        console.error("Error saving snippet:", error);
        return NextResponse.json({ error: 'Failed to save snippet' }, { status: 500 });
    }
}
