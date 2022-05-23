from setuptools import setup, find_packages

# installation requirements
install_requires = [
    'pystra',
    'matplotlib'
]

setup(
    name = 'nrpmint',
    version = '0.1.0',
    author = 'Paul-Remo Wagner',
    author_email = 'wagner@matrisk.com',
    install_requires = install_requires,
    python_requires='>=3.8',
    packages = find_packages(exclude=['tests*'])
)
