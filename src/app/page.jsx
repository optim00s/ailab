import Image from "next/image";
import Navigation from "../components/Navigation.jsx";
import Button from "@/ui/Button.jsx";
import Announcements from "@/components/Announcements.jsx";
import Projects from "@/components/Projects.jsx";

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
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <Button variant="primary">Talk to Whitebeard</Button>
            <Button variant="primary">API Documentation</Button>
          </div>
        </div>
        {/* Benchmark Comparison */}
        <div className="flex flex-col gap-3 mt-10 mx-10 px-3">
          <div className="text-xl mb-3">Model Performance Benchmarks</div>
          <div className="overflow-x-auto rounded-lg border border-white/20">
            <table className="w-full">
              <thead className="bg-ailab-purple">
                <tr>
                  <th className="px-6 py-4 text-left">Benchmark</th>
                  <th className="px-6 py-4 text-right">AILab WB1</th>
                  <th className="px-6 py-4 text-right">DeepSeek V3</th>
                  <th className="px-6 py-4 text-right">Qwen 2.5 <br /><span className="text-white/30">72B-Instruct</span></th>
                  <th className="px-6 py-4 text-right">Llama 3.1 <br /><span className="text-white/30">405B-Instruct</span></th>
                  <th className="px-6 py-4 text-right">Claude 3.5 <br /><span className="text-white/30">Sonnet-1022</span></th>
                  <th className="px-6 py-4 text-right">GPT-4o <br /><span className="text-white/30">0513</span></th>
                </tr>
              </thead>
              <tbody>
                {/* English Category */}
                <tr>
                  <td className="px-6 py-4 font-bold text-ailab-purple">English</td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                </tr>
                {[
                  ['MMLU (EM)', 83.5, 88.5, 85.3, 88.6, 88.3, 87.2],
                  ['MMLU-Rexux (EM)', 90.2, 89.1, 85.6, 86.2, 88.9, 88.0],
                  ['MMLU-Pro (EM)', 73.5, 75.9, 71.6, 73.3, 78.0, 72.6],
                  ['DROP (3-shot F1)', 87.3, 91.6, 87.8, 88.7, 88.3, 83.7],
                  ['IF-Eval (Prompt Strict)', 83.8, 86.1, 80.6, 86.0, 86.5, 84.3],
                  ['GPQA-Diamond (Pass@1)', 62.6, 59.1, 41.3, 51.1, 65.0, 49.9],
                  ['SimpleQA (Correct)', 23.1, 24.9, 10.2, 17.1, 28.4, 38.2],
                  ['FRAMES (Acc.)', 74.2, 73.3, 65.4, 70.0, 72.5, 80.5],
                  ['LongBench v2 (Acc.)', 45.8, 48.7, 35.4, 36.1, 41.0, 48.1],
                ].map(([benchmark, w1, ...others], index) => (
                  <tr key={benchmark} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                    <td className="px-6 py-4">{benchmark}</td>
                    <td className="px-6 py-4 text-right font-semibold text-ailab-purple">{w1}</td>
                    {others.map((score, i) => (
                      <td key={i} className="px-6 py-4 text-right">{score}</td>
                    ))}
                  </tr>
                ))}

                {/* Code Category */}
                <tr>
                  <td className="px-6 py-4 font-bold text-ailab-purple">Code</td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                </tr>
                {[
                  ['HumanEval-Mul (Pass@1)', 83.5, 82.6, 77.4, 77.2, 81.7, 80.5],
                  ['LiveCodeBench (Pass@1-COT)', 41.5, 40.5, 29.2, 28.4, 36.3, 33.4],
                  ['LiveCodeBench (Pass@1)', 38.7, 37.6, 28.4, 30.1, 32.8, 34.2],
                  ['Codeforces (Percentile)', 53.4, 51.6, 35.6, 25.3, 20.3, 23.6],
                  ['SWE Verified (Resolved)', 40.2, 42.0, 22.6, 24.5, 50.8, 38.8],
                  ['Aider-Edit (Acc.)', 80.5, 79.7, 71.6, 63.9, 84.2, 72.9],
                  ['Aider-Polyglot (Acc.)', 50.7, 49.6, 18.2, 5.8, 45.3, 16.0],
                ].map(([benchmark, w1, ...others], index) => (
                  <tr key={benchmark} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                    <td className="px-6 py-4">{benchmark}</td>
                    <td className="px-6 py-4 text-right font-semibold text-ailab-purple">{w1}</td>
                    {others.map((score, i) => (
                      <td key={i} className="px-6 py-4 text-right">{score}</td>
                    ))}
                  </tr>
                ))}

                {/* Math Category */}
                <tr>
                  <td className="px-6 py-4 font-bold text-ailab-purple">Math</td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                </tr>
                {[
                  ['AIME 2024 (Pass@1)', 40.3, 39.2, 16.7, 23.3, 16.0, 9.3],
                  ['MATH-500 (EM)', 91.0, 90.2, 74.7, 73.8, 78.3, 74.6],
                  ['CNMO 2024 (Pass@1)', 44.1, 43.2, 10.8, 6.8, 13.1, 10.8],
                ].map(([benchmark, w1, ...others], index) => (
                  <tr key={benchmark} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                    <td className="px-6 py-4">{benchmark}</td>
                    <td className="px-6 py-4 text-right font-semibold text-ailab-purple">{w1}</td>
                    {others.map((score, i) => (
                      <td key={i} className="px-6 py-4 text-right">{score}</td>
                    ))}
                  </tr>
                ))}

                {/* Azerbaijani Category */}
                <tr>
                  <td className="px-6 py-4 font-bold text-ailab-purple">Azerbaijani</td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                </tr>
                {[
                  ['DQ-Eval', 93.5, 85.2, 78.3, 82.1, 80.5, 76.4],
                  ['DQ-Correct', 90.2, 86.5, 80.1, 83.2, 81.6, 77.3],
                ].map(([benchmark, w1, ...others], index) => (
                  <tr key={benchmark} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                    <td className="px-6 py-4">{benchmark}</td>
                    <td className="px-6 py-4 text-right font-semibold text-ailab-purple">{w1}</td>
                    {others.map((score, i) => (
                      <td key={i} className="px-6 py-4 text-right">{score}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-sm text-balance text-white/60 mt-2">
            *AILab WB1 represents a significant leap forward in the field of large language models, combining exceptional performance in multiple domains with a unique ability to excel in specific tasks.
          </div>
        </div>
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
            <div className="flex flex-col gap-3 w-full md:w-96">
              <Button variant="darkPrimary">Apply Now</Button>
              <Button variant="darkOutline">Learn More</Button>
            </div>
          </div> 
          <div>
            <Image className="rounded-xl" src="/images/ai-academy.png" width={700} height={300} priority sizes="(min-width: 640px) 330px, (min-width: 768px) 500px, (min-width: 1024px) 800px" alt="teaching room photo from AI Academy"/>
          </div> 
        </div>
        {/* Work us */}
        <div className="w-full min-h-[calc(100vh-120px)] flex flex-col-reverse sm:flex-row-reverse md:flex-row-reverse lg:flex-row-reverse items-center justify-between py-10 px-10 gap-10 md:gap-20">
          <div className="flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-3">
              <div className="text-3xl">Work with AILab</div>
              <div className="text-lg text-balance">AILab is an AI research company based on Baku, Azerbaijan. Join us as we lead the way in advancing artificial intelligence through groundbreaking research and practical applications. Build ethical and open source AI for world.</div>
            </div>
            <Button variant="secondary" fullWidth="true" className="md:w-96">See open roles</Button>
          </div>
          <div>
            <Image className="rounded-xl" src="/images/work-with-us.png" width={1700} height={400} sizes="(min-width: 640px) 330px, (min-width: 768px) 500px, (min-width: 1024px) 800px" alt="AILab's working spaces"/>
          </div>
        </div>
      </main>
      <footer className="w-full min-h-[calc(100vh-300px)] border-t border-white/30 flex flex-col justify-between px-6 py-8 gap-3">
        <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-5">
          <div className="flex items-center gap-3">
            <div> 
              <img src="/ailab.svg" alt="" />
            </div>
            <div>
              <img src="/mincom.svg" alt="" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row items-baseline justify-between gap-12">
            <div className="flex flex-col gap-4">
              <div className="text-xl">AILab</div>
              <div className="flex flex-col gap-2">
                <div className="">About us</div>
                <div className="">Our customers</div>
                <div className="">Careers</div>
                <div className="">Contact us</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-xl">Research</div>
              <div className="flex flex-col gap-2">
                <div className="">Whitebeard</div>
                <div className="">AILab WB1</div>
                <div className="">AILab WB1-coder</div>
                <div className="">AILab Ignis 2</div>
                <div className="">AILab Ignis-mini-05-25</div>
                <div className="">AILab OSS</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-xl">Product</div>
              <div className="flex flex-col gap-2">
                <div className="">Whitebeard</div>
                <div className="">API Pricing</div>
                <div className="">AILab Platform</div>
                <div className="">Project "Agent"</div>
                <div className="">Project "Castle"</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-xl">Legal</div>
              <div className="flex flex-col gap-2">
                <div className="">Privacy Policy</div>
                <div className="">Term of Use</div>
                <div className="">Report Vulnerabilities</div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
            AILab © 2025. All right reserved.
        </div>
      </footer>
    </div>
  );
}
