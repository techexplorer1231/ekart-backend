import { Router } from 'express';
import { middleware as query } from 'querymen';
import { middleware as body } from 'bodymen';
import { create, index, show, update, destroy } from './controller';
import { schema } from './model';

export Price, { schema } from './model';

const router = new Router();
const { currency } = schema.tree;

/**
 * @api {post} /prices Create price
 * @apiName CreatePrice
 * @apiGroup Price
 * @apiParam currency Price's currency.
 * @apiSuccess {Object} price Price's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Price not found.
 */
router.post('/', body({ currency }), create);

/**
 * @api {get} /prices Retrieve prices
 * @apiName RetrievePrices
 * @apiGroup Price
 * @apiUse listParams
 * @apiSuccess {Object[]} prices List of prices.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', query(), index);

/**
 * @api {get} /prices/:id Retrieve price
 * @apiName RetrievePrice
 * @apiGroup Price
 * @apiSuccess {Object} price Price's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Price not found.
 */
router.get('/:id', show);

/**
 * @api {put} /prices/:id Update price
 * @apiName UpdatePrice
 * @apiGroup Price
 * @apiParam currency Price's currency.
 * @apiSuccess {Object} price Price's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Price not found.
 */
router.put('/:id', body({ currency }), update);

/**
 * @api {delete} /prices/:id Delete price
 * @apiName DeletePrice
 * @apiGroup Price
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Price not found.
 */
router.delete('/:id', destroy);

export default router;
