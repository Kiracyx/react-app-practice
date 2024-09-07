import React from "react";

const UserCard = (props) => {
  const { userData } = props;

  // console.log(key);

  const arrayJSX = userData.map((elem) => {
    const { firstName, lastName, age, email, id } = elem;
    return (
      <li key={id}>
        <div>
          Name: {firstName} {lastName}
        </div>
        <div>
          Age: {age} <br />
          email: {email}
        </div>
      </li>
    );
  });

  return <>{arrayJSX}</>;
};

export default UserCard;
