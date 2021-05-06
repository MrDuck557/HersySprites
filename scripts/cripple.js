Vars.content.units().each(e => {
  e.legCount = 1;
  e.weapons.each(w => {
    w.mirror = false;
  });
});