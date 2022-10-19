exports.getDate = () => {


  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  return day;

}




exports.getDay = () => {


  const today = new Date();

  const options = {
    weekday: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  return day;

}
