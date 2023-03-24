# AdTech Sky Analytics CSS

A custom set of CSS rules for the Sky Analytics project. Designed using the [CUBE CSS](https://cube.fyi/) principles.

## Building

Run `npm run build` from the command line.
This will compile the `main.scss` file into `index.css` as well as compiling each individual file so that they can be imported individually.

## Using in your project

1. Install using:

```bash
npm install @sky-uk/adtech-sky-analytics-css
```

It's possible that you will have an error as these packages are stored in the github npm repository.
To resolve this, add an `.npmrc` file to your repository with the following content:

```
@sky-uk:registry=https://npm.pkg.github.com
```

2. Include the css in your app by referencing the import
   E.g. `node_modules/@sky-uk/adtech-sky-analytics-css/dist/index.css`

## Contributer

- Alexander Hewitson ([ExistentialAlex](https://github.com/ExistentialAlex))

## Contributing

To contribute to this project, clone the project using:

```bash
git clone https://github.com/ExistentialAlex/adtech-sky-analytics-css.git
```
