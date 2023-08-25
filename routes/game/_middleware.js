export async function handler(req, ctx) {
  const gameId = ctx.params.game.split('_')[1];
  if (!gameId) {
    return new Response('', {
      status: 307,
      headers: { Location: new URL(req.url).origin },
    });
  }
  ctx.state.gameId = gameId;
  return await ctx.next();
}
