'use client'

import { useEffect, useState } from 'react';

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]); // For list of logged-in users
  const [currentUser, setCurrentUser] = useState<any>(null); // For the current user

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
        {
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          profilePicture: '/List2.png',
          firstName: 'Jane',
          lastName: 'Smith',
        },
        {
          name: 'Alex Johnson',
          email: 'alex.johnson@example.com',
          profilePicture: '/List3.png',
          firstName: 'Alex',
          lastName: 'Johnson',
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
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side: Current User Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Logged In Users</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
                >
                  <img src={user.profilePicture} alt="Profile" className="w-16 h-16 rounded-full mb-4" />
                  <div className="text-center">
                    <h2 className="text-xl font-bold">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Current User Profile Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Profile</h2>
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                value={currentUser.firstName}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                value={currentUser.lastName}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={currentUser.email}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Change Password</label>
              <input
                type="password"
                placeholder="New Password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Profile Picture</label>
              <input
                type="file"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
