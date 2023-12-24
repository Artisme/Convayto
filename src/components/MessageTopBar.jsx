// import styled from "styled-components";
import { useMessages } from "../features/converse/useMessages";

function MessageTopBar() {
  const { data, isPending } = useMessages();
  const friendDetails = data?.frindDetails;

  if (isPending) return <p>Loading</p>;
  const { avatar_url, fullname, username } = friendDetails;

  return (
    <div className="flex rounded-b-3xl border-l-2 border-gray-900 bg-gray-800">
      <button className="px-3 py-2">◀</button>

      <div className="flex items-center gap-2">
        <span className="w-12">
          <img
            src={avatar_url ? avatar_url : "/images/default-avatar.png"}
            alt={fullname}
          />
        </span>
        <span className="flex flex-col">
          <span>{fullname}</span>
          <span>@{username}</span>
        </span>
      </div>
    </div>
  );
}

export default MessageTopBar;

// const StyledMessageTopBar = styled.div`
//   box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
//   height: 5rem;

//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   padding: 1rem;
// `;

// const BackButton = styled.button`
//   padding: 0.5rem 0.7rem;
// `;

// const Profile = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;

//   > :first-child {
//   }

//   > :last-child {
//     display: flex;
//     flex-direction: column;
//   }
// `;
