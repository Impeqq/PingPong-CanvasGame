#!/bin/sh

git commit -am "Save uncommited changes (WIP)"
git branch --delete --force gh-pages
git checkout --orphan gh-pages
git add -f build
git commit -m "Rebuild GitHub pages"
git filter-branch -f --prune-empty --subdirectory-filter build && git push -f origin gh-pages && git checkout master