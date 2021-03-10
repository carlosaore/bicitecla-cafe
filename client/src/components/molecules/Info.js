import swal from 'sweetalert';
import React, { useState } from 'react';
import InfoWrapper from '../atoms/InfoWrapper';
import Span from '../atoms/errorSpan';
import { useForm } from 'react-hook-form';
import InfoSection from '../atoms/InfoSection';
const axios = require('axios');

const Info = () => {

	const [status, setStatus] = useState("Enviar");

	const { register, handleSubmit, reset, errors } = useForm();
	const onSubmit = data => {
		setStatus("······");
		axios.post('/api', {data})
		.then((response) => {
            if (response.status === 200) {
                swal({
					title: "¡Muchas gracias!",
					text: "🚴🏽‍♀️ Registro exitoso 🚴🏽‍♀️",
					icon: "success",
				});
                reset();
				setStatus("Enviar");
            } else if (response.status !== 200) {
                swal({
					title: "Error",
					text: "🚳 Algo salio mal. Contactanos en biciteclacafe@gmail.com para mayor asistencia. 🚳",
					icon: "error",
				});
				setStatus("Enviar");
            }
		})
		.catch((error) => {
			console.error(error);
			setStatus("Enviar");
			swal({
				title: "Error",
				text: "🚳 Algo salio mal. Contactanos en biciteclacafe@gmail.com para mayor asistencia. 🚳",
				icon: "error",
			});
		});
	}

	return (
		<InfoSection>
			<InfoWrapper id="info-section">
				<h2>Registro</h2>
				<p>
					Por medio de este formulario su negocio estará registrado para que solicite nuestros servicios y reciba de inmediato uno de nuestros bici mensajeros a la puerta de su domicilio.
				</p>
				<br/>
				<form onSubmit={handleSubmit(onSubmit)}>
					<label htmlFor="nombre">
						Nombre del Negocio o Empresa
						{errors.nombre && <Span> *</Span>}
					</label>
					<input
						name="nombre"
						id="nombre"
						type="text"
						ref={register({ required: true })}
						aria-invalid={errors.nombre ? "true" : "false"}
						placeholder="..."
					/>

					<label htmlFor="direccion">
						Dirección exacta
						{errors.direccion && <Span> *</Span>}
					</label>
					<textarea
						name="direccion"
						id="direccion"
						ref={register({ required: true })}
						placeholder="..."
					>
					</textarea>

					<label htmlFor="email">
						Correo electrónico
						{errors.email && <Span> *</Span>}
					</label>
					<input
						name="email"
						id="email"
						type="email"
						ref={register({ required: true })}
						placeholder="..."
					/>

					<label htmlFor="telefono">
						Teléfono
						{errors.telefono && <Span> *</Span>}
					</label>
					<input
						name="telefono"
						id="telefono"
						type="tel"
						ref={register({ required: true })}
						placeholder="..."
					/>
					
					<label htmlFor="persona">
						Persona encargada de los envíos
						{errors.persona && <Span> *</Span>}
					</label>
					<input
						name="persona"
						id="persona"
						type="text"
						ref={register({ required: true })}
						placeholder="..."
					/>
					<input
						type="submit"
						value={status}
					/>
				</form>
			</InfoWrapper>
		</InfoSection>
  );
}

export default Info;