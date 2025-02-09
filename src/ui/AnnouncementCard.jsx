import Link from "next/link";

const AnnouncementCard = ({ announcementData }) => {
    return (
        <>
            {announcementData.map((data) => (
                <div key={data.id} className="flex items-center rounded-xl bg-ailab-purple/20 border border-ailab-purple px-3 py-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="w-full flex flex-col justify-between gap-5 p-2">
                    <div className="text-2xl">{data.title}</div>
                        <div className="text-lg text-white/50">{data.date}</div>                
                    </div>
                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-ailab-purple/20 group-hover:bg-ailab-purple transition-all duration-300">
                    <Link href={data.linkPath}> 
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default AnnouncementCard;
