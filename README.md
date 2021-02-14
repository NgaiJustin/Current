# Current

We wanted to make it easier to meet people with like minded interests, get better notifications, and make conversation discovery easier. So we built an enabling technology. Current it's a mix between a conferencing app and a social network. Conversations are passed through a machine learning model that classifies the topic as the conversations goes along. Then people can discover chat rooms based on real time search of the conversation.

![Alt text](/source/react/public/wave.png?raw=true "wave")

## Setup:

**setup django:**
cd source/django
python3 -m venv env
source env/bin/activate
pip install -r pip_pkgs.txt

**setup react:**
cd source/react
npm run dev



**Run each processes in separate terminals:**
cd source/django & python3 manage.py runserver
cd source/express & npm run dev

**Go localhost:3000 in your browser**
