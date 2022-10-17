const yargs = require("yargs");

/**
 * Defaults
 */
const ITERATIONS = 10_000_000;
const STEP_LIMIT = 10;

/**
 * Walk up the stairs.
 *
 * @param {Object} params
 * @param {number} params.step
 * @param {string} params.progress
 */
const walk = ({ step, progress } = { step: 0, progress: "" }) => {
  if (step === 3 || progress.length === STEP_LIMIT) {
    return { step, progress };
  }

  if (step === 0) {
    return walk({ step: 1, progress: progress.concat("U") });
  }

  const stumble = Math.random() < 0.5 ? -1 : +1;

  return walk({
    step: step + stumble,
    progress: progress.concat([, "U", "D"].at(stumble)),
  });
};

/**
 * @param {number} iterations - number of simulation iterations
 */
const simulate = (iterations = ITERATIONS) => {
  let average = 0;
  let success = 0;

  for (let i = 0; i < iterations; i++) {
    const {
      step,
      progress: { length },
    } = walk();

    if (step === 3) {
      average += length / iterations;
      success++;
    }
  }

  const probability = (success / iterations) * 100;

  console.log(
    `${iterations.toLocaleString()} iterations: probability = ${probability.toFixed(
      2
    )}%, average steps = ${Math.ceil(average)} (${average.toFixed(2)})`
  );
};

/**
 * Command line argument parsing
 */
const argv = yargs
  .option("iterations", {
    alias: "i",
    description: `number of simulation iterations (default = ${ITERATIONS.toLocaleString()})`,
    type: "number",
  })
  .help()
  .alias("help", "h").argv;

simulate(argv.iterations);
