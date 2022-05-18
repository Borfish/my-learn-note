# git仓库教程

发明初衷：代码版本管理。分布式版本控制。

### 基本操作

`git init` ：建库				

`git status`：查看当前藏库状态				

`gti diff`：查看尚未提交的内容和已提交版的区别（不会显示暂存区，如果要比较暂存区和已提交区则需要添加`--staged`）	

`git log`：查询版本迭代的历史记录（参数 --pretty=oneline可以简化输出）前面的长串16进制数未版本号（`--grep`：搜索提交的注释，支持正则表达式）

`git show`：查看每次提交中所作的更改。

`.gitignore`：是一个文件，放在git的根目录，如果使用就代表会忽略一些文件的提交，里面写法一般为正则表达式。

`git rm`：删除工作区文件，并且将这次删除放入暂存区。

HEAD当前版本	HEAD^上个版本	HEAD~x:上x个版本	

git reset --hard HEAD^：回到上一个版本

下图为版本更新原理，如果从过去版本恢复到现在版本需要知道版本号，可以用git reflog（记录每一次命令）来查询版本号

![image-20220511024535916](C:\Users\borfish\AppData\Roaming\Typora\typora-user-images\image-20220511024535916.png)	

### 基本概念

**工作区**：电脑中的目录就是工作区

**版本库**：版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支`master`，以及指向`master`的一个指针叫`HEAD`。![git-repo](https://www.liaoxuefeng.com/files/attachments/919020037470528/0)	     

​		git add的时候是吧文件修改添加到暂存区，git commit是提交到当前分支。同时，git跟踪的是修改，而非文件，如果修改过后没有add就不会commit到仓库中

​	`git checkout -- file`：把readme.txt文件在工作区的修改全部撤回

​	`git reset HEAD <file>`：把暂存区的修改撤销掉，重新放回工作区

​	`rm file`：删除工作区file文件	`git rm file`从版本库中删除文件	如果工作区删错了可以用`git checkout -- file` 恢复该文件

### 远程仓库

第一步，新建一个远程仓库，按照github的指示运行代码`git remote add origin https://github.com/Borfish/demo.git`，origin代表远程仓库名字。

第二步，上传至仓库，`git push -u origin master`，把本地库内容推送到远程库上，用`git push`命令,第一个是远程仓库的好友名称，第二个是分支名称，实际上是把当前分支`master`推送到远程。

`git pull`：允许将远程仓库的更改同步到本地版本

`git fetch <远程主机名>`：将某个远程主机的更新，全部取回本地

`git fetch <远程主机名> <分支名>`：取回特定分支的更新

`git fetch origin master`：取回的更新，在本地主机上要用"远程主机名/分支名"的形式读取。比如origin主机的master，就要用origin/master读取；

由于远程库是空的，我们第一次推送`master`分支时，加上了`-u`参数，Git不但会把本地的`master`分支内容推送的远程新的`master`分支，还会把本地的`master`分支和远程的`master`分支关联起来，在以后的推送或者拉取时就可以简化命令。

从现在起，只要本地作了提交，就可以通过命令：

```
$ git push origin master
```

把本地`master`分支的最新修改推送至GitHub。

`git remote -v`：查看远程库信息。

`git remote rm <name>`：删除名字为name的远程库

`git clone`：从远程仓库上克隆出一个本地库，用ssh和http都可以，但是ssh最快

### 分支管理

主要操作为创建分支、切换分支、合并分支、删除分支

`git branch`：查看当前git的现有分支

`git branch name`：创建name名字的分支

`git checkout name`：切换至name名字分支

`git checkout -b name`：创建并切换至name分支



