<h1 align="center">
  <br />
  <img src="https://raw.githubusercontent.com/dsrkafuu/vscode-theme-aofuji/main/src/icon.png" alt="logo" width="128" />
  <br /><br />
  Aofuji Light Theme
  <br /><br />
</h1>

<h4 align="center">A minimal light theme extended from Aofuji.</h4>

<p align="center">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/dsrkafuu/vscode-theme-aofuji/test">&nbsp;<img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/dsrkafuu/vscode-theme-aofuji">&nbsp;<img alt="GitHub" src="https://img.shields.io/github/license/dsrkafuu/vscode-theme-aofuji">
</p>

## Preview

<p align="center">
  <img alt="Preview" src="https://raw.githubusercontent.com/dsrkafuu/vscode-theme-aofuji/main/src/preview.png">
</p>

## Usage

Install directly in [Aofuji Light Theme - VS Marketplace](https://marketplace.visualstudio.com/items?itemName=dsrkafuu.vscode-theme-aofuji).

Or use:

```bash
ext install dsrkafuu.vscode-theme-aofuji
```

The theme is recommended to be used with icons from [Material Icon Theme](https://github.com/PKief/vscode-material-icon-theme).

The [default enabled bracket pair colorization feature](https://code.visualstudio.com/updates/v1_67#_bracket-pair-colorization-enabled-by-default) after VSCode 1.67 may makes the theme looks bad. Disable it manually when using the theme is recommended since there is no way to disable it by theme maker currently. Check out [this issue](https://github.com/microsoft/vscode/issues/148859) for more details.

## Theme Status

The theme is still in beta testing, so the color adjustment of some modules may have imperfections; syntax highlighting has been tested in HTML, JavaScript, CSS and Markdown files, if you encounter problems in other languages, please [raise an issue](https://github.com/dsrkafuu/vscode-theme-aofuji/issues).

If you have suggestions on how to improve the theme, please also [raise an issue](https://github.com/dsrkafuu/vscode-theme-aofuji/issues) or [add a pull request](https://github.com/dsrkafuu/vscode-theme-aofuji/pulls).

## Development

Clone the repository, install deps and start dev server:

```bash
git clone https://github.com/dsrkafuu/vscode-theme-aofuji.git
cd vscode-theme-aofuji
npm install
npm run dev
```

Then open the folder with VSCode:

- Press `F5` to open a new window with theme loaded
- Open `File > Preferences > Color Themes` and pick color themes

When opening a file that has a language associated. The languages' configured grammar will tokenize the text and assign 'scopes' to the tokens. To examine these scopes, invoke the `Inspect Editor Tokens and Scopes` command from the Command Palette.

Open VSX Registry:

```bash
npx ovsx publish <file> -p <token>
```

## License

The theme is released under the `Mozilla Public License 2.0`, for more information read the [LICENSE](https://github.com/dsrkafuu/vscode-theme-aofuji/blob/main/LICENSE).

```

```
