# NRPMHandbook
Welcome to the repository that stores and tracks the development on the ADS/Matrisk project for developing a jupyter book of the NRPM handbook. The repository contains three subfolders.

- `01_Resources` This folder hosts general resources of the project such as shared documents, related project documentation, pictures, etc.
- `02_NRPMHandbook` This is the main folder for the handbook. All jupyter files are stored in this folder.
- `03_PythonDev` This is the folder where pure python development files (e.g., for the interactive part of the notebook) can be stored. Ideally, code would be developed inside this folder and then copied to the jupyter notebook only for UI considerations.
- `.binder` This folder holds the binder configuration, i.e. requirements for the binder kernels.

# FAQ

## How to publish the jupyter book?
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

## Where is the book hosted?
The book is hosted on *GitHub Pages*. 

## How to access interactive content?
There are two ways to access interactive content:

- **Binder** by hovering over the :rocket: on top of the page and selecing *Binder*. This will open the current site of the Jupyer Book on https://mybinder.org.
- **Thebe** by hovering over the :rocket: on top of the page and selecing *Live Code*. *Thebe* will then start a mybinder kernel and embed it directly in the Jupyter Book. 
