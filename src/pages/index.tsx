import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import useClientes from '../hooks/useClientes';
import Cliente from '../core/Cliente';

export default function Home() {
	const {
		cliente,
		//clientes,
		salvarCliente,
		criarCliente,
		selecionarCliente,
		excluirCliente,
		tabelaVisivel,
		exibirTabela,
	} = useClientes();

	const clientes = [
		new Cliente('Jimi Hendrix', 1942, '298'),
		new Cliente('Queen', 1970, '89'),
		new Cliente('The Jackson Five', 1964, '846'),
	];

	return (
		<div
			className={`
      flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600
    `}>
			<Layout titulo='CRUD-NextJs'>
				{tabelaVisivel ? (
					<>
						<div className='flex justify-end'>
							<Botao cor='green' className='mb-4' onClick={criarCliente}>
								Novo Cliente
							</Botao>
						</div>
						<Tabela
							clientes={clientes}
							clienteSelecionado={selecionarCliente}
							clienteExcluido={excluirCliente}
						/>
					</>
				) : (
					<Formulario
						cliente={cliente}
						clienteMudou={salvarCliente}
						cancelado={exibirTabela}
					/>
				)}
			</Layout>
		</div>
	);
}
