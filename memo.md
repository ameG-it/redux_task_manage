## redux

## Store

## Silce

Reducer と Action を組み合わせたもの
createSlice で作成する

```javascript
export const taskSlice = createSlice({
    name:"...", //りデューさの名前
    initialState:{...}, //初期状態
    reducer:{...}　//リデューサ＋アクション
})
```

作った reducer は store に登録する

```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import taskReducer from '../features/task/taskSlice';

//Sliceをひとまとめにしている
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
  },
});
```

reduxToolKit を見ると
この時点で store に登録されていることがわかる

## Selector

値を参照したい時は`useSelector`を使う

```javascript --taskList.js
import { useSelector } from 'react-redux';
import { selecttasks } from '../../features/task/taskSlice';
```

```javascript --taskSlice.js
export const selecttasks = (state) => state.task.tasks;
```

## dispatch

値を更新したい時は`useDispatch`を使う
dispatch で reducer を呼び出すと
アクションが動く

```javascript
const dispath = useDispatch();
dispatch(reducer(status));
```

## createAsyncThunk

[公式 doc](https://redux-toolkit.js.org/api/createAsyncThunk)\
非同期の関数を redux で扱うための関数
非同期処理の実行状況（fulfilled, rejected, settled）に応じたアクションを返すことができる

- 第一引数:プレフィックス
- 第二引数:非同期関数

```javascript
const fetchAsyncGet = createAsyncThunk('fetch/get', () => {
  pasync () => {
    const res = await axios.get(apiUrl);
    return res.data;
  };
});

const Slice = createSlice({
  name:"name",
  initialState:{},
  reducers:{},
  extrareducers:(builder)=>{
        builder.addCase(fetchAsyncGet.fulfilled, (state,action)=>{
            //
        });
    },
})
```
