import { announcementData } from "@/lib/announcementData";
import AnnouncementCard from "@/ui/AnnouncmentCard";

const Announcements = () => {
    return (
        <div className="grid grid-cols-1 gap-y-5">
            <AnnouncementCard announcementData={announcementData} />
        </div>
    );
}

export default Announcements;