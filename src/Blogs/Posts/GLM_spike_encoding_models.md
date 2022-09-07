
## 前言

### 一些会用到的记号
* $D$ : 神经反应(neural response)，为TxN的矩阵，T：时间长度，N：神经元个数
* $\overrightarrow{x}$ : 观测到的外界刺激信号(stimulus), 可为图像或电信号
* $\overrightarrow{x(t)}$ : 在时间点t观测到的外界刺激 或为 到时间t为止观测到的外界刺激

### Encoding与Decoding介绍
以小鼠看图像的实验为例，所谓encoding，即欲从外界的刺激$\overrightarrow{x}$，也就是小鼠看到的图像，推测小鼠的神经反应$D$，统计上我们想建立$P(D|\overrightarrow{x})$的概率模型

Decoding和这正相反，欲从小鼠的神经反应$D$反推小鼠看到的图像$\overrightarrow{x}$，即$P(\overrightarrow{x}|D)$的概率模型

### GLM (generalized linear model / 广义线性模型)的简述

> A generalized linear model (GLM) is a flexible generalization of ordinary linear regression. 
>
> The GLM generalizes linear regression by allowing the linear model to be related to the response variable via *a link function* and by allowing the magnitude of the variance of each measurement to be a function of its predicted value.
>
> ---[引自Wikipedia](https://en.wikipedia.org/wiki/Generalized_linear_model)

GLM是在一般线性模型上的一个延伸，响应变量$y$与设计矩阵$X$不再是$y=X^T\beta+\epsilon$的线性关系，而是添加了link function $f$基础上的非线性模型$y=f(X^T\beta+\epsilon)$

最常见的GLM比如逻辑回归模型，link function是sigmoid函数。关于逻辑回归模型的详细解释，请参见[二元逻辑回归 · 数学推导过程及代码实现完全解析](./bG9naXN0aWNfbW9kZWwubWQ=)


## 

<hr>

*待续...*

> 感谢你的阅读，希望这篇博文能帮到你~
>
> 有疑问可通过邮箱 rane.z.blog@gmail.com 联系博主Rane。