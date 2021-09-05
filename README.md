# Current

We wanted to make it easier to meet people with like minded interests, get better notifications, and make conversation discovery easier. So we built an enabling technology. Current it's a mix between a conferencing app and a social network. Conversations are passed through a machine learning model that classifies the topic as the conversations goes along. Then people can discover chat rooms based on real time search of the conversation. We used Twillio's programmable video REST api to achieve smooth video calling.

![Alt text](/source/react/public/wave.png?raw=true "wave")


## Demo:
[![Demo](http://img.youtube.com/vi/KKZ_ZphVnhQ/0.jpg)](http://www.youtube.com/watch?v=KKZ_ZphVnhQ "Treehacks 2021 Submission")

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

## Credits
- [Anastasia Spangler](https://devpost.com/anastasiaspangler)
- [Aimee Tran](https://www.linkedin.com/in/aimeetran/)
- [Luis Cermeno](https://www.linkedin.com/in/luis-cermeno-a90338206/)
- [Justin Ngai](https://justinngai.me/)
