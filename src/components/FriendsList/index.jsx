import UserCard from "../UserCard";

function FriendsList(props) {
  const { users } = props;
  const filtered = users.filter((index) => {
    return index.isFriend;
  });

  return (
    <ul>
      <UserCard userData={filtered} />
    </ul>
  );
}

export default FriendsList;
