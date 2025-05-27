import { ICategoresRepository, IRequestCreateRepositoryDTO } from "../repositories/ICategoriesRepository"



export class CreateCategoryService{
    constructor(private categoryRepository:ICategoresRepository){}
    async execute({description,name}:IRequestCreateRepositoryDTO){
        const categoryAlwaredExist = this.categoryRepository.findByName(name)
        if(categoryAlwaredExist){throw new Error("categoria já existe")}
        this.categoryRepository.create({description,name})

    }
}