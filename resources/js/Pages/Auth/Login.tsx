import React, { FormEventHandler, useEffect, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link } from "@inertiajs/react";
import { loginUser } from "@/services/api";

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const [data, setData] = useState({
        email: "",
        password: "",
        remember: "",
    });
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '' });

    const resetPassword = () => {
        setData({ ...data, password: "" });
    };

    useEffect(() => {
        return () => {
            resetPassword();
        };
    }, []);

    const submit: FormEventHandler = async (e) => {
        e.preventDefault();
        setProcessing(true);
        try {
            const response = await loginUser(
                data.email,
                data.password,
                data.remember
            );
            setProcessing(false);
        } catch (error: any) {
            setProcessing(false);
            setErrors(error.response.data.errors);
        }
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData({ ...data, 'email': e.target.value })}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="Password" />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData({ ...data, 'password': e.target.value })}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            onClick={(e: any) => setData((prevState) => ({ ...prevState, 'remember': e.target.checked }))}
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Forgot your password?
                        </Link>
                    )}
                    <Link
                        href={route("register")}
                        className="ml-3 p-1 pl-2 pr-2 bg-blue-400 hover:bg-blue-500 rounded text-white"
                    >
                        Register
                    </Link>
                    <PrimaryButton
                        className="ml-4"
                        processing={processing}
                        disabled={!data.email || !data.password}
                    >
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
