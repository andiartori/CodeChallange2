import React from "react";

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
	title: any;
	about?: any;
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
