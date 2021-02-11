function solve(worker) {
  let { weight, experience, dizziness } = worker;

  if (dizziness) {
    worker.levelOfHydrated += weight * 0.1 * experience;
    worker.dizziness = false;
  }

  return worker;
}
