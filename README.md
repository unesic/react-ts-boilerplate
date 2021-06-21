# React TypeScript Boilerplate

This is a simple boilerplate to get started with React TS.

## Quick-start bash script

```
#!/bin/bash

if [ $1 = "--with-router" ]; then
	echo "Cloning 'with-router' branch from 'react-ts-boilerplate' into the current directory..."
    git clone -b with-router git@github.com:unesic/react-ts-boilerplate.git .

elif [ $1 = "--with-apollo" ]; then
	echo "Cloning 'with-apollo' branch from 'react-ts-boilerplate' into the current directory..."
    git clone -b with-apollo git@github.com:unesic/react-ts-boilerplate.git .

elif [ $1 = "--with-apollo-and-router" ]; then
	echo "Cloning 'with-apollo-and-router' branch from 'react-ts-boilerplate' into the current directory..."
    git clone -b with-apollo-and-router git@github.com:unesic/react-ts-boilerplate.git .

elif [ $1 = "--with-server" ]; then
	echo "Cloning 'with-server' branch from 'react-ts-boilerplate' into the current directory..."
    git clone -b with-server git@github.com:unesic/react-ts-boilerplate.git .

elif [ $1 = "--with-apollo-and-router-and-server" ]; then
	echo "Cloning 'with-apollo-and-router-and-server' branch from 'react-ts-boilerplate' into the current directory..."
    git clone -b with-apollo-and-router-and-server git@github.com:unesic/react-ts-boilerplate.git .

else
	echo "Cloning 'master' branch from 'react-ts-boilerplate' into the current directory..."
	git clone git@github.com:unesic/react-ts-boilerplate.git .
fi

echo "Removing the old .git"
rm -rf .git/

echo "Initializing git..."
git init
echo "Adding files..."
git add -A .
echo "Making the initial commit..."
git commit -am 'initial commit'

echo "Opening Visual Studio Code..."
code . 

echo "Installing dependecies..."
npm install
echo "Starting the boilerplate application..."
npm run start
```

## Available Scripts

In the project directory, you can run all of the standard react scripts plus:

### `npm run watch:css`

Runs tailwind CSS watcher inside `src/assets` directory.
Styles are automatically re-compiled to `app.css` file.
Refreshing isn't necessary as the style changes will reflect on file save.

### `npm run build:opt`

Builds the app for production to the `build` folder.
Instead of spitting out multiple files, it produces a single JavaScript and CSS file.
