models = {}
models.ship1 = new Models.Ship({ name: 'ship1' })
models.ship2 = new Models.Ship({ name: 'ship2' });

views = {}
views.ship1 = new Views.Ship({ model : models.ship1 })
views.ship2 = new Views.Ship({ model : models.ship2 })
