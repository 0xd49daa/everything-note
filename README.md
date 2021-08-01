# Everything Note

Decentralized web application to store your notes. Based on [Sia Skynet](https://siasky.net/) and [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) (via [Dexie](https://dexie.org/))

[DEMO](https://0xd49.hns.siasky.net/)

## Seed phrase

Can be any string value, but be sure it's unique.

Better you'd generate seed phrase here: [https://iancoleman.io/bip39/](https://iancoleman.io/bip39/)

## Available Scripts

_Install dependencies with `yarn` before trying to execute any of the commands._

In the project directory, you can run:

- `yarn start`: start the project in development mode (open [http://localhost:5000](http://localhost:5000) to view it in the browser)
- `yarn build`: build the app for production to the `build` folder

## Deploying to Skynet

1. run `yarn build` to build the app for production
2. visit [siasky.net](https://siasky.net) and click on "Do you want to upload entire directory?" to switch to directory upload mode
3. drag the `build` folder over the upload area (or click "Browse" and select the directory from the file browser window)

To learn more about Skynet, visit [siasky.net](https://siasky.net) official webpage.

## Contributing

If you feel you can help in any way, be it with documentation, examples, extra testing, or new features please open an [issue](https://github.com/ivan-selchenkov-otg/everything-note/issues) or [pull request](https://github.com/ivan-selchenkov-otg/everything-note/pulls).
If you have any questions feel free to open an [issue](https://github.com/ivan-selchenkov-otg/everything-note/issues) with your question.

## License
[MIT License](./LICENSE)
