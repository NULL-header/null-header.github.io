# スクリプト

## TOC

* [スクリプト](#スクリプト)
  * [TOC](#toc)
  * [Issue番号の自動埋め込み](#issue番号の自動埋め込み)
  * [各種lint](#各種lint)

## Issue番号の自動埋め込み

huskyのcommit-msgにて管理されています。
ブランチ名に埋め込まれた`#[0-9]`部分を抜き出し、コミットメッセージ末尾に埋め込むスクリプトです。
該当ファイルは[こちら](../../scripts/git/issue-number-to-commit.bash)です。

## 各種lint

huskyとlint-stagedによって管理されています。
lint-stagedによってnpm scriptがコールされ、npm scriptは各々npm-run-allを利用して実行されます。
その際、複数コマンド実行のためにglobにて配下スクリプトをキャプチャしています。
