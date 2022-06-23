# project-tree

## Features

Install the plugin, press ctrl+shift+p and enter Project Tree to enter.
Generate a tree structure of the project in README.md.

## Extension Settings

settings:

- `ProjectTree.theme`: Set tree's outlook
- `ProjectTree.withComment`:Set whether you can add comments at the end of the line.
- `ProjectTree.commentDistance`:set the distance between the comment and the longest title,the minimum is 1
- `ProjectTree.loadIgnore`:Set whether you can ignore the .gitignore rules's containing files.

---

## example

```
project-tree
├─ .git
├─ .gitignore
├─ .vscode
│  ├─ extensions.json
│  ├─ launch.json
│  ├─ settings.json
│  └─ tasks.json
├─ .vscodeignore
├─ CHANGELOG.md
├─ dist
│  ├─ extension.js
│  └─ extension.js.map
├─ images
│  └─ tree-icon.jpg
├─ node_modules
├─ out
│  ├─ extension.js
│  ├─ extension.js.map
│  ├─ index.js
│  ├─ index.js.map
│  ├─ operate.js
│  ├─ operate.js.map
│  ├─ test
│  │  ├─ extension.test.js
│  │  ├─ extension.test.js.map
│  │  ├─ index.js
│  │  └─ index.js.map
│  ├─ traverse.js
│  ├─ traverse.js.map
│  └─ type
│     ├─ index.js
│     └─ index.js.map
├─ package-lock.json
├─ package.json
├─ src
│  ├─ config.ts
│  ├─ extension.ts
│  ├─ ignore
│  │  └─ index.ts
│  ├─ ignore.ts
│  ├─ index.ts
│  ├─ test
│  │  ├─ extension.test.ts
│  │  └─ index.ts
│  ├─ theme
│  │  ├─ index.ts
│  │  ├─ normal.ts
│  │  └─ perfect.ts
│  ├─ traverse.ts
│  ├─ type
│  │  └─ index.ts
│  └─ utils.ts
├─ tsconfig.json
├─ tslint.json
└─ webpack.config.js

```

**Enjoy!**

```
project-tree
├─ .git
│  ├─ HEAD
│  ├─ branches
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-883589b3764061df07bcd99d21b7178a9cf13c87.idx
│  │     └─ pack-883589b3764061df07bcd99d21b7178a9cf13c87.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ .vscode
│  ├─ extensions.json
│  ├─ launch.json
│  ├─ settings.json
│  └─ tasks.json
├─ .vscodeignore
├─ CHANGELOG.md
├─ README.md
├─ images
│  └─ tree-icon.jpg
├─ package-lock.json
├─ package.json
├─ src
│  ├─ config.ts
│  ├─ extension.ts
│  ├─ ignore
│  │  └─ index.ts
│  ├─ ignore.ts
│  ├─ index.ts
│  ├─ test
│  │  ├─ extension.test.ts
│  │  └─ index.ts
│  ├─ theme
│  │  ├─ index.ts
│  │  ├─ normal.ts
│  │  └─ perfect.ts
│  ├─ traverse.ts
│  ├─ type
│  │  └─ index.ts
│  └─ utils.ts
├─ tsconfig.json
├─ tslint.json
└─ webpack.config.js

```
