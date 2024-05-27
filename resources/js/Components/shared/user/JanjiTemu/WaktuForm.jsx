import { malam, pagi, sore } from "@/lib/data";
import { Calendar } from "@/Components/ui/calendar";
import React, { useState, useEffect } from "react";

const WaktuForm = ({
    setData,
    selectedDate,
    onDateChange,
    data,
    selectedTime,
    validationErrors,
    appointments,
}) => {
    const [time, setTime] = useState(data.jam);
    const [disabledTimes, setDisabledTimes] = useState([]);

    const today = new Date();
    const isDisabled = (day) => day < today;

    useEffect(() => {
        setData("tanggal", selectedDate);
        setData("jam", time);
    }, [selectedDate, time]);

    useEffect(() => {
        // Cari waktu yang sudah terdaftar untuk tanggal yang dipilih
        if (appointments) {
            const fullDate = new Date(selectedDate);
            const date = fullDate.getDate().toString().padStart(2, "0");
            const month = (fullDate.getMonth() + 1).toString().padStart(2, "0");
            const year = fullDate.getFullYear();
            const newSelectedDate = year + "-" + month + "-" + date;

            const appointmentsForSelectedDate = appointments.filter(
                (appointment) => {
                    return appointment.date == newSelectedDate;
                }
            );

            // Ambil waktu dari data janji yang sudah terdaftar
            const disabledTimes = appointmentsForSelectedDate.map(
                (appointment) => {
                    return appointment.time;
                }
            );

            // Jika waktu yang dipilih ada di dalam disabledTimes, set time menjadi null
            if (disabledTimes.includes(time)) {
                setTime(null);
                setData("jam", null);
            }

            // Atur waktu-waktu yang sudah terdaftar sebagai waktu yang dinonaktifkan
            setDisabledTimes(disabledTimes);
        }
    }, [selectedDate, appointments]);

    const onOptionChange = (e) => {
        setTime(e.target.value);
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 py-8">
            <div className="flex flex-col items-center space-y-4 px-8 w-full md:w-1/2">
                <h2 className="text-xl text-center font-semibold">
                    Hari dan Tanggal
                </h2>
                <Calendar
                    mode="single"
                    disabled={isDisabled}
                    selected={selectedDate}
                    onSelect={onDateChange}
                    className={`rounded-md shadow-lg ${
                        !data.tanggal && validationErrors.tanggal
                            ? "shadow-lg shadow-red-600/50"
                            : ""
                    }`}
                />
                {!data.tanggal && (
                    <p className="text-red-500 text-base font-semibold">
                        {validationErrors.tanggal}
                    </p>
                )}
            </div>

            <div className="flex flex-col items-center space-y-4 md:px-8 w-full md:w-1/2 md:border-l-2 md:border-black/10">
                <h2 className="text-xl text-center font-semibold">Jam</h2>
                <div
                    className={`w-full md:w-fit shadow-md shadow-gray-400/50 rounded-md py-4 px-8 flex flex-col space-y-4 ${
                        !data.jam && validationErrors.jam
                            ? "shadow-lg shadow-red-600/50"
                            : ""
                    }`}
                >
                    <div className="flex flex-col space-y-2">
                        <h3 className="font-semibold text-lg">Pagi</h3>
                        <div className="flex flex-wrap gap-4">
                            {pagi &&
                                pagi.map((jam) => {
                                    return (
                                        <RadioButton
                                            selectedRadio={time}
                                            onOptionChange={onOptionChange}
                                            value={jam.value}
                                            key={jam.id}
                                            time={time}
                                            label={jam.label}
                                            data={data}
                                            disabled={disabledTimes.includes(
                                                jam.value
                                            )}
                                        />
                                    );
                                })}
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <h3 className="font-semibold text-lg">Sore</h3>
                        <div className="flex flex-wrap gap-4">
                            {sore &&
                                sore.map((jam) => {
                                    return (
                                        <RadioButton
                                            selectedRadio={time}
                                            onOptionChange={onOptionChange}
                                            value={jam.value}
                                            key={jam.id}
                                            time={time}
                                            label={jam.label}
                                            data={data}
                                            disabled={disabledTimes.includes(
                                                jam.value
                                            )}
                                        />
                                    );
                                })}
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <h3 className="font-semibold text-lg">Malam</h3>
                        <div className="flex flex-wrap gap-4">
                            {malam &&
                                malam.map((jam) => {
                                    return (
                                        <RadioButton
                                            selectedRadio={time}
                                            onOptionChange={onOptionChange}
                                            value={jam.value}
                                            key={jam.id}
                                            time={time}
                                            label={jam.label}
                                            selectedTime={selectedTime}
                                            disabled={disabledTimes.includes(
                                                jam.value
                                            )}
                                        />
                                    );
                                })}
                        </div>
                    </div>
                </div>
                {!data.jam && (
                    <p className="text-red-500 text-base font-semibold">
                        {validationErrors.jam}
                    </p>
                )}
            </div>
        </div>
    );
};

const RadioButton = ({ label, value, time, onOptionChange, disabled }) => {
    return (
        <label
            className={`
                px-2 py-1 w-16 text-center rounded-md hover:brightness-90 transition-all font-medium unselectable
                ${
                    disabled
                        ? "bg-red-600 text-white cursor-not-allowed"
                        : time === value
                        ? "bg-ForestGreen text-white cursor-pointer"
                        : "bg-green-600 text-white cursor-pointer"
                }
            `}
        >
            <input
                type="radio"
                value={value}
                checked={time === value}
                onChange={onOptionChange}
                name="time"
                disabled={disabled}
                className="hidden"
            />
            {label}
        </label>
    );
};

export default WaktuForm;
