#! /bin/bash
echo "executing chmod 777 * -R"
chmod 777 * -R
echo "git commands about to execute"
echo '$0 comments are  --> ' $0
echo '$1 is --> ' $1
echo '$2 is --> ' $2
echo '----------------------------'
git add * -f
git commit -m "$1" 
git push -u origin master
