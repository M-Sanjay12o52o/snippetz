import { prisma } from "../src/db/index";

async function main() {
  try {
    await seedUses();
    await seedProfiles();
    await seedSnippets();
    await seedForkedSnippets();
    await seedStarredSnippets();
    await seedComments();

  } catch (error) {
    console.error('Seeding failed: ', error);
  } finally {
    await prisma.$disconnect();
  }
}


// Seed Uses
async function seedUses() {
  await prisma.user.createMany({
    data: [
      { email: 'user1@example.com', name: 'User one', clerkId: 'clerk123' },
      { email: 'user2@example.com', name: 'User two', clerkId: 'clerk456' },
      { email: 'user3@example.com', name: 'User three', clerkId: 'clerk789' },
      { email: 'user4@example.com', name: 'User four', clerkId: 'clerk1011' },
      { email: 'user5@example.com', name: 'User five', clerkId: 'clerk1213' },
    ],
  });
}

// Seed Profiles
async function seedProfiles() {
  const users = await prisma.user.findMany();
  await prisma.profile.createMany({
    data: users.map(user => ({
      userId: user.id,
    })),
  });
}

// Seed Snippets
async function seedSnippets() {
  const users = await prisma.user.findMany();
  await prisma.snippet.createMany({
    data: users.flatMap(user => [
      {
        filename: `snippet_${user.id}.js`,
        description: 'JavaScript example snippet',
        code: `function greet() {\n    console.log("Hello, JavaScript!");\n}\ngreet();`,
        userId: user.id,
      },
      {
        filename: `snippet_${user.id}.py`,
        description: 'Python example snippet',
        code: `def greet():\n    print("Hello, Python!")\n\ngreet()`,
        userId: user.id,
      },
      {
        filename: `snippet_${user.id}.java`,
        description: 'Java example snippet',
        code: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}`,
        userId: user.id,
      },
      {
        filename: `snippet_${user.id}.c`,
        description: 'C example snippet',
        code: `#include <stdio.h>\nint main() {\n    printf("Hello, C!\\n");\n    return 0;\n}`,
        userId: user.id,
      },
      {
        filename: `snippet_${user.id}.cpp`,
        description: 'C++ example snippet',
        code: `#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, C++!" << endl;\n    return 0;\n}`,
        userId: user.id,
      },
      {
        filename: `snippet_${user.id}.go`,
        description: 'Go example snippet',
        code: `package main\nimport "fmt"\nfunc main() {\n    fmt.Println("Hello, Go!")\n}`,
        userId: user.id,
      },
      {
        filename: `snippet_${user.id}.sh`,
        description: 'Shell script example snippet',
        code: `#!/bin/bash\necho "Hello, Bash!"`,
        userId: user.id,
      },
      {
        filename: `snippet_${user.id}.rb`,
        description: 'Ruby example snippet',
        code: `def greet\n    puts "Hello, Ruby!"\nend\ngreet`,
        userId: user.id,
      },
      {
        filename: `snippet_${user.id}.php`,
        description: 'PHP example snippet',
        code: `<?php\necho "Hello, PHP!";\n?>`,
        userId: user.id,
      },
      {
        filename: `snippet_${user.id}.ts`,
        description: 'TypeScript example snippet',
        code: `function greet(): void {\n    console.log("Hello, TypeScript!");\n}\ngreet();`,
        userId: user.id,
      }
    ]),
  });
}

// Seed Forked Snippets
async function seedForkedSnippets() {
  const users = await prisma.user.findMany();
  const snippets = await prisma.snippet.findMany();
  if (!snippets.length) return;

  await prisma.forkedSnippets.createMany({
    data: users.map(user => ({
      userId: user.id,
      snippetId: snippets[0].id,
    })),
  });
}

// Seed Starred Snippets
async function seedStarredSnippets() {
  const users = await prisma.user.findMany();
  const snippets = await prisma.snippet.findMany();
  if (!snippets.length) return;

  await prisma.starredSnippets.createMany({
    data: users.map(user => ({
      userId: user.id,
      snippetId: snippets[0].id,
    })),
  });
}

// Seed comments
async function seedComments() {
  const snippets = await prisma.snippet.findMany();
  if (!snippets.length) return;

  await prisma.comment.createMany({
    data: snippets.map(snippet => ({
      message: 'Great snippet!',
      snippetId: snippet.id,
    })),
  });
}

main();