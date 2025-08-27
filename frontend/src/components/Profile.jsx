import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    // Fetch profile
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await fetch("http://localhost:5000/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const data = await res.json();
                setUser(data);
                setName(data.name);
            } catch (err) {
                console.error("Error fetching profile:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [token]);

    // Update name
    const handleUpdate = async () => {
        try {
            const res = await fetch("http://localhost:5000/profile/update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ name }),
            });
            const data = await res.json();
            setUser(data.user);
        } catch (err) {
            console.error("Error updating profile:", err);
        }
    };

    if (loading) return <p className="text-center mt-10">Loading profile...</p>;
    if (!user) return <p className="text-center mt-10">No user found</p>;

    return (
        <div className="max-w-3xl mx-auto mt-10 bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Cover Image */}
            <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 relative">
                <div className="absolute -bottom-12 left-6">
                    <img
                        src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
                        alt="avatar"
                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                    />
                </div>
            </div>

            <div className="p-6 mt-12">
                {/* User Name + Email */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-2xl font-bold">{user.name}</h2>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                    <button
                        onClick={() => navigate("/pricing")}
                        className="mt-4 sm:mt-0 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                    >
                        Upgrade Plan
                    </button>
                </div>

                {/* Details Section */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">Subscription</p>
                        <p className="font-medium">
                            {user.hasSubscription ? "Active Subscription" : "Free Account"}
                        </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">Image Trial Used</p>
                        <p className="font-medium">{user.usedImageTrial ? "Yes" : "No"}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">Document Trial Used</p>
                        <p className="font-medium">{user.usedDocTrial ? "Yes" : "No"}</p>
                    </div>
                    {user.trialExpiresAt && (
                        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-500">Trial Expires At</p>
                            <p className="font-medium">
                                {new Date(user.trialExpiresAt).toLocaleString()}
                            </p>
                        </div>
                    )}
                </div>

                {/* Update Name Section */}
                <div className="mt-8">
                    <label className="block text-gray-700 font-medium">Update Name</label>
                    <div className="flex mt-2 gap-2">
                        <input
                            type="text"
                            className="flex-1 border rounded-lg p-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button
                            onClick={handleUpdate}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
