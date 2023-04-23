URL: http://localhost:3002/api/task
VERBE: GET
-------
URL: http://localhost:3002/api/task/{id}
VERBE: GET
-------
URL: http://localhost:3002/api/task
VERBE: POST
ENTREE BODY: { title: string!, description: string?, priority: string! }
-------
URL: http://localhost:3002/api/task/{id}
VERBE: PUT
ENTREE BODY: { title: string!, description: string!, priority: string! }
-------
URL: http://localhost:3002/api/task/{id}
VERBE: DELETE
-------
URL: http://localhost:3002/api/task/{id}
VERBE: PUT
ENTREE BODY: { title: string!, description: string!, priority: string! }
-------
URL: http://localhost:3002/api/tag
VERBE: GET
-------
URL: http://localhost:3002/api/tag
VERBE: POST
ENTREE BODY: { title: string!, tagId: string! }
-------