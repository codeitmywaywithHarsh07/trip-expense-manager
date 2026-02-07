import Trip from "../types/trip";

export const trips : Trip[] = [
  {
    id: "1",
    title: "Munnar Getaway",
    description: "Relaxing weekend at the hill station with friends.",
    createdBy: "user1",
    startDate: new Date("2024-12-20"),
    endDate: new Date("2024-12-22"),
    status: "ongoing",
    imageUrl:
      "/assets/trip-1.png",
  },
{
    id: "2",
    title: "Tea Gardens Munnar",
    description: "Relaxing weekend at the hill station with friends.",
    createdBy: "user1",
    startDate: new Date("2024-11-20"),
    endDate: new Date("2024-11-22"),
    status: "upcoming",
    imageUrl:
      "/assets/tea-gardens-munnar.webp",
  },
  {
    id: "3",
    title: "Kodaikanal Adventure",
    description: "Exploring the scenic beauty of Kodaikanal with friends.",
    createdBy: "user1",
    startDate: new Date("2024-10-15"),
    endDate: new Date("2024-10-20"),
    status: "completed",
    imageUrl:
      "/assets/trip-2.jpg",
  },
]