import { Calendar } from "@/Components/ui/calendar";
import { pagi, sore, malam } from "@/lib/data";
import React, { useState, useEffect } from "react";

const WaktuForm = ({
    setData,
    selectedDate,
    onDateChange,
    data,
    selectedTime,
}) => {
    const [time, setTime] = useState(data.jam);

    const today = new Date();
    const isDisabled = (day) => day < today;

    useEffect(() => {
        setData("tanggal", selectedDate);
        setData("jam", time);
    }, [selectedDate, time]);

    const onOptionChange = (e) => {
        setTime(e.target.value);
    };
    // console.log(time)

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
                    className="rounded-md shadow-lg"
                />
            </div>

            <div className="flex flex-col items-center space-y-4 md:px-8 w-full md:w-1/2 md:border-l-2 md:border-black/10">
                <h2 className="text-xl text-center font-semibold">Jam</h2>
                <div className="w-full md:w-fit shadow-md shadow-gray-400/50 rounded-md py-4 px-8 flex flex-col space-y-4">
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
                                        />
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const RadioButton = ({
    label,
    value,
    key,
    time,
    onOptionChange,
    selectedTime,
}) => {
    // Jam yang tidak tersedia
    const disabled = ["09:00:00", "20:00:00"];

    return (
        <label
            key={key}
            className={`
          px-2 py-1 w-16 text-center rounded-md hover:brightness-90 transition-all font-medium unselectable
          ${
              disabled.includes(value)
                  ? "bg-red-600 text-white cursor-not-allowed"
                  : time == value
                  ? "bg-ForestGreen text-white cursor-pointer"
                  : "bg-[#b3b4b3] cursor-pointer"
          }
      `}
        >
            <input
                type="radio"
                value={value}
                // checked={time == value}
                checked={selectedTime}
                onChange={onOptionChange}
                name="time"
                disabled={disabled.includes(value)}
                className="hidden"
            />
            {label}
        </label>
    );
};

export default WaktuForm;
