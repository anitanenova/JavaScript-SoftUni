function solve() {
  const canCast = (state) => ({
    cast: (spell) => {
      state.mana--;
      console.log(`${state.name} cast ${spell}`);
    },
  });

  const canFight = (state) => ({
    fight: () => {
      state.stamina--;
      console.log(`${state.name} slashes at the foe!`);
    },
  });

  const fighter = (name) => {
    let state = {
      name,
      health: 100,
      stamina: 100,
    };

    return Object.assign(state, canFight(state));
  };

  const mage = (name) => {
    let state = {
      name,
      health: 100,
      mana: 100,
    };

    return Object.assign(state, canCast(state));
  };

  return { mage: mage, fighter: fighter };
}
