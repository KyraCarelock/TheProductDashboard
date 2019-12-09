package com.tts.theproductdashboard.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "dashboarddatabase_products")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "Id")
	private int id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name= "category_id")
	private String categoryId;
	
	@Column(name ="category_name")
	private String categoryName;
	
	@Column(name= "full_price")
	private String fullPrice;
	
	@Column(name= "sale_price")
	private String salePrice;
	
	@Column(name= "availability")
	private String availability;
	
	@Column(name= "supplier_id")
	private String supplierId;
	
	@Column(name= "supplier")
	private String supplier;
	
	public Product() {
		
	}
	
	public Product(String name, String categoryId, String categoryName, String fullPrice, String salePrice,
			String availability, String supplierId, String supplier) {
		this.name = name;
		this.categoryId = categoryId;
		this.categoryName = categoryName;
		this.fullPrice = fullPrice;
		this.salePrice = salePrice;
		this.availability = availability;
		this.supplierId = supplierId;
		this.supplier = supplier;
	}

	
	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getFullPrice() {
		return fullPrice;
	}

	public void setFullPrice(String fullPrice) {
		this.fullPrice = fullPrice;
	}

	public String getSalePrice() {
		return salePrice;
	}

	public void setSalePrice(String salePrice) {
		this.salePrice = salePrice;
	}

	public String getAvailability() {
		return availability;
	}

	public void setAvailability(String availability) {
		this.availability = availability;
	}

	public String getSupplierId() {
		return supplierId;
	}

	public void setSupplierId(String supplierId) {
		this.supplierId = supplierId;
	}

	public String getSupplier() {
		return supplier;
	}

	public void setSupplier(String supplier) {
		this.supplier = supplier;
	}
	
	
}
	
