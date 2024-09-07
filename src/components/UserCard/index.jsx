import React from "react";

const UserCard = (props) => {
  const { userData } = props;

  const arrayJSX = userData.map((elem) => {
    const { firstName, lastName, age, email } = elem;
    return (
      <>
        <div>
          Name: {firstName} {lastName}
        </div>
        <div>
          Age: {age} <br />
          email: {email}
        </div>
      </>
    );
  });

  return <li>{arrayJSX}</li>;
};

export default UserCard;
