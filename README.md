# Gulp4-Bootstrap-Starter-Template
Starter Template for Bootstrap 4 with Sass and Gulp4 task runer.

-	HTML templates with Panini. It compiles a series of HTML pages using a common layout. These pages can also include HTML partials, external Handlebars helpers, or external data as JSON.
-	Sass compilation, prefixing with Autoprefixer, and JavaScript concatenation
-	Built-in BrowserSync server - Will automatically reload your page when files are changed. 
-	Also add - CSS compression, JavaScript compression, Image compression


## Required

-	Node.js (v10.16.3 or greater). https://nodejs.org/en/download/ 
	Test: run ` node -v ` in the terminal
-	Npm.
-	Sass http://sass-lang.com/install 
	Test: run ` sass -v`  in the terminal
-	Gulpgulp (V4.0.2) – task runner
	`npm install -g gulp`
	Test: run `gulp -v ` in the terminal


## Installing:

1.	` cd `  into the Pattern Library and run ` npm install`  in your terminal - this command installs packages listed in the package.json file and any packages that it depends on. Packages are installed in the node_modules directory. 
a.	Please do not modifiy anything in the `node_modules directory`. Note: the node_modules directory is not kept in source control. 
2.	To start your project, make sure you are in the Pattern Library folder and run ` gulp `  to start the “default” gulp task and bring up the local BrowserSync server. This step will also create the dist folder for you, run the Gulp tasks specified in the gulpfile.js file, and watch for file changes. When changes are ready to be comiited, stop the default gulp task, and commit to source control. 
3.	Your finished static mini site will be created in a folder called dist, viewable at this URL:
http://localhost:3000 
4.	To create compressed, production-ready assets run `gulp build`. This will delete everything in the dist folder and recreate all of your complied files. Never make updates directly into the dist folder as these files get overridden each time. Note: The dist folder is not kept in source control. 


## Folder Structure:

- `dist/`: Compiled files. Note: Do not modify anything in this directory. Your changes will be overridden every time you run the build command. 
- `node_modules` Front-end dependencies.
- `src/` Folder contains all of your core, working files—static assets, pages, templates, etc. These assets are compiled to a distribution folder. This is a completely static HTML site. 
- `src/assets/` Sass files, JS files, images, and fonts go here.
- `src/layouts/` HTML layouts (templates).
- `src/pages/` Site pages.
- `src/partials/` Handlebars partials.
- `gulpfile.js` Task definitions.
- `package.json` Handles the front-end dependencies.


## Scss Folder Structure:

- `src/assets/scss/components/` This is where custom project components go. Import to app.scss folder.
- `src/assets/scss/mixins/` Custom mixins go here. Should be organized like components. 
- `src/assets/scss/pages/` Page specific overrides to components. This should be done sparingly. Think of generic UI elements rather than a page specific UI element. If used, these files should be much, much smaller than your component files -  20-30 lines max. Import to app.scss folder.
- `src/assets/scss/_base.scss` Allows you to set base common styles. Import to app.scss folder.
- `src/assets/scss/app.scss` This is where you will import your custom component files.


## Additional Resources:
- [Sass: Syntactically Awesome Style Sheets](http://sass-lang.com/)
- [Bootstrap](https://getbootstrap.com/)
<!-- - [Handlebars](http://handlebarsjs.com/) -->
- [Panini](https://github.com/zurb/panini) 
- [Gulp](https://gulpjs.org/getting-started)
