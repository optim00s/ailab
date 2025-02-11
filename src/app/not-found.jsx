import Link from "next/link";
import Navigation from "@/components/Navigation";
import Button from "@/ui/Button";

export const metadata = {
    title: {
        default: 'Not Found | Azerbaijan Artificial Intelligence Lab'
    }
}

export default function NotFound() {
    return (
        <div>
            <Navigation />
            <div className="flex flex-col items-center justify-center gap-10 min-h-[calc(100vh-48px)]">
                <div className="flex flex-col items-center text-center gap-6">
                    <div className="text-4xl md:text-6xl">Hmmm, page not found.</div>
                    <div className="text-xl md:text-2xl">Our model still learning and doesn't like empty page.</div>
                </div>
                <Link className="" href={"/"}>
                    <Button variant="primary">
                            Back to Home
                    </Button>
                </Link>
            </div>
            <div className="mt-auto w-full h-12 bg-gradient-to-r from-ailab-purple to-ailab"></div>      
        </div>
    );
}
