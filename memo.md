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

##
