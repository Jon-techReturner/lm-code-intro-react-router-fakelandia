export const Misdemeanours = [
	"rudeness",
	"vegetables",
	"lift",
	"united",
] as const;
export type Misdemeanour = typeof Misdemeanours[number];

export const JUST_TALK = 'just-talk';
export type JustTalk = typeof JUST_TALK;

export interface MisdemeanourEntry {
	citizenId: number;
	date: string;
	misdemeanour: Misdemeanour;
	description: string;
	selfConfessed: boolean;
}

export const misdemeanourText = {
	all: "All",
	rudeness: "Mild Public Rudeness = 🤪",
	lift: "Speaking in a Lift = 🗣",
	vegetables: "Not Eating Your Vegetables = 🥗",
	united: "Supporting Manchester United = 😈",
};

