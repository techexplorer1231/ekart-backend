import _ from 'lodash';
import { success, notFound } from '../../services/response/';
import { Dimension } from '.';

export const create = ({ bodymen: { body } }, res, next) =>
  Dimension.create(body)
    .then(dimension => dimension.view(true))
    .then(success(res, 201))
    .catch(next);

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Dimension.find(query, select, cursor)
    .then(dimensions => dimensions.map(dimension => dimension.view()))
    .then(success(res))
    .catch(next);

export const show = ({ params }, res, next) =>
  Dimension.findById(params.id)
    .then(notFound(res))
    .then(dimension => (dimension ? dimension.view() : null))
    .then(success(res))
    .catch(next);

export const update = ({ bodymen: { body }, params }, res, next) =>
  Dimension.findById(params.id)
    .then(notFound(res))
    .then(dimension => (dimension ? _.merge(dimension, body).save() : null))
    .then(dimension => (dimension ? dimension.view(true) : null))
    .then(success(res))
    .catch(next);

export const destroy = ({ params }, res, next) =>
  Dimension.findById(params.id)
    .then(notFound(res))
    .then(dimension => (dimension ? dimension.remove() : null))
    .then(success(res, 204))
    .catch(next);
