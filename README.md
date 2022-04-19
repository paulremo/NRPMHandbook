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

Then push it to the pubslishing branch using the `ghp-import` utility:
```
ghp-import -n -p -f 02_NRPMHandbook/_build/html
```

The book is then published as a Git Page with the URL https://paulremo.github.io/NRPMHandbook/.

## Where is the book hosted?
The book is hosted on *GitHub Pages*. 

## What about interactivity?
The handbook contains two types of interactive content: javascript-based and python-based content. The two are hosted and accessed differently:

- **Javascript** content is accessible directly through the browser without additional user-action. The source files are stored in `.js` files inside the `_static` folder.
- **Python** content cannot be run on the browser and is instead launched by hovering over the :rocket: on top of the page and selecing *Live Code*. This launches a kernel provided by [mybinder](https://mybinder.org/) and shown in the browser with the [thebe](https://github.com/executablebooks/thebe) interface. 

### Python configuration
The python-based content requires a package called `nrpmin` from a seperate [github repository](https://github.com/paulremo/NRPMInteractivity/). To launch thebe in the correct repository, special configuration options have to be passed to [sphinx-thebe](https://sphinx-thebe.readthedocs.io/en/latest/configure.html). These settings are stored in the `_config.yml` file of this repo.

### Javascript and CSS `_static` folder
The `_static` folder is included as a submodule in this repository. After cloning this repository to a local machine, the submodules have to be pulled seperately with
```
git submodule update --init --recursive
```
To automatically update submodules at subsequent pulls, the following option has to be set
```
git config --global submodule.recurse true
```
