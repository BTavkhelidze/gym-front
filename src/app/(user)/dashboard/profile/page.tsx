import RatingSection from '@/components/Profile/Reitingsection/page';
import React from 'react';

function ProfilePage() {
  // Mock user data (replace with actual user data from API or context)
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatar: 'https://via.placeholder.com/100',
    membership: {
      plan: 'Premium',
      expiryDate: '2025-12-31',
      visitsLeft: 10,
      paymentStatus: 'Active',
    },
    bookings: [
      { id: 1, className: 'Yoga', date: '2025-04-15', time: '10:00 AM' },
      { id: 2, className: 'HIIT', date: '2025-04-18', time: '5:00 PM' },
    ],
    transactionHistory: [
      { id: 1, amount: '$50', date: '2025-01-01', status: 'Completed' },
      { id: 2, amount: '$30', date: '2025-03-01', status: 'Completed' },
    ],
  };

  return (
    <div className='flex flex-col items-center p-6 bg-gray-100 min-h-screen'>
      <div className='bg-white p-6 rounded-2xl shadow-md w-80 text-center'>
        <img
          src={user.avatar}
          alt='Profile'
          className='w-24 h-24 rounded-full mx-auto mb-4'
        />
        <h2 className='text-xl font-semibold'>{user.name}</h2>
        <p className='text-gray-600'>{user.email}</p>

        {/* Membership Details */}
        <div className='mt-4 bg-gray-50 p-4 rounded-lg text-sm'>
          <p className='font-medium'>Membership: {user.membership.plan}</p>
          <p>Expiry: {user.membership.expiryDate}</p>
          <p>Visits Left: {user.membership.visitsLeft}</p>
          <p>Status: {user.membership.paymentStatus}</p>
        </div>

        {/* Class Bookings */}
        <div className='mt-4 bg-gray-50 p-4 rounded-lg text-sm'>
          <h3 className='font-medium'>Upcoming Classes</h3>
          {user.bookings.length > 0 ? (
            <ul>
              {user.bookings.map((booking) => (
                <li key={booking.id}>
                  {booking.className} - {booking.date} at {booking.time}
                </li>
              ))}
            </ul>
          ) : (
            <p>No upcoming classes</p>
          )}
        </div>

        {/* Transaction History */}
        <div className='mt-4 bg-gray-50 p-4 rounded-lg text-sm'>
          <h3 className='font-medium'>Transaction History</h3>
          {user.transactionHistory.length > 0 ? (
            <ul>
              {user.transactionHistory.map((transaction) => (
                <li key={transaction.id}>
                  {transaction.amount} - {transaction.date} (
                  {transaction.status})
                </li>
              ))}
            </ul>
          ) : (
            <p>No transactions yet</p>
          )}
        </div>

        <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600'>
          Edit Profile
        </button>
        <button className='mt-2 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600'>
          Renew Membership
        </button>
      </div>

      <RatingSection />
    </div>
  );
}

export default ProfilePage;
