/*
  Warnings:

  - You are about to drop the `ForkedSnippet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Snippet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StarredSnippet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_snippetId_fkey";

-- DropForeignKey
ALTER TABLE "ForkedSnippet" DROP CONSTRAINT "ForkedSnippet_snippetId_fkey";

-- DropForeignKey
ALTER TABLE "ForkedSnippet" DROP CONSTRAINT "ForkedSnippet_userId_fkey";

-- DropForeignKey
ALTER TABLE "Snippet" DROP CONSTRAINT "Snippet_userId_fkey";

-- DropForeignKey
ALTER TABLE "StarredSnippet" DROP CONSTRAINT "StarredSnippet_snippetId_fkey";

-- DropForeignKey
ALTER TABLE "StarredSnippet" DROP CONSTRAINT "StarredSnippet_userId_fkey";

-- DropTable
DROP TABLE "ForkedSnippet";

-- DropTable
DROP TABLE "Snippet";

-- DropTable
DROP TABLE "StarredSnippet";

-- CreateTable
CREATE TABLE "Snippets" (
    "id" SERIAL NOT NULL,
    "filename" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Snippets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ForkedSnippets" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "snippetId" INTEGER NOT NULL,

    CONSTRAINT "ForkedSnippets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StarredSnippets" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "snippetId" INTEGER NOT NULL,

    CONSTRAINT "StarredSnippets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Snippets" ADD CONSTRAINT "Snippets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForkedSnippets" ADD CONSTRAINT "ForkedSnippets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForkedSnippets" ADD CONSTRAINT "ForkedSnippets_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StarredSnippets" ADD CONSTRAINT "StarredSnippets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StarredSnippets" ADD CONSTRAINT "StarredSnippets_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
