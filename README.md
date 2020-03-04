# Starter Template for Bootstrap 4 with Sass and Gulp4 task runer

-	HTML templates with Panini. It compiles a series of HTML pages using a common layout. - [Panini](https://github.com/zurb/panini) 

-	Sass compilation - [gulp-sass](https://www.npmjs.com/package/gulp-sass)
-   prefixing with gulp-autoprefixer using browserslistrc, and JavaScript concatenation - 	 [gulp-autoprefixer](https://www.npmjs.com/package/)
-	Built-in BrowserSync - Will automatically reload your page when files are changed.  - [browser-sync](https://browsersync.io/docs/gulp)
-	CSS compression - [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano)
-   JavaScript compression - [gulp-minify](https://www.npmjs.com/package/gulp-minify)
-	Image compression - [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
-   Delete files and directories [del](https://www.npmjs.com/package/del)
-   Sourcemaps- Mapping code within a compressed file back to it's original position in a source file[gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)


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

2.	To start your project run ` gulp `. This step will also create the dist folder. Run the ` gulp watch ` gulp task and bring up the local BrowserSync server and watch for file changes. When changes are ready to be comiited, stop the gulp task, and commit to source control. 

3.	Your finished static mini site will be created in a folder called dist, viewable at this URL:
http://localhost:3000 

4.	To create compressed, production-ready assets run `gulp build`. This will delete everything in the dist folder and recreate all of your complied files. Never make updates directly into the dist folder as these files get overridden each time. Note: The dist folder is not kept in source control. 


## Folder Structure:

- `dist/`: Compiled files. Note: Do not modify anything in this directory. Your changes will be overridden every time you run the build command. 
- `node_modules` Front-end dependencies.
- `src/` Folder contains all of your core, working files—static assets, pages, templates, etc. These assets are compiled to a distribution folder. This is a completely static HTML site. 
- `src/assets/` Sass files, JS files, images, videos and fonts.
- `src/layouts/` HTML layouts (templates).
- `src/pages/` Site pages.
- `src/partials/` Handlebars partials.
- `gulpfile.js` Task definitions.
- `package.json` Handles the front-end dependencies.


## Scss Folder Structure:
- `src/assets/scss/bootstrap` This is where boostrap variables go.
- `src/assets/scss/components/` This is where custom project components go. Import to app.scss folder.
- `src/assets/scss/mixins/` Custom mixins go here. Should be organized like components. 
- `src/assets/scss/pages/` Page specific overrides to components.
- `src/assets/scss/_base.scss` Allows you to set base common styles. Import to app.scss folder.
- `src/assets/scss/variables.scss` Your custom variables and imported the bootstrap variables.
- `src/assets/scss/app.scss` This is where you will import your custom component files.


## Resources:

- [Bootstrap](https://getbootstrap.com/)
- [Gulp](https://gulpjs.org/getting-started)
- [Sass] (https://sass-lang.com/)
