package com.generation.hogh.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.hogh.models.UsuarioModelo;
import com.generation.hogh.services.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	
	@Autowired
	UsuarioService usuarioService;
	
	@GetMapping("/{id}")  // http://localhost:8080/usuario/1
	public UsuarioModelo getProducto(@PathVariable Long id) {
		return usuarioService.obtenerUsuario(id);
	}

}
