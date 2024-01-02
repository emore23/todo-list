export interface ButtonProps {
	title?: string;
	hover: boolean;
	children?: React.ReactNode;
	type?: 'create' | 'delete';
	clickedButton?: () => void;
}
