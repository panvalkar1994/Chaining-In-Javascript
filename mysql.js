var Mysql = /** @class */ (function () {
    function Mysql() {
        this.querry = '';
    }
    /**
     * select
     */
    Mysql.prototype.select = function () {
        var _this = this;
        var columnNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            columnNames[_i] = arguments[_i];
        }
        this.querry = 'SELECT';
        if (columnNames.length == 0 || columnNames.indexOf('*') != -1) {
            this.querry += ' *';
        }
        else {
            columnNames.forEach(function (column) {
                _this.querry += " " + column + ",";
            });
        }
        return this;
    };
    /**
     * from
     */
    Mysql.prototype.from = function (tableName) {
        if (!tableName) {
            throw new Error("Plese select table");
        }
        else {
            this.querry += "\nFROM " + tableName;
        }
        return this;
    };
    /**
     * where
     */
    Mysql.prototype.where = function () {
        var properties = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            properties[_i] = arguments[_i];
        }
        this.querry += '\nWHERE';
        if (!properties.length) {
            throw new Error("You Entered where clause without specifying column and value");
        }
        else {
            for (var key in properties) {
                var element = properties[key];
                this.querry += " " + element;
            }
        }
        return this;
    };
    /**
     * execute
     */
    Mysql.prototype.execute = function () {
        this.querry += ';';
        return this.querry;
    };
    return Mysql;
}());
// let my = new Mysql().querry;
// my.select().from('Users').where('id=10').querry();
// console.log(my.querry);
var newq = new Mysql();
var que = newq.select().from('Users').where('id==10').execute();
console.log(que);
