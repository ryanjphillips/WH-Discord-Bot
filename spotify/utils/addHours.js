function addHours(dateObject, amountOfHours) {
  dateObject.setHours(dateObject.getHours() + amountOfHours);
  return dateObject;
}

export default addHours;
