import { Dimension } from '.';

let dimension;

beforeEach(async () => {
  dimension = await Dimension.create({ unit: 'cm' });
});

describe('view', () => {
  it('returns simple view', () => {
    const view = dimension.view();
    expect(typeof view).toBe('object');
    expect(view.id).toBe(dimension.id);
    expect(view.unit).toBe(dimension.unit);
    expect(view.createdAt).toBeTruthy();
    expect(view.updatedAt).toBeTruthy();
  });

  it('returns full view', () => {
    const view = dimension.view(true);
    expect(typeof view).toBe('object');
    expect(view.id).toBe(dimension.id);
    expect(view.unit).toBe(dimension.unit);
    expect(view.createdAt).toBeTruthy();
    expect(view.updatedAt).toBeTruthy();
  });
});
