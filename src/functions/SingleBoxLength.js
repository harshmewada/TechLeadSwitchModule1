function SingleBoxLength(BoxLength) {
  if (BoxLength === 1) {
    return 12;
  }
  if (BoxLength === 2) {
    return 6;
  }
  if (BoxLength === 4) {
    return 3;
  }
  if (BoxLength === 6) {
    return 4;
  } else {
    return 3;
  }
}
export default SingleBoxLength;
