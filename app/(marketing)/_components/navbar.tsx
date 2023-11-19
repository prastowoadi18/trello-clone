import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="fixed top-0 flex items-center w-full px-4 bg-white border-b shadow-sm h-14">
      <div className="flex items-center justify-between w-full mx-auto md:max-w-screen-2xl">
        <Logo />
        <div className="flex items-center justify-between w-full space-x-4 md:block md:w-auto">
          <Button variant="outline" size="sm" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get Taskufy for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
