import { Price } from '.'

let price

beforeEach(async () => {
  price = await Price.create({ currency: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = price.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(price.id)
    expect(view.currency).toBe(price.currency)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = price.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(price.id)
    expect(view.currency).toBe(price.currency)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
