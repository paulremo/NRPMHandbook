:: Batch script to publish the jupyter book online
:: start anaconda promp
call C:\ProgramData\Anaconda3\Scripts\activate.bat
:: activate 2021_13 environment
call conda activate 2021_13
:: go to the base folder of the jupyter book
cd C:\Users\Paul\Documents\Projects\2021\13_ESA\11_Code\01_JupyterBook
:: remove the _build folder from previous builds
rmdir /S /Q 02_NRPMHandbook\_build
:: build the jupyter book HTMLs
jupyter-book build 02_NRPMHandbook
:: push them to the ghp-branch with the ghp-import program
ghp-import -n -p -f --cname=nrpmhandbook.reliability.space 02_NRPMHandbook\_build\html
:: leave anaconda prompt (twice to get out of (base) environment as well
call conda deactivate
call conda deactivate