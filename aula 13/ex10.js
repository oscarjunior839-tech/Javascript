var idade = 68;
if (idade < 16) {
    console.log("Você nao pode votar.");
} else {
    if (idade < 18 || idade > 65) {
        console.log("opcional");
    } else {
        console.log("Você pode votar e é obrigatório.");
    }
}
