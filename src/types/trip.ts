interface Trip {
    id: string;
    title: string;
    description: string;
    createdBy: string;
    startDate: Date;
    endDate: Date;
    status: 'upcoming' | 'ongoing' | 'completed';
    imageUrl: string;
}

export default Trip;