var CreateProducts = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('name', 'string');
          t.column('quantity', 'number');
          t.column('expdate', 'date');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('product', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('product', callback);
  };
};

exports.CreateProducts = CreateProducts;
