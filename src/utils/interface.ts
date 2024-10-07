//HOME PAGE RELATED

export interface NavProps {
	title: string;
	home: string;
	about: string;
	teams: string;
	ourMenus: string;
	contact: string;
	onClick?: () => void;
}

export interface HeroProps {
	image1: string;
	image2: string;
	image3: string;
}

export interface MarqueeProps {
	text: string;
}

export interface AboutProps {
	title: string | JSX.Element;
	about?: string;
	image?: string;
	onClick?: () => void;
}

export interface TeamsProps {
	image: string;
	name: string;
	email: string;
}

export interface ReviewerProps {
	name: string;
	text: string;
	reviewerPhoto: string;
}

export interface MenuProps {
	image: string;
	name: string;
	description: string;
	price: number;
}

export interface UserData {
	name: {
		first: string;
		last: string;
	};
	picture: {
		large: string;
	};
	email: string;
}

export interface Entry {
	sys: {
		id: string;
	};
	fields: {
		name: string;
		description: string;
		price: number;
	};
}

//This is interface corelated to menu

export interface EntryFields {
	name: string;
	description: string;
	price: number;
	category: string[];
	image: {
		sys: {
			id: string;
		};
	};
}

export interface AssetFields {
	file: {
		url: string;
	};
}

export interface Asset {
	sys: {
		id: string;
	};
	fields: AssetFields;
}

export interface EntryA {
	sys: {
		id: string;
	};
	fields: EntryFields;
}

export interface Data {
	items: Entry[];
	includes: {
		Asset: Asset[];
	};
}
