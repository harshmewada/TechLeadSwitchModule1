const getStyleObj = (wallBackground, bgImageType) => {
  let styleObj =
    bgImageType === "color"
      ? { background: wallBackground }
      : {
          backgroundImage: wallBackground,
          backgroundSize: "80%",
          backgroundPosition: "center",

          backgroundRepeat: "no-repeat",
        };

  return styleObj;
};
export default getStyleObj;
