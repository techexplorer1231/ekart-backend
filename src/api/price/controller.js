import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Price } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Price.create(body)
    .then((price) => price.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Price.find(query, select, cursor)
    .then((prices) => prices.map((price) => price.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Price.findById(params.id)
    .then(notFound(res))
    .then((price) => price ? price.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Price.findById(params.id)
    .then(notFound(res))
    .then((price) => price ? _.merge(price, body).save() : null)
    .then((price) => price ? price.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Price.findById(params.id)
    .then(notFound(res))
    .then((price) => price ? price.remove() : null)
    .then(success(res, 204))
    .catch(next)
