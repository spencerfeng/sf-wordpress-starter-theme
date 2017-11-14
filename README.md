SF WordPress Starter Theme
===

This is a WordPress starter theme built on top of Underscores theme. 

Including the goodies from Underscores, it also includes following things:
* It has a custom workflow in Gulp which helps process sass and js and it enable browser sync.
* It includes the responsive grid system from Bootstrap 3.
* It contains Font Awesome library.
* It has the code to help integrate Visual Composer.
* It contains the PHP library BFI_Thumb to manipulate images.
* It contains the jQuery library 'Slick' to create responsive carousels/sliders.
* It utilises Basscss css utility library.

Getting Started
---------------

Download `SF WordPress Starter Theme` from GitHub. The first thing you want to do is copy the `sf-wordpress-starter-theme` directory and change the name to something else (like, say, `my-awesome-theme`), and then you'll need to do a five-step find and replace on the name in all the templates.

1. Search for `'sf-wordpress-starter-theme'` (inside single quotations) to capture the text domain.
2. Search for `_sf_wordpress_starter_theme_` to capture all the function names.
3. Search for `Text Domain: sf-wordpress-starter-theme` in resources/sass/style.scss.
4. Update browsersync proxy in gulpfile.js to your server.
5. Run 'npm install' to install javascript packages. 

Then, update the stylesheet header in `style.css` and the links in `footer.php` with your own information. Next, update or delete this readme.

License
---------------

Copyright (c) 2017 Spencer Feng

Licensed under the GPLv2 or later.
