

import React, { useEffect } from 'react';
import { Controller, useForm, useWatch } from "react-hook-form";
import { getCode, getNames } from 'country-list';
import { getCountryCallingCode } from "libphonenumber-js";
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const MeetingForm = () => {
    const {
        control,
        setValue,
        handleSubmit,
        reset,
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

    useEffect(() => {
        setValue("countryCode", getCountryCode(selectedCountry));
    }, [selectedCountry, setValue]);

    const getCountryCode = (country) => {
        const countryCode = getCode(country); // Get ISO Alpha-2 code
        return countryCode ? ` +${getCountryCallingCode(countryCode)}` : "";
    };

    const countries = getNames().map(name => ({
        code: getCode(name),
        name,
    }));

    const platforms = ["WhatsApp", "Zoom", "Google Meet", "Phone Call"];

    const onSubmit = (data) => {
        console.log(data);
        emailjs.send(
            '123456789',
            'template_lj947kw',
            {
                to_email: data.email,
                to_name: data.name,
                from_name: "Yogi Akash",
                message: "Welcome to Yogi Akash! We are excited to have you on board.",
            },
            'IlwIIMWZ-GKN6nZgT'
        )
            .then((response) => {
                console.log('Welcome email sent successfully!', response.status, response.text);
                // alert('Thank you for submitting the form. A welcome email has been sent to your email address.');
                toast.success('Email sent successfully!');
                reset();
            })

            .catch((error) => {
                console.error('Failed to send welcome email:', error);
                alert('Failed to send the welcome email. Please try again.');
            });
    };

    return (
        <div className="p-2 gap-2 font-poppins">
            <Toaster position="top-center" reverseOrder={false} />
            <form onSubmit={handleSubmit(onSubmit)} className="lg:space-y-6 space-y-2 w-full lg:p-12 p-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-2 p-4  text-sm md:text-lg lg:text-sm">
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
                                    <label className=" text-sm md:text-lg lg:text-sm  text-[#a7594d] " htmlFor="name">
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
                                    <label className="text-sm md:text-lg lg:text-sm text-[#a7594d] " htmlFor="email">
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
                                    <label className=" text-sm md:text-lg lg:text-sm text-[#a7594d] " htmlFor="country">
                                        Country
                                    </label>
                                    <select
                                        {...field}
                                        id="country"
                                        className={`text-sm py-2.5 rounded-lg px-4 border ${errors.country ? "border-red-500" : "border-gray-300"
                                            } focus:outline-none w-full`}
                                    >
                                        <option value="">Select your country</option>
                                        {countries.map((country) => (
                                            <option key={country.code} value={country.name}>
                                                {country.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.country && (
                                        <p className="text-red-500 mt-1">{errors.country.message}</p>
                                    )}
                                </div>
                            )}
                        />
                    </div>

                    <div className='flex lg:flex-row flex-col gap-3'>
                        <Controller
                            name="countryCode"
                            control={control}
                            defaultValue={getCountryCode(selectedCountry)}
                            render={({ field }) => (
                                <div className="flex flex-col">
                                    <label className="text-sm md:text-lg lg:text-sm text-[#a7594d] " htmlFor="countryCode">
                                        Country Code
                                    </label>
                                    <input
                                        {...field}
                                        type="text"
                                        id="countryCode"
                                        value={getCountryCode(selectedCountry)}
                                        readOnly
                                        className="py-2.5 rounded-lg px-2 border border-gray-300 bg-gray-100 focus:outline-none w-24"
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
                                    <label className=" text-sm md:text-lg lg:text-sm text-[#a7594d] " htmlFor="phoneNumber">
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
                                    <label className=" text-sm md:text-lg lg:text-sm text-[#a7594d] " htmlFor="purpose">
                                        Purpose
                                    </label>
                                    <select
                                        {...field}
                                        id="purpose"
                                        className={`py-2.5  rounded-lg lg:px-4 px-1  text-sm border ${errors.purpose ? "border-red-500" : "border-gray-300"
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

                    <div className="lg:col-span-2">
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
                                    <label className="text-sm md:text-lg lg:text-sm text-[#a7594d] " htmlFor="message">
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
                                        <label className="text-sm md:text-lg lg:text-sm text-[#a7594d] mb-2">
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
                                                    <span className='text-sm'>{platform}</span>
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
                        className="px-6 py-2 bg-[#3c5551] text-white rounded-lg font-semibold"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MeetingForm;


