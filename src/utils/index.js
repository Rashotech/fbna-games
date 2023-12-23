export const flattenFirebaseData = (firebaseData) => {
  let array = [];
  firebaseData.forEach((element) => {
    array.push(element.data());
  });
  return array;
};