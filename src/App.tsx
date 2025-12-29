import { Outlet } from "react-router-dom";
import { SideNavigation } from "@/components/navbar/side-navigation/SideNavigation";
import styles from "./App.module.scss";
import { SIDE_NAVIGATION_MOCK } from "./mock/SideNavigation.mock";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

function App() {
  return (
    <div className={styles["app-layout"]}>
      <SideNavigation config={SIDE_NAVIGATION_MOCK} />
      <main className={styles["app-layout__content"]}>
        <ScrollToTop />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
