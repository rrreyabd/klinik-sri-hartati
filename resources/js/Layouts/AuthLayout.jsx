const AuthLayout = ( { children } ) => {
  return (
    <div className="bg-LightBlue w-screen h-screen flex justify-center items-center px-8 lg:px-0 py-8">
        <div className="min-w-full lg:min-w-[1000px] w-4/6 h-full bg-white shadow-md rounded-lg overflow-hidden flex transition-all">

            <div className="w-1/2 h-full p-8 flex flex-col justify-between">

              <div className="flex gap-3 items-center w-full justify-center">
                <img src="/logo.png" alt="Logo" width={30} height={30} />
                <p className="text-lg font-bold">Klinik Sri Hartati</p>
              </div>

              <div className="flex flex-col flex-grow py-8 space-y-8">
                { children }
              </div>
            
            </div>
            
            <div className="w-1/2 h-full bg-KellyGreen"></div>

        </div>
    </div>
  )
}

export default AuthLayout