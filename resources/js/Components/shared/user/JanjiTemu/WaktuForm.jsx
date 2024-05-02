import { Calendar } from "@/Components/ui/calendar";
import { pagi, sore, malam } from "@/lib/data";
import React, { useState, useEffect } from "react";

const WaktuForm = ({ setData, selectedDate, onDateChange, data }) => {
    const [time, setTime] = useState("");

    useEffect(() => {
        setData("tanggal", selectedDate);
        setData("jam", time)
    }, [selectedDate, setData]);

    const onOptionChange = (e) => {
        setTime(e.target.value);
    };
    // console.log(time)

    useEffect(() => {
        // Load saved time from local storage when component mounts
        const savedTime = localStorage.getItem('time');
        if (savedTime) {
            setTime(savedTime);
        }
    }, []);
    
    useEffect(() => {
        // Save time to local storage whenever it changes
        localStorage.setItem('time', time);
    }, [time]);

    return (
        <div className="flex py-8">
            <div className="flex flex-col items-center space-y-4 px-8 w-1/2">
                <h2 className="text-xl text-center font-semibold">
                    Hari dan Tanggal
                </h2>
                <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={onDateChange}
                    className="rounded-md shadow-lg"
                />
            </div>

            <div className="flex flex-col items-center space-y-4 px-8 w-1/2 border-l-2 border-black/10">
                <h2 className="text-xl text-center font-semibold">Jam</h2>
                <div className="w-fit shadow-md shadow-gray-400/50 rounded-md py-4 px-8 flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <h3 className="font-semibold text-lg">Pagi</h3>
                        <div className="flex space-x-4">
                            {pagi &&
                                pagi.map((jam) => {
                                    return (
                                        <RadioButton
                                            selectedRadio={time}
                                            onOptionChange={onOptionChange}
                                            value={jam.value}
                                            key={jam.id}
                                            time={time}
                                        />
                                    );
                                })}
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <h3 className="font-semibold text-lg">Sore</h3>
                        <div className="flex space-x-4">
                            {sore &&
                                sore.map((jam) => {
                                    return (
                                        <RadioButton
                                            selectedRadio={time}
                                            onOptionChange={onOptionChange}
                                            value={jam.value}
                                            key={jam.id}
                                            time={time}
                                        />
                                    );
                                })}
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <h3 className="font-semibold text-lg">Malam</h3>
                        <div className="flex space-x-4">
                            {malam &&
                                malam.map((jam) => {
                                    return (
                                        <RadioButton
                                            selectedRadio={time}
                                            onOptionChange={onOptionChange}
                                            value={jam.value}
                                            key={jam.id}
                                            time={time}
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

const RadioButton = ({ value, key, time, onOptionChange }) => {
    // Jam yang tidak tersedia
    const disabled = ["09.00", "20.00"];

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
                checked={time == value}
                onChange={onOptionChange}
                disabled={disabled.includes(value)}
                className="hidden"
            />
            {value}
        </label>
    );
};

export default WaktuForm;
