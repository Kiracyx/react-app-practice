import React, { Component } from "react";
import FriendsList from "../FriendsList";

class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [
        {
          firstName: "Milton",
          lastName: "Hobbs",
          age: 57,
          email: "milton.hobbs@outlook.us",
          isFriend: false,
        },
        {
          firstName: "Hannibal",
          lastName: "Lector",
          age: 52,
          email: "hannibal@outlook.us",
          isFriend: true,
        },
        {
          firstName: "Billy",
          lastName: "Woods",
          age: 22,
          email: "billy.beauty@gmail.com",
          isFriend: true,
        },
      ],
    };
  }
  render() {
    const arrayOfUsers = this.state.usersList;
    return (
      <div>
        <FriendsList users={arrayOfUsers} />
      </div>
    );
  }
}

export default UsersPage;
