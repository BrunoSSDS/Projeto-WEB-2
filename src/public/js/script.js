const apaganota = async (id_nota)=>{
    const data = await axios.post(`/professor/${id_nota}?_method=DELETE`);
};
const apagausuario = async (id_usuario)=>{
    const data = await axios.post(`/usuario/${id_usuario}?_method=DELETE`);
}