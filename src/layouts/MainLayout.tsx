import { ReactNode, Suspense } from "react";
import ENV_KEYS from "@/config/env.config";
import Loader from "@/components/loader";

const MaintenanceMessage: React.FC = () => (
  <div className="flex h-screen w-screen items-center justify-center">
    <p>Portal is under construction, we will be back shortly!</p>
  </div>
);

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  if (ENV_KEYS.MAINTENANCE_MODE) {
    return <MaintenanceMessage />;
  }

  return (
    <main>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </main>
  );
};

export default MainLayout;
