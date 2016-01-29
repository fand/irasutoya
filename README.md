# Irasutoya

[いらすとや](http://www.irasutoya.com/)から画像をキーワード検索してURLを出力します
![example](https://pbs.twimg.com/media/CZ4odjzUsAERB85.png:large)

## Installation

not published to npm yet.

```
npm i -g @fand/irasutoya
```

## Example

`寿司` で画像を検索

```
$ irasutoya 寿司
http://1.bp.blogspot.com/-G_HJK4ZIXio/VMItt7xPEMI/AAAAAAAAqxY/2ZsYWj5Vu6U/s800/food_kaburazushi.png
```

クリップボードにコピー(macの場合)

```
$ irasutoya 寿司 | pbcopy
```

ブラウザで開く

```
$ open `irasutoya 寿司`
```

## Thanks

[かわいいフリー素材集 いらすとや](http://www.irasutoya.com/)
ルールを守って適度に使いましょう
