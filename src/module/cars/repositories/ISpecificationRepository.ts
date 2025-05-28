import { Specification } from "../model/Specification";
export interface IRequestCreateSpecificationDTO {
    name:string,
    description:string;
}

export interface ISpecificationRepository {
    create({description,name}:IRequestCreateSpecificationDTO): Specification
    findByName(name:string): Specification | null
    all():Specification[]

}