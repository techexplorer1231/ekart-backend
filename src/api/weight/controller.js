import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Weight } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Weight.create(body)
    .then((weight) => weight.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Weight.find(query, select, cursor)
    .then((weights) => weights.map((weight) => weight.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Weight.findById(params.id)
    .then(notFound(res))
    .then((weight) => weight ? weight.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Weight.findById(params.id)
    .then(notFound(res))
    .then((weight) => weight ? _.merge(weight, body).save() : null)
    .then((weight) => weight ? weight.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Weight.findById(params.id)
    .then(notFound(res))
    .then((weight) => weight ? weight.remove() : null)
    .then(success(res, 204))
    .catch(next)
