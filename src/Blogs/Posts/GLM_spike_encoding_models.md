
# 前言

## 一些会用到的记号
* $D$ : 神经反应(neural response)，如动作电位序列(spike train)，为TxN的矩阵，T：时间长度，N：神经元个数
* $n_t$：神经反应在时间点t的观测值，或为到时间点t为止的观测值
* $\vec{x(t)}$ : 在时间点t观测到的外界刺激，或为到时间t为止观测到的外界刺激；可为图像或电信号，
也可为实验对象自身的行为如位置，速度，方向

## Encoding与Decoding介绍
以小鼠看图像的实验为例，所谓encoding，是欲从外界的刺激$\vec{x}$，也就是小鼠看到的图像，推测小鼠的神经反应$D$，统计上我们想建立$p(D|\vec{x})$的概率模型

Decoding和这正相反，欲从小鼠的神经反应$D$反推小鼠看到的图像$\vec{x}$，即$p(\vec{x}|D)$的概率模型

但要直接对$p(D|\vec{x})$和$p(\vec{x}|D)$建模比较困难，因此我们要借助**参数**的力量（当然也有非参的方法，但其超过了本文的范围），对$p(D|\vec{x},\vec{\theta})$和$p(\vec{x}|D,\vec{\theta})$

## GLM(generalized linear model ) 简述

> A generalized linear model (GLM) is a flexible generalization of ordinary linear regression. 
>
> The GLM generalizes linear regression by allowing the linear model to be related to the response variable via *a link function* and by allowing the magnitude of the variance of each measurement to be a function of its predicted value.
>
> ---[引自Wikipedia](https://en.wikipedia.org/wiki/Generalized_linear_model)

GLM是在一般线性模型上的一个延伸，也称广义线性模型，响应变量$y$与设计矩阵$X$不再是$y=X^T\beta+\varepsilon$的线性关系，而是添加了nonlinearity$f$的非线性模型$y=f(X^T\beta+\varepsilon)$

最常见的GLM比如逻辑回归模型，nonlinearity用的是sigmoid函数。关于逻辑回归模型的详细解释，请参见[二元逻辑回归 · 数学推导过程及代码实现完全解析](./bG9naXN0aWNfbW9kZWwubWQ=)


# 神经编码Encoding

论文里从简单到复杂提到了好几种用于$p(D|\vec{x},\vec{\theta})$的模型。

这里介绍最基本的四种模型。

## 高斯线性模型
$$
n_t=\vec{k}・\vec{x(t)}dt+\varepsilon_t
$$
* $n_t$：到时间t为止的spike train数据
* $\vec{k}$：待估参数，也称spike history filter，即加在spike train历史数据上的权重
* $\vec{x(t)}$：到时间t为止的stimulus数据
* $dt$：数据time bin的长度
* $\varepsilon_t$：离散高斯白噪声

沿用ML（maximum likelihood）估计，首先$D|X,\vec{k}$ ~ $N(\vec{k}・\vec{x(t)}dt,diag_t(1))$，取对数后得到$logp(D|X,\vec{\theta})=c_1-c_2\sum_t(n_t-\vec{k}・\vec{x(t)}dt)^2$，这里矩阵$X$的第$t$行是$\vec{x(t)}$

最大化这个对数likelihood，得到参数$\vec{k}$的最小二乘(least square)估计
$$
\vec{k}_{LS}=(X^TX)^{-1}(\sum_tn_t\vec{x}/dt)
$$

## 泊松模型:linear nonlinear Poisson



## 

<hr>

*待续...*

> 感谢你的阅读，希望这篇博文能帮到你~
>
> 有疑问可通过邮箱 rane.z.blog@gmail.com 联系博主Rane。