# <img src="public/icons/icon_48.png" width="45" align="left"> Intelligent Shopping Assistant

We plan to design a shopping assistant that can help users to find the best deals for their desired products. The assistant is a Chrome extension that can be used on [JD.com](https://www.jd.com/).

## Functionalities

See our [proposal](./doc/NLP_Proposal.pdf) for more details.

## Installation

### Dependencies

Run the following command to install dependencies:

```bash
yarn install
```

If you need to add a new dependency, run the following command:

```bash
yarn add <package_name>
```

### Development

Modify the code in `src` folder and `public` folder as you wish. Then run the following command to build the extension:

```bash
npm run watch
```

You will see a `build` folder generated.

Then load the extension in [Chrome](chrome://extensions/). You need to enable the developer mode first. Then click "Load unpacked" and select the `build` folder.

### Production

Similar to development, but run the following command instead:

```bash
npm run build
```

This project was bootstrapped with [Chrome Extension CLI](https://github.com/dutiyesh/chrome-extension-cli).
