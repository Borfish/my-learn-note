# git仓库教程

发明初衷：代码版本管理。分布式版本控制。

### 基本操作

`git init` ：建库				

`git status`：查看当前藏库状态				

`gti diff`：查看尚未提交的内容和已提交版的区别（不会显示暂存区，如果要比较暂存区和已提交区则需要添加`--staged`）后续也可也添加两个HEAD或者哈希指针比较两次提交

`git log`：查询版本迭代的历史记录（参数 --pretty=oneline可以简化输出）前面的长串16进制数未版本号（`--grep`：搜索提交的注释，支持正则表达式）

`git log --oneline`：查看提交历史

`git log --pretty=format:'%h: %s'`：简化输出格式，只有哈希值和注释

`git show`：查看每次提交中所作的更改。

`.gitignore`：是一个文件，放在git的根目录，如果使用就代表会忽略一些文件的提交，里面写法一般为正则表达式。

`git rm`：删除工作区文件，并且将这次删除放入暂存区。

HEAD当前版本	HEAD^上个版本	HEAD~x:上x个版本	

`git reset`：如果直接使用git reset会把文件从暂存区转置工作区

`git reset --hard HEAD^`：回到上一个版本

下图为版本更新原理，如果从过去版本恢复到现在版本需要知道版本号，可以用git reflog（记录每一次命令）来查询版本号

![image-20220511024535916](C:\Users\borfish\AppData\Roaming\Typora\typora-user-images\image-20220511024535916.png)	

`git checkout`：撤消工作目录中的更改，将工作目录中的所有内容替换为最后提交的版本。可以表示某个文件，也可也用.表示当前目录

`git revert`：允许撤消提交，该命令将创建一个新的提交，该提交具有与要还原的提交相反的效果。

`git rebase -i [startPonit] [endPoint]`：这里的 [startPonit] 是指需要合并的commit的前一个commit的哈希值。接着会进入Interact，一般是把要修改的pick改为s，最后是commit记录，可以把除第一个以外的信息注释即可。注意，可合就可拆

`git rebase --interactive --root`：可以使用这个进入交互模式（Interact）

`git blame <file>`：显示最后修改文件的每一行的版本和作者，可以使用-L参数一系列要输出的行

![image-20220519205430990](C:\Users\borfish\AppData\Roaming\Typora\typora-user-images\image-20220519205430990.png)





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

`git branch -va`：列出所有分支和其最后提交的内容

`git branch -d <branch_name>`：删除一个分支

`git branch name`：创建name名字的分支

`git checkout name`：切换至name名字分支

`git checkout -b name`：创建并切换至name分支

`git merge dev`：将dev分支合并到当前分支

`git rebase master`：将当前的分支的基底更换至master的最新分支。

`git cherry-pick G`：将分支G提交应用到当前分支，G可以是老版本（不是合并，是提交）

![image-20220520013128931](C:\Users\borfish\AppData\Roaming\Typora\typora-user-images\image-20220520013128931.png)

`git cherry-pick --abort`：放弃合并，恢复操作前的样子完成冲突后可以把参数改为--continue

