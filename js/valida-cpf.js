export default function eUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    console.log(cpf);
}