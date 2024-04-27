import { useEffect, useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

const LoginForm = ({ status, canResetPassword }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    const [passwordHidden, setPasswordHidden] = useState(true);

    return (
        <form
            onSubmit={submit}
            className="flex flex-col items-center space-y-4"
        >
            <div>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="w-80 h-12"
                    autoComplete="email"
                    placeholder="Alamat Email"
                    isFocused={true}
                    Icon={IoMdMail}
                    onChange={(e) => setData("email", e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />
            </div>

            <div className="">
                <div className="relative flex flex-col justify-center">
                    <TextInput
                        id="password"
                        type={passwordHidden ? "password" : "text"}
                        name="password"
                        value={data.password}
                        className="w-80 h-12"
                        autoComplete="current-password"
                        Icon={FaLock}
                        placeholder="Kata Sandi"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <button
                        type="button"
                        onClick={() => setPasswordHidden(!passwordHidden)}
                        className="absolute right-4"
                    >
                        {passwordHidden ? (
                            <FaEye className="w-5 h-5" />
                        ) : (
                            <FaEyeSlash className="w-5 h-5" />
                        )}
                    </button>
                </div>

                <div className="w-80">
                    <InputError message={errors.password} className="mt-2" />
                </div>
            </div>

            <div className="flex w-80 justify-end">
                <Link 
                    href={route('password.request')}
                    className="text-sm font-semibold text-ForestGreen underline"
                >
                        Lupa Kata Sandi?
                </Link>
            </div>

            <PrimaryButton className="w-80 h-12" disabled={processing}>
                Masuk
            </PrimaryButton>

        </form>
    );
};

export default LoginForm;
