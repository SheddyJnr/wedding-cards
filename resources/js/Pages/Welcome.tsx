import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <img
                    id="background"
                    className="absolute top-0 w-full opacity-75"
                    src="/assets/bg_1_7.jpg"
                />
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full px-4 h-1/3 sm:max-w-xl sm:px-6">
                        <div className="flex flex-col items-center mt-5 justify-center gap-4 rounded-lg bg-white p-3 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] dark:bg-zinc-900 dark:ring-zinc-800 sm:pb-10">
                            <img
                                id=""
                                className="w-full max-w-ms h-auto rounded-lg"
                                src="/assets/card_image.png"
                            />
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col items-center justify-center gap-4 p-10 lg:pb-10"></div>
            </div>
        </>
    );
}
