export default interface Question {
	id?: number;
	question: string;
	alternative_a: string;
	alternative_b: string;
	alternative_c: string;
	currect_alternative: string;
}