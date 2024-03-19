package com.zensar.stock.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.zensar.stock.dto.Stock;
import com.zensar.stock.entity.StockDocument;
import com.zensar.stock.exception.InvalidStockIdException;
import com.zensar.stock.repository.StockMongoRepo;

//@Service(value = "MONGO_SERVICE")
public class StockServiceMongoImpl implements StockService {

	@Autowired
	StockMongoRepo stockMongoRepo;
	@Autowired
	ModelMapper modelMapper;
	
	@Override
	public Stock createNewStock(Stock stock) {
		StockDocument stockDocument = this.modelMapper.map(stock, StockDocument.class);
		stockDocument = this.stockMongoRepo.save(stockDocument);
		Stock stockDto = this.modelMapper.map(stockDocument, Stock.class);
		return stockDto;
	}

	@Override
	public boolean deleteAllStocks() {
		stockMongoRepo.deleteAll();
		return true;
	}

	@Override
	public boolean deleteStockById(int stockId) {
		stockMongoRepo.deleteById(stockId);
		return true;
	}

	@Override
	public Stock updateStock(int stockId, Stock stock) {
		Optional<StockDocument> opStockDocument = stockMongoRepo.findById(stockId);
		if(opStockDocument.isPresent()) { //Correct stockId
			StockDocument stockDocument = opStockDocument.get();
			/*
			stockDocument.setMarketName(stock.getMarketName());
			stockDocument.setName(stock.getName());
			stockDocument.setPrice(stock.getPrice());
			*/
			stock.setId(stockId);
			stockDocument = this.modelMapper.map(stock, StockDocument.class);
			stockDocument = stockMongoRepo.save(stockDocument);
			Stock stockDto = this.modelMapper.map(stockDocument, Stock.class);
			return stockDto;
		}
		return null;
	}

	@Override
	public Stock getStockById(int stockId) {
		Optional<StockDocument> opStockDocument = stockMongoRepo.findById(stockId);
		if(opStockDocument.isPresent()) { //Correct stockId
			StockDocument stockDocument = opStockDocument.get();
			Stock stockDto = this.modelMapper.map(stockDocument, Stock.class);
			return stockDto;
		}
		throw new InvalidStockIdException(""+stockId);
	}

	@Override
	public List<Stock> getAllStock() {
		List<StockDocument> stockDocumentList = stockMongoRepo.findAll();
		return getStockDtoList(stockDocumentList);
	}

	private List<Stock> getStockDtoList(List<StockDocument> stockDocumentList) {
		List<Stock> stockDtoList = new ArrayList<Stock>();
		for(StockDocument stockDocument: stockDocumentList) {
			Stock stockDto = this.modelMapper.map(stockDocument, Stock.class);
			stockDtoList.add(stockDto);
		}
		return stockDtoList;
	}

	//@Override
	public List<Stock> findByMarket(String marketName) {
		List<StockDocument> stockDocumentList = stockMongoRepo.findByMarket(marketName);
		return getStockDtoList(stockDocumentList);
	}

	//@Override
	public List<Stock> findByName(String name) {
		List<StockDocument> stockDocumentList = stockMongoRepo.findByName(name);
		return getStockDtoList(stockDocumentList);
	}

	//@Override
	public List<Stock> findByNameAndMarket(String name, String marketName) {
		List<StockDocument> stockDocumentList = stockMongoRepo.findByNameAndMarket(name, marketName);
		return getStockDtoList(stockDocumentList);
	}

	//@Override
	public List<Stock> findByNameLike(String name) {
		List<StockDocument> stockDocumentList = stockMongoRepo.findByNameLike(name);
		return getStockDtoList(stockDocumentList);
	}

	//@Override
	public List<Stock> findByOrderByName(String sortType) {
		List<StockDocument> stockDocumentList = null;
		if("ASC".equalsIgnoreCase(sortType)) {
			stockDocumentList = stockMongoRepo.findByOrderByNameAsc();
			/*
			List<Sort.Order> sortOrders = new ArrayList<Sort.Order>();
			Sort.Order order_1 = new Sort.Order(Sort.Direction.ASC, "name");
			Sort.Order order_2 = new Sort.Order(Sort.Direction.DESC, "marketName");
			sortOrders.add(order_1);
			sortOrders.add(order_2);
			stockDocumentList = stockRepository.findAll(Sort.by(sortOrders));
			stockDocumentList = stockRepository.findAll(Sort.by(new Sort.Order(Sort.Direction.DESC, "price")));
			*/
		}
		if("DESC".equalsIgnoreCase(sortType)) {
			stockDocumentList = stockMongoRepo.findByOrderByNameDesc();
		}
		return getStockDtoList(stockDocumentList);
	}

	//@Override
	public List<Stock> findByPage(int startIndex, int records) {
		Pageable pageWithFewRecords = PageRequest.of(startIndex, records);
		Page<StockDocument> stockDocumentPage = stockMongoRepo.findAll(pageWithFewRecords);
		List<StockDocument> stockDocumentList = stockDocumentPage.getContent();
		return getStockDtoList(stockDocumentList);
	}
}
