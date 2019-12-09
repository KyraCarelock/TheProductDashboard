package com.tts.theproductdashboard.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tts.theproductdashboard.models.Product;
import com.tts.theproductdashboard.service.ProductService;


@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class ProductController {
	@Autowired
	 
	private ProductService productService;
	
	@GetMapping(value = "/api/products")
	public List<Product> findAll(){
		List<Product> products = productService.findAll();
		return products;
	}
	
	@GetMapping(value = "api/products/{Id}")
	public List<Product> findById(@PathVariable(value="Id") int id){
		List<Product> products = productService.findById(id);
		return products;
	}
	
	@GetMapping(value="/api/products/newform")
	public String newProduct(Product product) {
		return "products/newform";
	}
	
	@PostMapping(value = "/api/products/newform")
	public String addNewProduct(Product product, Model model) {
		productService.save(new Product(product.getName(), product.getCategoryId(), product.getCategoryName(),
				product.getFullPrice(), product.getSalePrice(), product.getAvailability(), product.getSupplierId(), product.getSupplier()));
		model.addAttribute("name", product.getName());
		model.addAttribute("category_id", product.getCategoryId());
		model.addAttribute("category_name",product.getCategoryName());
		model.addAttribute("full_price", product.getFullPrice());
		model.addAttribute("sale_price", product.getSalePrice());
		model.addAttribute("availability", product.getAvailability());
		model.addAttribute("supplier_id", product.getSupplierId());
		model.addAttribute("supplier", product.getSupplier());
		return "/products";
	}
	
	
	@PutMapping("/api/products")
	public String updateProduct(@RequestBody Product product) {
		return "Product has been successfully updated";
	}
	
	@RequestMapping(value="/api/products/{id}", method= RequestMethod.DELETE)
	public void deleteProductById(@PathVariable int Id) {
		productService.deleteById(Id);
	}
	
	
}
