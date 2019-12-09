package com.tts.theproductdashboard.repositories;

import java.util.List;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.tts.theproductdashboard.models.Product;


@Repository
public interface ProductRepository extends CrudRepository<Product, Integer> {
		List<Product> findByName(String name);
		List<Product> findById(int Id);
	
}
