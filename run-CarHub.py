# import subprocess
# import os
# import sys
# from threading import Thread


# def run_npm_module(selected_dir):
#     try:
#         subprocess.check_call(['npm', 'start'], cwd=selected_dir)
#         print(f"Front end started successfully")
#     except subprocess.CalledProcessError:
#         print(f"Front end failed to start")

# def run_in_virtualenv(commands, selected_dir):
#     try:
#         activate_cmd = 'source .venv/bin/activate && '
#         full_cmd = activate_cmd + ' && '.join(commands)
#         subprocess.check_call(full_cmd, shell=True, cwd=selected_dir)
#     except subprocess.CalledProcessError:
#         print("Failed to execute commands in the virtual environment.")

# current_file_path = os.path.abspath(__file__)  # project file destination
# front_file_path = os.path.join(os.path.dirname(current_file_path), 'project/carhub/src')
# back_file_path = os.path.join(os.path.dirname(current_file_path), 'backend')

# run_front_end = Thread(target=run_npm_module, args=(front_file_path,))
# run_back_end = Thread(target=run_in_virtualenv, args=(["python3", "manage.py", "runserver"], back_file_path))

# run_front_end.start()
# run_back_end.start()

# run_front_end.join()
# run_back_end.join()
