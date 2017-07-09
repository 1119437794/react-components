/**
 * Created by Administrator on 2016/9/28 0028.
 */
 
## 1.Store 
    就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。
## 2.State
    Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。
## 3.Action
     State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了。
## 4 Action Creator
    View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。可以定义一个函数来生成 Action，这个函数就叫 Action Creator。
## 5.store.dispatch()
    store.dispatch()是 View 发出 Action 的唯一方法。
## 6.Reducer
    Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
    实际应用中，Reducer 函数不用像上面这样手动调用，store.dispatch方法会触发 Reducer 的自动执行。为此，Store 需要知道 Reducer 函数，做法就是在生成 Store 的时候，将 Reducer 传入createStore方法。
    import { createStore } from 'redux';
    const store = createStore(reducer);
## 7.纯函数
    Reducer 函数最重要的特征是，它是一个纯函数。也就是说，只要是同样的输入，必定得到同样的输出。纯函数是函数式编程的概念，必须遵守以下一些约束。
    不得改写参数
    不能调用系统 I/O 的API
    不能调用Date.now()或者Math.random()等不纯的方法，因为每次会得到不一样的结果
## 8.store.subscribe()
    Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。
    