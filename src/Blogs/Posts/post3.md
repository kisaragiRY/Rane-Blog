上一篇：[拉格朗日对偶问题](./cG9zdDIubWQ=)

## 共轭函数

> 共轭函数定义
> 
> ---
> $f^*$被称为$f$的共轭函数，如果
> $$
> f^*(v)=\underset{x}{sup}\{ <x,v>-f(x)| x \in V\}
> $$
> $<,>$是内积运算，$V$是向量空间

### 共轭函数:例题
写出线性函数$f(x)=c^Tx$的共轭函数
<details>
<summary>答案</summary>

$$
f^*(y)=\left\{
    \begin{align*}
0 \quad &if \space y=c \\
+\infty \quad & otherwise
\end{align*}
\right.
$$

</details>

<br>

## Fenchel对偶问题

拉格朗日对偶问题解决了有约束条件的最优化问题，对于无约束条件的最优化问题
$$
\underset{x}{min} \space f(Ax)+g(x)
$$
我们则需要引入Fenchel对偶问题。

而其实只需要稍稍修改一下，其又可以变为有约束条件的最优化问题。

$$
\begin{align*}
\underset{x}{min} \space &f(y)+g(x) \\
s.t. \quad&y=Ax
\end{align*}
$$


这个问题的拉格朗日函数有如下形式：
$$
\begin{align*}
L(x,y,\lambda)=f(y)+g(x)+<\lambda,y-Ax> \quad&(1)
\end{align*}
$$

我们将基于拉格朗日对偶问题，推导出Fenchel对偶问题；拉格朗日对偶问题的目标函数有如下形式

$$
\begin{align*}
w(\lambda) &=\underset{x,y}{inf}L(x,y,\lambda) \\
\scriptsize{由式(1)}&=\underset{x,y}{inf}\{f(y)+g(x)+<\lambda,y-Ax>\} \\
\scriptsize{引入负号，并进一步整理}&=-\underset{x,y}{sup}\{ <\lambda,-y>-f(y)+<\lambda,Ax> -g(x)\} \\
\scriptsize{将x和y分开,A^*是A的伴随矩阵}&=-\underset{y}{sup}\{ <\lambda,-y>-f(y)\}-\underset{x}{sup}\{ <A^*x,\lambda> -g(x)\} \\
\scriptsize{按共轭函数的定义}&=-f^*(-\lambda)-g^*(A^*\lambda) 
\end{align*}

\\ \scriptsize (显示不全，可向右👉滑动)
$$

### Fenchel对偶问题:小结

$$
\begin{align*}
\footnotesize 原始问题1(无约束条件): \\
&\underset{x}{min} \space f(Ax)+g(x) \\

\footnotesize 原始问题2(有约束条件): \\
&\underset{x}{min} \space f(y)+g(x) \\
&s.t. \quad y=Ax \\

\footnotesize 拉格朗日对偶问题: \\
&max\space \underset{x,y}{inf} L(x,y,\lambda)  \\
&s.t \quad  \lambda \in R^m\\

\footnotesize Fenchel对偶问题: \\
&max \space -f^*(-\lambda)-g^*(A^*\lambda)   \\
&s.t \quad  \lambda \in R^m\\
\end{align*}
$$

> 感谢你的阅读，希望这篇博文能帮到你~
>
> 有疑问可通过这个[表格](../about)联系博主Rane。