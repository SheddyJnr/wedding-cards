import { Head, useForm } from "@inertiajs/react";
import { useState, FormEventHandler } from "react";
import { Button } from "@/Components/ui/button";
import { PageProps, WeddingGuestI } from "@/types";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DangerButton from "@/Components/DangerButton";

export default function WeddingGuests({
    weddingGuests,
}: PageProps<{ weddingGuests: WeddingGuestI[] }>) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentGuests = weddingGuests.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    const totalPages = Math.ceil(weddingGuests.length / itemsPerPage);

    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        delete: destroy,
    } = useForm({
        title: "",
        name: "",
        phone_number: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post("/dashboard", {
            onFinish: () => reset("name", "phone_number", "title"),
        });
    };

    const handleGenerateLink = (id: number) => {};

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this guest?")) {
            destroy(route("dashboard.destroy", { id }), {
                preserveScroll: true,
                onFinish: () => reset(),
            });
        }
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => prev + 1);
    };
    return (
        <>
            {/* <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Dashboard
                    </h2>
                }
            > */}
            <Head title="WeddingGuests" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <form onSubmit={submit} className="p-6 bg-white">
                            <div className="flex space-x-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Title
                                    </label>
                                    <select
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option>Mr.</option>
                                        <option>Mrs.</option>
                                        <option>Ms.</option>
                                        <option>Dr.</option>
                                        <option>Prof.</option>
                                        <option>Rev.</option>
                                        <option>Hon.</option>
                                        <option>Sir</option>
                                        <option>Lady</option>
                                        <option>Capt.</option>
                                        <option>Major</option>
                                        <option>Col.</option>
                                        <option>Gen.</option>
                                        <option>Lt.</option>
                                        <option>Cmdr.</option>
                                        <option>Adm.</option>
                                        <option>Chief</option>
                                        <option>Officer</option>
                                    </select>
                                </div>
                                <div className="flex-1">
                                    {/* <div className="mt-4"> */}
                                    <InputLabel htmlFor="name" value="Name" />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                    {/* </div> */}
                                </div>
                                <div className="flex-1">
                                    {/* <div className="mt-4"> */}
                                    <InputLabel
                                        htmlFor="phone_number"
                                        value="Phone Number"
                                    />

                                    <TextInput
                                        id="phone_number"
                                        type="text"
                                        name="phone_number"
                                        value={data.phone_number}
                                        className="mt-1 block w-full"
                                        autoComplete="phone_number"
                                        onChange={(e) =>
                                            setData(
                                                "phone_number",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.phone_number}
                                        className="mt-2"
                                    />
                                    {/* </div> */}
                                </div>
                            </div>
                            <div className="mt-6">
                                <PrimaryButton
                                    className="ms-4"
                                    disabled={processing}
                                >
                                    Submit
                                </PrimaryButton>
                            </div>
                        </form>
                        <div className="p-6 bg-white">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Title
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Phone Number
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Invitation link
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {weddingGuests.map((guest) => (
                                            <tr key={guest.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {guest.title}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {guest.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {guest.phone_number}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {guest.invitation_link}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <button
                                                        onClick={() =>
                                                            handleGenerateLink(
                                                                guest.id
                                                            )
                                                        }
                                                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                                                    >
                                                        Generate Invitation Link
                                                    </button>
                                                    {/* <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                guest.id
                                                            )
                                                        }
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        Delete
                                                    </button> */}
                                                    <DangerButton
                                                        onClick={() =>
                                                            handleDelete(
                                                                guest.id
                                                            )
                                                        }
                                                    >
                                                        Delete Guest
                                                    </DangerButton>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="pagination py-4">
                                {Array.from(
                                    { length: totalPages },
                                    (_, index) => (
                                        <span
                                            key={index + 1}
                                            onClick={() =>
                                                handlePageChange(index + 1)
                                            }
                                            className={`px-4 py-2 cursor-pointer ${
                                                currentPage === index + 1
                                                    ? "bg-gray-100 text-black"
                                                    : "bg-gray-200"
                                            }`}
                                        >
                                            {index + 1}
                                        </span>
                                    )
                                )}
                                {totalPages > 1 && (
                                    <Button
                                        onClick={handleNextPage}
                                        disabled={currentPage === totalPages}
                                        className="px-4 py-2 ml-2 bg-blue-500 text-white"
                                    >
                                        Next
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </AuthenticatedLayout> */}
        </>
    );
}
