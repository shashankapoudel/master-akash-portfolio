

import React from 'react';
import { Controller, useForm, useWatch } from "react-hook-form";

const MeetingForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            country: "",
            countryCode: "",
            phoneNumber: "",
            purpose: "",
            message: "",
            preferredPlatforms: [],
        },
    });

    const selectedCountry = useWatch({ control, name: "country" });

    const platforms = ["WhatsApp", "Zoom", "Google Meet", "Phone Call"];

    const onSubmit = (data) => {
        console.log(data);
    };

    const getCountryCode = (country) => {
        switch (country) {
            case "Nepal":
                return "+977";
            case "Hongkong":
                return "+852";
            default:
                return "";
        }
    };

    return (
        <div className="p-2 gap-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full p-12">
                <div className="grid grid-cols-2 gap-4 p-4">

                    <div>
                        <Controller
                            name="name"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Name is required",
                                },
                            }}
                            render={({ field }) => (
                                <div className="flex flex-col">
                                    <label className="text-lg text-[#a7594d] " htmlFor="name">
                                        Your name
                                    </label>
                                    <input
                                        {...field}
                                        type="text"
                                        id="name"
                                        placeholder="Enter your Name here"
                                        className={`py-2.5 rounded-lg px-4 border ${errors.name ? "border-red-500" : "border-gray-300"
                                            } focus:outline-none w-full`}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 mt-1">{errors.name.message}</p>
                                    )}
                                </div>
                            )}
                        />
                    </div>

                    <div>
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Email is required",
                                },
                            }}
                            render={({ field }) => (
                                <div className="flex flex-col">
                                    <label className="text-lg text-[#a7594d] " htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        {...field}
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email here"
                                        className={`py-2.5 rounded-lg px-4 border ${errors.email ? "border-red-500" : "border-gray-300"
                                            } focus:outline-none w-full`}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 mt-1">{errors.email.message}</p>
                                    )}
                                </div>
                            )}
                        />
                    </div>


                    <div>
                        <Controller
                            name="country"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Country is required",
                                },
                            }}
                            render={({ field }) => (
                                <div className="flex flex-col">
                                    <label className="text-lg text-[#a7594d] " htmlFor="country">
                                        Country
                                    </label>
                                    <select
                                        {...field}
                                        id="country"
                                        className={`py-2.5 rounded-lg px-4 border ${errors.country ? "border-red-500" : "border-gray-300"
                                            } focus:outline-none w-full`}
                                    >
                                        <option value="">Select your country</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Hongkong">Hongkong</option>
                                    </select>
                                    {errors.country && (
                                        <p className="text-red-500 mt-1">{errors.country.message}</p>
                                    )}
                                </div>
                            )}
                        />
                    </div>


                    <div className="flex gap-4 items-center">
                        <Controller
                            name="countryCode"
                            control={control}
                            defaultValue={getCountryCode(selectedCountry)}
                            render={({ field }) => (
                                <div className="flex flex-col">
                                    <label className="text-lg text-[#a7594d] " htmlFor="countryCode">
                                        Country Code
                                    </label>
                                    <input
                                        {...field}
                                        type="text"
                                        id="countryCode"
                                        value={getCountryCode(selectedCountry)}
                                        readOnly
                                        className="py-2.5 rounded-lg px-4 border border-gray-300 bg-gray-100 focus:outline-none w-24"
                                    />
                                </div>
                            )}
                        />

                        <Controller
                            name="phoneNumber"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Phone number is required",
                                },
                                pattern: {
                                    value: /^[0-9]{7,15}$/,
                                    message: "Enter a valid phone number",
                                },
                            }}
                            render={({ field }) => (
                                <div className="flex flex-col flex-grow">
                                    <label className="text-lg text-[#a7594d] " htmlFor="phoneNumber">
                                        Phone Number
                                    </label>
                                    <input
                                        {...field}
                                        type="text"
                                        id="phoneNumber"
                                        placeholder="Enter your phone number"
                                        className={`py-2.5 rounded-lg px-4 border ${errors.phoneNumber ? "border-red-500" : "border-gray-300"
                                            } focus:outline-none w-full`}
                                    />
                                    {errors.phoneNumber && (
                                        <p className="text-red-500 mt-1">
                                            {errors.phoneNumber.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                    </div>

                    <div>
                        <Controller
                            name="purpose"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Purpose is required",
                                },
                            }}
                            render={({ field }) => (
                                <div className="flex flex-col">
                                    <label className="text-lg text-[#a7594d] " htmlFor="purpose">
                                        Purpose
                                    </label>
                                    <select
                                        {...field}
                                        id="purpose"
                                        className={`py-2.5 rounded-lg px-4 border ${errors.purpose ? "border-red-500" : "border-gray-300"
                                            } focus:outline-none w-full`}
                                    >
                                        <option value="">Select your purpose for call</option>
                                        <option value="spiritual">Spiritual Questions</option>
                                        <option value="personal">Personal Talk</option>
                                        <option value="healing">Sound Healing session</option>
                                        <option value="package">About Retreat Package</option>
                                        <option value="others">Others</option>
                                    </select>
                                    {errors.purpose && (
                                        <p className="text-red-500 mt-1">{errors.purpose.message}</p>
                                    )}
                                </div>
                            )}
                        />
                    </div>

                    <div className="col-span-2">
                        <Controller
                            name="message"
                            control={control}
                            rules={{
                                required: {
                                    message: "Message is required",
                                },
                            }}
                            render={({ field }) => (
                                <div className="flex flex-col">
                                    <label className="text-lg text-[#a7594d] " htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        {...field}
                                        id="message"
                                        rows="5"
                                        placeholder="Write your message here..."
                                        className={`py-2.5 rounded-lg px-4 border ${errors.message ? "border-red-500" : "border-gray-300"
                                            } focus:outline-none w-full`}
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-500 mt-1">{errors.message.message}</p>
                                    )}
                                </div>
                            )}
                        />

                        <div className="col-span-2 mt-4">
                            <Controller
                                name="preferredPlatforms"
                                control={control}
                                rules={{
                                    validate: (value) =>
                                        value.length > 0 || "Please select at least one platform",
                                }}
                                render={({ field }) => (
                                    <div className="flex flex-col">
                                        <label className="text-lg text-[#a7594d] mb-2">
                                            Preferred Platform for Call
                                        </label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {platforms.map((platform) => (
                                                <label
                                                    key={platform}
                                                    className="flex items-center space-x-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        value={platform}
                                                        checked={field.value?.includes(platform)}
                                                        onChange={(e) => {
                                                            if (e.target.checked) {
                                                                field.onChange([
                                                                    ...field.value,
                                                                    e.target.value,
                                                                ]);
                                                            } else {
                                                                field.onChange(
                                                                    field.value.filter(
                                                                        (item) => item !== e.target.value
                                                                    )
                                                                );
                                                            }
                                                        }}
                                                        className="rounded border-gray-300"
                                                    />
                                                    <span>{platform}</span>
                                                </label>
                                            ))}
                                        </div>
                                        {errors.preferredPlatforms && (
                                            <p className="text-red-500 mt-1">
                                                {errors.preferredPlatforms.message}
                                            </p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mt-4">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-[#3c5551] text-white rounded-lg font-semibold">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MeetingForm;

