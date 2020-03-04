# Starter Template for Bootstrap 4 with Sass and Gulp4 task runer

-	HTML templates with Panini. It compiles a series of HTML pages using a common layout. - [Panini](https://github.com/zurb/panini) 

-	Sass compilation - [gulp-sass](https://www.npmjs.com/package/gulp-sass)
-   Prefixing with gulp-autoprefixer using browserslistrc, and JavaScript concatenation - 	 [gulp-autoprefixer](https://www.npmjs.com/package/)
-	Built-in BrowserSync - Will automatically reload your page when files are changed.  - [browser-sync](https://browsersync.io/docs/gulp)
-	CSS compression - [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano)
-   JavaScript compression - [gulp-minify](https://www.npmjs.com/package/gulp-minify)
-	Image compression - [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
-   Delete files and directories - [del](https://www.npmjs.com/package/del)
-   Sourcemaps- Mapping code within a compressed file back to it's original position in a source file - [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)


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

1.	` npm install`  installs packages listed in the package.json. Packages are installed in the node_modules folder. 

2.	To start project ` gulp ` to create the dist folder. And run the ` gulp watch ` task runs local BrowserSync server and watch for file changes. 

3.	Your project can view on this URL: http://localhost:3000 . You can change inside the gulpfile.js ` port: 3000`.

4.	Run `gulp`. This will delete all files in the dist folder and recreate all of your complied files.  


## Folder Structure:

- `dist/`: Compiled files 
- `node_modules` Installed Front-end dependencies.
- `src/` Folder contains all of your core files. 
- `src/assets/` Sass files, JS files, images, videos and fonts.
- `src/layouts/` HTML layouts.
- `src/pages/` HTML site pages.
- `src/partials/` HTML site partials.
- `gulpfile.js` Task function definitions.
- `package.json` Front-end dependencies.


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
- [Sass](https://sass-lang.com/)
