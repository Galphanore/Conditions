javascript
Hooks.once('init', async function() {
  CONFIG.statusEffects.push({
    id: "dazed",
    label: "Dazed",
    icon: "icons/Dazed.webp",
    changes: [],
    flags: {
      core: {
        statusId: "dazed"
      }
    }
  });
});