# Reduxの勉強用

## このプロジェクトで実装する内容
シンプルなTodoリストを実装する。サポートする機能としては、
・タスクの追加
・タスクの完了
・タスクリストの表示(テーブルではなく単純なリスト)
とする。

### Componentの階層
- App: 全体のstateを管理
  - Header:「シンプルタスク管理」タイトルを表示する
  - Main: ToDoリストを表示する
    - Add: タスクを追加するテキストフィールドとボタンを表示する
    - TaskList: 追加されているタスク及び完了か未完了かのリストを表示する