const User = (props) => <p>...</p>;

const UserList = (props) => (
  <div>
    <User /> // SQ, 23
    <User /> // Chloe, 21
    <User /> // Anu, 22
  </div>
)

// Make sure the output will be like this:
// I am SQ, I am 23 year old
// I am Chloe, I am 21 year old
// I am Anu, I am 22 year old

export default UserList