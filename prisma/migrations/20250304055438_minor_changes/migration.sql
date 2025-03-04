/*
  Warnings:

  - You are about to drop the `Snippets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_snippetId_fkey";

-- DropForeignKey
ALTER TABLE "ForkedSnippets" DROP CONSTRAINT "ForkedSnippets_snippetId_fkey";

-- DropForeignKey
ALTER TABLE "Snippets" DROP CONSTRAINT "Snippets_userId_fkey";

-- DropForeignKey
ALTER TABLE "StarredSnippets" DROP CONSTRAINT "StarredSnippets_snippetId_fkey";

-- DropTable
DROP TABLE "Snippets";

-- CreateTable
CREATE TABLE "Snippet" (
    "id" SERIAL NOT NULL,
    "filename" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Snippet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Snippet" ADD CONSTRAINT "Snippet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForkedSnippets" ADD CONSTRAINT "ForkedSnippets_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StarredSnippets" ADD CONSTRAINT "StarredSnippets_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
