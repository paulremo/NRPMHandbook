from setuptools import setup

# installation requirements
install_requires = [
    'pystra@git+https://github.com/pystra/pystra',
]

# modules to be installed with this package
py_modules = [
    'reliability',
    'booktools',
]

setup(
    name = 'nrpmint',
    version = '0.1',
    author = 'Paul-Remo Wagner',
    author_email = 'wagner@matrisk.com',
    py_modules = py_modules,
    install_requires = install_requires
)