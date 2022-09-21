package com.generation.hogh.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.hogh.models.UsuarioModelo;
import com.generation.hogh.repositories.UsuarioRepositorio;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepositorio usuarioRepositorio;
	
	
	public UsuarioModelo obtenerUsuario(Long id) {
		Optional<UsuarioModelo> user = usuarioRepositorio.findById(id);
		return user.orElse(null);
	}
}
