import Link from "next/link";

const ProjectCard = ({ projectData }) => {
    return (
        <>
            {projectData.map((data) => (
                <Link key={data.id} href={data.linkPath} className="group w-full h-[400px] flex flex-col rounded-xl overflow-hidden bg-gradient-to-b from-ailab-purple/20 to-ailab-purple/5 border border-ailab-purple/30 hover:border-ailab-purple transition-all duration-300">
                    <div className="w-full h-[60%] overflow-hidden">
                        <div className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url(${data.imagePath})` }} />
                    </div>
                    <div className="flex flex-col gap-3 p-6">
                        <div className="text-xl text-ailab-purple">{data.title}</div>
                        <div className="text-lg text-white/80">{data.description}</div>
                    </div>
                </Link>
            ))}
        </>
    )
};

export default ProjectCard;

