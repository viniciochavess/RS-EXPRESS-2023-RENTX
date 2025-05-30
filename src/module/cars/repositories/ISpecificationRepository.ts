import { Specification } from "../model/Specification";
export interface IRequestCreateSpecificationDTO {
    name:string,
    description:string;
}

export interface ISpecificationRepository {
    create({description,name}:IRequestCreateSpecificationDTO): Promise<Specification>
    findByName(name:string): Promise<Specification | null>
    all(): Promise<Specification[]>

}