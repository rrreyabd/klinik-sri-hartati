const AuthLayout = ({ children }) => {
    return (
        <div className="relative flex justify-center">
            <div className="bg-white/10 backdrop-blur-3xl w-screen h-screen flex justify-center items-center px-0 sm:px-8 lg:px-0 py-0 sm:py-8">
                <div className="min-w-full lg:min-w-[1000px] w-4/6 max-w-[1000px] h-full max-h-[700px] bg-white shadow-md rounded-lg overflow-hidden flex transition-all">
                    <div className="w-full lg:w-1/2 h-full py-8 px-4 md:p-8 flex flex-col justify-between transition-all">
                        <div className="flex gap-3 items-center w-full justify-center">
                            <img
                                src="/assets/logo.png"
                                alt="Logo"
                                width={30}
                                height={30}
                            />
                            <p className="text-lg font-bold">
                                Klinik Sri Hartati
                            </p>
                        </div>

                        <div className="flex flex-col flex-grow py-8 space-y-8">
                            {children}
                        </div>
                    </div>

                    <div className="hidden lg:block w-1/2 h-full bg-KellyGreen"></div>
                </div>
            </div>

            <div className="absolute -z-10 bg-Mint/40 w-11/12 h-64 top-0 rounded-b-full"></div>
            <div className="absolute -z-20 bg-yellow-50/60 w-full h-full top-0 left-0"></div>
        </div>
    );
};

export default AuthLayout;
