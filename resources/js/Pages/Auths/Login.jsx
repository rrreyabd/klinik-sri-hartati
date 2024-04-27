import { useState } from "react";
import { Head } from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout";
import LoginForm from "@/Components/shared/LoginForm";
import RegisterForm from "@/Components/shared/RegisterForm";

export default function Login({ }) {
    // Ambil Data dari Local Storage
    const status = JSON.parse(localStorage.getItem('status'));

    const [toggled, setToggled] = useState(status);

    return (
        <>
            {toggled ? <Head title="Daftar" /> : <Head title="Masuk" />}

            <AuthLayout>
                <div className="flex flex-col items-center w-full space-y-1 mt-8">
                    {toggled ? (
                        <>
                            <h3 className="text-3xl font-semibold">
                                Selamat Datang
                            </h3>
                            <p className="text-customBlack/80">
                                Silakan daftar jika Anda belum memiliki akun
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="text-3xl font-semibold">
                                Selamat Datang Kembali
                            </h3>
                            <p className="text-customBlack/80">
                                Lorem ipsum dolor sit amet consectetur
                            </p>
                        </>
                    )}
                </div>

                {/* Navigasi */}
                <div className="flex w-full justify-center">
                    <label
                        htmlFor="toggleForm"
                        className="bg-ForestGreen hover:brightness-110 transition-all w-80 h-14 rounded-xl p-2 flex justify-start cursor-pointer relative"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div
                            className={`w-1/2 h-full bg-white rounded-lg transition-transform duration-500 ease-in-out transform flex justify-center items-center cursor-grab unselectable z-10
                            ${toggled ? "translate-x-full" : ""}`}
                            onClick={(event) => event.preventDefault()}
                        >
                            {toggled ? (
                                <p className="font-bold text-ForestGreen">
                                    Daftar
                                </p>
                            ) : (
                                <p className="font-bold text-ForestGreen">
                                    Masuk
                                </p>
                            )}
                        </div>

                        <div className="w-full h-full absolute left-0 top-0 rounded-xl flex overflow-hidden">
                            <div className="w-1/2 h-full flex items-center justify-center">
                                <p className="text-white font-bold unselectable">
                                    Masuk
                                </p>
                            </div>
                            <div className="w-1/2 h-full flex items-center justify-center">
                                <p className="text-white font-bold unselectable">
                                    Daftar
                                </p>
                            </div>
                        </div>
                    </label>

                    <button
                        id="toggleForm"
                        onClick={() => setToggled(!toggled)}
                    ></button>
                </div>

                {toggled ? (
                    <RegisterForm />
                ) : (
                    <div className="flex flex-col flex-grow justify-between">
                        <LoginForm />
                        <div className="w-full flex justify-center text-center">
                            <p className="text-sm w-11/12 text-black/50">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut.
                            </p>
                        </div>
                    </div>
                )}
            </AuthLayout>
        </>
    );
}
