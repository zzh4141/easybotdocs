# “兼容”CMI

> [!WARNING] 不是我的问题!
> 插件无法在装有 CMI 的服务器上运行命令的原因是: CMI 为了安全性问题拦截了命令执行。  
> ![IMG](./img/CMI安全性拦截.png))

## 解决方案

在 CMI 的配置文件中找到`AllowRconCommands`与`CleanRconCommands`并设置为`true`。

![IMG](./img/兼容CMI解决方案.png)
