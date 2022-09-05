
## 前言

### 一些会用到的记号
* $D$ : 神经反应(neural response)，为TxN的矩阵，T：时间长度，N：神经元个数
* $\overrightarrow{x}$ : 观测到的外界刺激信号(stimulus), 可为图像或电信号
* $\overrightarrow{x(t)}$ : 在时间点t观测到的外界刺激 或为 到时间t为止观测到的外界刺激

### Encoding与Decoding介绍
以小鼠看图像的实验为例，所谓encoding，即欲从外界的刺激$\overrightarrow{x}$，也就是小鼠看到的图像，推测小鼠的神经反应$D$，统计上我们想建立$P(D|\overrightarrow{x})$的概率模型

Decoding和这正相反，欲从小鼠的神经反应$D$反推小鼠看到的图像$\overrightarrow{x}$，即$P(\overrightarrow{x}|D)$的概率模型

<hr>

*待续...*

> 感谢你的阅读，希望这篇博文能帮到你~
>
> 有疑问可通过邮箱 rane.z.blog@gmail.com 联系博主Rane。