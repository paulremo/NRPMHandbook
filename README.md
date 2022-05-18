# NRPMInteractivity
This is a repository that stores all files related to interactivity of the [NRPMHandbook repository](https://github.com/paulremo/NRPMHandbook). It has two branches:

- **python** the packages imported in python-based interactive pages. Thebe launches a mybinder kernel in this branch.
- **\_static** the `.css` and `.js` files that are placed inside the `_static` folder of the NRPMHandbook.

All development, testing, and maintainance related to these interactive features should be carried out on this repository.

## Local installation of nrpmint package
The package can be installed locally (e.g., for testing with jupyter notebook) by running the following command in the folder that contains the setup.py file:
```
pip install -e .
```
