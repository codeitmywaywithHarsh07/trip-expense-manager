import Avatar from "@/src/components/Avatar";
import { trips } from "@/src/lib/data";
import { formatToShortDate } from "@/src/lib/utils";
import {
  Angry,
  Annoyed,
  ChartNoAxesCombined,
  ChevronRight,
  Frown,
  Map,
  Search,
  Smile,
  Users,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="h-full">
      {/* Top Header */}
      <div className="flex items-center justify-between py-4 px-3">
        <div className="flex gap-3 items-center">
          <Avatar
            name="John Doe"
            size="md"
            image={
              "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
            }
          />

          <div className="flex flex-col gap-0.5 text-(--color-brand-dark)">
            <p className="text-base font-jakarta-semibold">Hello, Harsh</p>
            <p className="text-xs font-jakarta-regular">Welcome to TripPay</p>
          </div>
        </div>

        <button className="border border-(--color-brand-dark)/10 rounded-full w-12 h-12 flex items-center justify-center">
          <Search className="w-6 h-6 text-(--color-brand-dark)" />
        </button>
      </div>

      <div className="px-3 h-full">
        <div className="bg-(--color-brand-dark) flex flex-col gap-2 rounded-3xl w-full h-auto mt-4 px-4 py-3">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-jakarta-regular text-(--color-brand-light)/70">
            {/* Today {formatToShortDate(new Date())}. */}
            Total Spends
          </p>
          <p className="text-(--layout-color) text-3xl font-jakarta-semibold">
            ₹ 12,500.<span className="text-(--primary-color-2)/70">40</span>
          </p>
          </div>

          <div className="flex gap-2 items-center">
            <Map className="w-4 h-4 text-(--color-brand-light)/70" />
            <p className="text-sm font-jakarta-regular text-(--layout-color)">
              3 trips
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <Users className="w-4 h-4 text-(--color-brand-light)/70" />
            <p className="text-sm font-jakarta-regular text-(--layout-color)">
              8 friends
            </p>
          </div>
          {/* <div className="mt-4 flex gap-2 items-center justify-between max-[350px]:gap-1 max-[350px]:text-[10px] text-xs">
            <button className="bg-(--layout-color) text-(--color-brand-dark) px-4 py-2 rounded-full font-jakarta-medium relative overflow-visibletransition-all active:scale-[0.98]">
              Happy{" "}
            </button>
            <button className="bg-(--layout-color) text-(--color-brand-dark) px-4 py-2 rounded-full font-jakarta-medium relative overflow-visibletransition-all active:scale-[0.98]">
              Angry{" "}
            </button>
            <button className="bg-(--layout-color) text-(--color-brand-dark) px-4 py-2 rounded-full font-jakarta-medium relative overflow-visibletransition-all active:scale-[0.98]">
              Sleepy{" "}
            </button>
            <button className="bg-(--layout-color) text-(--color-brand-dark) px-4 py-2 rounded-full font-jakarta-medium relative overflow-visibletransition-all active:scale-[0.98]">
              Bored{" "}
            </button>
          </div> */}
        </div>

        <div className="flex justify-between items-center mt-2  gap-2">
          <div className="rounded-3xl bg-(--primary-color) border border-(--border-light) h-auto w-1/2 px-3 py-4">
            <p className="font-jakarta-medium text-sm flex items-center text-(--color-brand-dark)">
              {" "}
              <ChartNoAxesCombined className="inline w-4 h-4 mr-1" />
              To Recieve
            </p>
            <p className="text-2xl font-jakarta-bold text-(--color-brand-dark) mt-1">
              ₹ 12,500{" "}
            </p>
          </div>
          <div className="rounded-3xl bg-(--secondary-color) border border-(--border-light) h-auto w-1/2 px-3 py-4">
            <p className="font-jakarta-medium text-sm flex items-center text-(--color-brand-dark)">
              {" "}
              <ChartNoAxesCombined className="inline w-4 h-4 mr-1" />
              To Pay
            </p>
            <p className="text-2xl font-jakarta-bold text-(--color-brand-dark) mt-1">
              ₹ 12,500{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 py-3 sticky top-0 bg-(--layout-color) z-30 px-3">
        <p className="text-xl font-jakarta-semibold text-(--color-brand-dark)">
          Your Trips
        </p>
        <Link
          href={"/trips"}
          className="text-sm font-jakarta-medium text-(--color-brand-dark) flex items-center"
        >
          View all <ChevronRight className="inline w-4 h-4 ml-1" />
        </Link>
      </div>

      {/* Trip Cards */}

      <div className="flex flex-col gap-1 px-3 pb-24">
        {trips?.map((trip) => (
          <Link
            href={`/trips/${trip.id}`}
            key={trip.id}
            className="relative flex items-end justify-between rounded-2xl shadow-lg mt-3 overflow-hidden h-80  border-[0.5px] border-(--border-light)"
          >
            {/* Image */}
            <img
              src={trip.imageUrl}
              alt={trip.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Status Badge */}
            <p className="absolute top-2 right-2 w-fit py-1 px-2 bg-(--color-brand-dark) text-white text-xs rounded-full font-jakarta-regular">
              {trip?.status}
            </p>

            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" /> */}
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent backdrop-blur-[0.2px]" />

            {/* Bottom Text Content */}
            <div className="relative z-10 p-4 text-white flex flex-col gap-1.5">
              <h3 className="text-xl font-jakarta-semibold">{trip.title}</h3>
              <p className="text-sm text-white/70 font-jakarta-regular">
                {trip.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="text-xs text-white/70 font-jakarta-medium flex items-center gap-1">
                  <Users className="inline w-4 h-4 mr-1" />4 Members
                </div>

                <div className="text-xs text-white/70 font-jakarta-medium flex items-center gap-1">
                  <Wallet className="inline w-4 h-4 mr-1" />₹ 12,500
                </div>
              </div>
              {/* Add more text here */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
