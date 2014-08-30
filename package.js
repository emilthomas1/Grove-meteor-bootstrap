Package.describe({
  summary: "Highly configurable bootstrap integration.",
  version: "3.2.0",
  name: "nemo64:bootstrap"
  git: "https://github.com/Nemo64/meteor-bootstrap"
});


Package._transitional_registerBuildPlugin({
  name: 'bootstrap-configurator',
  use: ['underscore'],
  sources: [
    'modules.js',
    'distributed-configuration.js',
    'bootstrap-configurator.js'
  ],
  npmDependencies: {}
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR-CORE@0.9.0");
  api.use(['jquery'], 'client');

  // Everything after this point is generated by the build-package.sh 
  // AUTOGENERETED

  // fonts
  api.add_files('bootstrap/fonts/glyphicons-halflings-regular.eot', 'client');
  api.add_files('bootstrap/fonts/glyphicons-halflings-regular.svg', 'client');
  api.add_files('bootstrap/fonts/glyphicons-halflings-regular.ttf', 'client'); 
  api.add_files('bootstrap/fonts/glyphicons-halflings-regular.woff', 'client');
});
