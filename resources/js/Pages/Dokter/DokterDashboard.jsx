import { Head } from "@inertiajs/react";
import React from "react";

const DokterDashboard = ({ auth, patient }) => {

  console.log(patient)
  console.log(auth)
  console.log(auth.user)
  console.log(auth.user.name)
    return (
        <div className="bg-customWhite min-h-screen flex justify-center">
            <Head title="Dokter" />
            <header className="bg-white shadow-md h-24 w-full flex justify-center">
                <nav className="w-3/4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src="/assets/logo.png" alt="Logo" width={48} />
                        <p className="font-semibold text-xl">Klinik Sri Hartati</p>
                    </div>

                    <div className="flex gap-4">
                      <p>{ auth.user.name }</p>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default DokterDashboard;
