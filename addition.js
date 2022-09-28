export default function addition(...add) {
  let sum = add.reduce((total, num) => {
    return total + num;
  }, 0);
  return sum;
}
