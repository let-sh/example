# Examples of let.sh

## How To Use

### Install command line tools

> requires [yarn](https://classic.yarnpkg.com/en/docs/install/) or [npm](https://www.npmjs.com/get-npm)

```bash
# install cli
# you can use npm instead: `npm install -g @letsh/cli`
yarn global add @letsh/cli

# login with your github account
lets login
```

### Then clone project and deploy with a single command line

#### Static hosting

```bash
git clone https://github.com/let-sh/example
cd static
lets deploy -t static
```

#### Node express framework

```bash
git clone https://github.com/let-sh/example
cd express
lets deploy -t express
```

#### Golang gin framework

```bash
git clone https://github.com/let-sh/example
cd gin
lets deploy -t gin
```
