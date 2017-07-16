import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Dimension, { schema } from './model'

const router = new Router()
const { unit } = schema.tree

/**
 * @api {post} /dimensions Create dimension
 * @apiName CreateDimension
 * @apiGroup Dimension
 * @apiParam unit Dimension's unit.
 * @apiSuccess {Object} dimension Dimension's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dimension not found.
 */
router.post('/',
  body({ unit }),
  create)

/**
 * @api {get} /dimensions Retrieve dimensions
 * @apiName RetrieveDimensions
 * @apiGroup Dimension
 * @apiUse listParams
 * @apiSuccess {Object[]} dimensions List of dimensions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /dimensions/:id Retrieve dimension
 * @apiName RetrieveDimension
 * @apiGroup Dimension
 * @apiSuccess {Object} dimension Dimension's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dimension not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /dimensions/:id Update dimension
 * @apiName UpdateDimension
 * @apiGroup Dimension
 * @apiParam unit Dimension's unit.
 * @apiSuccess {Object} dimension Dimension's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dimension not found.
 */
router.put('/:id',
  body({ unit }),
  update)

/**
 * @api {delete} /dimensions/:id Delete dimension
 * @apiName DeleteDimension
 * @apiGroup Dimension
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Dimension not found.
 */
router.delete('/:id',
  destroy)

export default router
