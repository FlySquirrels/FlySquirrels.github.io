(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{318:function(s,n,a){"use strict";a.r(n);var t=a(14),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"shell-git实现自动化构建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shell-git实现自动化构建"}},[s._v("#")]),s._v(" "),n("center",[s._v(" Shell + Git实现自动化构建 ")])],1),s._v(" "),n("h2",{attrs:{id:"前提要求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前提要求"}},[s._v("#")]),s._v(" 前提要求")]),s._v(" "),n("p",[s._v("本篇文章以当前文档项目为例，所需软件可根据需要修改"),n("br"),s._v("\n假设你对以下技术有一定的了解,这里就不做入门安装介绍")]),s._v(" "),n("ul",[n("li",[s._v("Git v2.30.2")]),s._v(" "),n("li",[s._v("GitHub or Gitee")]),s._v(" "),n("li",[s._v("需要生成密钥,添加到本地,再将公钥上传gitee/github")]),s._v(" "),n("li",[s._v("Nginx v1.18.0")]),s._v(" "),n("li",[s._v("Node v12.22.12")]),s._v(" "),n("li",[s._v("npm v7.5.2")])]),s._v(" "),n("h2",{attrs:{id:"项目案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目案例"}},[s._v("#")]),s._v(" 项目案例")]),s._v(" "),n("p",[s._v("创建资源")]),s._v(" "),n("ul",[n("li",[s._v("node项目创建")]),s._v(" "),n("li",[s._v("github远程仓库创建")]),s._v(" "),n("li",[s._v("ngix配置读取node打包的dist文件夹")])]),s._v(" "),n("p",[s._v("编写自动化脚本📋📋📋")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#该脚本请求版本是否更新，如果更新项目拉取编译")]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化才配置仓库地址和克隆仓库")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置仓库地址")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REPO_URL")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git@github.com:xxxx/xxxx.git"')]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化拉取时被更改而不合并")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#git config pull.rebase true")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 克隆仓库")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#git clone $REPO_URL")]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入仓库目录")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /xxx/xx/xxx\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化变量，用于记录上次提交的哈希值")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LAST_COMMIT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 无限循环，检测仓库变化")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取当前最新提交的哈希值")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CURRENT_COMMIT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" ls-remote $REPO_URL HEAD"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果当前提交的哈希值与上次提交的哈希值不同，则执行以下操作")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CURRENT_COMMIT")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LAST_COMMIT")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n\n         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 防止本地仓库的未知更改阻塞更新")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新本地仓库")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master\n\n         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建项目")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:build\n\n         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新上次提交的哈希值")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LAST_COMMIT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CURRENT_COMMIT")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等待一段时间后再次检测")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br")])]),n("p",[s._v("其他客户端拉取项目并修改提交")]),s._v(" "),n("h2",{attrs:{id:"核心要点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心要点"}},[s._v("#")]),s._v(" 核心要点")]),s._v(" "),n("p",[s._v("脚本核心解析")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置仓库地址")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REPO_URL")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git@github.com:xxxx/xxxx.git"')]),s._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入仓库目录")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /xxx/xx/xxx\n\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 记录上次提交的git远程仓库哈希值")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LAST_COMMIT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 无限循环，检测仓库变化")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取当前最新提交的哈希值")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CURRENT_COMMIT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" ls-remote $REPO_URL HEAD"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果当前提交的哈希值与上次提交的哈希值不同，则执行以下操作")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CURRENT_COMMIT")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LAST_COMMIT")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 防止本地仓库的未知更改阻塞更新")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新本地仓库")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自定义代码库更新操作")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TO-DO")]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新上次提交的哈希值")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LAST_COMMIT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CURRENT_COMMIT")]),s._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等待一段时间后再次检测")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br")])]),n("p",[s._v("通过一个while循环来不断检测仓库，如果仓库更新，就拉取代码，执行命令")]),s._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[s._v("DANGER")]),s._v(" "),n("p",[s._v("本实例还存在一些问题，需自行修正"),n("br")]),s._v(" "),n("ul",[n("li",[s._v("另一台主机提交后，脚本更新本地仓库可能编译不通过，建议本地环境测试通过后提交")]),s._v(" "),n("li",[s._v("脚本偶尔异常退出，未知原因")])])]),s._v(" "),n("h2",{attrs:{id:"粗心大意"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#粗心大意"}},[s._v("#")]),s._v(" 粗心大意")]),s._v(" "),n("p",[s._v("触发原因: 由于一个服务器部署多个项目，不适用域名作为入口，设置config的base:'/doc/'")]),s._v(" "),n("p",[s._v("nginx 配置 /doc 导致数据访问不到")]),s._v(" "),n("p",[s._v("修改")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" # 设置 location\n      location /doc/ {\n  \t\talias /www/yunsheng/docs/.vuepress/dist/;\n          index index.html;\n  \t\ttry_files $uri $uri/ index.html;\n      }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"实际案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实际案例"}},[s._v("#")]),s._v(" 实际案例")]),s._v(" "),n("p",[s._v("java vue")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# 初始化才配置仓库地址和克隆仓库\n# 配置仓库地址\nREPO_URL="git@gitee.com:fufuandrice/autumn-moon-music.git"\n\n# 初始化变量，用于记录上次提交的哈希值\nLAST_COMMIT=""\n\n# 初始化记录运行的java的pid\njavapid=""\n\n# 无限循环，检测仓库变化\nwhile true; do\n  # 获取当前最新提交的哈希值\n  CURRENT_COMMIT=$(git ls-remote $REPO_URL HEAD)\n\n  # 如果当前提交的哈希值与上次提交的哈希值不同，则执行以下操作\n  if [ "$CURRENT_COMMIT" != "$LAST_COMMIT" ]; then\n    \n    # 停止运行历史java程序\n    kill -9 $javapid\n    \n    # 进入仓库目录\n    cd /www/qiuyue/autumn-moon-music\n    \n    # 防止本地仓库的未知更改阻塞更新\n    git checkout .\n\n    # 更新本地仓库\n    git pull --rebase origin master\n\n    # 安装后台网页依赖\n    cd /www/qiuyue/autumn-moon-music/QiuYueServer/ruoyi-ui\n    npm install --legacy-peer-deps \n\n    # 构建后台网页\n    npm run build:prod\n\n    # 打包服务端\n    cd /www/qiuyue/autumn-moon-music/QiuYueServer\n    mvn clean \n    mvn package\n\n    # 运行服务端\n    cd /www/qiuyue/autumn-moon-music/QiuYueServer/ruoyi-admin/target\n    java -jar /www/qiuyue/autumn-moon-music/QiuYueServer/ruoyi-admin/target/ruoyi-admin.jar -Xms500m -Xmx500m ‐XX:+UseG1GC -XX:MaxGCPauseMillis=350 -XX:SurvivorRatio=8 &\n    \n    # 获取服务端pid\n    javapid=$!\n    \n    # 更新上次提交的哈希值\n    LAST_COMMIT=$CURRENT_COMMIT\n  fi\n\n  # 运行项目\n  # 等待一段时间后再次检测\n  sleep 60\ndone\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);