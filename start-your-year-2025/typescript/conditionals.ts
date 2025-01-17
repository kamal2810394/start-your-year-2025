const veryTrue = true;
const veryFalse = false;

if (veryTrue) {
  console.log("Very True");
}

if (!veryFalse) {
  console.log("Very False");
}

function divide(x: number, y: number) {
  if (y === 0) {
    throw new Error(
      `Division by zero. Tried to operate ${x} with divisor ${y}.`,
      { cause: "Division by zero." },
    );
  }
  return x / y;
}
