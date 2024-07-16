import { FC } from "react";
import { CustomNavBar } from "./CustomNavBar";
import Footer from "./Footer";

interface BaseLayoutProps {
  children?: React.ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="bg-fb-grey-950 max-sm:bg-fb-grey-950 w-full">
      <CustomNavBar />
      <main className="flex flex-col min-h-screen">{children}</main>
      <footer className="w-full bg-black text-white p-4 text-center">
        <Footer />
      </footer>
    </div>
  );
};

export default BaseLayout;
