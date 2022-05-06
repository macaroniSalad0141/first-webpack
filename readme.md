source ~/.nvm/nvm.sh  
npm init  
npm view webpack  
npm install -D webpack@4.41.6  
npm install -D webpack-cli@3.3.11  
npx webpack  
    distディレクりが作成される  
以下コマンドでビルドする  
npx webpack --mode development  

webpack.config.js内のloaderは下から適用される

ローカルサーバで立ち上げる場合、以下コマンドを実行する
npx webpack-dev-server
http://localhost:8082/

can i use <タグ名> で検索すると、適応してるブラウザなどがわかるサイトのリンクが出る
https://caniuse.com