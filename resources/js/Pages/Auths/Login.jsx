import { useEffect, useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthLayout from '@/Layouts/AuthLayout';
import TextInput from '@/Components/TextInput';
import { FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaLock } from "react-icons/fa6";
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    const [toggled, setToggled] = useState(false)
    const [passwordHidden, setPasswordHidden] = useState(true)

    return (
        <>
            <Head title="Login" />

            <AuthLayout>
                <div className="flex flex-col items-center w-full space-y-1 mt-8">
                    { toggled ? (
                        <>
                            <h3 className='text-3xl font-bold'>Selamat Datang</h3>
                            <p className='text-customBlack/80'>Silakan daftar jika Anda belum memiliki akun</p>
                        </>
                    ) : (
                        <>
                            <h3 className='text-3xl font-bold'>Selamat Datang Kembali</h3>
                            <p className='text-customBlack/80'>Lorem ipsum dolor sit amet consectetur</p>
                        </>
                    )}
                </div>

                {/* NAVIGASI LOGIN DAN REGISTER - AWAL */}
                <div className="flex w-full justify-center py-4">
                    <label 
                        htmlFor="toggleForm" 
                        className='bg-ForestGreen hover:brightness-110 transition-all w-80 h-14 rounded-xl p-2 flex justify-start cursor-pointer relative'
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div 
                            className={`w-1/2 h-full bg-white rounded-lg transition-transform duration-500 ease-in-out transform flex justify-center items-center cursor-default unselectable z-10
                            ${toggled ? 'translate-x-full' : ''}`}
                            onClick={(event) => event.preventDefault()}
                        >
                            {
                                toggled ? 
                                <p className='font-bold text-ForestGreen'>Daftar</p>
                                : 
                                <p className='font-bold text-ForestGreen'>Masuk</p>
                            }
                        </div>

                        <div className="w-full h-full absolute left-0 top-0 rounded-xl flex overflow-hidden">
                            <div className="w-1/2 h-full flex items-center justify-center">
                                <p className='text-white font-bold unselectable'>Masuk</p>
                            </div>
                            <div className="w-1/2 h-full flex items-center justify-center">
                                <p className='text-white font-bold unselectable'>Daftar</p>
                            </div>
                        </div>
                    </label>
                    
                    <button
                        id='toggleForm'
                        onClick={ () => setToggled(!toggled) }
                    >
                    </button>
                </div>
                {/* NAVIGASI LOGIN DAN REGISTER - AKHIR */}

                { toggled ? (
                    <form 
                        action=""
                        className='mt-4'
                    >
                        
                    </form>
                ) : 
                    <form 
                        onSubmit={submit}
                        className='mt-4 flex flex-col items-center space-y-4'
                    >
                        <div>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="w-80 h-12"
                                autoComplete="email"
                                placeholder='Alamat Email'
                                isFocused={true}
                                Icon={FaUser}
                                onChange={(e) => setData('email', e.target.value)}
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="">
                            <div className="relative flex flex-col justify-center">
                                <TextInput
                                    id="password"
                                    type={ passwordHidden ? 'password' : 'text' }
                                    name="password"
                                    value={data.password}
                                    className="w-80 h-12"
                                    autoComplete="current-password"
                                    Icon={FaLock}
                                    placeholder='Kata Sandi'
                                    onChange={(e) => setData('password', e.target.value)}
                                />

                                <button 
                                    type='button' 
                                    onClick={() => setPasswordHidden(!passwordHidden) }
                                    className='absolute right-4'
                                >
                                    {
                                        passwordHidden ? <FaEye className='w-5 h-5' /> : <FaEyeSlash className='w-5 h-5' />
                                    }
                                </button>
                            </div>

                            <div className="w-80">
                                <InputError message={errors.password} className='mt-2' />
                            </div>
                        </div>

                        <PrimaryButton className="w-80 h-12" disabled={processing}>
                            Masuk
                        </PrimaryButton>
                    </form>
                }
            </AuthLayout>
        </>
    )
}