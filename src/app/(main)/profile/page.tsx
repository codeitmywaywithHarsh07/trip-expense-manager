import React from 'react';
import ProfileSection from '@/src/components/ProfilePage';

const ProfilePage = () => {
  // Sample user data
  const userData = {
    name: "Alex Johnson",
    memberSince: "Jan 2023",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    stats: {
      trips: 24,
      friends: 156,
      spent: "₹12,450"
    },
    contact: {
      email: "alex.johnson@email.com",
      phone: "+1 (555) 123-4567",
      upiId: "alexj@oksbi"
    }
  };

  return (
    <div className="h-full">
      <ProfileSection userData={userData} />
    </div>
  );
};

export default ProfilePage;