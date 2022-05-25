import { connect } from "react-redux";
function ComB(props) {
  console.log("ComB", props);
  return <>{props.count}</>;
}
const mapStateToProps = (state) => {
  console.log("ComB", state);
  return state;
};
export default connect(mapStateToProps)(ComB);
