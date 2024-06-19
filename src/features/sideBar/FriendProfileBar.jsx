import { useUi } from "../../contexts/UiContext";
import { HiOutlineUserCircle } from "react-icons/hi2";
import ToggleableContent from "../../components/ToggleableContent";
import IconButton from "../../components/IconButton";

function FriendProfileBar({ friend }) {
  const { avatar_url, fullname, username, bio } = friend ?? {};
  const { closeFriendSidebar, isFriendsSidebarOpen } = useUi();

  function handleCloseBar() {
    isFriendsSidebarOpen && closeFriendSidebar();
  }

  return (
    <ToggleableContent isOpen={isFriendsSidebarOpen} toggle={handleCloseBar}>
      <div
        className={
          "slideIn absolute top-0 z-30 grid h-screen-safe w-4/5 grid-rows-[auto_1fr] overflow-hidden bg-mediumSlate opacity-0 transition-all dark:bg-mediumSlate-dark sm:w-[21rem]"
        }
      >
        <div className="flex h-16 items-center justify-start gap-4 bg-mediumSlate p-2 dark:bg-mediumSlate-dark">
          <IconButton onClick={handleCloseBar}>
            <IconButton.Close />
          </IconButton>
          <p className="select-none font-bold tracking-wider">Profile</p>
        </div>

        <div className="h-full overflow-scroll p-4">
          <div className="mx-auto mt-4 h-52 w-52 overflow-hidden rounded-full border-2 border-textViolet dark:border-textViolet-dark">
            {avatar_url ? (
              <img
                draggable="false"
                className="h-full w-full object-cover object-center"
                src={avatar_url}
                alt={fullname}
              />
            ) : (
              <HiOutlineUserCircle
                className="h-full w-full opacity-50"
                strokeWidth="1"
              />
            )}
          </div>

          <div className="mt-8">
            <p className="select-none  text-sm font-bold tracking-wider text-textViolet opacity-80 dark:text-textViolet-dark">
              Name
            </p>
            <p className="truncate px-2 text-base">{fullname}</p>
          </div>

          <div className="mt-4">
            <p className="select-none text-sm font-bold tracking-wider text-textViolet  opacity-80 dark:text-textViolet-dark">
              Username
            </p>
            <p className="truncate px-2 text-base">{username}</p>
          </div>

          <div className="mt-4">
            <p className="select-none text-sm font-bold tracking-wider text-textViolet  opacity-80 dark:text-textViolet-dark">
              Bio
            </p>
            <p className="break-all px-2 text-base">{bio}</p>
          </div>
        </div>
      </div>
    </ToggleableContent>
  );
}

export default FriendProfileBar;
