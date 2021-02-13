# Current

## Setup:

for django:
cd source/django
python3 -m venv env
source env/bin/activate
pip install -r pip_pkgs.txt

for react:
cd source/react
npm i

for express:
cd source/express
npm i


Then to run the app run each in separate terminals:
cd source/django & python3 manage.py runserver
cd source/express & npm start
cd source/react & npm start

then go to localhost:3000 in your browser

theres a bug when handling post request that i believe is because the react fronted is not built into static files for django ,  this broke because i changed directories to have the project more organized and cleaner , i'll fix that later