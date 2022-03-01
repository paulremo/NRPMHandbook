# NRPMHandbook
Repository to store and track the development on the ADS/Matrisk project for developing a jupyter book of the NRPM handbook.

# Howto publish jupyter book
To publish a jupyter book, locally perform the following commands from the main branch root. The following were adapted from [this link](https://jupyterbook.org/start/publish.html)

First build the book HTML:
```
jupyter-book build 02_NRPMHandbook
```

Then go into the `02_NRPMHandbook` folder and push it to the pubslishing branch using the `ghp-import` utility:
```
ghp-import -n -p -f _build/html
```

The book is then published as a Git Page with the URL https://paulremo.github.io/NRPMHandbook/.
