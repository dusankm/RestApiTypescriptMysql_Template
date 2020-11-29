import express ,{ Application } from 'express';
import morgan from 'morgan'

//Routes
import IndexRouter from './routes/index.routes'
import InventoryRoutes from './routes/inventory.routes'


export class App{
    private app: Application;

    constructor(private port?:number | string){
        this.app = express();
        this.settings();
        this.middleware();
        this.routes();
    }

    settings(){
        this.app.set('port',this.port || process.env.PORT || 3000);
    }

    middleware(){
        this.app.use(morgan(`dev`));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(IndexRouter);
        this.app.use('/inventory',InventoryRoutes);
    }

    async listen(){
      await this.app.listen(this.app.get('port'));
      console.log('Server on port',3000);

    }

}