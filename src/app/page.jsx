import Image from "next/image";
import Link from "next/link.js";
import Navigation from "../components/Navigation.jsx";
import Button from "@/ui/Button.jsx";
import Announcements from "@/components/Announcements.jsx";
import Projects from "@/components/Projects.jsx";
import BenchmarkTable from "@/components/BenchmarkTable.jsx";
import Footer from "@/components/Footer.jsx";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="">
        <div className="flex flex-col items-center justify-center min-h-screen gap-10 px-3 bg-cover bg-center" style={{ backgroundImage: 'url(/images/background.png)'}}>
          <div className="flex flex-col text-center items-center justify-center gap-5">
            <div className="text-4xl md:text-5xl lg:text-7xl">Forefront of the AI Revolution in Azerbaijan</div> 
            <div className="text-xl md:text-2xl">All new WB1 for your complex tasks</div>
          </div> 
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-3">
            <Button variant="primary">Talk to Whitebeard</Button>
            <Button variant="primary">API Documentation</Button>
          </div>
        </div>
        <BenchmarkTable />
        <div className="flex flex-col gap-3 mt-10 mb-10 mx-10 px-3">
          <div className="text-xl mb-3">
            Announcements
          </div>
          <Announcements />
        </div>
        <div className="flex flex-col gap-3 mb-10 mx-10 px-3">
          <div className="text-xl mb-3">
            Our Projects
          </div>
          <Projects />
        </div>
        <div className="w-full min-h-[calc(100vh-190px)] text-black/80 flex flex-col-reverse sm:flex-row md:flex-row lg:flex-row items-center justify-between bg-ailab-yellow py-10 px-10 gap-10 md:gap-0">
          <div className="flex flex-col items-start gap-7">
            <div className="flex flex-col gap-3">
              <div className="text-3xl">AI Academy</div>
              <div className="text-lg text-balance">Advancing science, fostering talent, and creating ethical AI solutions for a smarter future. To join fully scholarships classes register now!</div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <Link href={'https://www.aiacademy.az/#applyNow'} target="_blank" rel="noopener noreferrer">
                <Button variant="darkPrimary" fullWidth="true" className="md:w-96">
                    Apply Now
                </Button>
              </Link>
              <Link href={'https://www.aiacademy.az/'} target="_blank" rel="noopener noreferrer">
                <Button variant="darkOutline" fullWidth="true" className="md:w-96">
                    Learn More
                </Button>
              </Link>
            </div>
          </div> 
          <div>
            <Image className="rounded-xl" src="/images/ai-academy.png" width={700} height={300} priority sizes="(min-width: 640px) 330px, (min-width: 768px) 500px, (min-width: 1024px) 800px" alt="teaching room photo from AI Academy"/>
          </div> 
        </div>
        <div className="w-full min-h-[calc(100vh-120px)] flex flex-col-reverse sm:flex-row-reverse md:flex-row-reverse lg:flex-row-reverse items-center justify-between py-10 px-10 gap-10 md:gap-20">
          <div className="flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-3">
              <div className="text-3xl">Work with AILab</div>
              <div className="text-lg text-balance">AILab is an AI research company based in Baku, Azerbaijan. Join us as we lead the way in advancing artificial intelligence through groundbreaking research and practical applications. Build ethical and open source AI for the world.</div>
            </div>
            <Link href={'https://jobs.glorri.com/companies/ailab'} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="secondary" fullWidth="true" className="md:w-96">
                  See open roles            
              </Button>
            </Link>
          </div>
          <div>
            <Image className="rounded-xl" src="/images/work-with-us.png" width={1700} height={400} sizes="(min-width: 640px) 330px, (min-width: 768px) 500px, (min-width: 1024px) 800px" alt="AILab's working spaces"/>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
