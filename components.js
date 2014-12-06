E({
  Canvas: {can:can}
})

shipA = E({
  Energy: { value: 3},
  Health: { value: 6 },
  Action: {value: 'idle'},
  State: { value: null, history: [] },
  Actions: { actions: [ 'idle', 'idleDamage', 'chargeDamage', 'shieldDamage', 'shield', 'absorb', 'fire', 'charge']},
  Frame: { frame: null },
  ClickActivated: {
    '#fire .active' : { components: [ { Fire: {} } ] },
    '#shield .active' : { components: [ { Shield: {} } ] }
    '#charge .active' : { components: [ { Shield: {} } ] }
  }
})
