import { Injectable } from "@nestjs/common";
import { Document, Model } from "mongoose";

@Injectable()
export class GenericService<T extends Document>{
    constructor(private readonly model: Model<T>){}

    async create(createDto: Partial<T>): Promise<T>{
        return this.model.create(createDto);
    }

    async findAll(): Promise<T[]>{
        return this.model.find();
    }

    async findById(id: string): Promise<T>{
        const element = await this.model.findById(id);
        if(!element) throw new Error("Element with id " + id + " not found");
        return element;
    }

    async updateById(id: string, updateDto: Partial<T>): Promise<T>{
        const elementUpdated = await this.model.findByIdAndUpdate(id, updateDto, {new: true}).exec();
        if(!elementUpdated) throw new Error("Element with id " + id + " not found");
        return elementUpdated;
    }

    async deleteById(id: string): Promise<T>{
        const elementDeleted = await this.model.findByIdAndDelete(id).exec();
        if(!elementDeleted) throw new Error("Element with id " + id + " not found");
        return elementDeleted;
    }
}