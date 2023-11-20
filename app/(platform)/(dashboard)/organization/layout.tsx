import { Sidebar } from "../_component/sidebar";

const Organizationlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-6xl px-4 pt-20 mx-auto md:pt-24 2xl:max-w-screen-2xl ">
      <div className="flex gap-x-7">
        <div className="hidden w-64 shrink-0 md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  );
};

export default Organizationlayout;
