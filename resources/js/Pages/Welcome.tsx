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
                    className="absolute top-0 max-w-[100%]"
                    src="/assets/bg_1_4.jpg"
                />
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-1/2 max-w-2xl px-6 lg:max-w-7xl">
                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-1 lg:gap-8 sm:gap-4">
                                <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800">
                                    <div className="pt-3 sm:pt-5">
                                        <img
                                            id=""
                                            className="w-full max-w-ms h-auto rounded-lg"
                                            src="/assets/card_image.png"
                                        />
                                    </div>
                                    {/* <div className="pt-3 sm:pt-5">
                                        <img
                                            id=""
                                            className="w-full h-auto rounded-lg"
                                            src="/assets/bg_2_2.jpg"
                                        />
                                    </div> */}
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
