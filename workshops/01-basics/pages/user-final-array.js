const User = (props) => <p>I am {props.name}, I am {props.age} year old</p>;

const UserList = (props) => {
  let users = [
    {
      name: "SQ",
      age: "23"
    },
    {
      name: "Chloe",
      age: "21"
    },
    {
      name: "Anu",
      age: "22"
    }
  ]

  const usersElement = users.map((user) => (<User key={user.name} name={user.name} age={user.age} />))

  // const usersElement = [
  //   <User name="SQ" age="23" key="SQ" />,
  //   <User name="Chloe" age="21" key="Chloe" />,
  //   <User name="Anu" age="22" key="Anu" />
  // ]

  return (
    <div>
      { usersElement }
    </div>
  )
}

export default UserList