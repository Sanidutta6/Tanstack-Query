import Header from "../../components/Header";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { useGlobalContext } from "../../contexts/GlobalContext";

export const Route = createFileRoute("/(app)/_app")({
  beforeLoad: async () => {
    const { isLoggedIn } = useGlobalContext();

    if (!isLoggedIn()) {
      throw redirect({ to: "/login" }); // Prevents unauthorized users from loading the page
    }
  },
  component: AppLayout,
});

function AppLayout() {
  return (
    <main className="h-screen min-w-screen">
      <Header />
      <Outlet />
    </main>
  );
}
