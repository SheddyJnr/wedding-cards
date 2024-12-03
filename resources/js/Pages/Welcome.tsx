import CustomAlert from "@/Components/CustomAlert";
import PrimaryButton from "@/Components/PrimaryButton";
import { PageProps, WeddingGuestI } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Welcome({
    weddingGuest,
    successRSVP,
}: PageProps<{ weddingGuest: WeddingGuestI; successRSVP: string }>) {
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

    const { put, processing, errors, reset } = useForm({
        id: weddingGuest.id,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        put(route("welcome.update", weddingGuest.id));
    };

    return (
        <>
            <Head title={""} />
            {/* {successRSVP && (
                <CustomAlert
                    variant="success"
                    title="Success!"
                    description={successRSVP}
                    className="my-custom-class"
                />
            )} */}
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
                    <div className="relative flex flex-col items-center justify-center gap-4 p-5 lg:pb-10 mb-5">
                        <div className="relative sm:w-full px-4 h-1/3 sm:max-w-xl sm:px-6 mt-10">
                            <form onSubmit={submit}>
                                <div className="flex flex-col items-center gap-4 mb-10">
                                    <h1 className="text-2xl font-bold text-center">
                                        {`${weddingGuest.title} ${weddingGuest.name}`}
                                    </h1>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    {weddingGuest.rsvp === 1 ? (
                                        <p className="text-lg font-semibold text-center text-green-700">
                                            Thank you for accepting our
                                            invitation. We look forward to
                                            seeing you!
                                        </p>
                                    ) : (
                                        <PrimaryButton
                                            className="ms-4"
                                            disabled={processing}
                                        >
                                            Click here to RSVP
                                        </PrimaryButton>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center justify-center gap-4 p-5 lg:pb-10">
                        <div className="relative sm:w-full px-4 h-1/3 sm:max-w-xl sm:px-6">
                            {/* <div className="flex flex-col items-center mt-5 justify-center gap-10 rounded-lg bg-white p-5 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] dark:bg-zinc-900 dark:ring-zinc-800 sm:pb-10"> */}
                            <div className="flex flex-col items-center gap-4 mb-3">
                                <h3 className="text-xl font-bold text-center">
                                    Daisy Creative Gardens
                                </h3>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.7857416945994!2d28.342895773789916!3d-15.442111214376643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408d9bbfe9e593%3A0x3878b50d2239c8b9!2sDaisy%20Creative%20Gardens!5e0!3m2!1sen!2szm!4v1733172529350!5m2!1sen!2szm"
                                    width="450"
                                    height="350"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center justify-center gap-4 p-5 lg:pb-10">
                        <div className="relative sm:w-full px-4 h-1/3 sm:max-w-xl sm:px-6">
                            {/* <div className="flex flex-col items-center mt-5 justify-center gap-10 rounded-lg bg-white p-5 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] dark:bg-zinc-900 dark:ring-zinc-800 sm:pb-10"> */}
                            <div className="flex flex-col items-center gap-4 mb-3">
                                <h3 className="text-xl font-bold text-center">
                                    Garden Events with a View
                                </h3>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493.26221059854174!2d28.25245536187564!3d-15.463777876322995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f255802256b1%3A0x1e1eb09121cd0b39!2sGarden%20Events%20With%20A%20View!5e0!3m2!1sen!2szm!4v1733172889139!5m2!1sen!2szm"
                                    width="450"
                                    height="350"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
