import { useEffect } from "react";
import MyAccount from "../userProfile/MyAccount";
import MainSidebarContents from "./MainSidebarContents";
import { useUi } from "../../contexts/UiContext";
import { useParams } from "react-router-dom";
import ToggleableContent from "../../components/ToggleableContent";

function LeftSideBar() {
  const { isSidebarOpen, isAccountView, closeSidebar, openSidebar } = useUi();
  const { userId } = useParams();

  useEffect(() => {
    userId ? closeSidebar() : openSidebar();
  }, [userId]);

  function handleToggleSidebar() {
    userId && closeSidebar();
  }

  return (
    <ToggleableContent isOpen={isSidebarOpen} toggle={handleToggleSidebar}>
      <div
        className={`${
          isSidebarOpen ? "left-0 opacity-100" : "-left-full opacity-0"
        } absolute top-0 z-30 h-screen-safe w-full overflow-hidden bg-mediumSlate transition-all duration-500 ease-[cubic-bezier(.15,.72,.08,.99)] dark:bg-mediumSlate-dark sm:w-[23rem] md:relative md:left-0 md:opacity-100`}
      >
        <aside>{isAccountView ? <MyAccount /> : <MainSidebarContents />}</aside>
      </div>
    </ToggleableContent>
  );
}

export default LeftSideBar;
