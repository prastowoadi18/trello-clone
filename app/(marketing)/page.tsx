import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          "flex flex-col items-center justify-center",
          headingFont.className
        )}
      >
        <div className="flex items-center p-4 mb-4 uppercase border rounded-full shadow-sm bg-amber-100 text-amber-700">
          <Medal className="w-6 h-6 mr-2" />
          No 1 task managment
        </div>
        <h1 className="mb-6 text-3xl text-center md:text-6xl text-neutral-800">
          Taskify helps team move
        </h1>
        <div className="p-2 px-4 pb-4 text-3xl text-white rounded-md md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 w-fit">
          work forward.
        </div>
      </div>
      <div
        className={cn(
          "max-w-xs mt-4 text-sm md:text-xl text-neutral-400 w-fit",
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team is unique - accomplish
        it all with Taskify.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Taskify for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
