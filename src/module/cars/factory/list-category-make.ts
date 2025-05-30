import { ListCategoryController } from "../controllers/list-category-controller";
import { CategoriesRepositories } from "../repositories/CategoriesRepository";
import { ListCategoryService } from "../services/list-category-service";

export function listCategoryMake(){
    const repo =  new CategoriesRepositories()
    const sut = new ListCategoryService(repo)
    const cont = new ListCategoryController(sut)
    return cont
}