import { footerData } from "@/lib/footerData";
import Link from "next/link";

export default function Footer() {
    return(
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
                            {footerData.ailab.map((data) => (
                                <Link key={data.id} href={data.href}>
                                    {data.label}
                                </Link>
                            ))}
                        </div>
                    </div>    
                    <div className="flex flex-col gap-4">
                        <div className="text-xl">Research</div>
                        <div className="flex flex-col gap-2">
                            {footerData.research.map((data) => (
                                <Link key={data.id} href={data.href}>
                                    {data.label}
                                </Link>
                            ))}
                        </div>
                    </div>    
                    <div className="flex flex-col gap-4">
                        <div className="text-xl">Product</div>
                        <div className="flex flex-col gap-2">
                            {footerData.product.map((data) => (
                                <Link key={data.id} href={data.href}>
                                    {data.label}
                                </Link>
                            ))}
                        </div>
                    </div>    
                    <div className="flex flex-col gap-4">
                        <div className="text-xl">Legal</div>
                        <div className="flex flex-col gap-2">
                            {footerData.legal.map((data) => (
                                <Link key={data.id} href={data.href}>
                                    {data.label}
                                </Link>
                            ))}
                        </div>
                    </div>    
                </div>
            </div>    
            <div className="">
                AILab © {new Date().getFullYear()}. All rights reserved.
            </div>
        </footer>
    );
}