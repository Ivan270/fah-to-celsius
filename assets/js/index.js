const form = document.getElementById('formConvertidor');

const fahToCel = (number) => {
	return new Promise((resolve, reject) => {
		try {
			let resultado = (5 / 9) * (number - 32);
			return resolve(resultado);
		} catch (error) {
			return reject(error);
		}
	});
};

form.addEventListener('submit', (event) => {
	let fahrenheit = document.getElementById('inputFah').value;
	event.preventDefault();
	mostrarResultado(fahrenheit);
});

const mostrarResultado = async (fahrenheit) => {
	let celsius = await fahToCel(fahrenheit);
	resultado.innerHTML = `
    <h1>${celsius}°C</h1>
    `;
};
