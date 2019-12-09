package com.tts.theproductdashboard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tts.theproductdashboard.models.Product;
import com.tts.theproductdashboard.repositories.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository productRepository;
	
	public List<Product> findAll() {
		List<Product> products = (List<Product>) productRepository.findAll();
		return products;
	}
	
	public List<Product> findById(int Id){
		List<Product> products = productRepository.findById(Id);
		return products;
	}

	public void save(Product product) {
		productRepository.save(product);
	}
	
	public void deleteById(int Id){
		productRepository.deleteById(Id);
	}
	

}
