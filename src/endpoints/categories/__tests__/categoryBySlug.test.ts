import {createCategoryBySlugEndpointRequest} from '../categoryBySlug';

it('Builds correct query', () => {
  expect(
    createCategoryBySlugEndpointRequest({
      slugPath: ['frauen', 'bekleidung'],
      with: {
        children: 2,
      },
    }),
  ).toMatchInlineSnapshot(`
Object {
  "endpoint": "categories/frauen/bekleidung",
  "method": "GET",
  "params": Object {
    "depth": 3,
    "with": "properties:name(),descendants",
  },
  "responseValidator": [Function],
}
`);

  expect(
    createCategoryBySlugEndpointRequest({
      slugPath: ['frauen', 'bekleidung'],
      with: {
        children: 2,
      },
      includeHidden: true,
    }),
  ).toMatchInlineSnapshot(`
Object {
  "endpoint": "categories/frauen/bekleidung",
  "method": "GET",
  "params": Object {
    "depth": 3,
    "showHidden": "true",
    "with": "properties:name(),descendants",
  },
  "responseValidator": [Function],
}
`);
});
