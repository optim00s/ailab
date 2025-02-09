import { announcementData } from "@/lib/announcementData";
import AnnouncementCard from "@/ui/AnnouncementCard";

const Announcements = () => {
    return (
        <div className="grid grid-cols-1 gap-y-5">
            <AnnouncementCard announcementData={announcementData} />
        </div>
    );
}

export default Announcements;