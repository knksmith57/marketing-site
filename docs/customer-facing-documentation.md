# Writing customer facing documentation

Customer facing documentation lives in markdown files in the `content/docs` directory.

New files created there will automatically be published under the `roadie.io/docs/` path. For example, the `content/docs/getting-started/install-github-app.md` file is published as [roadie.io/docs/](https://roadie.io/docs/getting-started/install-github-app/).

Adding a markdown file does not automatically add it to the table of contents in the sidebar of the documentation. This must be done manually by editing `src/components/doc/Sidebar.js`.

