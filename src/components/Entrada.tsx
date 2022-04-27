interface EntradaProps {
	tipo?: 'text' | 'number';
	texto: string;
	valor: any;
	somenteLeitura?: boolean;
	valorMudou?: (valor: any) => void;
	className?: string;
}

export default function Entrada(props: EntradaProps) {
	return (
		<div className={`flex flex-col ${props.className}`}>
			<label className={`mb-2`}>{props.texto}</label>
			<input
				className={`
                    border border-blue-500 rounded-lg
                    focus:outline-none px-4 py-2 bg-gray-100
                    ${props.somenteLeitura ? '' : 'focus:bg-white'}
                `}
				type={props.tipo ?? 'text'}
				value={props.valor}
				readOnly={props.somenteLeitura}
				onChange={(e) => props.valorMudou?.(e.target.value)}
			/>
		</div>
	);
}
