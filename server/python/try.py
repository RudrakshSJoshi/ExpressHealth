import os

path = '/home/pratham/Development/Projects/ExpressHealth/express-health/client/src/utils/oct/normal_retina'

# Get a list of all files in the directory
files = os.listdir(path)

# Sort the files to ensure they are processed in order
files.sort()

# Rename each file in the directory
for i, file_name in enumerate(files, start=1):
    # Generate the new file name
    new_file_name = f'{i}.jpeg'
    # Construct the full path for the old and new file names
    old_file_path = os.path.join(path, file_name)
    new_file_path = os.path.join(path, new_file_name)
    # Rename the file
    os.rename(old_file_path, new_file_path)
    print(f'Renamed {file_name} to {new_file_name}')
