Vars.content.units().each(e => {
  e.legCount = 2;
  e.weapons.each(w => {
    w.mirror = false;
  });
});

Blocks.spawn.itemDrop = Items.surgeAlloy;
Events.on(ClientLoadEvent, () => {
  Items.surgeAlloy.fullIcon = UnitTypes.crawler.fullIcon;
});