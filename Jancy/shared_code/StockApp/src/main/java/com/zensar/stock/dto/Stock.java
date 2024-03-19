package com.zensar.stock.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/*
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
*/
@Data
@ApiModel("Stock model")
public class Stock {

	@ApiModelProperty("Unique identifier of the stock")
	private int id;
	@ApiModelProperty("Name of the Stock")
	private String name;
	@ApiModelProperty("Market name where stock is registered")
	private String market;
	@ApiModelProperty("Current price of the stock")
	private double price;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMarket() {
		return market;
	}
	public void setMarket(String market) {
		this.market = market;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
}
