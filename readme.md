source ~/.nvm/nvm.sh  
npm init  
npm view webpack  
npm install -D webpack@4.41.6  
npm install -D webpack-cli@3.3.11  
npx webpack  
    distディレクりが作成される  
以下コマンドでビルドする  
npx webpack --mode development  
productionオプションにすると、jsファイルが一行の状態にビルドされる

webpack.config.js内のloaderは下から適用される

ローカルサーバで立ち上げる場合、以下コマンドを実行する
npx webpack-dev-server
http://localhost:8082/

can i use <タグ名> で検索すると、適応してるブラウザなどがわかるサイトのリンクが出る
https://caniuse.com

ES6以降でlet, constの変数定義やアロー関数などが使えるようになる
https://www.taniarascia.com/es6-syntax-and-feature-overview/
開発モードからmain.jsを見てみると、元々はアロー関数などが使われているが、babel設定後は通常のfunctionに変更されることがわかる。

devtoolの設定によって出力されるソースを変更できる。見やすさビルドの速さのトレードオフ