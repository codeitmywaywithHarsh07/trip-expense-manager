import React from 'react'
import { User, Calendar, MapPin, Users, DollarSign, Mail, Phone, CreditCard, LogOut } from 'lucide-react';


interface ProfileSectionProps {
    userData: {
    name: string;
    contact: {
      email: string;
      phone: string;
      upiId: string;
    };
    memberSince: string;
    profileImage: string;
    stats: {
      trips: number;
      friends: number;
      spent: string;
    };
  };
}

const ProfileSection = ({ userData }: ProfileSectionProps) => {
  return (
    <>
    {/* Header Background */}
          <div className="bg-[#B48DE6] h-36 relative"></div>
    
          {/* Profile Section */}
          <div className="px-6 -mt-20 relative z-10">
            {/* Profile Image */}
            <div className="flex justify-center mb-3">
              <div className="relative">
                <div className="w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden bg-(--color-brand-light)">
                  <img 
                    src={userData.profileImage} 
                    alt={userData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
              </div>
            </div>
    
            {/* Name and Member Info */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">
                {userData.name}
              </h1>
              <div className="flex items-center justify-center gap-1.5 text-slate-500">
                <Calendar className="w-4 h-4" />
                <p className="text-sm font-regular">Member since {userData.memberSince}</p>
              </div>
            </div>
    
            {/* Stats Cards */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
              <div className="grid grid-cols-3 gap-4">
                {/* Trips */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-xl font-bold text-slate-900 mb-0.5">{userData.stats.trips}</p>
                  <p className="text-xs font-medium text-slate-500 tracking-wide">Trips</p>
                </div>
    
                {/* Friends */}
                <div className="text-center border-x border-gray-100">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <p className="text-xl font-bold text-slate-900 mb-0.5">{userData.stats.friends}</p>
                  <p className="text-xs font-medium text-slate-500 tracking-wide">Friends</p>
                </div>
    
                {/* Spent */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <DollarSign className="w-5 h-5 text-emerald-600" />
                  </div>
                  <p className="text-xl font-bold text-slate-900 mb-0.5">{userData.stats.spent}</p>
                  <p className="text-xs font-medium text-slate-500 tracking-wide">Spent</p>
                </div>
              </div>
            </div>
    
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-1">
                Contact Information
              </h2>
              
              <div className="space-y-3">
                {/* Email */}
                <div className="flex items-center gap-4 p-3.5 bg-gray-50 rounded-xl transition-all hover:bg-gray-100">
                  <div className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-rose-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-500 mb-0.5">Email</p>
                    <p className="text-sm font-medium text-slate-900 truncate">{userData.contact.email}</p>
                  </div>
                </div>
    
                {/* Phone */}
                <div className="flex items-center gap-4 p-3.5 bg-gray-50 rounded-xl transition-all hover:bg-gray-100">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-500 mb-0.5">Phone</p>
                    <p className="text-sm font-medium text-slate-900">{userData.contact.phone}</p>
                  </div>
                </div>
    
                {/* UPI ID */}
                <div className="flex items-center gap-4 p-3.5 bg-gray-50 rounded-xl transition-all hover:bg-gray-100">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-500 mb-0.5">UPI ID</p>
                    <p className="text-sm font-medium text-slate-900">{userData.contact.upiId}</p>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Logout Button */}
            <button className="w-full bg-slate-800 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all hover:bg-slate-800 active:scale-[0.98]">
              <LogOut className="w-5 h-5" />
              <span className="text-base">Log Out</span>
            </button>
          </div>
    
          <p className="text-center text-xs text-slate-500 mt-4">© 2026 SplitTrip. All rights reserved.</p>
    </>
  )
}

export default ProfileSection