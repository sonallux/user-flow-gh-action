module.exports = {
  flowOptions: {
    name: 'co-located-nx-plugin - test flow'
  },
  interactions: async (ctx: Record<string, any>): Promise<void> => {
    const { flow, collectOptions } = ctx;
    await flow.navigate(collectOptions.url);
  },
  launchOptions: {
    headless: true
  }
};
