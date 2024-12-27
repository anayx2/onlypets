import React, { useState } from "react";
import { Edit } from "lucide-react";

const PersonalInformation = () => {
    const [info, setInfo] = useState({
        firstName: "Anay",
        lastName: "Tiwari",
        gender: "male",
        email: "holeeday1@gmail.com",
        mobile: "+919214399998",
    });

    const [editing, setEditing] = useState(null); // Tracks the field currently being edited

    const handleEdit = (field) => {
        setEditing(field);
    };

    const handleSave = () => {
        setEditing(null);
        // Add your save logic here if needed
    };

    const personalInfoFields = [
        { label: "First Name", key: "firstName", type: "text" },
        { label: "Last Name", key: "lastName", type: "text" },
        { label: "Email Address", key: "email", type: "email" },
        { label: "Mobile Number", key: "mobile", type: "tel" },
    ];

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="space-y-8">
                {personalInfoFields.map(({ label, key, type }) => (
                    <div className="space-y-1" key={key}>
                        <div className="flex items-center justify-between">
                            <h2 className="text-sm font-semibold">{label}</h2>
                            <button
                                onClick={() => handleEdit(key)}
                                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                                Edit
                            </button>
                        </div>
                        <input
                            type={type}
                            value={info[key]}
                            onChange={(e) => setInfo({ ...info, [key]: e.target.value })}
                            disabled={editing !== key}
                            className="w-full p-2 border rounded-md bg-gray-50"
                            placeholder={label}
                        />
                    </div>
                ))}

                {/* Gender Section */}
                <div className="space-y-4">
                    <h2 className="text-base font-medium">Your Gender</h2>
                    <div className="flex gap-6">
                        {["male", "female"].map((gender) => (
                            <label className="flex items-center gap-2" key={gender}>
                                <input
                                    type="radio"
                                    name="gender"
                                    value={gender}
                                    checked={info.gender === gender}
                                    onChange={() => setInfo({ ...info, gender })}
                                    className="w-4 h-4 text-blue-600"
                                />
                                <span className="text-gray-700 capitalize">{gender}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {editing && (
                    <button
                        onClick={handleSave}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Save
                    </button>
                )}
            </div>
        </div>
    );
};

export default PersonalInformation;
