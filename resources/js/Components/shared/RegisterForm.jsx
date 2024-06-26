import { useEffect, useState } from "react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const RegisterForm = ({ message }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    const [passwordHidden, setPasswordHidden] = useState(true);
    const [confirmationPasswordHidden, setConfirmationPasswordHidden] = useState(true);

    const handlePaste = (e) => {
        e.preventDefault();
        const text = e.clipboardData.getData("text/plain");
        inputRef.current.value = "";
    };

    return (
        <form
            onSubmit={submit}
            className="mt-4 flex flex-col items-center space-y-4"
        >
            <div>
                <TextInput
                    id="name"
                    type="text"
                    name="name"
                    value={data.name}
                    className="w-80 h-12"
                    placeholder="Nama Lengkap"
                    autoComplete="name"
                    isFocused={true}
                    Icon={FaUser}
                    required
                    minLength="3"
                    onChange={(e) => setData("name", e.target.value)}
                />

                <InputError message={errors.name} className="mt-2" />
            </div>

            <div>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="w-80 h-12"
                    autoComplete="email"
                    placeholder="Alamat Email"
                    Icon={IoMdMail}
                    onChange={(e) => setData("email", e.target.value)}
                    required
                />

                {errors.email && (
                    <InputError
                        message="Alamat email sudah dipakai"
                        className="mt-2"
                    />
                )}
            </div>

            <div>
                <div className="relative flex flex-col justify-center">
                    <TextInput
                        id="password"
                        type={passwordHidden ? "password" : "text"}
                        name="password"
                        value={data.password}
                        className="w-80 h-12"
                        autoComplete="new-password"
                        Icon={FaLock}
                        placeholder="Kata Sandi"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                        minLength="8"
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
            </div>

            <div>
                <div className="relative flex flex-col justify-center">
                    <TextInput
                        id="password_confirmation"
                        type={confirmationPasswordHidden ? "password" : "text"}
                        name="password_confirmation"
                        value={data.password_confirmation}
                        onPaste={handlePaste}
                        className="w-80 h-12"
                        autoComplete="new-password"
                        Icon={FaLock}
                        placeholder="Konfirmasi Kata Sandi"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                        minLength="8"
                    />

                    <button
                        type="button"
                        onClick={() => setConfirmationPasswordHidden(!confirmationPasswordHidden)}
                        className="absolute right-4"
                    >
                        {confirmationPasswordHidden ? (
                            <FaEye className="w-5 h-5" />
                        ) : (
                            <FaEyeSlash className="w-5 h-5" />
                        )}
                    </button>
                </div>

                <div className="w-80">
                    {errors.password ? (
                        <InputError
                            message="Konfirmasi kata sandi tidak cocok."
                            className="mt-2"
                        />
                    ) : null}
                </div>
            </div>

            <PrimaryButton className="w-80 h-12" disabled={processing}>
                {processing ? "Memproses" : "Daftar"}
            </PrimaryButton>
        </form>
    );
};

export default RegisterForm;
