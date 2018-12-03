const Text = (props) => <p style={{ color: props.color }}>Text: {props.text}</p>;

const ColorfulTexts = (props) => (
  <div>
      <Text color="red" text="Red text" />
      <Text color="green" text="Green text" />
      <Text color="orange" text="Orange text" />
  </div>
)

export default ColorfulTexts