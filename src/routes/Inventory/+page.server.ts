import { readFileSync, writeFileSync, existsSync } from 'fs';
import { redirect } from '@sveltejs/kit';

export async function load({ fetch, locals }) {
	const { user, session } = await locals.auth.validateUser();
	if (user != null) {
		let url = `./src/lib/${user.userId}-inventory.json`;
		let res;
		let response;
		if (user && existsSync(url)) {
			res = readFileSync(url, 'utf-8');
			response = JSON.parse(res);
			if (res.trim() === '') {
				response = [];
			} else {
				response = JSON.parse(res);
			}
		} else {
			response = [];
		}
		if (user && session && response != []) {
			return {
				user,
				session,
				data: response
			};
		} else {
			throw redirect(302, '/Login');
		}
	} else {
		throw redirect(302, '/Login');
	}
}

export const actions = {
	addItem: async ({ request, locals }) => {
		const { user, session } = await locals.auth.validateUser();
		try {
			const data = await request.json();
			const { name, quantity, description, price } = JSON.parse(data.get('inventoryItem') as any);
			let url = `./src/lib/${user.userId}-inventory.json`;
			let res;
			let response;
			let invInfo = {
				name,
				quantity,
				desc: description,
				price
			};
			if (user && existsSync(url)) {
				res = readFileSync(url, 'utf-8');
				response = JSON.parse(res);
				if (res.trim() === '') {
					response = [];
				} else {
					response = JSON.parse(res);
				}
			} else {
				response = [];
			}
			if (user && session && response != []) {
				return {
					user,
					session,
					data: response
				};
			}
		} catch (e) {
			throw new Error(`${e}`);
		}
	}
};
