import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export interface Env {
  __STATIC_CONTENT: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    try {
      // Serve static assets from KV
      return await getAssetFromKV(
        {
          request,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: await env.__STATIC_CONTENT.get('__STATIC_CONTENT_MANIFEST', 'json'),
        },
      );
    } catch (e) {
      return new Response('Not Found', { status: 404 });
    }
  },
};