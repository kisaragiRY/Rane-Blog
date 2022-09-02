上一篇：[最优化条件和KKT条件](./cG9zdDEubWQ=)

## 概要

- 什么是对偶问题
- 拉格朗日对偶问题（Lagrange duality）
    - 拉格朗日对偶问题：小结
- 强弱对偶定理



<br>

## 什么是对偶问题？
正式开始之前，先说一句废话，之所以需要对偶问题，是因为
> 相较原始问题(primal problem)，对偶问题(dual problem)会更好解

原始问题和对偶问题一般有如下关系
$$
\begin{align*}
原始问题 &\quad 对偶问题 \\
最小化 &\Longleftrightarrow 最大化 \\
变量数 &\Longleftrightarrow 约束条件数 \\
约束条件数 &\Longleftrightarrow 变量数
\end{align*}
$$

## 拉格朗日对偶问题

为不失一般性，原始问题的定义如下
$$
\begin{align*}
\underset{x}{min} \space &f(x) \\
s.t. \space  &h_i(x)=0, \space i=1,...m \\
& g_j(x) \leq 0, j=1,...r \\
& x \in X
\end{align*}
$$

接着我们将一步一步从这个原始问题导出拉格朗日对偶问题。

首先基于约束条件，我们将引进一个指示函数，这个指示函数有如下形态：
$$
\begin{align*}
\delta_F(x)=\left\{
    \begin{align*}
    0 \quad &if \quad x \in F\triangleq\{x|h_i(x)=0,g_j(x)\leq0\} \\
    \infty \quad & otherwise
    \end{align*} 
    \right. \quad&(1)
\end{align*}
$$

简单的说，就是满足原始问题约束条件的话，其值为0，此外为无穷；基于这个指示函数，原始问题可以改写为

$$
\begin{align*}
\underset{x}{min} \quad &f(x) + \delta_F(x)\\
s.t. \quad &x\in X
\end{align*}
$$

这可以理解为，为了使函数值达到最小，我们希望$\delta_F(x)$为0，这样既满足了之前的约束条件，又不改变最后的目标函数值；并且(1)又与以下函数等价

$$
\begin{align*}
\delta_F(x)=\underset{\lambda \in R^m, \mu \geq 0}{sup} \{ \sum_{i=1}^m{\lambda_i h_i(x)}+\sum_{j=1}^r{\mu_j g_j(x)} \} \quad&(2)
\end{align*}
$$

<details>
<summary>(1)与(2)的等价关系其实分下情况就能证明 (可展开)</summary>

1. $h_i(x) > 0 ，g_j(x) \leq 0$时，由(1)知$\delta_F(x)=\infty$，(2)取sup的话也为$\infty$
2. $h_i(x) = 0 ，g_j(x) \leq 0$时，由(1)知$\delta_F(x)=0$，(2)取sup也就是$sup \space g_j(x)$，也为0
3. $h_i(x) >0 ，g_j(x) > 0$时，显然(1)与(2)都为$\infty$
4. 其他情况读者可以自己试试推导

</details>

<br>

之所以引入指示函数(2)，是因为它和拉格朗日乘子法里面所用的拉格朗日函数长得很像，拉格朗日函数长这样：
$$
L(x,\lambda, \mu)=f(x)+\sum_{i=1}^m{\lambda_i h_i(x)}+\sum_{j=1}^r{\mu_j g_j(x)}
$$

原始问题的目标函数可以再被改写一下
$$
\begin{align*}
f(x) + \delta_F(x) &= f(x)+ \underset{\lambda \in R^m, \mu \geq 0}{sup} \{ \sum_{i=1}^m{\lambda_i h_i(x)}+\sum_{j=1}^r{\mu_j g_j(x)} \}  \\
&= \underset{\lambda \in R^m, \mu \geq 0}{sup} \{ f(x) +\sum_{i=1}^m{\lambda_i h_i(x)}+\sum_{j=1}^r{\mu_j g_j(x)} \} \\
&= \underset{\lambda \in R^m, \mu \geq 0}{sup} \{L(x,\lambda, \mu)\}
\end{align*}
$$

### 拉格朗日对偶问题：小结
总结下到目前的内容，我们就可以导出第一个对偶问题：**拉格朗日对偶问题**

$$
\begin{align*}
\footnotesize 原始问题1 : \\
& min \quad f(x) \\
& s.t.  \quad h_i(x)=0, \space i=1,...m ,\quad
g_j(x) \leq 0, j=1,...r ,\quad
x \in X \\

&\Downarrow\\

\footnotesize 原始问题2 : \\
& min \quad f(x) + \delta_F(x) \\
& s.t \quad x \in X \\
&\Downarrow\\
\footnotesize 原始问题3 : \\
& min \quad \underset{\lambda \in R^m, \mu \geq 0}{sup} \{L(x,\lambda, \mu)\} \\
& s.t \quad x \in X \\
&\Downarrow\\
\footnotesize 拉格朗日对偶问题：\\

& max \quad \underset{x \in X}{inf} \{L(x,\lambda, \mu)\} \\
& s.t \quad  \lambda \in R^m, \mu \geq 0 \\

\end{align*}
\\ \scriptsize (显示不全，可向右👉滑动)
$$

*注意⚠️：我虽然这写了原始问题1，2，3，但它们实质是一个问题，没有任何区别*

## 强弱对偶定理

接着我们还需要两个定理来保证，对偶问题的最优解和原始问题的最优解是一致的。

由刚才的推导，拉格朗日对偶问题的目标函数是

$$
w(\lambda,\mu)=\underset{x \in X}{inf}\space \{L(x,\lambda, \mu)\}
$$

> 弱双对定理
>
> ---
> $f(x) \geq w(\lambda,\mu), \forall x \in S, \lambda \in R^m, \mu \geq 0$

<details>
<summary>超级简单的证明(可展开)</summary>

$$
\begin{align*}
f(x) &\geq f(x)+ \sum_{i=1}^m{\lambda_i h_i(x)}+\sum_{j=1}^r{\mu_j g_j(x)} =L(x,\lambda, \mu)\\
& \geq \underset{x \in X}{inf}\space \{L(x,\lambda, \mu)\}\\
&= w(\lambda,\mu)
\end{align*} 
$$

第一个不等式成立的原因：当x是原始问题的最优解时，其需要满足$h_i(x)=0,\mu_j \geq 0, g_j(x) \leq 0$，则$\sum_{i=1}^m{\lambda_i h_i(x)}+\sum_{j=1}^r{\mu_j g_j(x)} \leq 0$

第二个不等式成立的原因：取得是$inf$

</details>

<br>

这个定理弱就弱在，我们什么都不用做它就成立了，它保证了对偶问题的目标函数是原始问题1$f(x)$的下界。

也就是说对偶问题得到的最优解和原始问题的最优解不会差的太远。

也因此我们需要一个更强的定理，来保证一致性。

> 强对偶定理
>
> ---
> 1\. $f,g_j(j=1,...,r)$是凸函数 ，$h_i(i=1,...,m)$是一次函数
>
> 2\. 原始问题存在最优解 （即存在一个x满足KKT条件）
>
> 那么，对偶问题有最优解，且两个问题的最优解是一致的

回忆第一部分讲到的**最优解的充分必要条件**，满足KKT的点就是全局最优解。

<details>
<summary>最优解的充分必要条件(可展开)</summary>

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

</details>

<br>

> 中场休息，喝杯🍵再接着学习
>
> [点击这里跳转到对偶问题（2）](./cG9zdDMubWQ=)，我们接着讲另一个重要的对偶问题：Fenchel对偶问题
>
> 有疑问和建议，联系博主Rane：rane.z.blog@gmail.com。