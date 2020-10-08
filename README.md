# TodoMVC Rails 6 app for the MAS-RAD 2020

[![Rails Test Action Status](https://github.com/mas-rad/todomvc-rails-2020/workflows/Rails%20Test/badge.svg)](https://github.com/mas-rad/todomvc-rails-2020/actions?query=workflow%3Atest)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/mas-rad/todomvc-rails-2020)

This [TodoMVC](http://todomvc.com) application written in Rails 6 with [Turbolinks](https://github.com/turbolinks/turbolinks) and [Stimulus](https://stimulusjs.org) is used as a learning tool in the context of the [Master of Advanced Studies in Rapid Application Development (MAS-RAD)](https://www.mas-rad.ch/) in the [CAS-DAS](https://www.he-arc.ch/ingenierie/mas-rad-cas-dar) [Frameworks module](https://rs.he-arc.ch/docs/RS530.40.19.204.pdf).


## Getting started

1. Start a workspace on Gitpod by clicking on the [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/mas-rad/todomvc-rails-2020) badge.
2. Fork the `mas-rad/todomvc-rails-2020` repository to your own GitHub account from your Gitpod workspace. More info: https://www.gitpod.io/docs/fork-a-repo
3. From a terminal in your Gitpod workspace ensures that `git remote -v` includes both an `origin` remote pointing to your fork and an `upstream` remote pointing to `mas-rad/todomvc-rails-2020`.
4. You are ready! :tada:

## Working on an exercise

Ensure that you gave the "write public repos" to Gitpod.io on: https://gitpod.io/access-control/

1. Update your `upstream` remote with: `git fetch upstream`
2. Optional, list available remote branch with: `git branch --remote`
3. Create a new `exercise-XX` branch from the remote branch with `git checkout -b exercise-XX upstream/exercise-XX`
4. Do the exercise and ensure that all tests are green with `bin/rails test test/*`
5. Commit your changes
6. Push your `exercise-XX` branch to your `origin` with: `git push origin`
7. Visit [mas-rad/todomvc-rails-2020](https://github.com/mas-rad/todomvc-rails-2020) and open a pull request

## Author

[Thibaud Guillaume-Gentil](https://thibaud.gg) ([@thibaudgg](https://github.com/thibaudgg))
