import { ImportFileCategoryController } from "../controllers/import-file-category-controller";
import { CategoriesRepositories } from "../repositories/CategoriesRepository";
import { ImportFileCategoryService } from "../services/import-file-category-service";

export function importFileCategoryMake(){
    const repo = CategoriesRepositories.getInstance()
    const sut = new ImportFileCategoryService(repo)
    const cont = new ImportFileCategoryController(sut)
    return cont

}