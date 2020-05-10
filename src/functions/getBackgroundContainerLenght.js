function GetContainerlength(BoxLength) {
  if (BoxLength === 1) {
    return 2;
  } else if (BoxLength === 2) {
    return 4;
  } else if (BoxLength === 4) {
    return 6;
  } else {
    return 6;
  }
}
export default GetContainerlength;
