package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final ProductoRepository repositoryI;
	private final MusicoRepository repositoryM;

	@Autowired
	public DatabaseLoader(ProductoRepository repositoryI, MusicoRepository repositoryM) {
		this.repositoryI = repositoryI;
		this.repositoryM = repositoryM;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repositoryI.save(new Producto("primor", "12.00"));
		this.repositoryI.save(new Producto("gloria","4.20"));
		this.repositoryI.save(new Producto("ariel","9.50"));
		this.repositoryM.save(new Musico("Daniel F"));
	}
}