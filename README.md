# CarHub
A webpage project worked on by Leonardo Roacho, Jacob Hosburg, Gerardo Cerpa, Anthony Vasquez and Jarrod Rowson for CompE 561 - Summer 2023. The webpage utilizes React,Bootstrap and Django in order to provide the user with
a webpage that serves as a community hub for car enthusiasts in which they can purchase car parts and join and message groups they are interested in.
 ---

 ## Requirements to run
Packages neccessary to run:

**NPM/NodeJS**
  1. react-scripts
  2. @coreui/coreui
  3. @coreui/react

**Virtual Environment Python**
  1. django
  2. djangorestframework
  3. django-cors-headers

 ---
 
## How to Run
There are currently two ways to running the webpage. Both will consist of installing the packages mentioned previosuly. In order to make things easier, we have coded a script Install.py that installs the necessary packages for you in order to run the website locally.

### Running as User
If you wish to run the website to view it as a user, you can run the script Run_as_user.py in which it will invoke the backend server as well as the front end react code to run the website locally. Note that the script will not work using powershell on Windows but will work when using Anacaonda on Windows.

### Running the Webpage(admin)
If you wish to run the webpage while being able to view what's going on in the back end you will want to follow these steps:
  1. Open two terminal tabs open to the project directory
  2. In terminal A - Change the directory to `/CarHub/backend` and initaite the virtual environment via `. .env/bin/activate` or `activate`
  3. In terminal A - Run  `python3 manage.py --runserver`. This will run the backend of the website
  4. In terminal B - Change the direcotry to `/CarHub/project/carhub/src`
  5. In terminal B - Run `npm start` to start the front end of the website 
 ---
 ## Demo
 A demo of the website project is provided down below:
[![Watch the video](https://img.youtube.com/vi/iwTnO9rJjpY/maxresdefault.jpg)](https://youtu.be/iwTnO9rJjpY)




