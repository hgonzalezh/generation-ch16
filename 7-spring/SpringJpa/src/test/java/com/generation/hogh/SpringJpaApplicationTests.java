package com.generation.hogh;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.generation.hogh.models.UsuarioModelo;
import com.generation.hogh.repositories.UsuarioRepositorio;

import static org.junit.jupiter.api.Assertions.assertTrue;


@SpringBootTest
class SpringJpaApplicationTests {

	@Autowired
	private UsuarioRepositorio usuarioRepositorio;
	
	@Test
	void usuarioTest() {
		UsuarioModelo usuarioModelo = new UsuarioModelo();
		
		usuarioModelo.setId(1L);
		usuarioModelo.setNombre("Victor");
		usuarioModelo.setClave("1234");
		
		UsuarioModelo nuevoUsuario = usuarioRepositorio.save(usuarioModelo);
		
		assertTrue(nuevoUsuario.getClave().equalsIgnoreCase(usuarioModelo.getClave()));
		
		System.out.println(usuarioModelo.getNombre());
	}

}
