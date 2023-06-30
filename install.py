
import subprocess
import os
import sys


def install_npm_module(module_name,selected_dir):
    try:
        subprocess.check_call(['npm', 'install', module_name], cwd=selected_dir)
        print(f"Successfully installed npm module: {module_name}")
    except subprocess.CalledProcessError:
        print(f"Failed to install npm module: {module_name}")


def run_in_virtualenv(commands,selected_dir):
    try:
        activate_cmd = '. .venv/bin/activate && '
        full_cmd = activate_cmd + ' && '.join(commands)
        subprocess.check_call(full_cmd, shell=True,cwd=selected_dir)
    except subprocess.CalledProcessError:
        print("Failed to execute commands in the virtual environment.")
    


current_file_path = os.path.abspath(__file__) ##project file destination

dest_file_path = os.path.join(os.path.dirname(current_file_path), 'project/carhub')
install_npm_module("react-scripts --save",dest_file_path)
install_npm_module("@coreui/coreui",dest_file_path)
install_npm_module("@coreui/react",dest_file_path)


dest_file_path = os.path.join(os.path.dirname(current_file_path), 'backend')
virtualenv_commands = [
    'pip install django',
    'pip install djangorestframework',
    'pip install django-cors-headers'
]
run_in_virtualenv(virtualenv_commands,dest_file_path)
