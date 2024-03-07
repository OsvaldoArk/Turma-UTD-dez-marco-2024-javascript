const connection = require('./connection');

const getClientes = async () => {
    const [clientes] = await connection.execute('SELECT * FROM clientes WHERE deleted_at IS NULL');

    return clientes;
}

const getClienteById = async (id) => {
    const [cliente] = await connection.execute('SELECT * FROM clientes WHERE id=? AND deleted_at IS NULL',[id]);   

    return cliente[0];
}

const createCliente = async (cliente) => {
    const {nome,telefone,email,data_de_nascimento} = cliente;

    const [clienteNovo] = await connection.execute(`INSERT INTO clientes(nome,telefone,email,data_de_nascimento)
                                        VALUES(?,?,?,?)`,[nome,telefone,email,data_de_nascimento]);
    return clienteNovo;
}

const updateCliente = async (id,cliente) =>{
    let clienteBanco = await getClienteById(id);

    if(clienteBanco === null || clienteBanco === undefined)
        return null;

    for(let prop in cliente){
        clienteBanco = {...clienteBanco,[prop]:cliente[prop]};
    }

    const {nome, telefone, email, data_de_nascimento} = clienteBanco;

    const [clienteAtualizado] = await connection.execute(`UPDATE clientes SET nome=?,telefone=?,
                                                email=?,data_de_nascimento=? WHERE id=?`,
                                                [nome,telefone,email,data_de_nascimento,id]);
    return clienteAtualizado;
}

const deleteCliente = async (id) => {
    let clienteBanco = await getClienteById(id);

    if(clienteBanco===null || clienteBanco===undefined)
        return null;

    const hoje = new Date();

    return await connection.execute(`UPDATE clientes SET deleted_at=? WHERE id=?`,[hoje,id]);
}

module.exports = {getClientes,getClienteById,createCliente,updateCliente,deleteCliente};