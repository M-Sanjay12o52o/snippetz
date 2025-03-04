import YourSnippetsDisplay from "@/components/YourSnippetsDisplay";

export default async function page() {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="bg-gray-900 w-1/2 min-h-screen overflow-auto">
                    <YourSnippetsDisplay />
                </div>
            </div>
        </div>
    );
}
