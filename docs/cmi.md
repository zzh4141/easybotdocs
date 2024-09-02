# “兼容”CMI

> [!WARNING] 不是我的问题!
> 插件无法在装有CMI的服务器上运行命令的原因是: CMI为了安全性问题拦截了命令执行。        
> ![IMG](/2385df44247086f8231e9d81ed44d27a.png)

## 解决方案

在CMI的配置文件中找到`AllowRconCommands`与`CleanRconCommands`并设置为`true`。

![IMG](/1bedd4806202c2e8fd21ff6d02f99a66.png)