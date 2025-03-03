import Snippetztextare from "@/components/Snippetztextare";
import { prismaClient } from "@/db";

export default async function Home() {
  const users = await prismaClient.user.findMany();

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Snippetztextare />
      </div>
      <div>{JSON.stringify(users)}</div>
    </div>
  );
}
