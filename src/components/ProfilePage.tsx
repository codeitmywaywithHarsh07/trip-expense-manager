"use client";
import React, { useState } from "react";
import {
  User,
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Mail,
  Phone,
  CreditCard,
  LogOut,
  ChevronLeft,
  Moon,
  Sun,
  Share,
  Pencil,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useRouter } from "next/navigation";

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
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    // <>
    // {/* Header Background */}
    //       <div className="bg-[#B48DE6] h-36 relative"></div>

    //       {/* Profile Section */}
    //       <div className="px-6 -mt-20 relative z-10">
    //         {/* Profile Image */}
    // <div className="flex justify-center mb-3">
    //   <div className="relative">
    //     <div className="w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden bg-(--color-brand-light)">
    //       <img
    //         src={userData.profileImage}
    //         alt={userData.name}
    //         className="w-full h-full object-cover"
    //       />
    //     </div>
    //     <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
    //   </div>
    // </div>

    //         {/* Name and Member Info */}
    //         <div className="text-center mb-6">
    //           <h1 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">
    //             {userData.name}
    //           </h1>
    //           <div className="flex items-center justify-center gap-1.5 text-slate-500">
    //             <Calendar className="w-4 h-4" />
    //             <p className="text-sm font-regular">Member since {userData.memberSince}</p>
    //           </div>
    //         </div>

    //         {/* Stats Cards */}
    //         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
    //           <div className="grid grid-cols-3 gap-4">
    //             {/* Trips */}
    //             <div className="text-center">
    //               <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-2">
    //                 <MapPin className="w-5 h-5 text-blue-600" />
    //               </div>
    //               <p className="text-xl font-bold text-slate-900 mb-0.5">{userData.stats.trips}</p>
    //               <p className="text-xs font-medium text-slate-500 tracking-wide">Trips</p>
    //             </div>

    //             {/* Friends */}
    //             <div className="text-center border-x border-gray-100">
    //               <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-2">
    //                 <Users className="w-5 h-5 text-purple-600" />
    //               </div>
    //               <p className="text-xl font-bold text-slate-900 mb-0.5">{userData.stats.friends}</p>
    //               <p className="text-xs font-medium text-slate-500 tracking-wide">Friends</p>
    //             </div>

    //             {/* Spent */}
    //             <div className="text-center">
    //               <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-2">
    //                 <DollarSign className="w-5 h-5 text-emerald-600" />
    //               </div>
    //               <p className="text-xl font-bold text-slate-900 mb-0.5">{userData.stats.spent}</p>
    //               <p className="text-xs font-medium text-slate-500 tracking-wide">Spent</p>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Contact Information */}
    //         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
    //           <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-1">
    //             Contact Information
    //           </h2>

    //           <div className="space-y-3">
    //             {/* Email */}
    //             <div className="flex items-center gap-4 p-3.5 bg-gray-50 rounded-xl transition-all hover:bg-gray-100">
    //               <div className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center shrink-0">
    //                 <Mail className="w-5 h-5 text-rose-600" />
    //               </div>
    //               <div className="flex-1 min-w-0">
    //                 <p className="text-xs font-semibold text-slate-500 mb-0.5">Email</p>
    //                 <p className="text-sm font-medium text-slate-900 truncate">{userData.contact.email}</p>
    //               </div>
    //             </div>

    //             {/* Phone */}
    //             <div className="flex items-center gap-4 p-3.5 bg-gray-50 rounded-xl transition-all hover:bg-gray-100">
    //               <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
    //                 <Phone className="w-5 h-5 text-emerald-600" />
    //               </div>
    //               <div className="flex-1 min-w-0">
    //                 <p className="text-xs font-semibold text-slate-500 mb-0.5">Phone</p>
    //                 <p className="text-sm font-medium text-slate-900">{userData.contact.phone}</p>
    //               </div>
    //             </div>

    //             {/* UPI ID */}
    //             <div className="flex items-center gap-4 p-3.5 bg-gray-50 rounded-xl transition-all hover:bg-gray-100">
    //               <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center shrink-0">
    //                 <CreditCard className="w-5 h-5 text-indigo-600" />
    //               </div>
    //               <div className="flex-1 min-w-0">
    //                 <p className="text-xs font-semibold text-slate-500 mb-0.5">UPI ID</p>
    //                 <p className="text-sm font-medium text-slate-900">{userData.contact.upiId}</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Logout Button */}
    //         <button className="w-full bg-slate-800 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all hover:bg-slate-800 active:scale-[0.98]">
    //           <LogOut className="w-5 h-5" />
    //           <span className="text-base">Log Out</span>
    //         </button>
    //       </div>

    //       <p className="text-center text-xs text-slate-500 mt-4">© 2026 SplitTrip. All rights reserved.</p>
    // </>

    <>
      {/* Header */}

      <div className="flex items-center justify-between py-4 px-3 sticky top-0 bg-(--layout-color) z-20 ">
        <button className="flex gap-3 items-center" onClick={handleBack}>
          <ChevronLeft className="w-6 h-6 text-(--primary-black)" />
        </button>

        <div className="font-jakarta-medium text-base text-(--primary-black)">
          Profile
        </div>

        <button className="border border-(--color-brand-dark)/10 rounded-full w-10 h-10 flex items-center justify-center">
          {/* <Search className="w-6 h-6 text-(--color-brand-dark)" /> */}
          {mode === "light" ? (
            <Sun
              className="w-5 h-5 text-(--primary-black)"
              onClick={() => setMode("dark")}
            />
          ) : (
            <Moon
              className="w-5 h-5 text-(--primary-black)"
              onClick={() => setMode("light")}
            />
          )}
        </button>
      </div>

      {/* Profile Section */}

      <div className="px-3 h-full pt-2 pb-28">
        <div className="flex items-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-(--color-brand-light) border-(--border-light)">
              <img
                src={userData.profileImage}
                alt={userData.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div> */}
          </div>

          <div className="ml-4 flex flex-col gap-1.5">
            <h2 className="text-lg font-semibold text-(--primary-black)">
              {userData.name}
            </h2>
            <div className="flex items-center justify-center gap-1.5">
              <Calendar className="w-4 h-4 text-(--color-brand-dark)/70" />
              <p className="text-sm font-jakarta-regular text-(--color-brand-dark)/70">
                Member since {userData.memberSince}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-2  w-full h-auto mt-2 px-2 py-3">
          <div className="flex gap-7">
            <div className="flex flex-col gap-1 ">
              <p className="text-sm font-jakarta-medium text-(--primary-black)">
                Friends
              </p>
              <p className="text-xl font-jakarta-semibold text-(--color-brand-dark)">
                12
              </p>
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="text-sm font-jakarta-medium text-(--primary-black)">
                Trips
              </p>
              <p className="text-xl font-jakarta-semibold text-(--color-brand-dark)">
                3
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-white rounded-full p-2 border border-(--color-brand-dark)/10 transition-all active:scale-[0.98]">
              <Share className="w-4 h-4 text-(--color-brand-dark)" />
            </button>
            <button className="bg-white rounded-full p-2 border border-(--color-brand-dark)/10 transition-all active:scale-[0.98]">
              <Pencil className="w-4 h-4 text-(--color-brand-dark)" />
            </button>
          </div>
        </div>

        <div className="flex flex-col pt-3">
          <p className="text-xs font-jakarta-semibold tracking-wide text-(--color-brand-dark)/60 mb-3">
            Contact Information
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center border-b border-(--color-brand-dark)/10 pb-3">
              <Mail className="w-5 h-5 text-(--color-brand-dark)" />
              <div className="flex flex-col gap-0">
                <p className="text-sm font-jakarta-semibold text-(--color-brand-dark)">
                  Email
                </p>
                <p className="text-sm font-jakarta-regular text-(--primary-black)">
                  {userData.contact.email}
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center border-b border-(--color-brand-dark)/10 pb-3">
              <Phone className="w-5 h-5 text-(--color-brand-dark)" />
              <div className="flex flex-col gap-0">
                <p className="text-sm font-jakarta-semibold text-(--color-brand-dark)">
                  Phone
                </p>
                <p className="text-sm font-jakarta-regular text-(--primary-black)">
                  {userData.contact.phone}
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center  border-(--color-brand-dark)/10 pb-3">
              <CreditCard className="w-5 h-5 text-(--color-brand-dark)" />
              <div className="flex flex-col gap-0">
                <p className="text-sm font-jakarta-semibold text-(--color-brand-dark)">
                  UPI ID
                </p>
                <p className="text-sm font-jakarta-regular text-(--primary-black)">
                  {userData.contact.upiId}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <p className="text-xs font-jakarta-semibold tracking-wide text-(--color-brand-dark)/60 mb-3">
            Social Profiles
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-(--color-brand-dark)/10 pb-3">
              <div className="flex items-center gap-4">
                <Instagram className="w-5 h-5 text-(--color-brand-dark)" />

                <div className="flex flex-col">
                  <p className="text-sm font-jakarta-semibold text-(--primary-black)">
                    Instagram
                  </p>
                  <p className="text-xs font-jakarta-regular text-(--color-brand-dark)/70">
                    @splittrip
                  </p>
                </div>
              </div>
              <button className="text-(--color-brand-dark) transition-all active:scale-[0.98]">
                <ChevronLeft className="w-4 h-4 rotate-180" />
              </button>
            </div>

            <div className="flex items-center justify-between border-b border-(--color-brand-dark)/10 pb-3">
              <div className="flex items-center gap-4">
                <Linkedin className="w-5 h-5 text-(--color-brand-dark)" />

                <div className="flex flex-col">
                  <p className="text-sm font-jakarta-semibold text-(--primary-black)">
                    Linkedin
                  </p>
                  <p className="text-xs font-jakarta-regular text-(--color-brand-dark)/70">
                    /in/splittrip
                  </p>
                </div>
              </div>
              <button className="text-(--color-brand-dark) transition-all active:scale-[0.98]">
                <ChevronLeft className="w-4 h-4 rotate-180" />
              </button>
            </div>

            <div className="flex items-center justify-between border-b border-(--color-brand-dark)/10 pb-3">
              <div className="flex items-center gap-4">
                <Twitter className="w-5 h-5 text-(--color-brand-dark)" />

                <div className="flex flex-col">
                  <p className="text-sm font-jakarta-semibold text-(--primary-black)">
                    X
                  </p>
                  <p className="text-xs font-jakarta-regular text-(--color-brand-dark)/70">
                    @splittripapp
                  </p>
                </div>
              </div>
              <button className="text-(--color-brand-dark) transition-all active:scale-[0.98]">
                <ChevronLeft className="w-4 h-4 rotate-180" />
              </button>
            </div>
          </div>
        </div>

        <button className="w-full bg-(--primary-black) text-(--layout-color) py-4 px-6 rounded-xl font-jakarta-semibold flex items-center justify-center gap-3 transition-all hover:bg-(--primary-black) active:scale-[0.98] mt-6">
          <LogOut className="w-5 h-5" />
          <span className="text-base">Log Out</span>
        </button>
      </div>
    </>
  );
};

export default ProfileSection;
