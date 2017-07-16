import { Router } from 'express';
import { middleware as query } from 'querymen';
import { middleware as body } from 'bodymen';
import { create, index, show, update, destroy } from './controller';
import { schema } from './model';

export Weight, { schema } from './model';

const router = new Router();
const { unit } = schema.tree;

/**
 * @api {post} /weights Create weight
 * @apiName CreateWeight
 * @apiGroup Weight
 * @apiParam unit Weight's unit.
 * @apiSuccess {Object} weight Weight's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Weight not found.
 */
router.post('/', body({ unit }), create);

/**
 * @api {get} /weights Retrieve weights
 * @apiName RetrieveWeights
 * @apiGroup Weight
 * @apiUse listParams
 * @apiSuccess {Object[]} weights List of weights.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', query(), index);

/**
 * @api {get} /weights/:id Retrieve weight
 * @apiName RetrieveWeight
 * @apiGroup Weight
 * @apiSuccess {Object} weight Weight's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Weight not found.
 */
router.get('/:id', show);

/**
 * @api {put} /weights/:id Update weight
 * @apiName UpdateWeight
 * @apiGroup Weight
 * @apiParam unit Weight's unit.
 * @apiSuccess {Object} weight Weight's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Weight not found.
 */
router.put('/:id', body({ unit }), update);

/**
 * @api {delete} /weights/:id Delete weight
 * @apiName DeleteWeight
 * @apiGroup Weight
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Weight not found.
 */
router.delete('/:id', destroy);

export default router;
