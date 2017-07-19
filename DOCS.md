# ekart-backend v0.0.0



- [Dimension](#dimension)
	- [Create dimension](#create-dimension)
	- [Delete dimension](#delete-dimension)
	- [Retrieve dimension](#retrieve-dimension)
	- [Retrieve dimensions](#retrieve-dimensions)
	- [Update dimension](#update-dimension)
	
- [Price](#price)
	- [Create price](#create-price)
	- [Delete price](#delete-price)
	- [Retrieve price](#retrieve-price)
	- [Retrieve prices](#retrieve-prices)
	- [Update price](#update-price)
	
- [Product](#product)
	- [Create product](#create-product)
	- [Delete product](#delete-product)
	- [Retrieve product](#retrieve-product)
	- [Retrieve products](#retrieve-products)
	- [Update product](#update-product)
	
- [Weight](#weight)
	- [Create weight](#create-weight)
	- [Delete weight](#delete-weight)
	- [Retrieve weight](#retrieve-weight)
	- [Retrieve weights](#retrieve-weights)
	- [Update weight](#update-weight)
	


# Dimension

## Create dimension



	POST /dimensions


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| unit			| 			|  <p>Dimension's unit.</p>							|

## Delete dimension



	DELETE /dimensions/:id


## Retrieve dimension



	GET /dimensions/:id


## Retrieve dimensions



	GET /dimensions


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update dimension



	PUT /dimensions/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| unit			| 			|  <p>Dimension's unit.</p>							|

# Price

## Create price



	POST /prices


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| currency			| 			|  <p>Price's currency.</p>							|

## Delete price



	DELETE /prices/:id


## Retrieve price



	GET /prices/:id


## Retrieve prices



	GET /prices


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update price



	PUT /prices/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| currency			| 			|  <p>Price's currency.</p>							|

# Product

## Create product



	POST /products


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Product's name.</p>							|
| description			| 			|  <p>Product's description.</p>							|

## Delete product



	DELETE /products/:id


## Retrieve product



	GET /products/:id


## Retrieve products



	GET /products


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update product



	PUT /products/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Product's name.</p>							|
| description			| 			|  <p>Product's description.</p>							|

# Weight

## Create weight



	POST /weights


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| unit			| 			|  <p>Weight's unit.</p>							|

## Delete weight



	DELETE /weights/:id


## Retrieve weight



	GET /weights/:id


## Retrieve weights



	GET /weights


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update weight



	PUT /weights/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| unit			| 			|  <p>Weight's unit.</p>							|


