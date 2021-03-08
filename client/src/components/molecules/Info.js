import React from 'react';
import InfoWrapper from '../atoms/InfoWrapper';
import Span from '../atoms/errorSpan';
import { useForm } from 'react-hook-form';
import InfoSection from '../atoms/InfoSection';

const Info = () => {
	const { register, handleSubmit, reset, errors } = useForm();
	const onSubmit = data => {
		console.log(data);
		reset();
		alert("Página en construcción")
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
						ref={register({ required: true})}
						aria-invalid={errors.nombre ? "true" : "false"}
						placeholder="Tu respuesta"
					/>

					<label htmlFor="direccion">
						Dirección exacta
						{errors.nombre && <Span> *</Span>}
					</label>
					<textarea
						name="direccion"
						id="direccion"
						ref={register({ required: true})}
						placeholder="Tu respuesta"
					>
					</textarea>

					<label htmlFor="email">
						Correo electrónico
						{errors.nombre && <Span> *</Span>}
					</label>
					<input
						name="email"
						id="email"
						type="email"
						ref={register({ required: true })}
						placeholder="Tu respuesta"
					/>

					<label htmlFor="telefono">
						Teléfono
						{errors.nombre && <Span> *</Span>}
					</label>
					<input
						name="telefono"
						type="tel"
						ref={register({ required: true })}
						placeholder="Tu respuesta"
					/>
					
					<label htmlFor="persona">
						Persona encargada de los envíos
						{errors.nombre && <Span> *</Span>}
					</label>
					<input
						name="persona"
						id="persona"
						type="text"
						ref={register({ required: true })}
						placeholder="Tu respuesta"
					/>

					<input
						type="submit"
					/>
				</form>
			</InfoWrapper>
		</InfoSection>
  );
}

export default Info;