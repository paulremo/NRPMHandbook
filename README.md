# NRPMHandbook
Welcome to the repository that stores and tracks the development on the ADS/Matrisk project for developing a jupyter book of the NRPM digital handbook. The repository contains three subfolders.

- `01_Resources` This folder hosts general resources of the project such as shared documents, related project documentation, pictures, etc.
- `02_NRPMHandbook` This is the main folder for the digital handbook. All jupyter files are stored in this folder.
- `.binder` This folder holds the binder configuration, i.e. requirements for the binder kernels.

# FAQ

## Where is the book hosted?
By default, the book is automatically published and hosted on *readthedocs* at the alias URL http://nrpmhandbook.reliability.space/. The true URL is https://nrpmhandbook.readthedocs.io/. 

### GitHub pages
It is also possible to host the book on *GitHub Pages* with a URL https://paulremo.github.io/NRPMHandbook/. This needs to be done manually by following the procedure detailed next:

To publish a jupyter book, locally perform the following commands from the main branch root. The following were adapted from [this link](https://jupyterbook.org/start/publish.html)

First build the book HTML:
```
jupyter-book build 02_NRPMHandbook
```

Then push it to the pubslishing branch using the `ghp-import` utility:
```
ghp-import -n -p -f --cname=nrpmhandbook.reliability.space 02_NRPMHandbook\_build\html
```

The book is then published as a Git Page with the URL https://paulremo.github.io/NRPMHandbook/.

## How do bibliographies work?
The digital handbook uses a single `.bib` file to store all references. All global bibliography settings are set in the `_config.yml` file.

### General
Every chapter has its own bibliography that consists of two different reference types:
- **Normative references** are displayed in the *normative references* section of each chapter and are labeled as **NR_{EEE,MEC,MIS,SYS}_X** where X is a consecutive number.
- **Bibliographic references** are displayed in the *bibliographic references* section of each chapter and are labeled as **BR_{EEE,MEC,MIS,SYS}_X** where X is a consecutive number.

### How to cite?
Two different citation formats are supported: 
- ``{cite:t}`key` `` for paranthesis citations
- ``{cite:t}`key` `` for textual citations
 
The key is the key defined inside the `.bib` file but is additionally preceded by a prefix according to the chapter: `eee-`, `mec-`, `mis-`, or `sys-`. 

### How to define the bibliography?
Each chapter contains two separate bibliographies that are defined with the following commands:
````
# Normative References
```{bibliography}
:filter: keywords % "nr"
:labelprefix: NR_{EEE,MEC,MIS,SYS}_
:keyprefix: {eee-,mec-,mis-,sys-}
```
````
and
````
# Bibliographic References
```{bibliography}
:filter: keywords % "br"
:labelprefix: BR_{EEE,MEC,MIS,SYS}_
:keyprefix: {eee-,mec-,mis-,sys-}
```
````

### What to do if something goes wrong?
Delete the `_build` folder and rebuild the book from scratch. This can fix issues related to incorrect bibliographies.
 

## What about interactivity?
The digital handbook contains two types of interactive content: javascript-based and python-based content. The two are hosted and accessed differently:

- **Javascript** content is accessible directly through the browser without additional user-action. The source files are stored in `.js`, `.css`, and `.html` files inside the `_static` folder.
- **Python** content cannot be run on the browser and is instead launched by hovering over the :rocket: on top of the page and selecing *Live Code*. This launches a kernel provided by [mybinder](https://mybinder.org/) and shown in the browser with the [thebe](https://github.com/executablebooks/thebe) {term}`INTERFACE`. 

### Javascript configuration
Javascript-based interactivity is implemented in `.html` files inside the `_static` folder. Every interactive element has a dedicated `.html` file. These files are included in the jupyter-book through iframe tags. Javascript is used to resize the iframe to its content.

#### Javascript and CSS `_static` folder
The `_static` folder is included as a submodule in this repository. After cloning this repository to a local machine, the submodules have to be pulled seperately with
```
git submodule update --init --recursive
```
To update submodules at subsequent pulls, the following command has to be run from the main repository
```
git submodule update --remote
```
If changes in the submodule are pulled, they need to be committed to the main repository explicitly afterwards.


### Python configuration
The python-based content requires a package called `nrpmin` from a seperate [github repository](https://github.com/paulremo/NRPMInteractivity/). To launch thebe in the correct repository, special configuration options have to be passed to [sphinx-thebe](https://sphinx-thebe.readthedocs.io/en/latest/configure.html). These settings are stored in the `_config.yml` file of this repo.
