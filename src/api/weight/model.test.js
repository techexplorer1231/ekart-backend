import { Weight } from '.'

let weight

beforeEach(async () => {
  weight = await Weight.create({ unit: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = weight.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(weight.id)
    expect(view.unit).toBe(weight.unit)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = weight.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(weight.id)
    expect(view.unit).toBe(weight.unit)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
