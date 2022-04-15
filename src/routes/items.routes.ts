import { Router } from 'express'

import { ItemsRepository } from '../repositories/ItemsRepository';

import { Item, item } from '../model/Items'

const itemsRoutes = Router();
const itemsRepository = new ItemsRepository();
const item = new Item();

itemsRoutes.post("/", (request, response) => {
    const { value, name } = request.body;

    itemsRepository.create({ name, value });

    return response.status(201).send();

});

itemsRoutes.get("/", (request, response) => {
    const all = itemsRepository.list();

    return response.json(all);
})

itemsRoutes.delete("/", (request, response) => {
    const { item } = request.headers

    itemsRepository.deleteItem();

    return response.status(200).send()
})

itemsRoutes.post("/total", (request, response) => {
    const sumOfAll = itemsRepository.sumOfAll();

    return response.json(sumOfAll)
})

export { itemsRoutes}