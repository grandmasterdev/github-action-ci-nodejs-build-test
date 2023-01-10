import { setOutput } from "@actions/core";
import { exec } from "@actions/exec";

export const buildTest = async () => {
  try {
    await exec("npm", ["ci"]);
    await exec("npm", ["run", "build"]);
    await exec("npm", ["run", "test"]);
  } catch (ex) {
    setOutput("build-and-test-status", false);
  } finally {
    setOutput("build-and-test-status", true);
  }
};
