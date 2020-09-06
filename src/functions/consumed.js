function currentItemLife(consumed) {
  const today = new Date();
  const lastConsumedDate = new Date(consumed[consumed.length - 1]);
  const diffTime = Math.abs(today - lastConsumedDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

function isEmpty(consumed) {
  return consumed.length < 1;
}

function averageItemLife(consumed) {
  const consumedDiff = [];

  for (var i = 1; i < consumed.length; i++) {
    consumedDiff.push(consumed[i] - consumed[i - 1]);
  }

  const sum = consumedDiff.reduce(
    (previous, current) => (current += previous),
    0
  );

  const avg = sum / consumedDiff.length;
  const avgDays = Math.ceil(avg / (1000 * 60 * 60 * 24));
  return avgDays;
}

function isAvgAvailable(consumed) {
  return consumed.length >= 2;
}

function whenRunsOut(consumed, quantity) {
  const duration = quantity * averageItemLife(consumed);
  return duration;
}

export default {
  currentItemLife,
  isEmpty,
  averageItemLife,
  isAvgAvailable,
  whenRunsOut,
};
