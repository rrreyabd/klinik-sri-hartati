export const joyrideSteps = [
    {
        content: (
            <div className="flex flex-col text-black">
                <h2 className="text-xl font-semibold">Selamat datang!</h2>
                <h2 className="text-lg font-medium">
                    Ayo jelajahi Website Klinik Sri Hartati!
                </h2>
            </div>
        ),
        locale: {
            skip: <p className="font-semibold text-ForestGreen">Berhenti</p>,
            next: 'Lanjut',
        },
        placement: "center",
        target: "body",
    },
    {
        content: <h2>Here is first step!</h2>,
        placement: "bottom",
        target: "#step-1",
        title: "First step",
    },
    {
        content: <h2>Here is second step!</h2>,
        placement: "bottom",
        target: "#step-2",
        title: "Second step",
    },
    {
        content: <h2>Here is third step!</h2>,
        placement: "bottom",
        target: "#step-3",
        title: "Third step",
    },
    {
        content: <h2>Here is fourth step!</h2>,
        placement: "bottom",
        target: "#step-4",
        title: "Fourth step",
    },
    {
        content: <h2>Here is fifth step!</h2>,
        placement: "bottom",
        target: "#step-5",
        title: "Fifth step",
    },
    {
        content: <h2>Here is six step!</h2>,
        placement: "bottom",
        target: "#step-6",
        title: "Six step",
    },
];
