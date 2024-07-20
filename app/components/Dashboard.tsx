'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard: React.FC = () => {
    const [users, setUsers] = useState<any[]>([]); // For list of logged-in users
    const [currentUser, setCurrentUser] = useState<any>(null); // For the current user
    const [view, setView] = useState<'profile' | 'listings'>('profile'); // To manage the current view
    const router = useRouter(); // For navigation
    const handleEditClick = () => {
        router.push('/edit-listing');
    };

    useEffect(() => {
        const fetchLoggedInUsers = async () => {
            // Replace with actual API call to fetch logged-in users
            const usersData = [
                {
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    profilePicture: '/List1.png',
                    firstName: 'John',
                    lastName: 'Doe',
                },
            ];
            setUsers(usersData);
            setCurrentUser(usersData[0]); // Set the first user as the current user for demonstration
        };

        // Simulated delay for loading state (remove in production)
        setTimeout(() => {
            fetchLoggedInUsers();
        }, 1000); // Adjust delay time as needed
    }, []);

    if (!currentUser) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className="min-h-screen bg-white p-4 mt-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Side: Current User Details */}
                    <div className="md:col-span-1">
                        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                        <div className="bg-white p-6 rounded-lg shadow-xl">
                            <div className="space-y-4">
                                {users.map((user, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
                                    >
                                        <img src={user.profilePicture} alt="Profile" className="w-36 h-36 rounded-md mb-4" />
                                        <div className="text-center">
                                            <h2 className="text-xl font-bold">{user.name}</h2>
                                            <p className="text-gray-600">{user.email}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className='flex justify-center space-x-4 mt-4'>
                                    <button
                                        onClick={() => setView('profile')}
                                        className="w-24 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition duration-500"
                                    >
                                        Profile
                                    </button>
                                    <button
                                        onClick={() => setView('listings')}
                                        className="w-24 ml-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition duration-500"
                                    >
                                        Listings
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Current User Profile or Listings */}
                    <div className="md:col-span-2">
                        {view === 'profile' ? (
                            <>
                                <h2 className="text-2xl font-bold mb-4">Profile</h2>
                                <form className="bg-white p-6 rounded-lg shadow-xl">
                                    <div className="mb-4">
                                        <label className="block text-gray-700">First Name</label>
                                        <input
                                            type="text"
                                            value={currentUser.firstName}
                                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
                                            readOnly
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Last Name</label>
                                        <input
                                            type="text"
                                            value={currentUser.lastName}
                                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
                                            readOnly
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            value={currentUser.email}
                                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
                                            readOnly
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Change Password</label>
                                        <input
                                            type="password"
                                            placeholder="New Password"
                                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Profile Picture</label>
                                        <input
                                            type="file"
                                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-900 transition duration-500"
                                    >
                                        Update Profile
                                    </button>
                                </form>
                            </>
                        ) : (
                            <>
                                <div className='flex items-center justify-between mb-4'>
                                <h2 className="text-2xl font-bold mb-4">Listings</h2>
                                <button
                                    type="submit"
                                    onClick={handleEditClick}
                                    className='bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition duration-500'
                                >
                                    Add Listing
                                </button>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-xl">
                                    <div className="hidden md:block overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr>
                                                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Title</th>
                                                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Description</th>
                                                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* Replace with actual listings data */}
                                                <tr>
                                                    <td className="py-2 px-4 border-b border-gray-300">Listing Title 1</td>
                                                    <td className="py-2 px-4 border-b border-gray-300">Description 1</td>
                                                    <td className="py-2 px-4 border-b border-gray-300">
                                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Edit</button>
                                                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 ml-2">Delete</button>
                                                    </td>
                                                </tr>
                                                {/* Add more rows as needed */}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="block md:hidden mt-4">
                                        {/* Mobile view: Stacked table */}
                                        <div className="space-y-4">
                                            <div className="border rounded-xl p-4">
                                                <div className="mb-2">
                                                    <strong>Listing ID:</strong> 1
                                                </div>
                                                <div className="mb-2">
                                                    <strong>Title:</strong> Listing Title 1
                                                </div>
                                                <div className="mb-2">
                                                    <strong>Description:</strong> Description 1
                                                </div>
                                                <div>
                                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Edit</button>
                                                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 ml-2">Delete</button>
                                                </div>
                                            </div>
                                            {/* Add more mobile view rows as needed */}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
