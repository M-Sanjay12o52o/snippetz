/*
  Warnings:

  - You are about to drop the `Snippets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_snippetId_fkey";

-- DropForeignKey
ALTER TABLE "Snippets" DROP CONSTRAINT "Snippets_userId_fkey";

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

-- CreateTable
CREATE TABLE "ForkedSnippet" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "snippetId" INTEGER NOT NULL,

    CONSTRAINT "ForkedSnippet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StarredSnippet" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "snippetId" INTEGER NOT NULL,

    CONSTRAINT "StarredSnippet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Snippet" ADD CONSTRAINT "Snippet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForkedSnippet" ADD CONSTRAINT "ForkedSnippet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForkedSnippet" ADD CONSTRAINT "ForkedSnippet_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StarredSnippet" ADD CONSTRAINT "StarredSnippet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StarredSnippet" ADD CONSTRAINT "StarredSnippet_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
