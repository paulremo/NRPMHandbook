from setuptools import setup

# installation requirements
install_requires = [
    'pystra@git+https://github.com/pystra/pystra',
    'matplotlib'
]

setup(
    name = 'nrpmint',
    version = '0.1',
    author = 'Paul-Remo Wagner',
    author_email = 'wagner@matrisk.com',
    install_requires = install_requires,
    packages = find_packages(exclude=['tests*'])
)