A sample angular game, ready to be uploaded to itch.io
-----------------------
Requirements:

Node.js and npm

Installation:

```
npm install
```

To start the game:

```
npm start
```
(website will be at http://localhost:3000)

To build the game:

```
npm run build
```

Dev mode, with auto reload:

```
npm run dev
```
(website will be at http://localhost:3000)

To create the zip bundle for itch.io:

```
npm run deploy
```

Uploading the project to itch.io
--------------------------------
Create a new project:
 - Set 'kind of project' to HTML
 - Uploads: select the 'bundle.zip' file
 - Tick the 'This file will be played in browser' flag

Embed options:
 - Viewport dimensions - match them to what you've set the content div's size to in
 styles/main.css (1024x768 by default)


