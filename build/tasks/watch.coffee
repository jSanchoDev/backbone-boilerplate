module.exports = ->
  @loadNpmTasks "grunt-contrib-watch"

  # This will watch the application for changes and automatically reload the
  # page using LiveReload.
  @config "watch",
    development:
      options:
        spawn: false
        livereload: true

      files: ["dist/development.js", "index.html", "package.json"]
      tasks: ["jshint"]
