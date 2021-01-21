class Mysql {
    querry:string ='';
    constructor() {}

    /**
     * select
     */
    public select(...columnNames: string[]) :Mysql{
        this.querry = 'SELECT';
        if(columnNames.length==0 || columnNames.indexOf('*')!=-1){
            this.querry += ' *';
        }else{
            columnNames.forEach(column=>{
                this.querry += ` ${column},`;
            })
        }
        return this;
    }

    /**
     * from
     */
    public from(tableName:string):Mysql {
        if(!tableName){
            throw new Error("Plese select table");
        }else{
            this.querry += `\nFROM ${tableName}`;
        }
        return this;
    }

    /**
     * where
     */
    public where(...properties:any):Mysql {
        this.querry += '\nWHERE';
        if (!properties.length) {
            throw new Error("You Entered where clause without specifying column and value");
        }else{
            for (const key in properties) {
                const element = properties[key];
                this.querry += ` ${element}`;
            }
        }
        return this;
    }

    /**
     * execute
     */
    public execute():string {
        this.querry += ';'
        return this.querry;
    }

}

// let my = new Mysql().querry;
// my.select().from('Users').where('id=10').querry();
// console.log(my.querry);

let newq = new Mysql();
let que = newq.select().from('Users').where('id==10').execute();
console.log(que);