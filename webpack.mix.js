let mix = require('laravel-mix').mix;

mix.sass('resources/assets/sass/app.scss', 'public/css');
mix.js('resources/assets/js/pages/home.js', 'public/js')
   .js('resources/assets/js/pages/auth/login.js', 'public/js/auth')
   .js('resources/assets/js/pages/auth/register.js', 'public/js/auth');

// Projects
mix.js('resources/assets/js/pages/projects/single.js', 'public/js/projects')
   .js('resources/assets/js/pages/projects/tasks.js', 'public/js/projects')
   .js('resources/assets/js/pages/projects/messages.js', 'public/js/projects')
   .js('resources/assets/js/pages/projects/index.js', 'public/js/projects');

// Teams
mix.js('resources/assets/js/pages/teams/messages.js', 'public/js/teams');

// Offices
mix.js('resources/assets/js/pages/offices/messages.js', 'public/js/offices');

// Users
mix.js('resources/assets/js/pages/users/profile.js', 'public/js/users');

// Full API
// mix.js(src, output);
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.combine(files, destination);
// mix.copy(from, to);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public'); <-- Useful for Node apps.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.