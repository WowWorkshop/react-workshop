const User = (props) => <p>I am {props.name}, I am {props.age} year old</p>;

const UserList = (props) => (
  <div>
    <User name="SQ" age="23" />
    <User name="Chloe" age="21" />
    <User name="Anu" age="22" />
  </div>
)

export default UserList