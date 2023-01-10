import {} from "@actions/core";
import { exec } from "@actions/exec";

export const buildTest = async () => {
  await exec("npm", ["ci"]);
  await exec("npm", ["run", "build"]);
  await exec("npm", ["run", "test"]);
};
