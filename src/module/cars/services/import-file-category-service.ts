import { parse  } from 'csv-parse'
import fs from 'fs'
import { ICategoresRepository } from '../repositories/ICategoriesRepository'


interface category  {
    name:string,
    description:string
}

export class ImportFileCategoryService{
  
    constructor(private repo:ICategoresRepository){}

    loadCategory(file:Express.Multer.File):Promise<category[]>{
          const categories:category[] =[]

        return new Promise((resolve, reject)=>{
             const parseFile = parse()
        const stream = fs.createReadStream(file.path)
        stream.pipe(parseFile)
        parseFile.on('data',(line)=>{
            const [name,description] = line
            categories.push({description,name})
        }).on("end",()=>{
            resolve(categories)
        }).on("error", (error)=>{
            reject(error)
        })
        console.log(file)
        })

       

    }



    async execute(file:Express.Multer.File):Promise<void>{
        const categories = await this.loadCategory(file)

        categories.map(category => {
            const {name, description} = category
            const alwaredExist = this.repo.findByName(name)
            if(!alwaredExist){
                this.repo.create({name,description})
            }
        })
        console.log(categories)
    }
}