#!/bin/sh
 
git filter-branch --env-filter '
 
an="$GIT_AUTHOR_NAME"
am="$GIT_AUTHOR_EMAIL"
cn="$GIT_COMMITTER_NAME"
cm="$GIT_COMMITTER_EMAIL"
 
if [ "$GIT_COMMITTER_EMAIL" = "ouyangxiayu@m24.cn" ]
then
    cn="[龙骑将杨影枫]"
    cm="[catwindboy@hotmail.com]"
fi
if [ "$GIT_AUTHOR_EMAIL" = "ouyangxiayu@m24.cn" ]
then
    an="龙骑将杨影枫"
    am="catwindboy@hotmail.com"
fi
 
export GIT_AUTHOR_NAME="$an"
export GIT_AUTHOR_EMAIL="$am"
export GIT_COMMITTER_NAME="$cn"
export GIT_COMMITTER_EMAIL="$cm"
'