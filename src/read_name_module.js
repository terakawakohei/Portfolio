const fs = require('fs');
exports.sanbai = function(path) {
  // カレントディレクトリ
  // ファイル名の一覧
  const filenames = fs.readdirSync(path);

  return filenames;
};
