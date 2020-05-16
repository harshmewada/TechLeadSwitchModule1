const getStyleObj = (wallBackground, bgImageType) => {
  const mobileWidth = window.innerWidth;
  let styleObj =
    bgImageType === "color"
      ? { background: wallBackground }
      : {
          backgroundImage: wallBackground,
          backgroundSize: mobileWidth < 800 ? "100%" : "80%",

          backgroundPosition: "center",

          backgroundRepeat: "no-repeat",
        };

  return styleObj;
};
export default getStyleObj;
