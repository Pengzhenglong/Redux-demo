import { connect } from "react-redux";
function ComA(props) {
  const value = props;
  const handleClick = () => {
    console.log("ComA", value);
    props.sendAction();
  };
  return (
    <>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        {" "}
        +
      </button>
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendAction: () => {
      // 利用dispatch发送action
      // 传递action对象，我们定义一个type属性，值为send_type
      dispatch({
        type: "add_action",
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(ComA);
