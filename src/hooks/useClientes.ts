import { useEffect, useState } from 'react';
import ColecaoCliente from '../backend/db/ColecaoCliente';
import Cliente from '../core/Cliente';
import ClienteRepositorio from '../core/ClienteRepositorio';
import useTabelaOuForm from './useTabelaOuForm';

export default function useClientes() {
	const repo: ClienteRepositorio = new ColecaoCliente();

	const { exibirFormulario, exibirTabela, tabelaVisivel } = useTabelaOuForm();

	const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
	const [clientes, setClienteS] = useState<Cliente[]>([]);

	useEffect(obterClientes, []);

	function obterClientes() {
		repo.obterClientes().then((clientes) => {
			setClienteS(clientes);
			exibirTabela();
		});
	}

	function selecionarCliente(cliente: Cliente) {
		setCliente(cliente);
		exibirFormulario();
	}

	async function excluirCliente(cliente: Cliente) {
		await repo.excluir(cliente);
		obterClientes();
	}

	function criarCliente() {
		setCliente(Cliente.vazio());
		exibirFormulario();
	}

	async function salvarCliente(cliente: Cliente) {
		await repo.salvar(cliente);
		obterClientes();
	}

	return {
		cliente,
		clientes,
		salvarCliente,
		criarCliente,
		excluirCliente,
		selecionarCliente,
		obterClientes,
		tabelaVisivel,
		exibirTabela,
	};
}
