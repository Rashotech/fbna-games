export const flattenFirebaseData = (firebaseData) => {
  let array = [];
  firebaseData.forEach((element) => {
    array.push(element.data());
  });
  return array;
};

export const cn = (...args) => {
  return args.filter((arg) => Boolean(arg)).join(" ");
};
