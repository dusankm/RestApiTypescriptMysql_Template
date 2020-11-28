import { application } from "express";
import express ,{ Application } from 'express';

export class App{
    private app: Application;

    constructor(private port?:number | string){
        this.app = express();
    }

    settings(){
        this.app.set('port',this.port || process.env.PORT || 3000);
    }

    async listen(){
      await this.app.listen();
      console.log('Server on port',3000);

    }

}