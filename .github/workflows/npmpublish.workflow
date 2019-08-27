workflow "Build, Test, and Publish" {
  on = "push"
  resolves = ["Publish"]
}

action "Publish" {
  uses = "actions/npm@master"
  args = "publish --access public"
  secrets = [
    "NPM_AUTH_TOKEN",
  ]
}
