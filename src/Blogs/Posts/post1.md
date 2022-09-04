
## 最优化条件
最优化理论研究的最基本的最优化问题有以下的形式
$$
\begin{align*}
\underset{x}{min} \space &f(x) \\
s.t. \space  &h_i(x)=0, \space i=1,...m \\
&g_j(x) \leq 0, j=1,...r
\end{align*}
$$

我们有目标函数$f(x)$，及m个等式约束条件，r个不等式约束条件。


需要考虑的第一个问题就是，以上这个问题的最优解需要满足什么条件？**最优性必要条件**如下
> **定理1**：最优性必要条件
>
> ---
> 
> $\\h_i$是一次函数，$g_j$是凸函数，存在$x^*$使得$g_j(x^*)<0，h_i(x^*)=0$
> $\\\nabla h_i(x^*)$和$\nabla g_j(x^*)$线性无关
>
> 若$x^*$是局部最小解，则存在满足KKT条件的拉格朗日乘数$(\lambda^*,\mu^*)$，使得$(x^*,\lambda^*,\mu^*)$是KKT点。

换句话说，如果$x^*$是最优解，那就必须满足KKT条件。

$\nabla$是偏导的意思, 其中**KKT条件**如下
$$
\begin{align*} 
\nabla f(x^*)+\sum_{i=1}^m\lambda _i^* \nabla h_i(x^*)+\sum_{j=1}^r\mu _j^* \nabla g_i(x^*)=0 \quad&(1)\\


h_i(x^*)=0, i=1,...m \quad&(2)\\



g_j(x^*)\leq0, \space \mu _j^*\geq0, \space \mu _j^*g_j(x^*)=0,  j=1,...r \quad&(3)
\end{align*}
$$

其中，$\lambda^*,\mu^*$被称为拉格朗日乘数，$(x^*,\lambda^*,\mu^*)$被称为KKT点。


上述定理，再添加一下条件就会变成**充分必要条件**：

> **定理2**：最优解的充分必要条件
>
> ---
> $f,g_1,...,g_r$是可微凸函数，$h_i,i=1,...,m$是一次函数
>
> $(x^*,\lambda^*,\mu^*)$是
> $$
> \begin{align*}
> \underset{x}{min} \space &f(x) \\
> s.t. \space  &h_i(x)=0, \space i=1,...m \\
> &g_j(x) \leq 0, j=1,...r
> \end{align*}
> $$
>
> 满足条件(1)~(3)KKT点，则$x^*$是全局最小解


## 最优化条件：例题

$$
min \space \tau |x|+\frac{1}{2}(x-y)^2 \\
s.t. \space x \in R
$$
其中, $\tau>0$，$y$是定值

证明这个问题的最优解$x^*$是
$$
x^*=max\{0,|y|-\tau\}sgn(y)
$$
其中，
$$
sgn(y)=\left\{
    \begin{align*}
    1 , &if \space  y \geq0 \\
    -1,&if \space y<0
    \end{align*}
\right.
$$

---


在证明之前，需要注意到$|x|$是不可微的，而我们目前只介绍了可微函数的最优化条件和KKT条件，

咱们还需要补充两个概念**次导数(Subderivative)**和**次微分(Subdifferential)**，次导数是一般导数定义上的一个推广

<br>

$f$若是可微，则对所有的$y\in V$，$V$是一个向量空间
$$
f(y) \geq f(x)+<\nabla f(x),y-x>
$$
总是成立的，这不等式可以理解为$f(y)$的图像落在切线$f(x)+<∇f(x),y−x>$之上，$(x,f(x))$是切点，$∇f(x)$是切点位置的导数，<・>是内积运算。

<br>

而当$f$不可微的时候，我们就需要引进**次导数**和**次微分**的概念。

>对所有的$y\in V$，满足
>
> $$
> f(y) \geq f(x)+<\eta,y-x>
> $$
> 的$\eta \in V$被称为$f$在$x$的**次导数**。而所有满足条件的**次导数**的集合被称为**次微分**，我们将使用以下记法：
> $$
> \partial f(y)=\{\eta \in V \space | f(x) \geq f(y)+<\eta,x-y>, \forall x \in V\}
> $$
> *当$f$可微时，次微分的定义与微分定义是等价的。*

<br>

有了次微分的加持，我们就可以导出**不可微分问题的KKT条件**：

对于一般的凸优化问题
$$
\begin{align*}
\underset{x}{min} \space &f(x) \\
s.t. \space  &h_i(x)=0, \space i=1,...m \\
&g_j(x) \leq 0, j=1,...r
\end{align*}
$$
其中，
$f$:凸函数(不一定可微)，$h_i$:一次函数，$g_j$:凸函数(不一定可微)

对于(4)~(7)的**不可微分问题的KKT条件**，**定理2**依然成立。


$$
\begin{align*} 
\eta+\sum_{i=1}^m\lambda _i^* \nabla h_i(x^*)+\sum_{j=1}^r\mu _j^* \xi_j=0 \quad&(4)\\

h_i(x^*)=0, i=1,...m \quad&(5)\\

g_j(x^*)\leq0, \space \mu _j^*\geq0, \space, \mu _j^*g_j(x^*)=0,  j=1,...r \quad&(6)\\

\eta \in \partial f(x^*)，\xi \in \partial g_j(x^*)，j=1,...r \quad&(7)\\
\end{align*} 
$$

---

<br>

再回到刚才的例题，其是没有约束条件的，即$h_i=0，g_j=0$，因此

$$
(4) \longrightarrow \eta=0\\
(5)和(6)不需要了\\
(7) \longrightarrow \eta \in \partial f(x^*)
$$

综上，最优解$x^*$应满足$0\in\partial f(x^*)$，而$f(x)=\tau |x|+\frac{1}{2}(x-y)^2$
$$
\partial f(x) = \left\{
    \begin{align*}
    \tau+x-y &，x > 0 \\
    -\tau+x-y &，x<0 \\
    -\tau[-1,1]+y &， x=0
    \end{align*}
\right.
$$
当$x>0$时，$0=\tau+x-y，\Rightarrow x^*=y-\tau$，且因为$\tau>0$，则$x+\tau>0$因此$y>0$

当$x<0$时，同理

当$x=0$时，$-\tau[-1,1]+y=0$，则$|y|-\tau<0$，$x^*=0$，得证。

>[点击这里跳转到第二部分：拉格朗日对偶问题](./cG9zdDIubWQ=)，我们接着讲最优化理论常遇到的对偶问题
>
> 有疑问可联系博主Rane：rane.z.blog@gmail.com。