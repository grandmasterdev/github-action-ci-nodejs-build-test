# ci-nodejs-build-test

Continuous Integration using **NodeJs** for build and test action/stage

## What this does?

It will do the following:

- Install all node app/service dependencies
- Build the app/service
- Run the test in the app/service

## How to use it

Create a step in your job that will use the action as follows:

```yaml
-  uses: actions/checkout

-  uses: grandmasterdev/github-action-ci-nodejs-build-test@latest
        with:
          working-dir: ${{github.workspace}}

```

### Getting the working directory

The working directory can be retrieve from various ways, but the easiest is by environment variables.
You can get the value by adding the following action before this action in the steps.

```yaml
name: Get working directory list
      run: |
        WD=$(pwd)
        echo "wd=${WD}" >> $GITHUB_ENV
      id: working-dir

```

Alternatively, you could use github action `context` to get the working directory via

```
${{github.workspace}}
```

With the above, you can then access the value of the working directory via the environment variable like the following:

```yaml
- name: Get working directory list
      run: |
        WD=$(pwd)
        echo "wd=${WD}" >> $GITHUB_ENV
      id: working-dir

- uses: grandmasterdev/github-action-ci-nodejs-build-test@latest
      with:
        working-dir: ${{env.wd}}
```

or if you are using `context`

```yaml
- uses: grandmasterdev/github-action-ci-nodejs-build-test@latest
      with:
        working-dir: ${{github.workspace}}
```

## Inputs

| Name        | Description                                    | Required?          |
| ----------- | ---------------------------------------------- | ------------------ |
| working-dir | The directory where the code is being checkout | :heavy_check_mark: |

## Outputs

| Name       | Description                                   | Type    |
| ---------- | --------------------------------------------- | ------- |
| is_updated | Inform if the version has been updated or not | boolean |
