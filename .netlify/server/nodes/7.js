import * as server from '../entries/pages/invoices/_page.server.ts.js';

export const index = 7;
export const component = async () => (await import('../entries/pages/invoices/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/invoices/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.4c33694d.js","_app/immutable/chunks/index.8b941a8b.js","_app/immutable/chunks/stores.fde2b7b3.js","_app/immutable/chunks/index.e586407d.js","_app/immutable/chunks/Button.ad22b6c0.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.c305bccb.js","_app/immutable/chunks/Sidebar.7c8d1676.js","_app/immutable/chunks/Spinner.0c03673b.js","_app/immutable/chunks/authorise.e3ae3c01.js","_app/immutable/chunks/index.8d4c3149.js","_app/immutable/chunks/control.f2d6eca3.js","_app/immutable/chunks/stores.9bb34be0.js","_app/immutable/chunks/singletons.0502b1ed.js"];
export const stylesheets = ["_app/immutable/assets/Login.c7d39318.css","_app/immutable/assets/Invoice.27a9c43e.css","_app/immutable/assets/Offcanvas.60614438.css","_app/immutable/assets/Sidebar.01f70a3d.css","_app/immutable/assets/Spinner.c97558af.css"];
export const fonts = [];
